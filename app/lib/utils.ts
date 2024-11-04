/*
  functions that return mock data.
  in real life these functions would probably fetch data from an API
 */

import {MusicConcert, MusicConcertDetail} from "@/app/types/concerts";

export function searchMusicConcerts(location: string): Promise<MusicConcert[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          artist: 'The Beatles',
          location: 'Liverpool',
          date: new Date('1962-08-17').toDateString(),
        },
        {
          id: 2,
          artist: 'The Rolling Stones',
          location: 'London',
          date: new Date('1962-07-12').toDateString(),
        },
        {
          id: 3,
          artist: 'The Who',
          location: 'London',
          date: new Date('1964-12-03').toDateString(),
        },
        {
          id: 4,
          artist: 'The Kinks',
          location: 'London',
          date: new Date('1964-12-03').toDateString(),
        },
        {
          id: 5,
          artist: 'The Animals',
          location: 'Newcastle',
          date: new Date('1964-12-03').toDateString(),
        },
      ]);
    }, 1000);
  });
}


export function getConcertDetail(artist: string): Promise<MusicConcertDetail> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        artist,
        location: 'Liverpool',
        date: new Date('1962-08-17').toDateString(),
        availableTickets: 100,
        ticketPrice: 50,
      });
    }, 1000);
  });
}

// will return the ticket details: artist, location, date, price
export function buyTickets(artist: string, quantity: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        artist,
        quantity,
        location: 'Liverpool',
        date: new Date('1962-08-17').toDateString(),
        ticketPrice: 50,
      });
    }, 1000);
  });
}


