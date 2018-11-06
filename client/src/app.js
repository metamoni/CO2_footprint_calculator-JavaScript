
const TravelForm = require("./views/form_views/travel/create_form.js")
const TravelFormView = require("./views/form_views/travel/travel_form_view.js");
const TravelCalculator = require("./models/travel.js")
const LifestyleView = require('./views/lifestyle_form_view.js');
const LifestyleModel = require('./models/lifestyle.js');
const FoodView = require('./views/food_form_view.js');
const FoodModel = require('./models/food.js');
const FoodFinalView = require('./views/food_final_view.js');

document.addEventListener("DOMContentLoaded", () => {


  const formContainer = document.querySelector("#forms-window")
  const newFormTravel = new TravelForm(formContainer);
  newFormTravel.bindEvents();
  // newFormTravel.createForm();
  // newFormTravel.getResults();


  const travelCalculator = new TravelCalculator();
  travelCalculator.bindEvents();

  const container = document.querySelector('#forms-window');
  const lifestyleForm = new LifestyleView(container);
  lifestyleForm.bindEvents();

  const lifestyleValues = new LifestyleModel();
  lifestyleValues.getValues();

  const form =
  document.querySelector('#forms-window')
  const newForm = new FoodView(form);
  const food = newForm.bindEvents();
  console.log(food);


  const foodValues = new FoodModel()
  console.log(foodValues);
  foodValues.getFormValues();

  const infoFood = document.querySelector("div#food-forms-window")
  const infoFoodInfo = new FoodFinalView(infoFood);
  infoFoodInfo.foodCarbon();

  // const formTravel = document.querySelector("form#travel-form");
  // const formViewTravel = new TravelFormView(formTravel);
  // formViewTravel.setupEventListeners();

});

  // const gridContainer = document.querySelector('div#results');
  // const gridView = new GridView(gridcontainer);
  // gridView.bindEvents();
