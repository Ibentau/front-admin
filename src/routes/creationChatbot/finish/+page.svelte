<script>
  // @ts-nocheck

  import Step from "$lib/Step.svelte";
  import DownloadJSON from "$lib/DownloadJSON.svelte";
</script>

<div class="flex flex-wrap h-screen justify-center content-center">
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold m-4">Finished!</h1>
    <span class="m-4">
      That's it, you can download your JSON config file to deploy your Chatbot
    </span>
    <DownloadJSON />
    <p class="mt-16 text-xl">
      If you don't know how to use this .json file, follow this <a
        class="underline "
        href="/tutorial">tutorial</a
      >
    </p>
  </div>

  <div class="m-12">
    <Step currentstep={3} />
  </div>
</div>
