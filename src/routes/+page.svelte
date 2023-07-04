<script>
  import Quack from "../components/Quack.svelte";
  import QuackButton from "../components/QuackButton.svelte";
  export let data;
</script>

<main>
  <Quack quack="{data}"></Quack>

  <QuackButton></QuackButton>

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
    gap: var(--spacing-m);

    width: 100%;
    height: 100vh;
    padding: 2rem;

    &, * {
      box-sizing: border-box;
    }

    .attribution {
      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;
      
      margin: 0 auto;

      color: #fff;
    }
  }
</style>