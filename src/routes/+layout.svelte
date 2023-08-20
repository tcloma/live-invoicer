<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/Header.svelte';
	import SideBar from '$lib/SideBar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
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
	<main class="flex flex-col justify-center items-center w-full h-screen bg-surface-50">
		<!-- <h1 class="text-xl font-bold text-gray-700">Path: {$page.url.pathname}</h1> -->
		<slot />
	</main>
</AppShell>
