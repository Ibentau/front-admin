<script lang="ts">
  import Highlight from "$lib/Highlight.svelte";

  import { code1, code2 } from "$lib/snipets";
  import type { NameAndColor } from "../../entities/conference";
  const NameAndColor: NameAndColor = JSON.parse(
    sessionStorage.getItem("name&color") as string
  );
  const code3 = code2(NameAndColor);
</script>

<div class="flex flex-col justify-center  h-screen w-1/2 mx-auto">
  <h1 class="text-4xl self-center font-bold m-4">Tutorial</h1>
  <div>
    <ol class="list-decimal">
      <li>
        Add the following script and link tag to the head of your HTML file:
      </li>
      <Highlight code={code1} />

      <li>Add the following script tag at the end of your HTML file:</li>
      <Highlight code={code3} />
    </ol>
  </div>
</div>
