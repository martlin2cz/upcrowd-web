<?php require_once('cms-impl.php'); ?>

<html>
	<head>
		<title><?= get_web_title() ?></title>
	</head>
	<body>

	<header>
		<h1><?= get_web_title() ?></h1>

		<nav>
			<ol>	
				<?php	foreach (get_web_pages() as $id => $page) { ?>
					<li><a href="#<?= $id ?>"><?= get_title_of_page($page) ?></a></li>
				<?php } ?>
			</ol>
		</nav>
	</header>

	<?php	foreach (get_web_pages() as $id => $page) { ?>
		<article id="<?= $id ?>">
			<h2><?= get_title_of_page($page) ?></h2>
	
			<?php insert_content_of_page($page); ?>
		</article>
	<?php } ?>

	<footer>
		Created by my simple-cms
	</footer>
</body>
</html>
