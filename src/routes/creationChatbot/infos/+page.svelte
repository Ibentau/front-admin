<script lang="ts">
  import { page } from "$app/stores";
  // import ICalParser, { type ICalJSON } from "ical-js-parser";
  import Step from "$lib/Step.svelte";
  import { onMount } from "svelte";
  import type { Speak } from "../../../entities/conference";
  // https://www.npmjs.com/package/ical?activeTab=readme
  import * as ical from "ical";

  // Initialize JSON
  let speakers: Speak[] = [];
  function newLine(
    _event: any,
    title: string = "",
    speaker: string = "",
    start: string = "",
    end: string = ""
  ) {
    speakers.push({
      title: title,
      speaker: speaker,
      start: start,
      end: end,
    });
    // To update HTML display
    speakers = speakers;
  }

  // delete a line
  function deleteLine(row: Speak) {
    const index = speakers.findIndex((speaker) => speaker === row);
    if (index > -1) {
      speakers.splice(index, 1);
    }
    // To update HTML display
    speakers = speakers;
  }

  function loadJSON() {
    let data = JSON.parse(sessionStorage.getItem("chatbotData") as string);
    speakers = data.talks[0];
  }

  function updateJSON() {
    // Get JSON
    let yourData = JSON.parse(sessionStorage.getItem("data") as string);

    // // Save JSON
    yourData.talks = speakers;
    sessionStorage.setItem("data", JSON.stringify(yourData));
  }

  onMount(() => {
    newLine();
    const loadChatbot = $page.url.searchParams.has("load");
    if (loadChatbot) {
      loadJSON();
    }
  });

  let icsData: string;
  let icsDataParsed;

  function handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        icsData = e.target?.result as string;
        sessionStorage.setItem("chatbotData", JSON.stringify(icsData));
        console.log(icsData);
        parseICS(icsData);
        loadICS();
      };
      reader.readAsText(file);
    }
  }

  function parseICS(icsData: string) {
    // Parse from iCal string to JSON
    icsDataParsed = ical.parseICS(icsData);
  }

  function loadICS() {
    for (let k in icsDataParsed) {
      if (icsDataParsed.hasOwnProperty(k)) {
        // ev represent an event with a BEGIN and an END
        var ev = icsDataParsed[k];
        if (icsDataParsed[k].type == "VEVENT") {
          const summary: string = ev.summary;
          const index = summary.lastIndexOf("-");
          const title = summary.substring(0, index);
          const speaker = summary.substring(index + 1);
          const start = dateParser(ev.start);
          const end = dateParser(ev.end);
          newLine(null, title, speaker, start, end);
        }
      }
    }
  }

  function dateParser(dateToParse: string) {
    const milliseconds = Date.parse(dateToParse);
    const dateObj = new Date(milliseconds);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}T${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  // Reset input file if the page is reloaded
  onMount(() => {
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  });
</script>

<div class="flex flex-wrap h-screen justify-center content-center ">
  <div class="flex flex-col ">
    <div class="text-5xl font-bold flex relative">
      Chatbot creation
      <div class="absolute right-0">
        <input
          type="file"
          accept=".ics"
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
    </div>

    <div class="overflow-x-auto">
      <table class="table table-compact w-full mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Speaker</th>
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
                  placeholder="Beno??t Combemale"
                  class="input input-bordered w-full"
                  bind:value={row.speaker}
                /></td
              >
              <td>
                <input
                  type="datetime-local"
                  class="input input-bordered w-full"
                  bind:value={row.start}
                  on:change={() => {
                    const start = new Date(row.start);
                    let end = new Date(row.end);

                    if (row.end === "") {
                      // Si end est vide, mettre ?? jour end avec start
                      row.end = row.start;
                    } else if (end < start) {
                      // Si la valeur de row.end est ant??rieure ?? celle de row.start, mettez ?? jour row.end avec row.start
                      row.end = row.start;
                    }
                  }}
                />
              </td>

              <td
                ><input
                  type="datetime-local"
                  class="input input-bordered w-full"
                  bind:value={row.end}
                /></td
              >
              <td>
                <button
                  class="btn btn-square btn-xs bg-transparent border-transparent"
                  on:click={() => deleteLine(row)}
                >
                  <i class="material-icons text-error">&#xe872;</i>
                </button>
              </td>
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
