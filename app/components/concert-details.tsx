'use client';
import { MusicConcertDetail } from "@/app/types/concerts";
import { useState } from "react";

type ConcertDetailProps = {
  concert: MusicConcertDetail;
};

export function ConcertDetail({ concert }: ConcertDetailProps) {
  const [ticketCount, setTicketCount] = useState(1);

  const handleBuyTickets = () => {
    // Handle the ticket purchase logic here
    console.log(`Buying ${ticketCount} tickets for ${concert.artist}`);
  };

  return (
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 my-4">
        <h2 className="text-2xl font-semibold mb-2">{concert.artist}</h2>
        <p className="text-gray-200 mb-1">Location: {concert.location}</p>
        <p className="text-gray-200 mb-1">Date: {concert.date}</p>
        <p className="text-gray-200 mb-1">Available Tickets: {concert.availableTickets}</p>
        <p className="text-gray-200 mb-4">Ticket Price: ${concert.ticketPrice}</p>
        <form className="flex items-center space-x-4">
          <input
              type="number"
              min="1"
              max={concert.availableTickets}
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              className="w-20 p-2 rounded bg-gray-200 text-gray-800"
          />
          <button
              type="button"
              onClick={handleBuyTickets}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Buy
          </button>
        </form>
      </div>
  );
}


export function ConcertDetailSkeleton() {
  return (
      <div className="bg-gray-300 rounded-lg p-6 relative overflow-hidden animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50 animate-shimmer"></div>
        <div className="h-8 bg-gray-400 rounded mb-4"></div>
        <div className="h-6 bg-gray-400 rounded mb-2"></div>
        <div className="h-6 bg-gray-400 rounded mb-2"></div>
        <div className="h-6 bg-gray-400 rounded mb-2"></div>
        <div className="h-6 bg-gray-400 rounded mb-4"></div>
        <div className="h-10 bg-gray-400 rounded"></div>
      </div>
  );
}
