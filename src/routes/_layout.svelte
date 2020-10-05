<script>
	import Nav from "../components/Nav.svelte";
	import Sidenav from "../components/Sidenav.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<style>
</style>

<header class="navbar">
	<Nav />
	<Sidenav />
</header>

<main>
	<slot></slot>
</main>

<Footer />
