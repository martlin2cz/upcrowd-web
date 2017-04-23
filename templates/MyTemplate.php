<?php

require_once(__DIR__ . '/../nanotube-cms/templates/definite/StandartSPT.php');

class MyTemplate extends StandartSPT {

  public function __construct($config) {                                                                                
    parent::__construct($config);
  }

	protected function render_aditional_template_heads($apc) { ?>
		<!-- Google -->
		<meta itemprop="name" content="<?= $this->get_config()->get_web_title() ?>">
		<meta itemprop="image" content="http://upcrowd.upol.cz/images/logo-big.png">
		
		<!-- Twitter -->
		<meta name="twitter:title" content="<?= $this->get_config()->get_web_title() ?>">
		<meta name="twitter:description" content="<?= $this->get_config()->get_web_description() ?>">
		<meta name="twitter:image:src" content="http://upcrowd.upol.cz/images/logo-big.png">

		<!-- Open Graph General -->
		<meta property="og:url" content="http://upcrowd.upol.cz">
		<meta property="og:title" content="<?= $this->get_config()->get_web_title() ?>">
		<meta property="og:description" content="<?= $this->get_config()->get_web_description() ?>">
		<meta property="og:site_name" content="UP Crowd">
		<meta property="og:image" content="http://upcrowd.upol.cz/images/logo-big.png">
	<?php }  

 protected function do_header($web_title, $apc) { ?>
    <h2><img id="main-logo" src="images/logo200.png" alt="UP Crowd"></h2>
  <?php }

}

?>
