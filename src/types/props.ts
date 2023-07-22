export interface EventData {
    title: string;
    image: string;
    date: string;
    location: string;
    id: string;
  }

export interface BtnProps{
  link:string,
  children: React.ReactNode;
}