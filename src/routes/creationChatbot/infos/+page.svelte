<script>
  import Step from "$lib/Step.svelte";
  let speaker = "";
  let date = "";
  let address = "";
</script>

<div class="flex flex-wrap h-screen justify-center content-center ">
  <div class="flex flex-col ">
    <div class="text-5xl font-bold">Chatbot creation</div>
    <div class="form-control w-full max-w-xs mt-4">
      <label for="input" class="label">
        <span class="label-text">Speaker name</span>
      </label>
      <input
        placeholder="Benoît Combemale"
        class="input input-bordered w-full max-w-xs"
        bind:value={speaker}
      />
    </div>
    <div class="form-control w-full max-w-xs">
      <label for="input" class="label">
        <span class="label-text">Date</span>
      </label>
      <input
        type="date"
        class="input input-bordered w-full max-w-xs"
        bind:value={date}
      />
    </div>

    <div class="form-control w-full max-w-xs">
      <label for="input" class="label">
        <span class="label-text">Address</span>
      </label>
      <input
        placeholder="263 Av. Général Leclerc, 35042 Rennes"
        class="input input-bordered w-full max-w-xs"
        bind:value={address}
      />
    </div>

    <br />
    <button class="btn">Next</button>
  </div>
  <div class="m-12">
    <Step currentstep={2} />
  </div>
</div>
