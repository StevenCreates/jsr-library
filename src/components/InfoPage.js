import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { InformationContainer } from "../styledComponents/InformationContainer";
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
              marginTop: `36px`,
              minHeight: `25vh`,
              maxHeight: `50vh`,
              boxShadow: `0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0)`,
              borderRadius: `2px`,
            }}
          />
          <ResultGrid>
            <InformationContainer title="Results">
              <LiveError />
              <LivePreview />
            </InformationContainer>
            <InformationContainer title="About Hook">
              <InnerContentContainer>{description}</InnerContentContainer>
            </InformationContainer>
          </ResultGrid>
        </LiveProvider>
      </LiveEditorContainer>
    </div>
  );
};

const InnerContentContainer = styled.div`
  margin-top: 28px;
  padding: 8px;
`;

const Title = styled.div`
  padding: 8px 8px 8px 8px;
  margin: 24px 36px;
  position: absolute;
  border-radius: 2px;
  top: 0px;
  right: 0px;
  font-size: 18px;
  text-align: left;
  background: white;
  z-index: 12;
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
  max-width: 100vw;
  justify-content: space-between;
`;
