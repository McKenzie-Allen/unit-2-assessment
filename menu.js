///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
var pizza = {
    name: "cheese",
    price: 6.99,
    category: "entree",
    popularity: 20,
    rating: 5,
    tags: ["no toppings", "Kids", "econamical"]
}
console.log(pizza)

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
var { price, category } = pizza
console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

let foodArr = [{
        name: "pepperoni",
        price: 7.99,
        category: "entree",
        popularity: 3,
        rating: 8,
        tags: ["one topping", "savory", 'famous']
    }, {
        name: "Ham and Pinapple",
        price: 8.99,
        category: "entree",
        popularity: 2,
        rating: 9,
        tags: ["kids", "NOT HAWAIIAN", "JUST BECAUSE IT HAS PINAPPLE ON IT DOES NOT MAKE IT HAWAIIAN!!!!"]
    }, {
        name: "fruit",
        price: 10.99,
        category: "dessert",
        popularity: 10,
        rating: 7,
        tags: ["kids", "dessert pizza", "contains nuts"]
    }, {
        name: "basalmic",
        price: 9.99,
        category: "entree",
        popularity: 25,
        rating: 4,
        tags: ["Adults", "umami", "vegan cheese"]
    }, {
        name: "fixins",
        price: 15.99,
        category: "entree",
        popularity: 15,
        rating: 6,
        tags: ["Adults", "contains all ingredents", 'no really it has everything']
    }, ]
    // class pizzaMaker {
    //     constructor(name, price, category, popularity, rating, tags) {
    //         this.name = name
    //         this.price = price
    //         this.category = category
    //         this.popularity = popularity
    //         this.rating = rating
    //         this.tags = tags
    //     }
    // }
    // let foodArr = []
    // var pizza1 = new pizzaMaker("pepperoni", 7.99, "entree", 3, 8, ["one topping", "savory", 'famous'])
    // foodArr.push(pizza1)
    // var pizza2 = new pizzaMaker("Ham and Pinapple", 8.99, "entree", 2, 9, ["kids", "NOT HAWAIIAN", "JUST BECAUSE IT HAS PINAPPLE ON IT DOES NOT MAKE IT HAWAIIAN!!!!"])
    // foodArr.push(pizza2)
    // var pizza3 = new pizzaMaker("fruit", 10.99, "dessert", 10, 7, ["kids", "dessert pizza", "contains nuts"])
    // foodArr.push(pizza3)
    // var pizza4 = new pizzaMaker("basalmic", 9.99, "entree", 25, 4, ["Adults", "umami", "vegan cheese"])
    // foodArr.push(pizza4)
    // var pizza5 = new pizzaMaker("fixins", 15.99, 'entree', 15, 6, ["Adults", "contains all ingredents", 'no really it has everything'])
    // foodArr.push(pizza5)
    // console.log(foodArr)

// class foodArr {
//     constructor(name, price, category, popularity, rating, tags) {
//         this.name = name
//         this.price = price
//         this.category = category
//         this.popularity = popularity
//         this.rating = rating
//         this.tags = tags
//     }
// }
// var pizza1 = new foodArr("pepperoni", 7.99, "entree", 3, 8, ["one topping", "savory", 'famous'])
// var pizza2 = new foodArr("Ham and Pinapple", 8.99, "entree", 2, 9, ["kids", "NOT HAWAIIAN", "JUST BECAUSE IT HAS PINAPPLE ON IT DOES NOT MAKE IT HAWAIIAN!!!!"])
// var pizza3 = new foodArr("fruit", 10.99, "dessert", 10, 7, ["kids", "dessert pizza", "contains nuts"])
// var pizza4 = new foodArr("basalmic", 9.99, "entree", 25, 4, ["Adults", "umami", "vegan cheese"])
// var pizza5 = new foodArr("fixins", 15.99, 'entree', 15, 6, ["Adults", "contains all ingredents", 'no really it has everything'])
// console.log(foodArr)
//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)
const filteredFood = foodArr.filter(function(ele) {
    return ele.tags[0] === "kids";
})
console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
// filterByProperty = (prop, number, type) => {
//     const propertyFilterArr = foodArr.filter(function(ele) {
//         if (type === "above" && prop === "price") {
//             return ele.price >= number
//         } else if (type === "above" && prop === "rating") {
//             return ele.rating >= number
//         } else if (type === "above" && prop === "popularity") {
//             return ele.popularity >= number
//         } else if (type === "below" && prop === "price") {
//             return ele.price <= number
//         } else if (type === "below" && prop === "rating") {
//             return ele.rating <= number
//         } else if (type === "below" && prop === "popularity") {
//             return ele.popularity <= number
//         }

//     })
//     return propertyFilterArr
// }
filterByProperty = (prop, number, type) => {
    if (type === "above" && prop === "price") {
        const propertyFilterArr = foodArr.filter(function(ele) {
            return ele.price >= number
        })
        return propertyFilterArr
    } else if (type === "above" && prop === "rating") {
        const propertyFilterArr = foodArr.filter(function(ele) {
            return ele.rating >= number
        })
        return propertyFilterArr
    } else if (type === "above" && prop === "popularty") {
        const propertyFilterArr = foodArr.filter(function(ele) {
            return ele.popularty >= number
        })
        return propertyFilterArr
    } else if (type === "below" && prop === "price") {
        const propertyFilterArr = foodArr.filter(function(ele) {
            return ele.price <= number
        })
        return propertyFilterArr
    } else if (type === "below" && prop === "rating") {
        const propertyFilterArr = foodArr.filter(function(ele) {
            return ele.rating <= number
        })
        return propertyFilterArr
    } else if (type === "below" && prop === "popularty") {
        const propertyFilterArr = foodArr.filter(function(ele) {
            return ele.popularity <= number
        })
        return propertyFilterArr
    }
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log("this is a the filter by property")
console.log(filterByProperty("price", 10, "above"))