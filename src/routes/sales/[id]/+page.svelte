<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.baskets);
</script>

<div class="flex gap-4">
	{#each data.baskets as basket}
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
	{/each}
</div>
