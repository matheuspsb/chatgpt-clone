import { IconChatGpt } from "./icons"

export const ChatMessageLoading = () => {
  return (
    <div className="py-5 bg-gray-600/50">
      <div className="max-w-4xl m-auto flex items-center">
        <div className="w-10 h-10 flex justify-center items-center mx-4 rounded bg-green-900">
          <IconChatGpt width={40} height={40} />
        </div>
        <div className="flex-1 text-base whitespace-pre-wrap">
          <div className="w-1 h-4 bg-slate-300 animate-blink">
          </div>
        </div>
      </div>
    </div>
  )
}