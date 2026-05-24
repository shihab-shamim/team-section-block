<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! function_exists( 'tsbIsPremium' ) ) {
	function tsbIsPremium(){
		return TEAM_SECTION_BLOCK_PRO ? ts_fs()->can_use_premium_code() : false;
	}
}
