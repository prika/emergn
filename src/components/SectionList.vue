<template>
	<div class="block-list">
		<header>
			<h2>{{articleTitle}}</h2>
			<p class="u-text-center text-size-medium">{{articleSubtitle}}</p>
		</header>

		<ul class="block-list__list">
			<li v-for="(item, index) in articleContent" :key="index" class="block-list__item">
				<b>{{item.topic1}}</b>
				{{item.topic2}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "ArticleList",
		props: {
			articleTitle: String,
			articleSubtitle: String,
			articleContent: Array
		}
	};
</script>

<style lang="scss">
	.block-list__item {
		padding: 0.14em 0;
	}
</style>
