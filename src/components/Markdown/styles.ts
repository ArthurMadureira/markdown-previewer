import styled from "styled-components";

export const MarkdownContainer = styled.div`
  height: 90vh;
  position: relative;
  textarea {
    width: 100%;
    height: 100%;
    background: transparent;
    padding-right: 3rem;

    resize: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -1rem;
    right: 0;
    width: 1px;
    background: rgba(168,162,158, .4);
    height: 100vh;
    margin-right: 1rem;
  }
`

export const MarkdownHeader = styled.header`
  text-align: left;
  width: 100%;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
  }
`