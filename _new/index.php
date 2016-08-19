<?php 
	require_once('simple-cms/single-page-layout.php'); 
	
single_page_layout_template(
	/* specify HTML head headers here */	
'		<!-- headers -->
		<script type="text/javascript" src="jquery.js"></script>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<script type="text/javascript" src="scripts.js"></script>
', 
	/* specify title here */
'		<!-- title -->
		<img src="images/logo200.png" alt="UP Crowd" id="header-logo" />
		<span>Popularizujeme vědu!</span>
',
/* specify footer here */
'		<!-- footer -->
		<p><em>Powered by simple-cms</em></p>
');	



?>
