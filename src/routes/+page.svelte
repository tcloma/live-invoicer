<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data.sales);
</script>

{#each data.sales as sale}
	<div class="flex flex-col gap-4 justify-center items-center p-4 bg-white rounded-md shadow-md">
		<p>Date: {sale.sale_date}</p>
		<p>ID: {sale.id}</p>
		<a href={`/sales/${sale.id}`} class="p-2 w-full font-bold text-center text-white bg-black rounded-md">
			Goto
		</a>
	</div>
{/each}
