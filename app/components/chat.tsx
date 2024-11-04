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
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button>Send Message</button>
          </form>
        </div>
      </div>
  );
}
