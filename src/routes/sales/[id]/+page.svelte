<script lang="ts">
	import BasketCard from '$lib/BasketCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.baskets);
</script>

<div class="flex gap-4">
	{#each data.baskets as basket}
		<BasketCard {basket} />
	{/each}
</div>
