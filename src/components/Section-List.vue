<template>
	<article>
		<h2>Portfolio</h2>
		<p>PHP, Ruby, Javascript</p>
		<ul class="list-block">
			<li class="list-block__item">NavalPlan, PHP, Ruby</li>
			<li class="list-block__item">MyTime, Javascript</li>
			<li class="list-block__item">Formidable, PHP, Ruby</li>
			<li class="list-block__item">MyTime, Javascript</li>
			<li class="list-block__item">Monsoon, ActionScript</li>
		</ul>
	</article>
</template>

<script>
	export default {
		name: "List",
		props: {
			title: String,
			subtitle: String
		}
	};
</script>

<style lang="scss">
</style>
