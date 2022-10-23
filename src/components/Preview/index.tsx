import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm'

import { PreviewContainer, PreviewHeader } from "./styles";

interface PreviewProps {
  textareaValue: string
}

export function Preview({ textareaValue }: PreviewProps) {

  return (
    <PreviewContainer>
      <PreviewHeader>
        <h2>Preview</h2>
      </PreviewHeader>

      <ReactMarkdown className='previewer' remarkPlugins={[remarkGfm]}>{textareaValue}</ReactMarkdown>
    </PreviewContainer>
  )
}

