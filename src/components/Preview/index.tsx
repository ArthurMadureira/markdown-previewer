import ReactMarkdown from 'https://esm.sh/react-markdown@7?bundle'
import remarkGfm from 'https://cdn.skypack.dev/remark-gfm@3?dts'

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

