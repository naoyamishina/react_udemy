import { css } from "@emotion/react"; // インポート
import styled from "@emotion/styled";

const largeFont = css`
  font-size: 54px; `

const fontRed = css`
  color: red;
  ${largeFont}`

const Hello = styled.h2`
  color: ${props => (props.blue ? "blue" : "red")};
  `

/** @jsxImportSource @emotion/react */ // コメント追記 
const EmotionComponent = () => {
  return (<>
      <h2 css={css`color: red ;`} >
      Emotionのテスト</h2>
      <h2 css={[fontRed, largeFont]}>Hello, world!</h2>  
      <h2 css={[fontRed]}>Hello, world!</h2>
      <Hello blue>Emotion+style</Hello>
  </>)
}

export default EmotionComponent;
