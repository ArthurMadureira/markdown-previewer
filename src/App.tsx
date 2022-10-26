import { Header } from "./components/Header";
import { Markdown } from "./components/Markdown";
import { Preview } from "./components/Preview";
import { GlobalStyle } from "./layout/global";

import './App.css'
import { useState } from "react";


export function App() {

  const [textareaValue, setTextareaValue] = useState('')

  const item = localStorage.getItem('@textarea-value')


  return (
    <div>
      <Header textareaValue={textareaValue} />
      <main className='main'>
        <Markdown textareaValue={textareaValue} setTextareaValue={setTextareaValue} item={item} />
        <Preview textareaValue={textareaValue} />
      </main>
      <GlobalStyle />
    </div>
  )
}


