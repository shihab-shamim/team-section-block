<?php

namespace TSB;


class Init {
    function __construct() {
        add_action( 'init', [ $this, 'onInit' ] );
        add_filter( 'default_title', [$this, 'defaultTitle'], 10, 2 );
        add_filter( 'default_content', [$this, 'defaultContent'], 10, 2 );
    }

    function onInit() {
        $this->tsb_register_blocks();

        // Mirror portfolio-block: premium users see the selector UI,
        // free users get the default team block directly.
        if ( tsbIsPremium() ) {
            $template = [ [ 'tsb/team-section-selector' ] ];
        } else {
            $template = [ [ 'tsb/team' ] ];
        }

        register_post_type( 'tsb', [
            'labels'                => [
                'name'          => __( 'Team Section', 'team-section' ),
                'singular_name' => __( 'ShortCode', 'team-section' ),
                'add_new_item'  => __( 'Add New ShortCode', 'team-section' ),
                'edit_item'     => __( 'Edit ShortCode', 'team-section' ),
                'new_item'      => __( 'New ShortCode', 'team-section' ),
                'view_item'     => __( 'View ShortCode', 'team-section' ),
                'search_items'  => __( 'Search ShortCodes', 'team-section' ),
                'not_found'     => __( 'Sorry, we couldn\'t find the ShortCode you are looking for.', 'team-section' )
            ],
            'public'                => false,
            'show_ui'               => true,
            'show_in_rest'          => true,
            'publicly_queryable'    => false,
            'show_in_menu'          => true,
            'exclude_from_search'   => true,
            'menu_position'         => 14,
            'menu_icon'             => 'dashicons-groups',
            'has_archive'           => false,
            'hierarchical'          => false,
            'capability_type'       => 'page',
            'rewrite'               => [ 'slug' => 'apb' ],
            'supports'              => [ 'title', 'editor' ],
            'template'              => $template,
            'template_lock'         => 'all',
        ] );
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

    /**
     * Allow ?title= query param to set default post title.
     */
    function defaultTitle( $title, $post ) {
        if ( 'page' === $post->post_type && isset( $_GET['title'] ) ) {
            return sanitize_text_field( wp_unslash( $_GET['title'] ) );
        }
        return $title;
    }

    /**
     * Allow ?content= query param to set default post content.
     */
    function defaultContent( $content, $post ) {
        if ( 'page' === $post->post_type && isset( $_GET['content'] ) ) {
            return wp_unslash( $_GET['content'] );
        }
        return $content;
    }
}
