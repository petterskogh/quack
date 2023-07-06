<script>
  /** @type {import('$lib/types').Quack} */
  export let quack;
  const { quote, author, image } = quack;
</script>

<div class="quack">
  <img src="{image}" alt="">
  <span>
    <p>{ quote }</p>
    <span>- { author }</span>
  </span>
</div>

<style lang="scss">
  .quack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);

    padding-bottom: var(--spacing-s);
    width: 100%;

    color: #fff;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;

      border-radius: var(--border-radius);
    }
  
    > span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--spacing-s);

      p {
        margin: 0;
        
        font-size: 2rem;
        font-style: italic;
      }
      
      > span {
        font-size: 1.5rem;
      }
    }
  }
</style>