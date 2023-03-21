# Tutorial

1. Add the following script and link tag to the head of your HTML file:

```
<script id="ibentau-chatbot-script" async type="module" crossorigin
        src="https://cdn.jsdelivr.net/gh/Ibentau/front-client@main/dist/ibentau.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ibentau/front-client@main/dist/style.css">
```

2. Add the following script tag at the end of your HTML file:

```
<script>
  document.querySelector('#ibentau-chatbot-script').addEventListener('load', function() {
    new ChatBot({
      target: document.body,
      props: {
        botName: 'botName',
		theme: '#FFFFFF',
      },
    });
  });
</script>
```
