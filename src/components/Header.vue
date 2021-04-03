<template>
	<header class="resume__header" itemscope itemtype="http://schema.org/Person">
		<img
			class="resume__photo"
			itemprop="image"
			alt="John Smith Photo"
			src="@/assets/photo.jpg"
			width="245px"
			height="245px"
		/>
		<div class="resume__title">
			<button v-on:click="printPage()" class="button right">Print this page</button>

			<input type="text" :placeholder="name" name="name" itemprop="name" v-model="name" />
			<h1 itemprop="name">{{ name }}</h1>

			<input type="text" :placeholder="name" name="name" itemprop="name" v-model="name" />
			<h3 itemprop="homeLocation">{{city}}</h3>

			<!-- <h2 itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				<span itemprop="addressLocality">Portland</span>,
				<span itemprop="addressRegion">Oregon</span>,
				<span itemprop="addressCountry">USA</span>
			</h2>-->
			<h3>English</h3>

			<ul class="list-skills list-skills--inline" itemscope itemtype="http://schema.org/ItemList">
				<li class="list-skills__item" itemprop="itemListElement">PHP</li>
			</ul>
			<a href>Add skills</a>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header",
		props: {
			city: String,
			name: String
		},
		methods: {
			printPage: function() {
				window.print();
			}
		}
	};
</script>

<style lang="scss">
	.resume__header {
		background-color: #e6e6e6;
		width: 100%;
		min-height: 238px;

		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		.resume__photo {
			//width: 100%;
			float: left;
			-webkit-flex: 25%;
			-ms-flex: 25%;
			flex: 25%;
		}

		.resume__title {
			width: 100%;
			-webkit-flex: 75%;
			-ms-flex: 75%;
			flex: 75%;
			padding: 20px 30px;

			button {
				margin-top: 50px;
			}
		}

		.left {
			float: left;
		}
		.right {
			float: right;
		}
	}
</style>
