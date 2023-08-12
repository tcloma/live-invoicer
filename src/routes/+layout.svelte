<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>

<main class="flex flex-col justify-center items-center w-full h-screen bg-neutral-300">
	<h1 class="text-5xl font-bold hover:text-red-300">{$page.url.pathname}</h1>
	<slot />
</main>
