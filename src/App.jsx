
import { useState, useRef, useEffect } from "react";
import ChatBootIcon from "./components/ChatBotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { companyInfo } from "./companyInfo";

const App =() => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat : true ,
      role: "model",
      text: companyInfo
    }
  ]);
  const [showChatbot, setshowChatbot] = useState(false);

  const chatBodyRef = useRef();
    
  const generateBotResponse = async(history) => {

      history = history.map(({role , text}) => ({ role, parts: [{text}]}));
      
      const updateHistory =(text , isError = false) => {
        setChatHistory(prev => [...prev.filter(msg => msg.text !=="Thinking..."), { role: "model", text , isError}]);
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents : history })

      }

      try {

        const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
        const data = await response.json();


        if (!response.ok) {
          console.error("API Error:", data.error);
          throw new Error(data.error?.message || "Something went wrong");
        }
    
        const apiResponseText =data.candidates[0].content.parts[0].text.replace(/^\s*<p>|<\/p>\s*$/g, '').trim();
        updateHistory(apiResponseText);

      }catch (error) {
        updateHistory(error.message , true);
      }

  };

  // Scroll to the bottom of the chat body when a new message is added
  useEffect(() => {
    chatBodyRef.current.scrollTo({top : chatBodyRef .current.scrollHeight, behavior: "smooth"});
  } , [chatHistory]);



  return (
    <div className={`container ${ showChatbot ? "show-chatbot" : "" }`}>
        <button onClick={() => setshowChatbot(prev => !prev)} id="chatbot-toggler">
          <span className="material-symbols-rounded">
            mode_comment
          </span>
          <span className="material-symbols-rounded">
            close
          </span>
        </button>

      <div className="chatbot-popup">
        {/* Chat header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatBootIcon />
            <h2 className="logo-text">PolyBot</h2>
          </div>
          <button onClick={() => setshowChatbot(prev => !prev)} className="material-symbols-rounded">keyboard_arrow_down</button>
          
        </div>
        {/* Chat body */}
          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatBootIcon/>
              <p className="message-text">
                Hello! How can I help you today?
              </p>
            </div>

            {/* Render the chat history dynamically */}
            {chatHistory.map((message, index) => (
              <ChatMessage key={index} chat={message}/>

            ))}

          </div>   

        {/* Chat footer */}  
          <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory}  generateBotResponse={generateBotResponse}/>
          </div>
          
      </div>
    </div>
  );
}

export default App;