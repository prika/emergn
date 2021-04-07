<template>
	<header class="resume__header" itemscope itemtype="http://schema.org/Person">
		<figure>
			<img class="resume__photo" itemprop="image" alt="John Smith Photo" src="@/assets/photo.jpg" />
			<!--figcaption>Photo - Name of Person</figcaption-->
		</figure>

		<div class="resume__title">
			<button v-on:click="printPage()" class="button">Print this page</button>

			<div class="container-edit-name">
				<label itemprop="name" for="inputname">
					<h1>{{ savedname }}</h1>
				</label>
				<input
					id="inputname"
					type="text"
					:placeholder="savedname"
					name="name"
					itemprop="name"
					v-model="savedname"
				/>
			</div>

			<!--label for="city">
				<h3 itemprop="homeLocation">{{city}}</h3>
			</label>
			<input
				id="city"
				type="text"
				:placeholder="activeName"
				name="city"
				itemprop="name"
				v-model="city"
			/-->

			<!-- <h2 itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				<span itemprop="addressLocality">Portland</span>,
				<span itemprop="addressRegion">Oregon</span>,
				<span itemprop="addressCountry">USA</span>
			</h2>-->

			<!--h3>English</h3>
			<input
				id="city"
				type="text"
				:placeholder="activeName"
				name="city"
				itemprop="name"
				v-model="city"
			/>

			<ul class="list-skills list-skills--inline" itemscope itemtype="http://schema.org/ItemList">
				<li
					v-for="(skill, index) in skills"
					:key="index"
					class="list-skills__item"
					itemprop="itemListElement"
				>{{skill}}</li>
			</ul>

			<button>Add skills</button>
			<input type="text" v-model="addskill" /-->
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				skills: [],
				isEditingName: false
			};
		},
		props: {
			savedname: String,
			savedcity: String
		},
		methods: {
			printPage: function() {
				window.print();
			}
		},
		watch: {}
	};
</script>

<style lang="scss">
	.resume__header {
		background-color: #e6e6e6;
		border: 1px solid #e6e6e6;
		margin: -1px;
		height: 238px;

		display: grid;
		grid-template-columns: 1fr 3fr;

		.resume__photo {
			height: 238px;
		}

		.resume__title {
			padding: 20px 30px;

			button {
				float: right;
			}
		}
	}
</style>
