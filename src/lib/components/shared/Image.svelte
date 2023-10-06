<script lang="ts">
  export let src: string;
  export let alt: string;
  export let width: string = '';
  export let height: string = '';
  export let className: string = '';
</script>

<img {src} {alt} {width} {height} class={className} loading="lazy" decoding="async"/>