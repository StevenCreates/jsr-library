import styled from "styled-components";

export const InformationContainer = ({
  width,
  height,
  titleBackground,
  title,
  children,
  order,
}) => {
  const InfoContainer = styled.div`
    order: ${order ? order : "0"};
    flex: 0 1 auto;
    align-self: auto;
    background: #343434;
    margin-right: 16px;
    margin-top: 16px;
    border-radius: 2px;
    color: white;
    height: ${height ? height : "15vh"};
    width: ${width ? width : "49.5%"};
    max-width: ${width ? width : "49.5%"};
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(255, 255, 255, 0);
    box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(255, 255, 255, 0);
  `;

  const Title = styled.div`
    position: absolute;
    padding: 2px 4px;
    border-radius: 2px;
    color: black;
    font-size: 18px;
    text-align: left;
    background: ${titleBackground ? titleBackground : "#ffffff"};
    display: inline-block;
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(255, 255, 255, 0);
    box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(255, 255, 255, 0);
  `;

  const InnerContent = styled.div`
    margin-top: 28px;
    padding-left: 8px;
    text-align: center;
  `;

  return (
    <InfoContainer>
      <Title>{title}</Title>
      <InnerContent>{children}</InnerContent>
    </InfoContainer>
  );
};
