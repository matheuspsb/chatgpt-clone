import { ChatMessage } from "../types/ChatMessage";
import { IconChatGpt, IconUser } from "./icons";
import { useTypingEffect } from '../hooks/useTypingEffect';

type Props = {
  item: ChatMessage
}

export const ChatMessageItem = ({ item }: Props) => {
  const displayedText = useTypingEffect(item.body, item.author);

  return (
    <div className={`py-5 ${item.author === 'ai' && 'bg-gray-600/50'}`}>
      <div className="max-w-4xl m-auto flex">
        <div className={`w-10 h-10 flex justify-center items-center mx-4 rounded
        ${item.author === 'ai' ? 'bg-green-900' : 'bg-blue-900'}`}>
          {item.author === 'me' && <IconUser width={24} height={24} />}
          {item.author === 'ai' && <IconChatGpt width={40} height={40} />}
        </div>
        <div className="flex-1 text-base text-white whitespace-pre-wrap">
          {displayedText}
        </div>
      </div>
    </div>
  );
}