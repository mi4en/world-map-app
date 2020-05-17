<template>
	<div class="world-map" ref="mapdiv"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

export default {
	name: 'world-map',
	mounted() {
		let map = am4core.create(this.$refs.mapdiv, am4maps.MapChart);

		map.geodata = am4geodata_worldLow;

		map.projection = new am4maps.projections.Miller();

		var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
		polygonSeries.useGeodata = true;
	},

	beforeDestroy() {
		if (this.map) {
			this.map.dispose();
		}
	},
};
</script>

<style scoped lang="scss">
.world-map {
	height: 600px;
	width: 100%;
	margin: 0 auto;
}
</style>
