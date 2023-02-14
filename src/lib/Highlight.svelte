<script lang="ts">
  import { HighlightSvelte } from "svelte-highlight";

  import github from "svelte-highlight/styles/github";
  export let code: string;
</script>

<svelte:head>
  {@html github}
</svelte:head>

<HighlightSvelte {code} />
