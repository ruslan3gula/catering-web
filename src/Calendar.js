import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const displayMeal = (data, day, meal) =>
  data[day] ? <div>{data[day][meal]}</div> : <div>no data</div>;

export function Calendar() {
  const { data } = useAuth();
  let wd = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // const daysSinceBeginningOfWeek = new Date(Date.now()).getDay();

  // const FirstDateOfCurrentWeek = new Date(
  //   new Date("2020-04-02") - daysSinceBeginningOfWeek * 24 * 60 * 60 * 1000
  // );

  // let currentWeek = [];
  // for (let i = 1; i < 8; i++) {
  //   currentWeek.push(new Date(FirstDateOfCurrentWeek));
  // }
  // console.log("data", data);
  return (
    <div class="p-5">
      <h2>Calendar</h2>

      <div class="card-deck">
        {wd.map((day) => {
          return (
            <div class="card">
              {data[day] && (
                <img
                  src={data[day].pic}
                  class="card-img-top"
                  alt={data[day].pic}
                />
              )}

              <div class="card-body">
                <h5 class="card-title ">
                  <Link to={`/${day}`}>{day}</Link>
                </h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    {displayMeal(data, day, "firstMeal")}
                  </li>
                  <li class="list-group-item">
                    {displayMeal(data, day, "secondMeal")}
                  </li>
                  <li class="list-group-item">
                    {displayMeal(data, day, "thirdMeal")}
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
