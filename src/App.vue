<template>
	<div class="resume__container container">
		<TheHeader
			headerInitialName="John Smith"
			headerInitialCity="Portland, Oregon, USA"
			headerInitialLanguage="English"
			:headerInitialSkills="initialSkills"
		/>

		<main class="resume__content">
			<article v-for="(block, index) in blocks" :key="index">
				<SectionList
					v-if="block.type == 'list'"
					:articleTitle="block.title"
					:articleSubtitle="block.subtitle"
					:articleContent="block.content"
				></SectionList>

				<SectionImage v-if="block.type == 'image'" :title="block.title" :content="block.content"></SectionImage>

				<SectionAvailability
					v-if="block.type == 'availability'"
					:title="block.title"
					:subtitle="block.subtitle"
					:title2="block.title2"
					:content="block.content"
				></SectionAvailability>

				<SectionQuote
					v-if="block.type == 'quote'"
					:title="block.title"
					:subtitle="block.subtitle"
					:content="block.content"
					class="article"
				></SectionQuote>
			</article>
		</main>
	</div>
</template>

<script>
	import TheHeader from "./components/TheHeader.vue";
	import SectionList from "./components/SectionList.vue";
	import SectionImage from "./components/SectionImage.vue";
	import SectionAvailability from "./components/SectionAvailability.vue";
	import SectionQuote from "./components/SectionQuote.vue";

	export default {
		name: "resume",
		data() {
			return {
				blocks: [],
				initialSkills: [
					{ name: "PHP", level: 3 },
					{ name: "Ruby", level: 3 },
					{ name: "Javascript", level: 2 },
					{ name: "Actionscript", level: 1 }
				]
			};
		},
		components: {
			TheHeader,
			SectionList,
			SectionImage,
			SectionAvailability,
			SectionQuote
		},
		created() {
			// TODO: Handle loading error properly
			this.$http.get("./mocks/cv.json").then(response => {
				this.blocks = response.data;
			});
		}
	};
</script>

<style lang="scss">
	@import "@/styles/main";
</style>
