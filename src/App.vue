<template>
	<div class="resume">
		<resumeheader
			initialname="John Smith"
			initialcity="Portland, Oregon, USA"
			initiallanguage="English"
			:initialskills="initialskills"
		/>

		<main class="resume__container">
			<article v-for="(unit, index) in blocks" :id="unit.id" :key="index">
				<SectionList
					v-if="unit.type == 1"
					:title="unit.title"
					:subtitle="unit.subtitle"
					:content="unit.content"
				></SectionList>

				<SectionImage
					v-if="unit.type == 2"
					:title="unit.title"
					:subtitle="unit.subtitle"
					:content="unit.content"
				></SectionImage>

				<SectionAvailability
					v-if="unit.type == 3"
					:title="unit.title"
					:subtitle="unit.subtitle"
					:title2="unit.title2"
					:content="unit.content"
				></SectionAvailability>

				<SectionQuote
					v-if="unit.type == 4"
					:title="unit.title"
					:subtitle="unit.subtitle"
					:content="unit.content"
					class="article"
				></SectionQuote>
			</article>
		</main>
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
		data() {
			return {
				blocks: [],
				initialskills: [
					{ name: "PHP", level: 3 },
					{ name: "Ruby", level: 3 },
					{ name: "Javascript", level: 2 },
					{ name: "Actionscript", level: 1 }
				]
			};
		},
		components: {
			resumeheader,
			SectionList,
			SectionImage,
			SectionAvailability,
			SectionQuote
		},
		created() {
			this.$http.get("./mocks/cv.json").then(response => {
				this.blocks = response.data;
			});
		}
	};
</script>

<style lang="scss">
	@import "./styles/base";
	@import "./styles/print";
</style>
