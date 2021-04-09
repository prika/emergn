<template>
	<div class="container-edit-input container-edit-input__bigger">
		<!-- <label itemprop="name" v-if="!isEditingName" @click="editName()">
			<h1>{{ name }}</h1>
		</label>
		<input
			id="inputname"
			class="h1"
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
		></button>-->
		<ComponentEditable
			componentEditable="container-edit-input container-edit-input__bigger"
			componentEditableLabelId="inputname"
			componentEditableLabelVif="editName()"
			:componentEditableLabelName="name"
			componentEditableInputId="inputName"
			componentEditableInputClass="h1"
			componentEditableTabindex="0"
			:componentEditableInputFocus="editName()"
			componentEditableVif="isEditingName"
		/>
	</div>
</template>


<script>
	export default {
		name: "Header",
		components: {
			ComponentInputEditable
		},
		props: {
			headerInitialName: String,
			headerInitialCity: String,
			headerInitialLanguage: String,
			headerInitialSkills: Array,
			componentEditable: String,
			componentEditableLabelId: String,
			componentEditableLabelVif,
			componentEditableLabelName
		},
		data() {
			return {
				isEditingName: false,
				name: this.headerInitialName,
				originalName: this.headerInitialName,

				isEditingCity: false,
				hasNewCity: false,
				city: this.headerInitialCity,
				newCity: "",

				isEditingLanguage: false,
				hasNewLanguage: false,
				language: this.headerInitialLanguage,
				newLanguage: "",

				isEditingSkills: false,
				hasNewSkills: false,
				skills: this.headerInitialSkills,
				newSkills: []
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
				this.isEditingCity = false;
			},
			returnCity: function() {
				this.isEditingCity = false;
			},

			editLanguage: function() {
				this.isEditingLanguage = true;
			},
			saveNewLanguage: function() {
				this.isEditingLanguage = false;
			},
			returnLanguage: function() {
				this.isEditingLanguage = false;
			},

			editSkills: function() {
				this.isEditingSkills = true;
			},
			saveNewSkill: function() {
				this.isEditingSkills = false;
			},
			returnSkill: function() {
				this.isEditingSkills = false;
			}
		},
		computed: {
			hasNewName: function() {
				return (
					this.name != null && this.name != "" && this.name !== this.originalName
				);
			}
		}
	};
</script>