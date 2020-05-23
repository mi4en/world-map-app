<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
			<router-link to="/chart">Chart</router-link> | <router-link to="/map">Map</router-link> |
			<router-link to="/acronis">Acronis</router-link>
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
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: rgba(36, 49, 67, 0.9);
	line-height: 24px;
	font-size: 16px;
	font-weight: normal;
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
