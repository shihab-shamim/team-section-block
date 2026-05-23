<?php

/**
 * Init.php — Block registration for Team Section.
 * Mirrors: info-cards/inc/Init.php
 *
 * ONLY responsible for:
 *   - Hooking into 'init'
 *   - Registering all blocks from build/blocks/
 *   - Respecting toggle ON/OFF (tsbBlocks option)
 *   - Respecting pro/free status
 */

namespace TSB;

if ( ! defined( 'ABSPATH' ) ) { exit; }

class Init {

    function __construct() {
        add_action( 'init', [ $this, 'onInit' ] );
        add_filter( 'block_categories_all', [ $this, 'register_block_category' ], 10, 2 );
    }

    /**
     * Register a custom "Team Section" block category.
     */
    function register_block_category( $categories, $context ) {
        if ( ! is_array( $categories ) ) {
            $categories = [];
        }
        // Prepend so it appears near the top of the inserter.
        array_unshift( $categories, [
            'slug'  => 'team-section',
            'title' => __( 'Team Section', 'team-section' ),
            'icon'  => null,
        ] );

        return $categories;
    }

    function onInit() {
        $this->tsb_register_blocks();
    }

    /**
     * Loop through build/blocks/ and register each block.
     * Free blocks are always registered.
     * Pro blocks are only registered when premium is active.
     * Disabled blocks (toggled OFF) are skipped entirely.
     */
    function tsb_register_blocks() {
        $blocks_path = TSB_DIR_PATH . 'build/blocks/';
        
        // Use scandir instead of glob to prevent issues on restricted servers
        if ( ! is_dir( $blocks_path ) ) {
            return;
        }
        
        $files = scandir( $blocks_path );
        $all_blocks = [];
        
        foreach ( $files as $file ) {
            if ( $file !== '.' && $file !== '..' && is_dir( $blocks_path . $file ) ) {
                $all_blocks[] = $blocks_path . $file;
            }
        }

        if ( empty( $all_blocks ) ) {
            return;
        }

        // Blocks toggled OFF by the admin dashboard.
        $disabled_blocks = get_option( 'tsbBlocks', [] );
        if ( ! is_array( $disabled_blocks ) ) {
            $disabled_blocks = [];
        }

        $is_premium = tsbIsPremium();

        foreach ( $all_blocks as $block_path ) {
            $block_name = basename( $block_path );

            // Skip if admin toggled this block OFF.
            if ( in_array( $block_name, $disabled_blocks, true ) ) {
                continue;
            }

            // Free blocks — always register.
            // 'team-section' is the core block, needed by all users.
            if ( in_array( $block_name, [ 'team-section', 'parent' ], true ) ) {
                register_block_type( $block_path );
                continue;
            }

            // All other blocks are Pro — only register when premium is active.
            if ( $is_premium ) {
                register_block_type( $block_path );
            }
        }
    }
}
