import styled from "styled-components";

function SearchResult() {
  return (
    <FoodCardContainer>
      <FoodCards></FoodCards>
    </FoodCardContainer>
  );
}

export default SearchResult;
const FoodCardContainer = styled.div`
  background: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 220px);
`;
const FoodCards = styled.div``;
