<div class="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
  <h1 class="text-4xl font-bold m-4 text-center sm:text-left">Create your Chatbot</h1>
  <span class="text-l text-center sm:text-center">Ibentau is a chatbot that can be integrated into the website of a technology conference. It is capable of answering questions from participants such as the schedule, accommodation or how to submit an article.</span>
  <div class="flex flex-col sm:flex-row justify-center sm:justify-start items-center mt-4">
    <button on:click={() => (window.location.href = "/creationChatbot")} class="btn text-2xl m-4">Create your Chatbot</button>
    <span class="hidden sm:inline mx-4">OR</span>
    <button on:click={() => (window.location.href = "/loadChatbot")} class="btn text-2xl m-4">Load your Chatbot</button>
  </div>
  <style>
    @media screen and (max-width: 512px) {
      .flex-col {
        flex-direction: column;
      }
      .hidden {
        display: inline;
      }
      .mx-4 {
        margin: 0;
      }
    }
  </style>
</div>
