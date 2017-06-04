<template>
	<section class="container">
		<h3>Start</h3>
		<hr>
		<router-link to="/">Home</router-link>
		<router-link to="/Second">Second</router-link>
		<router-link to="/TestClassSplit">TestClassSplit</router-link>
		<hr>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</section>
</template>
