<template>
	<div class="resume">
		<resumeheader name="John Smith" city="Portland, Oregon, USA" />

		<section class="resume__container">
			<SectionList></SectionList>

			<article>
				<h2>Experience</h2>
				<ul>
					<li>PHP, 6 years</li>
					<li>Ruby, 7 years</li>
					<li>Javascript, 4 years</li>
					<li>ActionScript, 3 years</li>
				</ul>
			</article>

			<SectionImage></SectionImage>

			<SectionAvailability></SectionAvailability>

			<SectionQuote></SectionQuote>

			<article>
				<h2>In clients I look for …</h2>
				<p>… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore</p>
			</article>

			<article></article>

			<article>
				<h2>Note</h2>… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore
			</article>
		</section>
	</div>
</template>

<script>
	import resumeheader from "./components/Header.vue";
	import SectionList from "./components/Section-List.vue";
	import SectionImage from "./components/Section-Image.vue";
	import SectionAvailability from "./components/Section-Availability.vue";
	import SectionQuote from "./components/Section-Quote.vue";

	export default {
		name: "resume",
		components: {
			resumeheader,
			SectionList,
			SectionImage,
			SectionAvailability,
			SectionQuote
		},
		created() {
			//this.$http.get("@/mocks/cv.json")
			//.then(response => {});
		}
	};
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	a {
		&,
		&:active,
		&:focus,
		&:hover,
		&:visited {
			text-decoration: none;
		}
	}

	blockquote {
		font-style: italic;
		position: relative;
		display: block;
		content: "";
		width: 100%;
		margin: 0;

		&::before {
			width: 30px;
			height: 30px;
			background: red;
			display: block;
			content: "";
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
		}
		&::after {
			width: 30px;
			height: 30px;
			background: red;
			display: block;
			content: "";
			position: absolute;
			z-index: -1;
			bottom: 0;
			right: 0;
		}
	}

	.resume {
		font-family: Helvetica, Arial, Avenir, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		max-width: 980px;
		margin: 0 auto;
		/*margin-top: var(--flow-space, 1em);
													--flow-space: 1.4rem;*/
	}

	.resume__container {
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.resume__container article {
		border: 1px solid #e6e6e6;
		-webkit-flex: 25%;
		-ms-flex: 25%;
		flex: 25%;
		text-align: center;
	}

	/* on-screen styles */
	@media screen and (max-width: 800px) {
		section {
			flex-direction: column;
		}
	}

	/* print styles */
	@media print {
		body {
			margin: 0;
			color: #000;
			background-color: #fff;
		}

		button {
			display: none;
		}

		.resume__photo {
			-webkit-filter: brightness(120%) contrast(150%);
			filter: brightness(120%) contrast(150%);
		}

		.resume__container article {
			column-width: 17em;
			column-gap: 3em;
			border-color: #000;
		}
	}
</style>
