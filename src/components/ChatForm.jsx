import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory , generateBotResponse}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    //update chat history with user message
    setChatHistory(history =>[...history, { text: userMessage , role: "user" }]);

    setTimeout(() => {
        setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
        generateBotResponse([...chatHistory, { role: "user", text: ` using the details provided above ${userMessage}` }]);
    }, 600);
    
    // Optionally clear the input after submission
    inputRef.current.value = "";
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        ref={inputRef}
      />
      <button type="submit" className="material-symbols-rounded">
        keyboard_arrow_up
      </button>
    </form>
  );
};

export default ChatForm;
