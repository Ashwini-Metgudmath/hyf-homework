
const express = require('express');
const app = express();

const fs = require('fs');
const meals = fs.readFileSync(__dirname + '/../data/meals.json', 'utf-8');
const mealsJson = JSON.parse(meals);
const reviews = fs.readFileSync(__dirname + '/../data/reviews.json', 'utf-8');
const reviewsJson = JSON.parse(reviews);
//console.log(mealsJson);

const mealsWithReviews = mealsJson.map(meal => {
    const review = reviewsJson.filter(review => review.mealId == meal.id);
    if(review)
        meal.Reviews = review
    else
        meal.reviews = [];
        return meal;
})

app.get('/', (req, res) =>{
    res.send(mealsWithReviews);
})

module.exports = app;


