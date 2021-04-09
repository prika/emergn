<template>
	<div class="block-quote">
		<header>
			<h2>{{title}}</h2>
		</header>

		<blockquote>
			{{content}}
			<p class="block-quote__author u-text-bold u-text-right u-text--">{{subtitle}}</p>
		</blockquote>
	</div>
</template>

<script>
	export default {
		name: "ArticleQuote",
		props: {
			title: String,
			content: String,
			subtitle: String
		}
	};
</script>

<style lang="scss">
	.block-quote {
		position: relative;
		height: 100%;

		&::before,
		&::after {
			display: block;
			height: 30px;
			width: 37px;
			background: url("../assets/quote.jpg") no-repeat center;
			content: "";
			position: absolute;
			z-index: 0;
		}

		&::before {
			top: 58px;
			left: 16px;
			-webkit-transform: rotate(180deg);
			-moz-transform: rotate(180deg);
			transform: rotate(180deg);
		}
		&::after {
			bottom: 14px;
			right: 16px;
		}

		blockquote {
			position: relative;
			z-index: 1;
			padding: 0.355em 0;

			.block-quote__author {
				font-family: "Roboto";
				font-style: normal;
				margin-top: 0.6em;
			}
		}
	}
</style>
