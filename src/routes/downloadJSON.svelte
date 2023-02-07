<script>
  function downloadJSON() {
    const data = { name: "ChatGPT", language: "JavaScript" };
    const dataJSON = JSON.stringify(data);
    const blob = new Blob([dataJSON], { type: "application/json" });
    const link = document.createElement("a");
    link.download = "data.json";
    link.href = URL.createObjectURL(blob);
    link.click();
  }
</script>

<button class="btn" on:click={downloadJSON}>Télécharger le fichier .json</button
>
