<script>
  /** @type {import('$lib/types').Quack} */
  export let quack;
  const { quote, author, image } = quack;
</script>

<img src="{image}" alt="">
<p>{ quote }</p>
<span>- { author }</span>