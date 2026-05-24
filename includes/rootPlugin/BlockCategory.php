<?php
namespace TSB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class BlockCategory {

    public function __construct() {
        add_filter( 'block_categories_all', [ $this, 'register_category' ], 10, 2 );
    }

    public function register_category( $categories, $context ) {
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
}
