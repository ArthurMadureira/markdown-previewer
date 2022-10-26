import { useEffect } from "react";
import { MarkdownContainer, MarkdownHeader } from "./styles";

interface MarkdownProps {
  textareaValue: string
  setTextareaValue: (value: string) => void
  item: any
}

export function Markdown({ textareaValue, setTextareaValue, item }: MarkdownProps) {



  useEffect(() => {
    localStorage.setItem("@textarea-value", textareaValue)
  })


  return (
    <MarkdownContainer>
      <MarkdownHeader>
        <h2>Markdown</h2>
      </MarkdownHeader>

      <textarea onChange={(e) => setTextareaValue(e.target.value)} placeholder='Type your markdown code' >{item}</textarea>
    </MarkdownContainer>
  )
}