<script>
  /** @type {import('$lib/types').Quack} */
  export let quack;
  const { quote, author, image } = quack;
</script>

<div class="quack">
  <img src="{image}" alt="">
  <div>
    <p>{ quote }</p>
    <span class="author">- { author }</span>
  </div>
</div>

<style lang="scss">  
  .quack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);

    width: 100%;
    
    color: var(--foreground-color);
    overflow: scroll;

    /* Hide scrollbar */
    -ms-overflow-style: none;  /* Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      
      border-radius: var(--border-radius);
    }
    
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--spacing-s);

      font-family: var(--font-family);
      
      &:after {
        content: '';
        display: block;
  
        position: sticky;
        bottom: 0;
        
        height: 70px;
        width: 100%;
  
        background: linear-gradient(transparent, var(--bg-color));
      }

      p {
        margin: 0;
        
        font-size: 2rem;
        font-style: italic;
      }
      
      .author {
        font-size: 1.5rem;
      }
    }
  }
</style>