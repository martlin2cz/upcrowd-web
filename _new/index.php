<?php 
	require_once('simple-cms/single-page-layout.php'); 
	
single_page_layout_template(
	/* specify HTML head headers here */	
'
		<script type="text/javascript" src="jquery.js"></script>

		<!-- page stuff -->
		<link rel="stylesheet" type="text/css" href="styles.css">
		<script type="text/javascript" src="scripts.js"></script>

		<!-- lightGallery -->
		<link href="lightGallery/css/lightgallery.css" rel="stylesheet">
		<script src="lightGallery/js/lightgallery.js"></script>
		<script src="lightGallery/js/lg-fullscreen.js"></script>
		<script src="lightGallery/js/lg-pager.js"></script>
', 
	/* specify title here */
'		<!-- title -->
		<img src="images/logo200.png" alt="UP Crowd" id="header-logo" />
		<span>Popularizujeme vědu!</span>
',
/* specify footer here */
'		<!-- footer -->
		<p><em>Powered by simple-cms</em></p>
',
/* specify some other code to be placed after the whole page content */
'		<!-- nothing here -->
'
);	



?>
