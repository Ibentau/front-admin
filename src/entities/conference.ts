export interface Conference {
  chatbot_name: string;
  theme: string;
  event_start: string;
  event_end: string;
  address: string;
  talks: Speak[];
}

export interface Speak {
  title: string;
  speaker: string;
  start: string;
  end: string;
}
