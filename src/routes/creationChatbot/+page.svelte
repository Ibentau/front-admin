<script>
  let name = "";
  let event = "";
</script>

<h1>Chatbot creation</h1>

<div class="form-control w-full max-w-xs">
  <label for="input" class="label">
    <span class="label-text">Chatbot name</span>
  </label>
  <input
    placeholder="Jean"
    class="input input-bordered w-full max-w-xs"
    bind:value={name}
  />
</div>

<div class="form-control w-full max-w-xs">
  <label for="input" class="label">
    <span class="label-text">Type of event </span>
  </label>
  <input
    placeholder="Conference	"
    class="input input-bordered w-full max-w-xs"
    bind:value={event}
  />
</div>
<br />
<button class="btn">Confirm</button>

<style>
  h1 {
    text-align: center;
    font-size: 48px;
    font-weight: bold;
  }
</style>
