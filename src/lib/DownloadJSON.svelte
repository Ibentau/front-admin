<script lang="ts">
  function downloadJSON() {
    let dataJSON = sessionStorage.getItem("data") as string;
    const blob = new Blob([dataJSON], { type: "application/json" });
    const link = document.createElement("a");
    link.download = "data.json";
    link.href = URL.createObjectURL(blob);
    link.click();
  }
</script>

<button class="btn" on:click={downloadJSON}>Télécharger le fichier json</button>
