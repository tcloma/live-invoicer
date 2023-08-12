<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
    console.log(data.baskets)
</script>

<div class="flex gap-4">
	{#each data.baskets as basket}
		<div
			class="flex flex-col gap-4 justify-center items-center p-4 text-black bg-white rounded-md shadow-md"
		>
			<p class="text-xl font-bold">{basket.ig_handle}</p>
            {#each basket.expand.items as item}
                <div>
                    {item.name}
                </div>
            {/each}
		</div>
	{/each}
</div>
