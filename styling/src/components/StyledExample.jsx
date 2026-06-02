import styled from "styled-components";

function StyledExample() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
  `;

  const Wrapper = styled.div`
    padding: 8px;
    margin: 8px;
    background-color: blue;
  `;

  return (
    <Wrapper>
      <Title>This is my title!</Title>
    </Wrapper>
  );
}

export default StyledExample;
