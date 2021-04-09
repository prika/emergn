<template>
	<div>
		<header>
			<h2>{{title}}</h2>
			<p class="h1 text-bold text-grey">{{subtitle}}</p>
		</header>

		<main>
			<h2>{{title2}}</h2>
			<p>{{content}}</p>
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
	/*	div {
			 padding: 0 !important;
				display: grid;

				-ms-grid-rows: 6.9em;
				grid-template-rows: 6.9em;
				height: 100%; */

	/* header {
					height: 100% !important;
					padding: 1.3em 1.55em;
					border-bottom: 1px solid #e6e6e6;
				}

				main {
					padding: 1.3em 1.55em;
				}

				h2 {
					padding-bottom: 1.05em;
				}

				& > * {
					text-align: center;
				} 
		}*/
</style>