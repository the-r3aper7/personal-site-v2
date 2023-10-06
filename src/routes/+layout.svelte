<script>
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import '$lib/styles/app.css';
</script>

<Header />
<slot />
<Footer />
