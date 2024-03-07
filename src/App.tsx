import { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ChatArea } from './components/ChatArea';
import { Chat } from './types/Chat';
import { Footer } from './components/Footer';

function App() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: 'Bla blu',
    messages: [
      {id: '99', author: 'me', body: 'Opa tudo bem?'},
      {id: '100', author: 'ai', body: 'Tudo ótimo, em que posso te ajudar?'},
    ]
  });
  const [AILoading, setAILoading] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSideBar = () => setSidebarOpened(false);

  const handleClearConversations = () => {

  }

  const handleNewChat = () => {

  }

  const handleSendMessage = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSideBar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>

      <section className='flex flex-col w-full'>

        <Header
          openSidebarClick={openSidebar}
          title={`Bla bla bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer 
          disabled={AILoading}
          onSendMessage={handleSendMessage}
        />
        

      </section>
    </main>
  );
}

export default App;
