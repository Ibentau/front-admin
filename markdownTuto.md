# Tutorial

1. Add the following script and link tag to the head of your HTML file:

```
<script src="/path/to/chatbot-client.js"></script>
<link rel="stylesheet" href="/path/to/chatbot-client.css">
```

2. Add the following script tag at the end of your HTML file:

```
<script>
	var chatbot = new ChatBot({
		target: document.body,
		props: {
			botName: '',
			mainColor: '#FFFFFF',
			botAvatar: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2',
			endpoint: 'http://127.0.0.1:5005/webhooks/rest/webhook',
		},
	});
```
