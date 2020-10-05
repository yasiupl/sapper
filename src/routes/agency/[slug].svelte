<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(
			`https://ll.thespacedevs.com/2.0.0/agencies/${
				parseInt(params.slug) ? "" : "?mode=detailed&search="
			}${params.slug}`
		);
		const data = await res.json();

		if (res.status === 200) {
			return { agency: parseInt(params.slug) ? data : data.results[0] };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Info from "../../components/cards/Info.svelte";
	export let agency;
	export let chips = [
		{
			name: agency.country_code,
			img: agency.nation_url,
		},
		{name: `Founded ${agency.founding_year}`},
		{name: agency.administrator},
	];
</script>

<style>
</style>

<svelte:head>
	<title>{agency.name}</title>
</svelte:head>

<Info
	title={agency.name}
	icon={agency.logo_url}
	description={agency.description}
	{chips} />
