import { DownloadButton, HeaderContainer, Line } from "./styles";
import { DownloadSimple } from 'phosphor-react'
import { useState } from "react";

interface HeaderProps {
  textareaValue: string
}

export function Header({ textareaValue }: HeaderProps) {

  const [fileName, setFileName] = useState('')

  function handleDownload(textareaValue: string) {
    try {
      return btoa(textareaValue)
    } catch {
      return ''
    }
  }

  return (
    <HeaderContainer>
      <div>
        <h1>Markdown</h1>
        <Line />
        <input type="text" placeholder='README.md' value={fileName} onChange={(e) => setFileName(e.target.value)} />
      </div>

      <DownloadButton href={`data:text/markdown;base64,${handleDownload(textareaValue)}`} download={!fileName.endsWith(`md`) ? `${fileName}.md` : `${fileName}`} target="_blank">
        <DownloadSimple size={22} />
        Download
      </DownloadButton>
    </HeaderContainer>
  )
}