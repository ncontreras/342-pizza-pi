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
   let price = 0;
   price = $('option', $(this)).filter(':selected').data('price');

   console.log(price);

});

$pizzaSize.on("change", function(){
   price = $('option', $(this)).filter(':selected').data('price');

   console.log(price);
});

$pepperoniBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$sausageBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$baconBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$chickenBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$meatLoversBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$peppersBananaBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$spinachBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$olivesBlackBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$olivesGreenBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$mushroomsBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$onionsBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});

$peppersGreenBox.on("change", function(){
   let price = 0;
   price = $('input', $(this)).data('price');

   console.log(price);
});




// $(document).ready(function($) {
//     let price = 0;
//     $("#crust-choice-container").on("change", function(event) {
//         if ($("select#crust-choice option[value='thin']").val() === "Thin") {
//             price = 1;
//             console.log(price);
//         }
//     })
// });











// function toggleField(elementId) {
//     $("#" + elementId).removeClass("hidden");

    // let ele = window.document.getElementById(elementId);
    // ele.style.display = "block !important;";

// }

// document.getElementById("crust-choice")
//     .addEventListener('change', function(){
//         console.log(document.getElementById("pizza-size-container"));
//     });

// function sayHello() {
//     alert("Hello!");
// }
//
// sayHello();

// let sayHello = function(name) {
//     alert("hello " + name);
// };
//
// sayHello(sayHello);

// let sum = (a, b) => {return a + b;}


// let donnaAge = 23;
// let donnaName = "Donna";
// let favColor = "brown";
//
// let donna = {
//     age: 23,
//     name: "Donna",
//     favColor: "brown",
// };
//
// console.log(donna);
//
//
// let i;
// for (i = 0; i < 10; i++) {
//
//     console.log("i is : " + i);
// }
// console.log("Done iteration, i is: " + i);

//
// let obj1 = {};
// let obj2 = {};
// let obj3 = {};
// let obj4 = {};
// let obj5 = {};
//
// let myObjects = [
//     28,
//     13,
//     "hello",
//     'c',
//     12.3,
//     -18,
//     {
//         age: 23,
//         name: "Donna",
//         favColor: "brown"
//     }
// ];
//

// let donna = {
//     name: "Donna",
//     favSongGenre: 'jazz'
// };

// localStorage['donna'] = JSON.stringify(donna);
//
//
// let elly = JSON.parse(localStorage['donna']);
//
// elly.name = "Elly";
// console.log(elly);









