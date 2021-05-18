import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { BasketContext } from "./backendMock/basket/BasketContext";
import { BasketList } from "./BasketList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calendar.css";

export const displayMeal = (day, meal) =>
  day ? <div>{day[meal]}</div> : <div>no data</div>;

export function Calendar() {
  const { data } = useAuth();
  const [setBasket] = useContext(BasketContext);
  const [checked] = useContext(BasketContext);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  // const daysSinceBeginningOfWeek = new Date(Date.now()).getDay();

  // const FirstDateOfCurrentWeek = new Date(
  //   new Date("2020-04-02") - daysSinceBeginningOfWeek * 24 * 60 * 60 * 1000
  // );

  // let currentWeek = [];
  // for (let i = 1; i < 8; i++) {
  //   currentWeek.push(new Date(FirstDateOfCurrentWeek));
  // }
  console.log("data", data);

  const onFoodSelect = (date, e) => {
    const order = { id: date, meal: e.target.id };
    console.log(e.target.checked);

    e.target.disabled = true;
    setBasket((prevState) => [...prevState, order]);
  };

  return (
    <div class="p-5">
      <h2>Calendar</h2>
      <div class="card-deck">
        {data.map((day) => {
          const date = day.date;
          return (
            <div class="card" style={{ margin: "2px" }} key={date}>
              {day && <img src={day.pic} class="card-img-top" alt={day.pic} />}

              <div class="card-body">
                <h5 class="card-title ">
                  <Link to={`/${day}`}>
                    {daysOfWeek[new Date(day.date).getDay()]}
                  </Link>
                </h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div className="selectFood">
                      {displayMeal(day, "firstMeal")}
                      <input
                        type="checkbox"
                        id="firstMeal"
                        checked={checked}
                        onChange={(e) => onFoodSelect(date, e)}
                      />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div className="selectFood">
                      {displayMeal(day, "secondMeal")}
                      <input
                        type="checkbox"
                        id="secondMeal"
                        onChange={(e) => onFoodSelect(date, e)}
                      />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div className="selectFoo{d">
                      {displayMeal(day, "thirdMeal")}
                      <input
                        type="checkbox"
                        id="thirdMeal"
                        onChange={(e) => onFoodSelect(date, e)}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <BasketList />
    </div>
  );
}
