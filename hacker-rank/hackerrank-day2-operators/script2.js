
function solve(meal_cost, tip_percent, tax_percent) {

    var meal_cost = 15;

    var res = (meal_cost + (meal_cost * tip_percent / 100) + (meal_cost * tax_percent / 100));
    console.log(Math.round(res));
}

solve()

function totalPrice (){
    const meal = 15;
    const tax = 5;
    const tip = 5; 
    console.log(meal + tax + tip);

}

totalPrice()


function totalMealPrice (){
    const dinner = 15;
    const tax1 = dinner * 0.18;
    const tip2 = dinner * 0.25;

console.log(dinner + tax1 + tip2);
}

totalMealPrice();