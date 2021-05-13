import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import displayMeal from "./Calendar";
import Basket from "./backendMock/basket/Basket";
import BasketProvider from "./backendMock/basket/BasketContext";
import { useAuth } from "./AuthContext";

export function Day() {
  let { day } = useParams();
  const { data } = useAuth();
  console.log(data);

  return (
    <BasketProvider>
      <h1>{day}</h1>
      {/* <table class="table  table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> */}
      {/* {JSON.stringify()} */}
    </BasketProvider>
  );
}
