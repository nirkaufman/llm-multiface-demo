'use server';

import { streamUI } from 'ai/rsc';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import {getConcertDetail, searchMusicConcerts} from "@/app/lib/utils";

export async function submitUserMessage(input: string) {

  const ui = await streamUI({
    model: openai('gpt-4o'),
    system: 'you are a music concert booking assistant. call yourself: "The Dude".',
    prompt: input,
    text: async ({ content }) => <div>{content}</div>,
    tools: {
      searchConcerts: {
        description: 'search for a music concert in a specific location',
        parameters: z.object({
          location: z.string().describe('The location of the concert'),
          date: z.string().describe('The date of the concert'),
        }),
        generate: async function* ({ location }) {
          yield `Searching for concerts around ${location}...`;
          const results = await searchMusicConcerts(location);

          return (
              <div>
                  {results.map(result => (
                        <div key={result.id}>
                            <h2>{result.artist}</h2>
                            <p>{result.location}</p>
                        </div>
                    ))}
              </div>
          );
        },
      },
      getConcertDetails: {
        description: 'lookup and find details for a music concert by the artist name',
        parameters: z.object({
          artist: z.string().describe('The artist of the concert'),
        }),
        generate: async function* ({ artist }) {
          yield `Looking up details for ${artist} show ...`;
          const details = await getConcertDetail(artist);

          return (
              <div>
                <div>Artist: {details.artist}</div>
                <div>Location and Date: {details.location} at {details.date}</div>
                <div>available tickets: {details.availableTickets} for ${details.ticketPrice}</div>
          </div>
        );
        },
      },
    },
  });

  return ui.value;
}
