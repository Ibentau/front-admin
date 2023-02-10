export class Conference {
  Chatbot_name!: string;
  Theme!: string;
  event_start!: string;
  event_end!: string;
  adress!: string;
  talks!: Speak[];
}

export class Speak {
  title!: string;
  speaker!: string;
  date!: string;
  start!: string;
  end!: string;
}
