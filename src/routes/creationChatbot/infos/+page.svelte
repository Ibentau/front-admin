<script>
    let speaker = "";
    let date = "";
    let address = "";
  </script>
  

  <div class="form-control w-full max-w-xs">
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
      <span class="label-text">address</span>
    </label>
    <input
      placeholder="263 Av. Général Leclerc, 35042 Rennes"
      class="input input-bordered w-full max-w-xs"
      bind:value={address}
    />
  </div>

  <br />
  <button class="btn">Next</button>
  
  <style>
    h1 {
      text-align: center;
      font-size: 48px;
      font-weight: bold;
    }
  </style>
  