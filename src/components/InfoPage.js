import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const InfoDescription = styled.div`
  margin: 100px;
  color: pink;
`;

const LiveEditorContainer = styled.div`
    max-width: 900px,
    min-width: 600px
`

export const InfoPage = ({ title, description, initialCode }) => {
  return (
    <div>
        <LiveEditorContainer>
      <LiveProvider  code="<strong>Hello World!</strong>">
        <LiveEditor  style={{
          background: `#343434`,
          width: `85vw`,
          minHeight: `25vh`,
          maxHeight: `50vh`
      }}/>
        <LiveError />
        <LivePreview />
      </LiveProvider>
        </LiveEditorContainer>
      <InfoDescription>Testing</InfoDescription>
    </div>
  );
};
