import Markdown from 'marked-react';

import { PreviewContainer, PreviewHeader } from "./styles";
import { MarkdownBody } from '../../layout/markdownStyles'
interface PreviewProps {
  textareaValue: string
}



export function Preview({ textareaValue }: PreviewProps) {

  return (
    <PreviewContainer>
      <PreviewHeader>
        <h2>Preview</h2>
      </PreviewHeader>

      <MarkdownBody>
        <div className="markdown-body">

          <Markdown value={textareaValue} />
        </div>
      </MarkdownBody>

    </PreviewContainer>
  )
}

