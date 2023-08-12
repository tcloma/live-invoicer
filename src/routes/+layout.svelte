<script lang="ts">
	import { page } from '$app/stores';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../app.css';
</script>

<main class="flex flex-col justify-center items-center w-full h-screen bg-neutral-300">
	<h1 class="text-xl font-bold text-gray-700">Path: {$page.url.pathname}</h1>
	<slot />
</main>
