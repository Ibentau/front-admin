<script lang="ts">
  import Step from "$lib/Step.svelte";
  import type { Speak } from "../../../entities/conference";

  // Initialize JSON
  let speakers: Speak[] = [];

  function newLine() {
    console.log(speakers);
    speakers.push({
      title: "",
      speaker: "",
      date: "",
      start: "",
      end: "",
    });
    // To update HTML display
    speakers = speakers;
  }

  function updateJSON() {
    // Get JSON
    let yourData = JSON.parse(localStorage.getItem("data") as string);

    // // Save JSON
    yourData.talks = [speakers];
    localStorage.setItem("data", JSON.stringify(yourData));
  }
  newLine();
</script>

<div class="flex flex-wrap h-screen justify-center content-center ">
  <div class="flex flex-col ">
    <div class="text-5xl font-bold">Chatbot creation</div>

    <div class="overflow-x-auto">
      <table class="table table-compact w-full mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Speaker</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th
              ><button class="btn btn-square btn-xs" on:click={newLine}>
                <i class="material-icons">&#xe145;</i></button
              >
            </th>
          </tr>
        </thead>
        <tbody>
          {#each speakers as row}
            <tr>
              <td>
                <input
                  placeholder="DevOps Show"
                  class="input input-bordered w-full"
                  bind:value={row.title}
                /></td
              >
              <td>
                <input
                  placeholder="Benoît Combemale"
                  class="input input-bordered w-full"
                  bind:value={row.speaker}
                /></td
              >
              <td
                ><input
                  type="date"
                  class="input input-bordered w-full"
                  bind:value={row.date}
                /></td
              >
              <td
                ><input
                  type="time"
                  class="input input-bordered w-full"
                  bind:value={row.start}
                /></td
              >
              <td
                ><input
                  type="time"
                  class="input input-bordered w-full"
                  bind:value={row.end}
                /></td
              >
              <td><i class="material-icons text-error">&#xe872;</i> </td>
            </tr>
          {/each}
        </tbody>
      </table>
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
