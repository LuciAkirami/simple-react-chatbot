import { useEffect, useRef, useState } from "react";
import ollama from "ollama";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const goBottom = useRef(null);

  const handleInput = async () => {
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const response = await ollama.chat({
      model: "llama3.1",
      messages: [userMessage],
    });

    const botResponse = {
      role: "assistant",
      content: response.message.content,
    };
    setMessages((prev) => [...prev, botResponse]);
    setInput("");

    // console.log(response.message.content);
  };

  // we need to scroll down as soon as the response is generated
  // for this, we use the useEffect
  const scrollBottom = useEffect(() => {
    goBottom.current.scrollIntoView({
      behaviour: "smooth",
    });
    console.log("Scrolling");
  }, [messages]);

  return (
    <>
      {/* if you want to use an image existing in a div, set that image in the tailwind.config and use it with name bg-pack-train */}
      {/* The h-screen will make sure that all the components will be visible on the current viewing screen, thats the reason the input-button div
      is able to show on the screen. if you remove this, then the input-button will go down as messages come and you have to scroll down to access
      the input and the send button */}
      <div className="flex flex-col justify-between w-full h-screen backdrop-blur-lg">
        {/* overflow-y-auto will create a scrollbar when more messages come-in and fills more than the viewable screen */}
        <div className="flex flex-col  items-center overflow-y-auto">
          {/* here we kept max-w-3xl and for input max-w-4xl so that the messages container is always smaller than input+button combioned*/}
          {/* w-5/6 indicates it uses 5/6th of the max container flex-grow allow the components to use up space */}
          <div className="flex flex-col flex-grow w-5/6 max-w-3xl mx-auto mt-2 px-2">
            {messages.map((msg, index) => (
              <div
                key={index} // Use index for efficient key assignment
                className={`mb-4 px-6 py-4 rounded-3xl 
                ${
                  msg.role === "user"
                    ? // self-end will put the user message towards the right most
                      "text-right bg-white/40 backdrop-blur-lg text-white self-end border border-white/30"
                    : "text-left bg-blue-500/60 backdrop-blur-md text-white border border-blue-200/30"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div ref={goBottom} />
        </div>
        {/* use  border-t-2 border-gray-300 p-4 to get a border*/}
        <div className="bottom-0 left-0 right-0 flex justify-center pb-4 mx-2">
          <div className="flex w-11/12 max-w-4xl mx-auto justify-center gap-2 bg-gray-800 p-2 rounded-full">
            <input
              type="text"
              // here the flex grow will make the input box larger, to take up more space  in its parent div
              className="text-white py-2 px-4 shadow-sm flex-grow rounded-full bg-gray-800 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleInput()}
            />
            <button
              className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 shadow-md"
              onClick={handleInput}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
