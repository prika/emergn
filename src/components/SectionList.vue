<template>
	<div>
		<header>
			<h2>{{articleTitle}}</h2>
			<p class="text-aline-center text-size-medium">{{articleSubtitle}}</p>
		</header>

		<ul class="list-block">
			<li v-for="(item, index) in articleContent" :key="index" class="list-block__item">
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
	.list-block__item {
		padding: 0.14em 0;
	}
</style>
