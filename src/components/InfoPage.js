import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Title = styled.div`
    color: #ff8040;
    padding-left: 12px;
    padding-top: 30px;
    padding-bottom: 8px;
    font-size: 18px;
    text-align: center;
    width: full;
    background: #343434;
`;

const LiveEditorContainer = styled.div`
    max-width: 900px,
    min-width: 600px
`;

const ResultContainer = styled.div`
  text-align: center;
`;

export const InfoPage = ({ title, description, initialCode }) => {
  return (
    <div>
      <Title>
        {title}
      </Title>
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
          <ResultContainer>

          <LiveError />
          <LivePreview />
          </ResultContainer>
        </LiveProvider>
      </LiveEditorContainer>
    </div>
  );
};
