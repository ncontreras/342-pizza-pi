"use strict";


$(document).ready(function($){
    let pizzaOrder = getOrder();



    $("#crust-choice").on("change", function(e){
        $("#pizza-size-container").removeClass("hidden");
    });

    $("#pizza-size").on("change", function(e){
        $(".toppings-container").removeClass("hidden");
    });

    $(".pizza-updater").on("change", function(e){
        let fieldName = $(this).attr('name');
        pizzaOrder[fieldName] = $(this).val();
        saveOrder(pizzaOrder);
    });
});

function createOrder() {
    return {
        ['crust-choice']: null,
        ['pizza-size']: null,
        toppingsMeat: [],
        toppingsMisc: []
    };
}

function saveOrder(pizzaOrder) {
    localStorage.pizza_order = JSON.stringify(pizzaOrder);
}

function getOrder() {
    return (localStorage['pizza_order'])
        ? JSON.parse(localStorage['pizza_order'])
        : createOrder();
}



let price = 0;
let $crustChoice = $("#crust-choice");
let $pizzaSize =  $("#pizza-size");

let $pepperoniBox = $("#box-pepperoni");
let $sausageBox = $("#box-sausage");
let $baconBox = $("#box-bacon");
let $chickenBox = $("#box-chicken");
let $meatLoversBox = $("#box-meatLovers");

let $peppersBananaBox = $("#box-peppersBanana");
let $spinachBox = $("#box-spinach");
let $olivesBlackBox = $("#box-olivesBlack");
let $olivesGreenBox = $("#box-olivesGreen");
let $mushroomsBox = $("#box-mushrooms");
let $onionsBox = $("#box-onions");
let $peppersGreenBox = $("#box-peppersGreen");


$crustChoice.on("change", function(){
   price = $('option', $(this)).filter(':selected').data('price');

   console.log(price);
   alert("Your Current Total is $" + price);

});

$pizzaSize.on("change", function(){
   price = $('option', $(this)).filter(':selected').data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$pepperoniBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$sausageBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$baconBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$chickenBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$meatLoversBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$peppersBananaBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$spinachBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$olivesBlackBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$olivesGreenBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$mushroomsBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$onionsBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

$peppersGreenBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');
   alert("Your Current Total is $" + price);
   console.log(price);
});

function current_price(price) {
    let newPrice = price + previousPrice;
    alert("Your Current Total is $" + newPrice);
    let previousPrice = newPrice;
};
