<template>
	<header class="resume__header" itemscope itemtype="http://schema.org/Person">
		<img
			class="resume__photo"
			itemprop="image"
			alt="John Smith Photo"
			src="@/assets/photo.jpg"
			width="239"
			height="239"
		/>

		<div class="resume__form">
			<div
				class="c-content-editable c-content-editable__bigger"
				:class="isEditingName === true ? 'c-content-editable--editmode' : ''"
			>
				<h1
					class="c-content-editable-label"
					id="labelName"
					itemprop="name"
					v-if="!isEditingName"
					@click.prevent="editName()"
				>{{ name }}</h1>

				<input
					class="u-h1 c-content-editable-input"
					id="inputname"
					type="text"
					name="name"
					itemprop="name"
					:aria-label="name"
					v-model="name"
					tabindex="0"
					@focus="editName()"
					v-if="isEditingName"
				/>
				<button
					class="control-buttons control-buttons__accept"
					tabindex="1"
					@click.prevent="saveNewName()"
					v-if="isEditingName"
					:disabled="isEditingName && !hasNewName"
				>
					<BaseIconAccept></BaseIconAccept>
				</button>
				<button
					class="control-buttons control-buttons__reject"
					tabindex="2"
					@click.prevent="resetName()"
					v-if="isEditingName"
				>
					<BaseIconReject></BaseIconReject>
				</button>
			</div>

			<div
				class="c-content-editable"
				:class="isEditingCity === true ? 'c-content-editable--editmode' : ''"
			>
				<h2
					class="h3 c-content-editable-label"
					v-if="!isEditingCity"
					@click.prevent="editCity()"
				>{{ city }}</h2>

				<input
					class="u-h3 u-text-bold c-content-editable-input"
					id="inputcity"
					type="text"
					name="city"
					:aria-label="city"
					v-model="city"
					tabindex="3"
					v-if="isEditingCity"
					@focus="editCity()"
				/>

				<button
					class="control-buttons control-buttons__accept"
					tabindex="4"
					@click.prevent="saveNewCity()"
					v-if="isEditingCity"
					:disabled="isEditingCity && !hasNewCity"
				>
					<BaseIconAccept></BaseIconAccept>
				</button>
				<button
					class="control-buttons control-buttons__reject"
					tabindex="5"
					@click.prevent="resetCity()"
					v-if="isEditingCity"
				>
					<BaseIconReject></BaseIconReject>
				</button>
			</div>

			<div
				class="c-content-editable"
				:class="isEditingLanguage === true ? 'c-content-editable--editmode' : ''"
			>
				<h3
					class="c-content-editable-label"
					v-if="!isEditingLanguage"
					@click.prevent="editLanguage()"
				>{{ language }}</h3>

				<input
					class="u-h3 u-text-bold c-content-editable-input"
					id="inputlanguage"
					type="text"
					name="language"
					:aria-label="language"
					v-model="language"
					v-if="isEditingLanguage"
					tabindex="6"
					@focus="editLanguage()"
				/>

				<button
					class="control-buttons control-buttons__accept"
					tabindex="7"
					@click.prevent="saveNewLanguage()"
					v-if="isEditingLanguage"
					:disabled="isEditingLanguage && !hasNewLanguage"
				>
					<BaseIconAccept></BaseIconAccept>
				</button>

				<button
					class="control-buttons control-buttons__reject"
					tabindex="8"
					v-if="isEditingLanguage"
					@click.prevent="resetLanguage()"
				>
					<BaseIconReject></BaseIconReject>
				</button>
			</div>

			<ol class="list-skills list-skills--inline" itemscope itemtype="http://schema.org/ItemList">
				<li
					v-for="(skill, index) in sortLevel(skills)"
					:key="index"
					class="list-skills__item"
					:class="'level'+skill.level"
					itemprop="itemListElement"
				>
					{{skill.name}}
					<button
						class="control-buttons control-buttons__reject"
						@click.prevent="removeSkill(index)"
						aria-label="Remove Skill"
					>
						<BaseIconReject></BaseIconReject>
					</button>
				</li>
			</ol>

			<div
				class="c-content-editable c-content-editable__list"
				:class="isEditingSkills === true ? 'c-content-editable--editmode' : ''"
			>
				<input
					id="inputskill"
					ref="skillName"
					v-model="inputskillmodel"
					type="text"
					placeholder="Add Skills"
					@focus="isEditingSkills = true"
				/>

				<select id="selectlevel" v-if="isEditingSkills" v-model="skillLevel">
					<option value="3">Strong</option>
					<option value="2">Medium</option>
					<option value="1">Low</option>
				</select>

				<button
					class="control-buttons control-buttons__accept"
					v-if="isEditingSkills"
					@click.prevent="saveNewSkill()"
				>
					<BaseIconAccept></BaseIconAccept>
				</button>
			</div>
		</div>

		<div id="printButtonContainer">
			<button class="base-button" @click.prevent="printPage()">Print this page</button>
		</div>
	</header>
</template>


<script>
	import BaseIconAccept from "@/components/BaseIconAccept.vue";
	import BaseIconReject from "@/components/BaseIconReject.vue";

	export default {
		name: "Header",
		props: {
			headerInitialName: String,
			headerInitialCity: String,
			headerInitialLanguage: String,
			headerInitialSkills: Array
		},
		components: {
			BaseIconAccept,
			BaseIconReject
		},
		data() {
			return {
				isEditingName: false,
				name: this.headerInitialName,
				originalName: this.headerInitialName,

				isEditingCity: false,
				city: this.headerInitialCity,
				originalCity: this.headerInitialCity,

				isEditingLanguage: false,
				language: this.headerInitialLanguage,
				originalLanguage: this.headerInitialLanguage,

				isEditingSkills: false,
				inputskillmodel: "",
				skills: this.headerInitialSkills,
				skillName: String,
				skillLevel: 1
			};
		},
		methods: {
			printPage: function() {
				window.print();
			},
			editName: function() {
				this.isEditingName = true;
			},
			saveNewName: function() {
				this.originalName = this.name;
				this.isEditingName = false;

				// TODO: Call API to update name
			},
			resetName: function() {
				this.name = this.originalName;
				this.isEditingName = false;

				// TODO: Call API to update name
			},

			editCity: function() {
				this.isEditingCity = true;
			},
			saveNewCity: function() {
				this.originalCity = this.city;
				this.isEditingCity = false;

				// TODO: Call API to update city
			},
			resetCity: function() {
				this.city = this.originalCity;
				this.isEditingCity = false;

				// TODO: Call API to update city
			},

			editLanguage: function() {
				this.isEditingLanguage = true;
			},
			saveNewLanguage: function() {
				this.originalLanguage = this.language;
				this.isEditingLanguage = false;

				// TODO: Call API to update language
			},
			resetLanguage: function() {
				this.language = this.originalLanguage;
				this.isEditingLanguage = false;

				// TODO: Call API to update language
			},

			editSkills: function() {
				this.isEditingSkills = true;
			},
			saveNewSkill: function() {
				if (this.hasNewSkill) {
					let obj = { name: this.$refs.skillName.value, level: this.skillLevel };
					this.skills.push(obj);
					this.$refs.skillName.value = "";
					this.sortLevel(this.skills);
				}
			},
			removeSkill: function(index) {
				this.skills.splice(index, 1);
			},
			sortLevel(arr) {
				return arr.slice().sort((b, a) => a.level - b.level);
			}
		},
		computed: {
			hasNewName: function() {
				return (
					this.name != null && this.name != "" && this.name !== this.originalName
				);
			},
			hasNewCity: function() {
				return (
					this.city != null && this.city != "" && this.city !== this.originalCity
				);
			},
			hasNewLanguage: function() {
				return (
					this.language != null &&
					this.language != "" &&
					this.language !== this.originalLanguage
				);
			},
			hasNewSkill: function() {
				return (
					this.$refs.skillName.value != null && this.$refs.skillName.value != ""
				);
			}
		}
	};
</script>

<style lang="scss">
</style>