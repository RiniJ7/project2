import express from "express";
import { getAllDescription, foodData } from "./foodDescription.js";

export const foodRouter = express.Router();

foodRouter.get("/", (request, response) => {
  const description = getAllDescription();
  response.send(description);
  console.log("Listing descriptions of all iconic foods");
});
foodRouter.get("/:foodName", (request, response) => {
  const foodName = request.params.foodName
  const food = foodData(foodName)
  response.send(food);
  console.log('Description of food by name')
  console.log(food)
});