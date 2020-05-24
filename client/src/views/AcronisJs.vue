<template>
	<div class="container">
		<div class="sort">
			<h3 v-if="!isSorted">These dates seems very unsorted</h3>
			<h3 v-if="isSorted">Now that is better</h3>
			<div class="sort-buttons">
				<button @click="sort('asc')" class="asc">Sort ASC</button>
				<button @click="sort('desc')" class="desc">Sort DESC</button>
				<button @click="reset" class="original">Reset</button>
			</div>
			<div v-for="date in dates" :key="date.id" class="dates">
				<div class="date">{{ date.date }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dates: [
				{ id: 1, date: '10.01.2017' },
				{ id: 2, date: '05.11.2016' },
				{ id: 3, date: '12.13.2002' },
			],
			isSorted: false,
		};
	},
	methods: {
		sort(order) {
			this.dates.sort((a, b) => {
				let dateA = new Date(a.date),
					dateB = new Date(b.date);

				this.isSorted = true;

				return order === 'asc' ? dateA - dateB : dateB - dateA;
			});
		},
		reset() {
			this.dates = [
				{ id: 1, date: '10.01.2017' },
				{ id: 2, date: '05.11.2016' },
				{ id: 3, date: '12.13.2002' },
			];

			this.isSorted = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	padding: 100px;

	h3 {
		padding: 1rem;
	}

	button {
		padding: 0.5rem;
		margin: 0 0.5rem 1rem 0.5rem;
		border: none;
		border-radius: 2px;
		outline: none;
		cursor: pointer;
		color: white;

		&:hover {
			filter: brightness(80%);
		}

		&:active {
			filter: brightness(70%);
		}
	}

	.asc {
		background: green;
	}

	.desc {
		background: blue;
	}

	.original {
		background: brown;
	}

	.dates {
		padding: 0.5rem;
	}
}
</style>
