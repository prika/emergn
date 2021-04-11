<template>
	<a
		class="block-image"
		href="http://www.github.com"
		target="_blank"
		rel="nofollow noreferrer"
		:style="{'background-image':'url(' + getImgUrl(content) +')'}"
	>
		<h2 class="block-image-title">{{title}}</h2>
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
	a.block-image {
		margin-top: 0;
		height: 100%;
		display: block;
		background-size: cover;
		background-position: bottom left;
	}

	.block-image-title {
		background: rgba(255, 255, 255, 0.8);
		padding: 1.625em;
	}
</style>