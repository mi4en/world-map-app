<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> | <router-link to="/chart">Chart</router-link> |
			<router-link to="/map">Map</router-link> | <router-link to="/acronis-html">Acronis HTML</router-link> |
			<router-link to="/acronis-js">Acronis JS</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

#app {
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: rgba(36, 49, 67, 0.9);
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
