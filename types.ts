export type Event = {
  id: string;
  title: string;
  description?: string;
  location: string;
  date: string;
  image: string;
  imageAlt?: string;
  isFeatured?: boolean;
};

export type Comment = {
  email: string;
  name: string;
  text: string;
  eventId?: string;
};
