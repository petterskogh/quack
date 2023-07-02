<script>
  import Quack from "../components/Quack.svelte";
  export let data;
</script>

<main>
  <Quack quack="{data}"></Quack>
  <button>
    <a href="/+">🦆 Quack</a>
  </button>
</main>

<div>
  <span>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></span>
</div>
