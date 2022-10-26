import { DownloadButton, HeaderContainer, Line } from "./styles";
import { DownloadSimple } from 'phosphor-react'

interface HeaderProps {
  textareaValue: string
}

export function Header({ textareaValue }: HeaderProps) {
  return (
    <HeaderContainer>
      <div>
        <h1>Markdown</h1>
        <Line />
        <input type="text" placeholder='README.md' />
      </div>

      <DownloadButton href={textareaValue + ".md"} download target="_blank">
        <DownloadSimple size={22} />
        Download
      </DownloadButton>
    </HeaderContainer>
  )
}