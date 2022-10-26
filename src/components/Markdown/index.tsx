import { useEffect } from "react";
import { MarkdownContainer, MarkdownHeader } from "./styles";

interface MarkdownProps {
  textareaValue: string
  setTextareaValue: (value: string) => void
  item: any
}

export function Markdown({ textareaValue, setTextareaValue, item }: MarkdownProps) {


  function handleChange(e: any) {
    setTextareaValue(e.target.value)
    localStorage.setItem("@textarea-value", (e.target.value))

  }


  return (
    <MarkdownContainer>
      <MarkdownHeader>
        <h2>Markdown</h2>
      </MarkdownHeader>

      <textarea onChange={(e) => handleChange(e)} placeholder='Type your markdown code' >{item}</textarea>
    </MarkdownContainer>
  )
}