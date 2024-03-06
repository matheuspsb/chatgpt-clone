import { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';

function App() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSideBar = () => {
    setSidebarOpened(false);
  }

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
        <></>
      </Sidebar>

      <section className='flex flex-col w-full'>
        <button onClick={() => setSidebarOpened(true)}>Open sidebar</button>
      </section>
    </main>
  );
}

export default App;
