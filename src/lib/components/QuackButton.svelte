<button on:click>
  🦆
</button>

<style lang="scss">
  button {
    padding: var(--spacing-s);

    text-decoration: none;
    text-align: center;
    font-family: var(--font-family-sans-serif);
    font-size: 2.5rem;
    
    background-color: var(--button-color);
    color: var(--bg-color);
    border: none;
    border-radius: 1rem;
    transition: opacity 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }
</style>