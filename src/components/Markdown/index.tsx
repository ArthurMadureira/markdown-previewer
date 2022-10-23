import { MarkdownContainer, MarkdownHeader } from "./styles";

interface MarkdownProps {
  textareaValue: string
  setTextareaValue: (value: string) => void
}

export function Markdown({ textareaValue, setTextareaValue }: MarkdownProps) {
  return (
    <MarkdownContainer>
      <MarkdownHeader>
        <h2>Markdown</h2>
      </MarkdownHeader>

      <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} placeholder='Type your markdown code' />
    </MarkdownContainer>
  )
}