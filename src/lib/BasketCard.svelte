<script lang="ts">
	import type { BasketsResponse, ItemsResponse } from '../pocketbase-types';

	export let basket: BasketsResponse;
</script>

<div class="p-4 bg-white card">
	<p class="text-2xl font-bold card-header">{basket.ig_handle}</p>
	<div class="flex flex-col justify-center items-center">
		{#each basket.expand?.items as item}
			<div>
				{item.name}
			</div>
		{/each}
	</div>
</div>
