export interface Conference {
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

export interface NameAndColor {
  name: string;
  color: string;
}
