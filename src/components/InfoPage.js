import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Title = styled.div`
    color: grey;
    padding-left: 12px;
    padding-top: 12px;
    font-size: 24px;
    width: 100%;
    height: 30px;
    background: #343434;
`;

const LiveEditorContainer = styled.div`
    max-width: 900px,
    min-width: 600px
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
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </LiveEditorContainer>
    </div>
  );
};
