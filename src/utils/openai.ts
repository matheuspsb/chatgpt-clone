import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { ChatMessage } from "../types/ChatMessage";

const config = new Configuration({
  apiKey: process.env.REACT_APP_PUBLIC_OPENAI_API_KEY
});

const api = new OpenAIApi(config);

export const openai = {
  generate: async (messages: ChatCompletionRequestMessage[]) => {
    const response = await api.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.6,
      messages
    });

    console.log(response);
  },
  translateMessages: (messages: ChatMessage[]) => {
    let reqMessages: ChatCompletionRequestMessage[] = [];

    for(let i in messages) {
      reqMessages.push({
        role: messages[i].author === 'me' ? 'user' : 'assistant',
        content: messages[i].body
      })
    }
    
    return reqMessages;
  }
}