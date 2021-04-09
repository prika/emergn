<template>
	<a
		href="http://www.github.com"
		target="_blank"
		rel="nofollow noreferrer"
		class="articleimage_block"
		:style="{'background-image':'url(' + getImgUrl(content) +')'}"
	>
		<h2>{{title}}</h2>
	</a>
</template>

<script>
	export default {
		name: "ArticleImage",
		props: {
			title: String,
			content: String
		},
		methods: {
			getImgUrl: function(src) {
				return require("@/assets/" + src);
			}
		}
	};
</script>

<style lang="scss">
	a.articleimage_block {
		margin-top: 0;
		height: 100%;
		display: block;
		background-size: cover;
		background-position: bottom left;

		&:hover {
			background-size: 150%;
		}

		h2 {
			background: rgba(255, 255, 255, 0.8);
			padding: 1.625em;
		}
	}
</style>