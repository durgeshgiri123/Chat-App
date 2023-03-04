import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="bee74528-83e6-428d-98a4-dea5616938fc"
        userName="Durgeshgiri"
        userSecret="Durgesh@123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;