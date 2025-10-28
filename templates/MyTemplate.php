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

	protected function do_footer($apc) { ?>
		Vytvořil <a href="http://martlins-web.tode.cz" target="_blank">m@rtlin</a>, pomocí <a href="https://github.com/martlin2cz/nanotube-cms" target="_blank">nanotube-cms</a>


  <!-- Overlay -->
  <div id="overlay" style="
    display:flex;
    position:fixed;
    top:0;left:0;
    width:100%;height:100%;
    backdrop-filter:blur(6px);
    background:rgba(0,0,0,0.4);
    justify-content:center;
    align-items:center;
    z-index:9999;">
    <div style="
      background:white;
      padding:2em 3em;
      border-radius:8px;
      text-align:center;
      position:relative;">

      <h1 style="font-size:3em;color:#000c40"> &#x1F9F2; &#x1F52C; &#x1F9EC; &#x1F9D1;&#x200D;&#x1F52C; &#x1F4A1 &#x1F680; <h1>
      <h1 style="font-size:2em;color:#000c40">Web byl přesunut na</h1>
      <h1 style="font-size:2em;"><a href="http://upcrowd.cz">http://upcrowd.cz &nearr;</a></h1>

      <hr style="border:none; padding:1em; margin:1em">
      <a onclick='this.parentElement.parentElement.style.display="none"' style="
        background:none;
        border:none;
        font-size:1.2em;
        cursor:pointer;">Pokračovat na původním webu &rarr;<a>

    </div>
  </div>

  <script>
    // Ensure overlay shows on load (if initially hidden)
    window.addEventListener('load', () => {
      document.getElementById('overlay').style.display = 'flex';
    });
  </script>
	<!-- end of overlay -->
	<?php }
 
}
?>
