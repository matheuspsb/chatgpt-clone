import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatArea, Footer, Header, Sidebar } from "./components/organisms";
import { SidebarChatButton } from "./components/molecules";
import { Chat } from "./types/Chat";
import { openai } from "./utils/openai";

function App() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>("");
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if (AILoading) getAIResponse();
  }, [AILoading]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSideBar = () => setSidebarOpened(false);

  const getAIResponse = async () => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);
    if (chatIndex > -1) {
      const response = await openai.generate(
        openai.translateMessages(chatListClone[chatIndex].messages)
      );

      if (response) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: "ai",
          body: response,
        });
      }
    }
    setChatList(chatListClone);
    setAILoading(false);
  };

  const handleClearConversations = () => {
    if (AILoading) return;

    setChatActiveId("");
    setChatList([]);
  };

  const handleNewChat = () => {
    if (AILoading) return;

    setChatActiveId("");
    closeSideBar();
  };

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      // Creating new chat
      let newChatId = uuidv4();
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuidv4(), author: "me", body: message }],
        },
        ...chatList,
      ]);

      setChatActiveId(newChatId);
    } else {
      // Updating existing chat
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      );
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: "me",
        body: message,
      });
      setChatList(chatListClone);
    }

    setAILoading(true);
  };

  const handleSelectChat = (id: string) => {
    if (AILoading) return;

    let item = chatList.find((item) => item.id === id);
    if (item) setChatActiveId(item.id);
    closeSideBar();
  };

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex((item) => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId("");
  };

  const handleEditChat = (id: string, newTitle: string) => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex((item) => item.id === id);
    chatListClone[chatIndex].title = newTitle;
    setChatList(chatListClone);
  };

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSideBar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        {chatList.map((item) => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>

      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : "New chat"}
          newChatClick={handleNewChat}
        />

        <ChatArea
          chat={chatActive}
          loading={AILoading}
          onSend={handleSendMessage}
        />

        <Footer disabled={AILoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
}

export default App;
