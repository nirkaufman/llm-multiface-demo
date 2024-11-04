import { createAI } from 'ai/rsc';
import {submitUserMessage} from "@/app/actions/concert-booking";
import {ReactNode} from "react";


export const AI = createAI<any[], ReactNode[]>({
  initialUIState: [],
  initialAIState: [],
  actions: {
    submitUserMessage,
  },
});
