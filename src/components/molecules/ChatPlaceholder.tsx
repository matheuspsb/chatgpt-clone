import { IconSunTwentyFour, IconThunderbolt, IconWarning } from "../icons";

type Props = {
  onSend: (message: string) => void;
};

export const ChatPlaceholder = ({ onSend }: Props) => {
  const handleClickExample = (message: string) => {
    onSend(message);
  };

  return (
    <div className="m-5">
      <h3 className="text-4xl font-bold text-center my-8 text-white">
        CHATGPT
      </h3>

      <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 mt-16 md:max-w-4xl">
        <div>
          <div className="flex justify-center items-center text-lg mb-3 text-white">
            <IconSunTwentyFour width={24} height={24} className="mr-3" />
            Examples
          </div>
          <div
            onClick={() =>
              handleClickExample("Explain quantum computing in simple terms")
            }
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3 cursor-pointer hover:bg-gray-600/50"
          >
            "Explain quantum computing in simple terms"
          </div>

          <div
            onClick={() =>
              handleClickExample(
                "Got any creative ideas for a 10 years old's birthday?"
              )
            }
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3 cursor-pointer hover:bg-gray-600/50"
          >
            "Got any creative ideas for a 10 years old's birthday?"
          </div>

          <div
            onClick={() =>
              handleClickExample("How do I make an HTTP request in Javascript?")
            }
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3 cursor-pointer hover:bg-gray-600/50"
          >
            "How do I make an HTTP request in Javascript?"
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-lg mb-3 text-white">
            <IconThunderbolt width={24} height={24} className="mr-3" />
            Capabilities
          </div>
          <div
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3"
          >
            Remembers what user said earlier in the conversation
          </div>
          <div
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3"
          >
            Allows user to provide follow-up corrections
          </div>
          <div
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3"
          >
            Trained to decline inappropriate requests
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-lg mb-3 text-white">
            <IconWarning width={24} height={24} className="mr-3" />
            Limitations
          </div>
          <div
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3"
          >
            May occasionally generate incorrect information
          </div>
          <div
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3"
          >
            May occasionally produce harmful instructions or biased content
          </div>
          <div
            className="bg-white/5 rounded text-center text-sm text-white
          mb-3 p-3"
          >
            Limited knowledge of world and events after 2021
          </div>
        </div>
      </div>
    </div>
  );
};
