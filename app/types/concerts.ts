export interface MusicConcert {
  id: number;
  artist: string;
  location: string;
  date: string;
}

export interface MusicConcertDetail {
  artist: string;
  location: string;
  date: string;
  availableTickets: number;
  ticketPrice: number;
}
