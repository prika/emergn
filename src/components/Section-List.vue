<template>
	<div>
		<header>
			<h2>{{title}}</h2>
			<p class="text-aline-center text-size-medium">{{subtitle}}</p>
		</header>

		<ul class="list-block">
			<li v-for="(item, index) in content" :key="index" class="list-block__item">
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
			title: String,
			subtitle: String,
			content: Array
		}
	};
</script>

<style lang="scss">
	.list-block__item {
		padding: 0.14em 0;
	}
</style>
