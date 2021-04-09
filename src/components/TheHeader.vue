<template>
	<header class="resume__header" itemscope itemtype="http://schema.org/Person">
		<figure class="resume__photo">
			<img itemprop="image" alt="John Smith Photo" src="@/assets/photo.jpg" width="100%" />
		</figure>

		<form class="resume__form">
			<div class="contentEditable contentEditable__bigger">
				<label id="labelName" itemprop="name" v-if="!isEditingName" @click="editName()">
					<h1>{{ name }}</h1>
				</label>

				<input
					class="h1"
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
					type="submit"
					v-on:click="saveNewName()"
					v-if="isEditingName"
					:disabled="isEditingName && !hasNewName"
				></button>
				<button
					class="control-buttons control-buttons__reject"
					tabindex="2"
					type="submit"
					v-on:click="resetName()"
					v-if="isEditingName"
				></button>
			</div>

			<div class="contentEditable">
				<label for="inputcity" v-if="!isEditingCity" @click="editCity()">
					<h3>{{ city }}</h3>
				</label>
				<input
					class="h3"
					id="inputcity"
					type="text"
					name="city"
					:aria-label="city"
					v-model="city"
					tabindex="3"
					@focus="editCity()"
				/>

				<button
					class="control-buttons control-buttons__accept"
					tabindex="4"
					type="submit"
					v-on:click="saveNewCity()"
					v-if="isEditingCity"
				></button>
				<button
					class="control-buttons control-buttons__reject"
					tabindex="5"
					type="submit"
					v-on:click="returnCity()"
					v-if="isEditingCity"
				></button>
			</div>

			<div class="contentEditable">
				<label for="inputlanguage" v-if="!isEditingLanguage" @click="editLanguage()">
					<h3>{{ language }}</h3>
				</label>
				<input
					class="h3"
					id="inputlanguage"
					type="text"
					name="language"
					:aria-label="language"
					v-model="language"
					tabindex="6"
					@focus="editLanguage()"
				/>

				<button
					class="control-buttons control-buttons__accept"
					tabindex="7"
					type="submit"
					v-on:click="saveNewLanguage()"
					v-if="isEditingLanguage"
				></button>

				<!-- v-on:click="returnLanguage()" -->
				<button
					class="control-buttons control-buttons__reject"
					tabindex="8"
					type="button"
					v-if="isEditingLanguage"
				></button>
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
						@click="removeSkill()"
						v-if="isEditingSkills"
					></button>
				</li>
			</ol>

			<div class="contentEditable contentEditable__list">
				<input
					id="inputskill"
					ref="skillName"
					type="text"
					placeholder="Add Skills"
					@focus="isEditingSkills = true"
				/>

				<select v-if="isEditingSkills" v-model="skillLevel">
					<option value="3">Strong</option>
					<option value="2">Medium</option>
					<option value="1">Low</option>
				</select>

				<button
					class="control-buttons control-buttons__accept"
					type="submit"
					@click="saveNewSkill()"
					v-if="isEditingSkills"
				></button>
			</div>
			<!-- <a @click="editSkills()" href="javacript:void(0)">Add skills</a> -->
		</form>

		<div id="printButtonContainer">
			<button tabindex="9" v-on:click="printPage()" class="button">Print this page</button>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header",
		props: {
			headerInitialName: String,
			headerInitialCity: String,
			headerInitialLanguage: String,
			headerInitialSkills: Array
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
			returnCity: function() {
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
			returnLanguage: function() {
				this.language = this.originalLanguage;
				this.isEditingLanguage = false;

				// TODO: Call API to update language
			},

			editSkills: function() {
				this.isEditingSkills = true;
			},
			saveNewSkill: function() {
				this.isEditingSkills = false;

				if (
					this.$refs.skillName.value != null &&
					this.$refs.skillName.value != "" &&
					this.$refs.skillName.value !== this.skills
				) {
					let obj = { name: this.$refs.skillName.value, level: this.skillLevel };
					this.skills.push(obj);
					this.$refs.skillName.value = "";
					this.sortedSkills();
				}
			},
			removeSkill: function() {
				this.isEditingSkills = false;
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
			}
		}
	};
</script>

<style lang="scss">
	.resume__header {
		background-color: #e6e6e6;
		border: 1px solid #e6e6e6;
		margin: -1px;
		display: grid;
		grid-template-columns: 25% 55% 20%;

		.resume__photo {
			width: 100%;
		}

		.resume__form {
			position: relative;
			padding: 1.25em 1.875em;
		}

		#printButtonContainer {
			float: right;
			text-align: right;
			padding: 1.65em 2.6em 0 0;
		}
	}

	.contentEditable {
		position: relative;
		height: 20px;
		margin-bottom: 5px;

		input {
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			line-height: 100%;
			letter-spacing: 0;
			padding-left: 0.1em;
		}

		label {
			position: absolute;
			top: 3px;
			bottom: 0;
			left: 4px;
			z-index: 1;
			height: 100%;
			line-height: 100%;
			letter-spacing: 0;
		}

		.control-buttons {
			position: absolute;
			z-index: 4;
			width: 21px;
			height: 21px;
			border-radius: 100%;
			background-color: #e6e6e6;
			border: 1px solid #e6e6e6;
			top: 0.8em;

			&.control-buttons__accept {
				right: 34px;
			}
			&.control-buttons__reject {
				right: 7px;

				&:hover {
					background-color: #fa736f;
					border-color: #f91400;
				}
			}
		}
	}

	.contentEditable__bigger {
		height: 41px;
	}

	.contentEditable__bigger label {
		top: 12px;
		left: 2px;
	}

	.contentEditable__list {
		width: 16.0625em;
		height: 1.6875em;
		position: relative;
		margin-top: 0.625em;

		select {
			position: absolute;
			right: 10%;
			top: 5%;
			height: 90%;
			line-height: 100%;
			z-index: 2;
		}

		a {
			position: absolute;
			left: 1em;
			top: 0;
			display: block;
		}

		#inputskill {
			font-size: 0.875em;

			&::placeholder {
				color: #000;
			}

			&:focus {
				border-color: #00ff00;
			}
		}
	}

	.list-skills {
		padding: 0;
		margin-top: 20px;

		li {
			display: inline-block;
			list-style: none;
			text-align: center;
			text-transform: uppercase;

			margin-right: 0.375em;
			font-size: 0.8125em;
			color: #fff;
			padding: 0.3em 0.65em;
			border-radius: 2px;

			&.level1 {
				background: #a2a2a2;
			}
			&.level2 {
				background: #5c5c5c;
			}
			&.level3 {
				background: #000;
			}
		}
	}
</style>


