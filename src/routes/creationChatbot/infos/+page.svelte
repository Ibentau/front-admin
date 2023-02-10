<script lang="ts">
  import Step from "$lib/Step.svelte";
  let speaker = "";
  let date = "";
  let start = "";
  let end = "";
  let title = "";

  function updateJSON() {
    // Initialize JSON
    let speakerData = {
      title: title,
      speaker: speaker,
      start: start,
      end: end,
      date: date,
    };

    // Get JSON
    let yourData = JSON.parse(localStorage.getItem("data") as string);

    // // Save JSON
    yourData.talks = [...yourData.talks, speakerData];
    localStorage.setItem("data", JSON.stringify(yourData));
  }
</script>

<div class="flex flex-wrap h-screen justify-center content-center ">
  <div class="flex flex-col ">
    <div class="text-5xl font-bold">Chatbot creation</div>
    <div class="form-control w-full mt-4">
      <label for="input" class="label">
        <span class="label-text">Title</span>
      </label>
      <input
        placeholder="Présentation de la théorie des cordes"
        class="input input-bordered w-full"
        bind:value={title}
      />
    </div>
    <div class="form-control w-full mt-4">
      <label for="input" class="label">
        <span class="label-text">Speaker name</span>
      </label>
      <input
        placeholder="Benoît Combemale"
        class="input input-bordered w-full"
        bind:value={speaker}
      />
    </div>
    <div class="form-control w-full mt-4">
      <label for="input" class="label">
        <span class="label-text">Date</span>
      </label>
      <input
        type="date"
        class="input input-bordered w-full"
        bind:value={date}
      />
    </div>
    <div class="form-control w-full mt-4">
      <label for="input" class="label">
        <span class="label-text">Start of the conference</span>
      </label>
      <input
        type="time"
        class="input input-bordered w-full"
        bind:value={start}
      />
    </div>
    <div class="form-control w-full mt-4">
      <label for="input" class="label">
        <span class="label-text">End of the conference</span>
      </label>
      <input type="time" class="input input-bordered w-full" bind:value={end} />
    </div>

    <button
      class="btn mt-4"
      on:click={() => (window.location.href = "/creationChatbot/finish")}
      on:click={updateJSON}>Next</button
    >
  </div>
  <div class="m-12">
    <Step currentstep={2} />
  </div>
</div>
