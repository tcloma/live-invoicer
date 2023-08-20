<script lang="ts">
	import type { SalesResponse } from '../pocketbase-types';
	import { formatDate } from '../utils/dateFormat';

	export let sale: SalesResponse;
	export let isActive: boolean;
</script>

{#if isActive}
	<a class="btn variant-filled-primary" href={`/sales/${sale.id}`}>
		{formatDate(sale.sale_date)}
	</a>
{:else}
	<a class="btn" href={`/sales/${sale.id}`}>
		{formatDate(sale.sale_date)}
	</a>
{/if}
