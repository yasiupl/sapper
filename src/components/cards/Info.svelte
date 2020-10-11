<script>
    export let icon = "/assets/settings.png";
    export let title = "New Info Card";
    export let chips = [];
    export let description = "";
    export let tabs = [];
</script>

<style lang="scss">
    @import "materialize-css/sass/materialize";

    img {
        object-fit: contain;
        object-position: 50% 50%;
        background-color: #fff;
    }

    .logo {
        display: unset;
        width: 128px;
        height: 128px;
    }
    #info {
        padding: 0;
        text-align: center;
        margin: 0;
        border-radius: unset;
        background-color: #1c2530;
        color: #fff;
    }
    .pinned {
        background-color: #1c2530;
    }
    .indicator {
        background-color: #fff;
    }
    .flow-text,
    a,
    h1 {
        font-weight: 100;
        color: #fff;
    }
    .tab a {
        color: #fff;
    }
    .chip {
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: #151b23;
        color: #fff;
    }
    .chip img {
        margin: 0 8px 0 -12px;
        object-fit: contain;
        background-color: #fff;
    }
    .chip svg {
        display: inline-block;
        object-fit: cover;
        float: left;
        height: 32px;
        width: 32px;
        border-radius: 50%;
    }
    @media (max-width: 600px) {
        .card-content {
            padding-top: 0;
            text-align: center !important;
        }
        .card-content .material-placeholder img {
            margin-top: 28px;
            width: 156px;
            height: 156px;
        }
        .card-content h1 {
            margin: 1.68rem 0;
        }
    }
    @media (min-width: 600px) {
        .card-content {
            margin: 0 auto;
            max-width: 1250px;
        }
        .card-content .card-text {
            max-width: 825px;
            margin-right: 6px;
            margin-left: 6px;
            text-align: left;
            display: inline-block;
        }

        .tabs {
            background-color: transparent;
        }

        .card-tabs {
            overflow: hidden;
        }
        .card-tabs .btn,
        .card-tabs .btn-large,
        .card-tabs .btn-small,
        .card-tabs a,
        .card-tabs button {
            margin-bottom: 1rem;
        }
        .card-tabs ul {
            margin-left: 16.66667%;
            width: 66.66667%;
        }
        .card-tabs .pinned {
            margin: 0;
            width: 100%;
            padding-left: 16.66667%;
            padding-right: 16.66667%;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 3px 1px -2px rgba(0, 0, 0, 0.12),
                0 1px 5px 0 rgba(0, 0, 0, 0.2);
        }
    }
</style>

<div id="info">
    <div class="card-content">
        <img class="circle logo materialboxed" src={icon} alt={title} />
        <h1 class="tooltipped" data-tooltip="">{title}</h1>
        <div id="chips">
            <a class="chip" href="javascript:window.history.back();">
                <i class="fas fa-arrow-alt-circle-left" />
                Go Back
            </a>
            {#each chips as chip}
                <a
                    class="chip {chip.tooltip ? 'tooltipped' : ''}"
                    href={chip.href}
                    data-tooltip={chip.tooltip ? chip.tooltip : ''}>
                    {#if chip.icon}<i class={chip.icon} />{/if}
                    {#if chip.img}<img src={chip.img} />{/if}
                    {chip.name}
                </a>
            {/each}
        </div>
        <p class="flow-text">{description}</p>
    </div>
    <div class="card-tabs">
        <ul class="tabs tabs-fixed-width" />
    </div>
</div>
