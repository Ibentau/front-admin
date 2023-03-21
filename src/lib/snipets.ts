import type { NameAndColor } from "../entities/conference";

export const code1 = `
<script id="ibentau-chatbot-script" async type="module" crossorigin
        src="https://cdn.jsdelivr.net/gh/Ibentau/front-client@main/dist/ibentau.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ibentau/front-client@main/dist/style.css">`;
export function coded2(NameAndColor: NameAndColor): string {
  return `<script>
  document.querySelector('#ibentau-chatbot-script').addEventListener('load', function() {
    new ChatBot({
      target: document.body,
      props: {
        botName: '${NameAndColor.name}',
        theme: '${NameAndColor.color}',
      },
    });
  });
</script>`;
}
