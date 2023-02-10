<script>
  import Step from "$lib/Step.svelte";
  let name = "";
  let event_start = "";
  let event_end = "";
  let color = "#FFFFFF";
  let address = "";

  function updateJSON() {
    // Initialize JSON
    let yourData = {
      Chatbot_name: name,
      Theme: color,
      event_start: event_start,
      event_end: event_end,
      adress: address,
      talks: [],
    };
    // Save JSON
    localStorage.setItem("data", JSON.stringify(yourData));
  }
</script>

<div class="flex flex-wrap h-screen justify-center content-center ">
  <div class="flex flex-col ">
    <div class="text-5xl font-bold">Chatbot creation</div>

    <div class="form-control w-full mt-2">
      <label for="input" class="label">
        <span class="label-text">Chatbot name</span>
      </label>
      <input
        placeholder="Jean"
        class="input input-bordered w-full"
        bind:value={name}
      />
    </div>
    <div class="form-control w-full mt-2">
      <label for="input" class="label">
        <span class="label-text">Event start date</span>
      </label>
      <input
        type="date"
        placeholder="02/01/2023"
        class="input input-bordered w-full"
        bind:value={event_start}
      />
    </div>
    <div class="form-control w-full mt-2">
      <label for="input" class="label">
        <span class="label-text">Event end date</span>
      </label>
      <input
        type="date"
        class="input input-bordered w-full"
        bind:value={event_end}
      />
    </div>

    <div class="form-control w-full mt-2">
      <label for="input" class="label">
        <span class="label-text">Address</span>
      </label>
      <input
        placeholder="263 Av. Général Leclerc, 35042 Rennes"
        class="input input-bordered w-full"
        bind:value={address}
      />
    </div>

    <div class="mt-2">
      <label class="flex items-center">
        Theme color :
        <input type="color" bind:value={color} class="invisible w-0 h-0 " />
        <span
          class="rounded-full w-8 h-8 border-gray-500 border inline-block mx-4 "
          style="background-color: {color};"
        />
      </label>
    </div>

    <button
      class="btn mt-8"
      on:click={() => (window.location.href = "/creationChatbot/infos")}
      on:click={updateJSON}>Next</button
    >
  </div>
  <div class="m-12">
    <Step />
  </div>
</div>
