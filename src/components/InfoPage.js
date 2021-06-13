import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Title = styled.div`
  padding: 8px 8px 8px 8px;
  margin: 24px 8px 8px 0px;
  font-size: 18px;
  text-align: left;
  background: white;
  display: inline-block;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const LiveEditorContainer = styled.div`
    max-width: 900px,
    min-width: 600px
`;

const ResultGrid = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

const ResultExplanation = styled.div`
  background: #343434;
  color: white;
  margin-right: 4px;
  height: 15vh;
  width: 50%;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
`;

const ResultContainer = styled.div`
  background: #343434;
  color: white;
  text-align: center;
  margin-left: 4px;
  height: 15vh;
  width: 50%;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
`;

export const InfoPage = ({ title, description, initialCode }) => {
  return (
    <div>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <LiveEditorContainer>
        <LiveProvider code={initialCode}>
          <LiveEditor
            style={{
              background: `#343434`,
              width: `85vw`,
              minHeight: `25vh`,
              maxHeight: `50vh`,
              boxShadow: `0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0)`,
            }}
          />
          <ResultGrid>
            <ResultExplanation>Explanation</ResultExplanation>
            <ResultContainer>
              <LiveError />
              <LivePreview />
            </ResultContainer>
          </ResultGrid>
        </LiveProvider>
      </LiveEditorContainer>
    </div>
  );
};
