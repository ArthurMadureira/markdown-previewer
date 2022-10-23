import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  background: #262626;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  > div input {
    width: 6rem;
    background: transparent;
    border-radius: 8px;
    font-size: 0.8rem;
    background: #171717;
    padding: 1rem .6rem;

    ::placeholder {
      color: rgba(168,162,158, .8)
    }


    &:hover {
      filter: brightness(1.1);
    }
  }
`

export const Line = styled.div`
  width: 1px;
  background: rgba(168,162,158, .8);
  height: 30px;
`

export const DownloadButton = styled.a`
  width: 8.5rem;
  display: flex;
  align-items: flex-end;
  gap: .3rem;
  letter-spacing: 0.1rem;

  border-radius: 4px;
  background-color: rgba(249,115,22, .8);
  color: #f3f4f6;

  padding: 0.8rem;

  transition: filter .2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`