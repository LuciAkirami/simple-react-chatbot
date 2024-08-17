import { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { role: "user", content: "Hello" },
    { role: "assistant", content: "I don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelings" },
    { role: "user", content: "Who am I" },
    { role: "assistant", content: "You are lucifer" },
    { role: "user", content: "Hello" },
    { role: "assistant", content: "I don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelings" },
    { role: "user", content: "Who am I" },
    { role: "assistant", content: "You are lucifer" },
    { role: "user", content: "Hello" },
    { role: "assistant", content: "I don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelings" },
    // { role: "user", content: "Who am I" },
    // { role: "assistant", content: "You are lucifer" },
    // { role: "user", content: "Hello" },
    // { role: "assistant", content: "I don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelingsI don't have any feelings" },
    // { role: "user", content: "Who am I" },
    // { role: "assistant", content: "You are lucifer" },
  ]);

  return (
    <>
    <div className='flex flex-col justify-between w-full h-screen bg-gray-100'>
      <div className='flex flex-col  items-center overflow-y-auto'>
        <div className='flex flex-col flex-grow w-full max-w-3xl mx-auto mt-2 px-2'>
          {messages.map((msg, index) => (
            <div
              key={index} // Use index for efficient key assignment
              className={`mb-4 px-2 py-3 rounded-lg
                ${msg.role === "user" ? "text-right bg-green-200 text-gray-800 self-end" : "text-left bg-blue-200 text-gray-800"}`
              }
            >
              {msg.content}
            </div>
          ))}
        </div>
      </div>
      {/* use  border-t-2 border-gray-300 p-4 to get a border*/}
      <div className='bottom-0 left-0 right-0 flex justify-center pb-4 mx-2'>
        <div className='flex w-full max-w-3xl mx-auto justify-center gap-2 bg-black p-3 rounded-lg'>
          <input type="text" className='bg-gray-200 text-gray-600 rounded-md py-2 px-4 border-2 border-gray-300 shadow-sm flex-grow' />
          <button className='bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 shadow-md'>Send</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;