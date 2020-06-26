<template>
	<div class="container">
		Hallo
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			data: null,
		};
	},
	methods: {},
	async created() {
		const res = await axios.get(
			'https://www.acronis.com/en-us/api/v1/price/?machine_name=acronis_backup&locale=en-us',
		);
		console.log(res);
		this.data = res.data;
	},
};
</script>

<style lang="scss" scoped></style>
