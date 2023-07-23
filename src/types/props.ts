export interface EventData {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

export interface BtnProps {
  link: string | undefined;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface GetEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}
