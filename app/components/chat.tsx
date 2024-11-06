'use client';
import {useState} from "react";
import {useActions, useUIState} from "ai/rsc";
import {AI} from "@/app/context/ai";

export function Chat() {
  const [input, setInput] = useState<string>('');
  const [conversation, setConversation] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput('');
    setConversation(currentConversation => [
      ...currentConversation,
      <div>{input}</div>,
    ]);
    const message = await submitUserMessage(input);
    setConversation(currentConversation => [...currentConversation, message]);
  };

  return (
      <div>
        <div>
          {conversation.map((message, i) => (
              <div key={i}>{message}</div>
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="w-full p-4 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
                className="p-4 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-red-600">
              Send
            </button>
          </form>
        </div>
      </div>
  );
}
