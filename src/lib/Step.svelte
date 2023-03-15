<script>
  export let currentstep = 1;
  export let stepOrientation = "vertical";
  export let display = "block";
</script>

<ul class="steps steps-{stepOrientation} {display}">
  <li class="step  {currentstep >= 1 ? 'step-primary' : ''}">Create Chatbot</li>
  <li class="step  {currentstep >= 2 ? 'step-primary' : ''}">
    <p class="mx-4">Customs data</p>
  </li>
  <li class="step {currentstep >= 3 ? 'step-primary' : ''}">Finish</li>
</ul>
