import styled from "styled-components";
import { BASE_URL, Button } from "../App";

function SearchResult({ data }) {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((food) => (
          <FoodCard key={food.name}>
            <div className="foodImage">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="foodInfo">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
              <Button>${food.price.toFixed(2)}</Button>
            </div>
          </FoodCard>
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
