import { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

function App() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSideBar = () => setSidebarOpened(false);

  const handleClearConversations = () => {

  }

  const handleNewChat = () => {

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
      </section>
    </main>
  );
}

export default App;
