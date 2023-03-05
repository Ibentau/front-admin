<script lang="ts">
  import { onMount } from "svelte";
  import type { Conference } from "../../entities/conference";

  let isButtonDisabled = true;
  let chatbotData: Conference;

  function handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const contents = e.target?.result as string;
        chatbotData = JSON.parse(contents);
        localStorage.setItem("chatbotData", JSON.stringify(chatbotData));
        console.log(chatbotData);
      };
      reader.readAsText(file);
      isButtonDisabled = false;
    }
  }

  // Reset input file if the page is reloaded
  onMount(() => {
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
    isButtonDisabled = true;
  });
</script>

<div class="flex flex-col justify-center items-center h-screen w-1/2 mx-auto">
  <div class="block">
    <span>Import your Chatbot file config (data.json)</span>
    <input
      type="file"
      accept=".json"
      name="loadInput"
      class="mt-2 block w-full text-sm text-slate-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-sm file:font-semibold
  file:bg-violet-50 file:text-violet-700
  hover:file:bg-violet-100
  "
      on:change={handleFileInput}
    />
  </div>

  <button
    on:click={() => (window.location.href = `/creationChatbot?load=true`)}
    class="btn text-2xl m-4"
    disabled={isButtonDisabled}>Load your Chatbot</button
  >
</div>
