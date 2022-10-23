import { DownloadButton, HeaderContainer, Line } from "./styles";
import { DownloadSimple } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Mardown</h1>
        <Line />
        <input type="text" placeholder='README.md' />
      </div>

      <DownloadButton>
        <DownloadSimple size={22} />
        Download
      </DownloadButton>
    </HeaderContainer>
  )
}