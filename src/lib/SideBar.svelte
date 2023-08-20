<script lang="ts">
	import { page } from '$app/stores';
	import type { SalesResponse } from '../pocketbase-types';
	import { formatDate } from '../utils/dateFormat';

	export let sales: SalesResponse[];

	$: isOnPage = (value: string) => `/sales/${value}` === $page.url.pathname;
</script>

<nav class="flex flex-col h-full bg-surface-100">
	{#each sales as sale}
		<a class={`btn rounded-md ${isOnPage(sale.id) ? 'variant-filled' : ''}`} href={`/sales/${sale.id}`}>
			{formatDate(sale.sale_date)}
		</a>
	{/each}
</nav>
