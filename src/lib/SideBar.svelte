<script lang="ts">
	import { page } from '$app/stores';
	import type { SalesResponse } from '../pocketbase-types';
	import SideBarTile from './SideBarTile.svelte';

	export let sales: SalesResponse[];

	$: isOnPage = (value: string) => `/sales/${value}` === $page.url.pathname;
</script>

<nav
	class="flex flex-col-reverse justify-end p-2 h-full border-r-2 border-surface-100 bg-surface-50"
>
	{#each sales as sale}
		<SideBarTile isActive={isOnPage(sale.id)} {sale} />
	{/each}
	<hr class="my-2" />
	<button class="text-black btn variant-soft">New Sale</button>
</nav>
