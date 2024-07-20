import styled from "styled-components";

function SearchResult({ data }) {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((food) => (
          <FoodCard key={food.name}></FoodCard>
        ))}
      </FoodCards>
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
const FoodCard = styled.div``;
