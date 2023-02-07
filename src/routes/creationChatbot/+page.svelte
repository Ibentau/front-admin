<script>
  import Step from "./step.svelte";
  let name = "";
  let color = "#FFFFFF";
</script>

<div class="flex flex-wrap h-screen justify-center content-center ">
  <div class="flex flex-col ">
    <div class="text-5xl font-bold">Chatbot creation</div>

    <div class="form-control w-full max-w-xs mt-4">
      <label for="input" class="label">
        <span class="label-text">Chatbot name</span>
      </label>
      <input
        placeholder="Jean"
        class="input input-bordered w-full max-w-xs"
        bind:value={name}
      />
    </div>
    <div class="mt-4">
      <label>
        Theme color :
        <input type="color" bind:value={color} class="hidden rounded-full" />
        <span
          class="rounded-full w-8 h-8 border-gray-500 border inline-block"
          style="background-color: {color};"
        />
      </label>
    </div>
    <button class="btn mt-8">Confirm</button>
  </div>
  <div class="m-12">
    <Step />
  </div>
</div>
