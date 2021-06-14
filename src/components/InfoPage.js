import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { InformationContainer } from "../styledComponents/InformationContainer";

const GridColumn = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 16px;
  flex-wrap: wrap;
  max-height: 65vh;
  max-width: 100vw;
  justify-content: space-between;
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 32px;
  margin-left: 16px;
`;

const Title = styled.div`
  padding: 8px 8px 8px 8px;
  margin: 24px 48px;
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

export const InfoPage = ({ title, description, initialCode }) => {
  return (
    <div>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <LiveProvider code={initialCode}>
        <GridRow>
          <LiveEditor
            style={{
              display: `block`,
              background: `#343434`,
              marginTop: `36px`,
              minHeight: `25vh`,
              maxHeight: `50vh`,
              width: `100%`,
              boxShadow: `0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0)`,
              borderRadius: `2px`,
            }}
          />
        </GridRow>
        <GridColumn>
          <InformationContainer width="100%" height='19.5vh' title="Results">
            <LiveError />
            <LivePreview />
          </InformationContainer>
          <InformationContainer width="100%" height="40.5vh" title="More Examples">
            Sad... Their are no extra examples for this.. Want to add one? Checkout out how to contribute!
          </InformationContainer>
          <InformationContainer width="100%" height='19.5vh' title="About Hook">
          {description}
          </InformationContainer>
          <InformationContainer width="100%" height='19.5vh' title="About Current Code">
          {description}
          </InformationContainer>
          <InformationContainer width="100%" height='19.5vh' title="Important Takeaways">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            ratione. Rem quod reiciendis numquam, nostrum cumque maiores quia
            quidem nobis quisquam dolor impedit, optio eaque, id aliquam
            temporibus voluptate pariatur?
          </InformationContainer>
        </GridColumn>
      </LiveProvider>
    </div>
  );
};