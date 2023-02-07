<script>
  export let currentstep = 1;
</script>

<ul class="steps steps-vertical">
  <li class="step {currentstep >= 1 ? 'step-primary' : ''}">Create Chatbot</li>
  <li class="step {currentstep >= 2 ? 'step-primary' : ''}">Customs data</li>
  <li class="step {currentstep >= 3 ? 'step-primary' : ''}">Finish</li>
</ul>
