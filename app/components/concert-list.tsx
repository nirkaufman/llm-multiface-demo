import {MusicConcert} from "@/app/types/concerts";

type ConcertListProps = {
  concerts: MusicConcert[];
}

export function ConcertList({ concerts }: ConcertListProps) {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {concerts.map((concert) => (
            <div
                key={concert.id}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{concert.artist}</h2>
              <p className="text-gray-200 mb-1">Location: {concert.location}</p>
              <p className="text-gray-200">Date: {concert.date}</p>
            </div>
        ))}
      </div>
  );
}


export function ConcertListSkeleton() {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
            <div
                key={index}
                className="bg-gray-300 rounded-lg p-6 animate-pulse relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50 animate-shimmer"></div>
              <div className="h-6 bg-gray-400 rounded mb-2"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded"></div>
            </div>
        ))}
      </div>
  );
}
