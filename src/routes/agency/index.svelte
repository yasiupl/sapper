<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`https://ll.thespacedevs.com/2.0.0/agencies/?mode=list`).then(r => r.json()).then(agencies => {
			return { agencies };
		});
	}
</script>

<script>
	export let agencies;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Agencies</title>
</svelte:head>


<ul>
	{#each agencies.results as agency}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='agency/{agency.id}'>{agency.name}</a></li>
	{/each}
</ul>