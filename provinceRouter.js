import express from "express";
import { getAllIconicFoods, addIconicFoods, changeFood,foodInfo, deleteProvince } from "./foodData.js";
export const provinceRouter = express.Router();


provinceRouter.get('/intro', (request,response)=>{
   response.send('Please choose a province or territory from the list: \nNL(Newfoundland and Labrador) \nQC(Quebec) \nMB(Manitoba) \nPE(Prince Edward Island) \nON(Ontario) \nNS(Nova Scotia) \nNB(New Brunswick) \nSK(Saskatchewan) \nAB(Alberta) \nBC(British Columbia) \nYT(Yukon) \nNT(Northwest Territories) \nNU(Nunavut)')
  console.log('List all provinces and their short codes to choose from');
  })

provinceRouter.get("/choose/ALL", (request, response) => {
  const iconicFoods = getAllIconicFoods();
  response.send(iconicFoods);
  console.log("Listing iconic foods of all provinces");
});


provinceRouter.post('/choose', (request, response)=> {
    const newFood = request.body;
    addIconicFoods(newFood)

    response.send(`New item added`)
  //How do i display the added item

    console.log (`A new line item added`)
    console.log(newFood)

})

provinceRouter.get("/choose/:provinceName", (request, response) => {
    const provinceName = request.params.provinceName
    const food = foodInfo(provinceName)
    response.send(food);
    console.log('Display iconic food by province')
    console.log(food)
  });

provinceRouter.patch('/choose/:provinceName', (request,response) => {
    const provinceName = request.params.provinceName
    const newName = request.body
    changeFood(provinceName,newName)
    response.send(getAllIconicFoods())
    console.log('changed the details of food for the province');
    console.log(provinceName);
    console.log('patch application successful');
    console.log(newName);
})

provinceRouter.delete('/choose/:provinceName', (request,response) => {
  const provinceToDelete = request.params.provinceName 
  deleteProvince(provinceToDelete)

  response.send(getAllIconicFoods())
  console.log('Province details deleted');
  console.log(provinceToDelete);
})

