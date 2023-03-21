<script lang="ts">
  import * as JSZip from "jszip";

  function downloadZip() {
    // Add the data.json file to the zip file
    const zip = new JSZip();
    let dataJSON = sessionStorage.getItem("data") as string;
    const blobJSON = new Blob([dataJSON], { type: "application/json" });
    zip.file("data.json", blobJSON);

    // Add the docker-compose.yml file to the zip file
    const dockercompose: string = `version: '3.0'
services:
  rasa_action:
    image: ghcr.io/ibentau/rasa-backend/actions:main
    volumes:
      - ./config.json:/app/config.json
  rasa_model:
    image: ghcr.io/ibentau/rasa-backend/rasa-model:main
    ports:
      - 5005:5005
    environment:
      - ACTION_SERVER=rasa_action
      - ACTION_PORT=5055`;
    zip.file("docker-compose.yml", dockercompose);

    zip
      .generateAsync({ type: "blob" })
      .then(function (content: Blob | MediaSource) {
        const link = document.createElement("a");
        link.download = "chatbot.zip";
        link.href = URL.createObjectURL(content);
        link.click();
      });
  }
</script>

<button class="btn" on:click={downloadZip}>Download the config file</button>
