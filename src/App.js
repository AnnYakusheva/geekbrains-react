import './App.css';
import { Counter } from './components/Counter';
import { Message } from './components/Message'
import {useEffect, useState} from 'react';

function App() {

  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("")

  useEffect(() => {
    if (messages[messages.length-1]?.author === "HUMAN") {
      setMessages((prevMessages) => [...prevMessages, {text: "I am bot", author: "BOT"},])
    }
  }, [messages])

  const handleMessage = () => {
    setMessages((prevMessages) => [...prevMessages, {text: 'New message', author: "HUMAN"}])
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <Counter/>
      <form onSubmit={handleSubmit}>
      <button onClick={handleMessage}>Add message</button>
      {messages.map((message, i) => <Message key={i} text={message.text} />)}
      <input value={value} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default App;
