<script>
	import Discord from "./Discord.svelte";
</script>

<style lang="scss">
    @import "materialize-css/sass/materialize";

	
	.become-patron-button {
		display: inline-block;
		font-family: sans-serif;
		background: #f96854;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 3px;
		text-decoration: none;
		font-weight: 700;
		user-select: none;
		width: 100%;
	}
</style>

<footer class="container">
	<div class="row">
		<div class="col s12">
			<div class="card center-align">
				<a
					class="become-patron-button"
					role="button"
					href="https://www.patreon.com/bePatron?u=3533463">
					<img src="/assets/patreon.png" alt="patreon logo" />
				</a>
				<ins
					class="adsbygoogle"
					style="display:block"
					data-ad-client="ca-pub-2102294932376201"
					data-ad-slot="2430605979"
					data-ad-format="auto" />
				<script>
					(adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			</div>
		</div>
		<p>
			Made with 🖤 by
			<a href="https://yasiu.pl">yasiu.pl</a> | Data thanks to
			<a href="https://thespacedevs.com">Laucnh Library 2.0</a>
		</p>
	</div>
</footer>
