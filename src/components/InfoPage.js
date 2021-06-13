import styled from "styled-components";
// import Editor from "react-code-live";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const InfoDescription = styled.div`
  margin: 100px;
  color: pink;
`;

const Title = styled.div`

`;

const LiveEditorContainer = styled.div`
    max-width: 900px,
    min-width: 600px
`;

export const InfoPage = ({ title, description, initialCode }) => {
  return (
    <div>
      <LiveEditorContainer>
        <LiveProvider code={initialCode}>
          <LiveEditor
            style={{
              background: `#343434`,
              width: `85vw`,
              minHeight: `25vh`,
              maxHeight: `50vh`,
            }}
          />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </LiveEditorContainer>
    </div>
  );
};
