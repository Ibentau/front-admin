<div class="flex flex-col justify-center items-center h-screen w-1/2 mx-auto">
  <h1 class="text-4xl font-bold m-4">Create your Chatbot</h1>
  <span
    >Ibentau is a chatbot that can be integrated into the website of a
    technology conference. It is capable of answering questions from
    participants such as the schedule, accommodation or how to submit an
    article.</span
  >
  <span>
    <button
      on:click={() => (window.location.href = "/creationChatbot")}
      class="btn text-2xl m-4">Create your Chatbot</button
    >

    <span>OR</span>
    <button
      on:click={() => (window.location.href = "/loadChatbot")}
      class="btn text-2xl m-4">Load your Chatbot</button
    >
  </span>
</div>
