<?php

require_once(__DIR__ . '/../../../nanotube-cms/templates/definite/StandartSPT.php');

/**
 * Just extending the standart template. Nothing more needed to do here.
 * */
class MyTemplate extends StandartSPT {

	public function __construct($config) {
		parent::__construct($config);
	}

	protected function add_specific_headers_before() { ?>
		<meta name="viewport" content="width=device-width">
		<script type="text/javascript" src="js/jquery.js"></script>
	<?php }

	protected function do_header($web_title, $apc) { ?>
		<span id="banner">
			<img src="images/logo200.png" alt="UP Crowd" id="header-logo" />
			<span><?php plugin_Fortune('upcrowd'); ?></span>
		</span>
	<?php }


}

?>
