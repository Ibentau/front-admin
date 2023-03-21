<script>
  // @ts-nocheck

  import Step from "$lib/Step.svelte";
  import Download from "$lib/Download.svelte";
</script>

<div class="flex flex-wrap h-screen justify-center content-center">
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold m-4">Finished!</h1>
    <span class="m-4 text-xl">
      That's it, you can download this config file to deploy your Chatbot.
    </span>
    <Download />
    <p class="mt-8 text-xl">
      If you don't know how to use it, follow this <a
        class="underline "
        href="/tutorial">tutorial</a
      >.
    </p>
  </div>

  <div>
    <Step currentstep={3} />
  </div>
</div>
