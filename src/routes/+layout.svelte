<script lang="ts">
	import Header from '$lib/Header.svelte';
	import SideBar from '$lib/SideBar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<SideBar sales={data.sales} />
	</svelte:fragment>
	<main class="flex flex-col p-4 w-full h-full bg-surface-50">
		<slot />
	</main>
</AppShell>
