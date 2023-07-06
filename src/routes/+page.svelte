<script>
  import Loader from "$lib/components/Loader.svelte";
  import Quack from "$lib/components/Quack.svelte";
  import QuackButton from "$lib/components/QuackButton.svelte";
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

  onMount(fetchQuack);
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
    <span>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></span>
    <span>Inspirational ducks provided by <a href="https://random-d.uk/" target="_blank">Duck API</a></span>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .quack-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      min-height: 100vh;
      width: 100%;
      max-width: 600px;
      padding: var(--spacing-m);
    }

    .attribution {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;

      margin-bottom: var(--spacing-m);

      text-align: center;

      color: #fff;
    }
  }
</style>