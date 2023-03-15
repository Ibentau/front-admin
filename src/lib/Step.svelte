<script>
  export let currentstep = 1;
  export let stepOrientation = "vertical";
</script>

<ul class="steps steps-{stepOrientation}">
  <li class="step {currentstep >= 1 ? 'step-primary' : ''}">Create Chatbot</li>
  <li class="step {currentstep >= 2 ? 'step-primary' : ''}">Customs data</li>
  <li class="step {currentstep >= 3 ? 'step-primary' : ''}">Finish</li>
</ul>
