import styled from "styled-components";
import { InformationContainer } from "../styledComponents/InformationContainer";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UseEffect = () => {
  return (
    <>
      <Grid>
        <InformationContainer width="99%" title="1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
          ratione. Rem quod reiciendis numquam, nostrum cumque maiores quia
          quidem nobis quisquam dolor impedit, optio eaque, id aliquam
          temporibus voluptate pariatur?
        </InformationContainer>
        <InformationContainer width="99%" title="2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
          ratione. Rem quod reiciendis numquam, nostrum cumque maiores quia
          quidem nobis quisquam dolor impedit, optio eaque, id aliquam
          temporibus voluptate pariatur?
        </InformationContainer>
      </Grid>
      <Grid>
        <InformationContainer width="99%" title="3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
          ratione. Rem quod reiciendis numquam, nostrum cumque maiores quia
          quidem nobis quisquam dolor impedit, optio eaque, id aliquam
          temporibus voluptate pariatur?
        </InformationContainer>
        <InformationContainer width="99%" title="4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
          ratione. Rem quod reiciendis numquam, nostrum cumque maiores quia
          quidem nobis quisquam dolor impedit, optio eaque, id aliquam
          temporibus voluptate pariatur?
        </InformationContainer>
        <InformationContainer width="99%" title="5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
          ratione. Rem quod reiciendis numquam, nostrum cumque maiores quia
          quidem nobis quisquam dolor impedit, optio eaque, id aliquam
          temporibus voluptate pariatur?
        </InformationContainer>
        <InformationContainer width="99%" title="6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
          ratione. Rem quod reiciendis numquam, nostrum cumque maiores quia
          quidem nobis quisquam dolor impedit, optio eaque, id aliquam
          temporibus voluptate pariatur?
        </InformationContainer>
      </Grid>
    </>
  );
};
