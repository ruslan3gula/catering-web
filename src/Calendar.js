import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Calendar.css";

export const displayMeal = (day, meal) =>
  day ? <div>{day[meal]}</div> : <div>no data</div>;

export function Calendar() {
  const { data } = useAuth();

  // const daysSinceBeginningOfWeek = new Date(Date.now()).getDay();

  // const FirstDateOfCurrentWeek = new Date(
  //   new Date("2020-04-02") - daysSinceBeginningOfWeek * 24 * 60 * 60 * 1000
  // );

  // let currentWeek = [];
  // for (let i = 1; i < 8; i++) {
  //   currentWeek.push(new Date(FirstDateOfCurrentWeek));
  // }
  console.log("data", data);

  const onFoodSelect = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div class="p-5">
      <h2>Calendar</h2>

      <div class="card-deck">
        {data.map((day) => {
          return (
            <div class="card" style={{ margin: "2px" }} key={day.date}>
              {day && <img src={day.pic} class="card-img-top" alt={day.pic} />}

              <div class="card-body">
                <h5 class="card-title ">
                  <Link to={`/${day}`}>{new Date(day.date).getDay()}</Link>
                </h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div className="selectFood">
                      {displayMeal(day, "firstMeal")}
                      <input
                        type="checkbox"
                        id="firstMealselect"
                        onClick={onFoodSelect}
                      />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div className="selectFood">
                      {displayMeal(day, "secondMeal")}
                      <input type="checkbox" />
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div className="selectFood">
                      {displayMeal(day, "thirdMeal")}
                      <input type="checkbox" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
