<?php

/**
 * RestApi.php — AJAX handler for block toggle management.
 * Mirrors: info-cards/inc/RestApi.php (tsbGetBlocks action only)
 */

namespace TSB;

if ( ! defined( 'ABSPATH' ) ) { exit; }

class RestApi {

    function __construct() {
        add_action( 'wp_ajax_tsbGetBlocks', [ $this, 'tsbGetBlocks_callback' ] );
    }

    // -------------------------------------------------------------------------
    // tsbGetBlocks (AJAX)
    // -------------------------------------------------------------------------

    public function tsbGetBlocks_callback() {
        $nonce = sanitize_text_field( wp_unslash( $_POST['_wpnonce'] ?? '' ) );

        if ( ! wp_verify_nonce( $nonce, 'tsb_admin_nonce' ) ) {
            wp_send_json_error( 'Invalid Request' );
        }

        $db_data = get_option( 'tsbBlocks', [] );

        if ( ! isset( $_POST['data'] ) ) {
            wp_send_json_success( $db_data );
        }

        $data = json_decode( stripslashes( $_POST['data'] ), true );

        update_option( 'tsbBlocks', $data );

        wp_send_json_success( $data );
    }
}
