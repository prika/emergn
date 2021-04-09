<template>
	<div class="block-availability">
		<header class="block-availability__header">
			<h2>{{title}}</h2>
			<p class="u-h1 u-text-bold block-availability__header-title">{{subtitle}}</p>
		</header>

		<main class="block-availability__main">
			<h2 class="block-availability__second-title">{{title2}}</h2>
			<p class="block-availability__text">{{content}}</p>
		</main>
	</div>
</template>

<script>
	export default {
		name: "ArticleAvailability",
		props: {
			title: String,
			subtitle: String,
			title2: String,
			content: String
		}
	};
</script>

<style lang="scss">
	.block-availability {
		padding: 0 !important;
		display: grid;
		-ms-grid-rows: 6.9em;
		grid-template-rows: 6.9em;
		height: 100%;

		& > * {
			text-align: center;
		}
	}

	.block-availability__header {
		height: 100% !important;
		padding: 1.3em 1.55em;
		border-bottom: 1px solid #e6e6e6;
	}

	.block-availability__header-title {
		margin-top: 0.4em;
	}

	.block-availability__text {
		color: #4c4c4c;
		margin-top: 0.5em;
	}

	.block-availability__main {
		padding: 1.3em 1.55em;

		.block-availability__second-title {
			padding-bottom: 1.05em;
		}
	}
</style>