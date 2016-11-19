<?php

require_once(__DIR__ . '/../nanotube-cms/templates/definite/StandartSPT.php');

/**
 * Just extending the standart template. Nothing more needed to do here.
 * */
class MyTemplate extends StandartSPT {

  public function __construct($config) {                                                                                
    parent::__construct($config);
  }

 protected function do_header($web_title, $apc) { ?>
    <h2><img id="main-logo" src="images/logo200.png" alt="UP Crowd"></h2>
  <?php }

}

?>
