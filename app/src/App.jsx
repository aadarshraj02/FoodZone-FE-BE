import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  console.log(data);

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading........</div>;
  }

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: #fff;
      border-radius: 5px;
      height: 40px;
      font-size: 1rem;
      padding: 0 10px;
    }
  }
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  background-color: #ff4343;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
`;
const FoodCardContainer = styled.div`
  background: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 220px);
`;
const FoodCards = styled.div``;
