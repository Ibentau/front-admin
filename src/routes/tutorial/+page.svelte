<script lang="ts">
  const NameAndColor = JSON.parse(localStorage.getItem("name&color") as string);
</script>

<div class="flex flex-col justify-center  h-screen w-1/2 mx-auto">
  <h1 class="text-4xl self-center font-bold m-4">Tutorial</h1>

  <div>
    <ol class="list-decimal">
      <li>
        Add the following script and link tag to the head of your HTML file:
      </li>
      <pre
        class="mt-2"
        style="
      background-color: #f4f4f4;
      padding: 5px;
      font-size: 14px;
      border-left: 3px solid #ccc;
      font-family: monospace;
      white-space: pre-wrap;"><code
          >&lt;script src="/path/to/chatbot-client.js"&gt;&lt;/script&gt;
      &lt;link rel="stylesheet" href="/path/to/chatbot-client.css"&gt;
      </code></pre>

      <li>Add the following script tag at the end of your HTML file:</li>
      <pre
        class="mt-2"
        style="
      background-color: #f4f4f4;
      padding: 5px;
      font-size: 14px;
      border-left: 3px solid #ccc;
      font-family: monospace;
      white-space: pre-wrap;"><code
          >&lt;script&gt;
          var chatbot = new ChatBot(&#123;
              target: document.body,
              props: &#123;
                  botName: '{NameAndColor.name}',
                  mainColor = "{NameAndColor.color}",
                  endpoint = "http://127.0.0.1:5005/webhooks/rest/webhook",
                  botAvatar = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2";,
                  &#125;,
                  &#125;);
      &lt;/script&gt;
      </code></pre>
    </ol>
  </div>
</div>
