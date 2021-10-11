import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MarketItem from "../MarketContent/MarketItem/MarketItem";
import classes from "./AvailableMarketItems.module.css";

const AvailableMarketItems = () => {
  const [marketItems, setMarketItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMarketItems = async () => {
      const response = await fetch(
        "https://market-app-5275c-default-rtdb.firebaseio.com/meals.json"
      ).then();

      if (!response.ok) {
        throw new Error("Something went wrong !");
      }
      const responseData = await response.json();

      const loadedMarketItems = [];
      for (const key in responseData) {
        loadedMarketItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMarketItems(loadedMarketItems);
      setIsLoading(false);
    };

    fetchMarketItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <div class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const marketItemsList = marketItems.map((meal) => (
    <MarketItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{marketItemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMarketItems;
