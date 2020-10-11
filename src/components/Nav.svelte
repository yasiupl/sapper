<script>
	import Discord from "./Discord.svelte";
</script>

<style lang="scss">
    @import "materialize-css/sass/materialize";

	nav {
		background-color: #1c2530;
	}
	nav .sidenav-trigger {
		cursor: pointer;
	}
	nav .brand-logo {
		font-weight: 100;
		letter-spacing: 7px;
		white-space: nowrap;
	}
	.fas,
	.far {
		transform: scale(0.7);
	}
</style>

<nav id="nav_f" role="navigation">
	<a
		href="/#"
		data-target="slide-out"
		class="sidenav-trigger show-on-large"><i class="fas fa-bars" /></a>

	<a
		href="/"
		class="brand-logo"
		title="Rocket Watch is not over.">rocket.watch</a>
	<ul class="right hide-on-med-and-down">
		<li>
			<a class="tooltipped" href="/" data-tooltip="Homepage"><i
					class="fas fa-home" /></a>
		</li>
		<li><a href="/agency/SpaceX">SpaceX</a></li>
		<li><a href="/agency/124">ULA</a></li>
		<li><a href="/agency/115">Ariane</a></li>
		<li><a href="/agency/63">Roscosmos</a></li>
		<li>
			<a class="tooltipped" href="/agency" data-tooltip="More agencies"><i
					class="fas fa-chevron-circle-down" /></a>
		</li>
		<li>
			<a
				class="tooltipped"
				href="/location"
				data-tooltip="Launch Centers"><i class="fas fa-map" /></a>
		</li>
		<li>
			<a class="tooltipped" href="/rocket" data-tooltip="Rockets"><i
					class="fas fa-rocket" /></a>
		</li>
		<li>
			<a
				class="tooltipped"
				href="/future"
				data-tooltip="Future launches"><i
					class="far fa-calendar-alt" /></a>
		</li>
		<li>
			<a
				class="tooltipped"
				href="/history"
				data-tooltip="Historical launches"><i
					class="fas fa-history" /></a>
		</li>
		<li>
			<a class="tooltipped" href="/search" data-tooltip="Search"><i
					class="fas fa-search" /></a>
		</li>
		<li>
			<Discord />
		</li>
	</ul>
</nav>
