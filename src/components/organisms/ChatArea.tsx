import { useEffect, useRef } from "react";
import { Chat } from "../../types/Chat";
import { ChatMessageLoading } from "../atoms";
import { ChatMessageItem, ChatPlaceholder } from "../molecules";

type Props = {
  chat: Chat | undefined;
  loading: boolean;
  onSend: (message: string) => void;
}

export const ChatArea = ({ chat, loading, onSend }: Props) => {
  const scrollArea =  useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollArea.current?.scrollTo(0, scrollArea.current?.scrollHeight);
  }, [loading, chat?.messages.length])

  return (
    <section ref={scrollArea} className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder onSend={onSend} />}
      {chat && chat.messages.map(item => (
        <ChatMessageItem 
          key={item.id}
          item={item}
        />
      ))}
      {loading && <ChatMessageLoading />}
    </section>
  )
}