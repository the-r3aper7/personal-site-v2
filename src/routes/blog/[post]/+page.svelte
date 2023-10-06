<script>
  import "$lib/styles/blog/code-block.css"
  import "$lib/styles/blog/blog.css"
	import BlogHero from "$lib/components/blog-components/BlogHero.svelte";
	import { onMount } from "svelte";
	import Footer from "$lib/components/footer/Footer.svelte";
  export let data;

  onMount(() => {
    const codeBlocks = document.querySelectorAll("pre")

    
    codeBlocks.forEach((codeBlock) => {
      const copyButton = document.createElement("span")
      copyButton.innerText = "Copy"
      copyButton.classList.add('copy-button')

      copyButton.addEventListener("click", (ev) => {
        // @ts-ignore
        navigator.clipboard.writeText(ev.target.offsetParent.firstChild.innerText)
      })
      
      codeBlock.classList.add('relative')
      
      codeBlock.appendChild(
       copyButton 
      )
    })
  })
</script>


<section class="blog">
  <BlogHero {...data.post} />

  {@html data.post.content}
</section>

