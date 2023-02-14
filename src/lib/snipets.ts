import type { NameAndColor } from "../entities/conference";

export const code1 = `<script src="/path/to/chatbot-client.js"></script>\n<link rel="stylesheet" href="/path/to/chatbot-client.css">`;
export function code2(NameAndColor: NameAndColor): string {
  return `<script>
	var chatbot = new ChatBot({
		target: document.body,
		props: {
			botName: '${NameAndColor.name}',
			mainColor: '${NameAndColor.color}',
			botAvatar: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2',
			endpoint: 'http://127.0.0.1:5005/webhooks/rest/webhook',
		},
	});
	</script>`;
}
