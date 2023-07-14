<svelte:head>
  <title>Quack</title>
</svelte:head>

<script>
  import Loader from "$lib/components/Loader.svelte";
  import Quack from "$lib/components/Quack.svelte";
  import QuackButton from "$lib/components/QuackButton.svelte";
  import { updateViewportHeightVariable } from "$lib/utils/viewport";
  import { onMount } from "svelte";
  
  /** @type { import('$lib/types').Quack } */
  let quack;
  let loading = false;
  const fetchQuack = async () => {
    loading = true;

    const res = await fetch("/api/quack");
    quack = await res.json();

    loading = false;
  };

  onMount(() => {
    fetchQuack();
    updateViewportHeightVariable();
  });
</script>

<main>
  <div class="quack-content">
    { #if loading || !quack }
      <Loader />
    { :else }
      <Quack { quack } />
    { /if }
    <QuackButton on:click={ fetchQuack } />
  </div>

  <div class="attribution">
    <span>Source code on <a href="https://github.com/petterskogh/quack">GitHub</a></span>
    <span>Inspirational quotes provided by <a href="https://zenquotes.io/">ZenQuotes API</a></span>
    <span>Inspirational ducks provided by <a href="https://random-d.uk/">Duck API</a></span>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .quack-content {
      display: grid;
      grid-template-rows: 1fr min-content;
      gap: var(--spacing-m);

      height: var(--vh);
      width: 100%;
      max-width: 500px;
      padding: var(--spacing-m);

      :global(.loader) {
        justify-self: center;
        align-self: flex-start;

        margin-top: var(--spacing-m);
      }

      :global(button) {
        justify-self: center;
        align-self: flex-end;
      }
    }

    .attribution {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      margin-bottom: var(--spacing-m);

      font-family: var(--font-family-sans);
      text-align: center;

      color: #fff;

      a {
        color: var(--button-color);
      }
    }
  }
</style>