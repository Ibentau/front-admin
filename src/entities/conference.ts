export interface Conference {
  event_start: string;
  event_end: string;
  address: string;
  talks: Speak[];
}

export interface Speak {
  title: string;
  speakers: string[];
  start: string;
  end: string;
  location: string;
  article_url: string;
}

export interface NameAndColor {
  name: string;
  color: string;
}
