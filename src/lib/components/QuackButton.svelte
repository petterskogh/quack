<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<button on:click={ () => dispatch('click') }>
  🦆 Quack
</button>

<style lang="scss">
  button {
    padding: var(--spacing-s) var(--spacing-m);
    width: 100%;

    text-decoration: none;
    text-align: center;
    font-family: var(--font-family-sans-serif);
    font-size: large;
    
    background-color: #71f375;
    color: black;
    border: none;
    border-radius: 1rem;

    cursor: pointer;
  }
</style>