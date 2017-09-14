
var productObject = [
    {
        'id': 1,
        'product-name': 'Bike',
        'color': 'red',
        'price': 5800
    },

    {
        'id': 2,
        'product-name': 'Ball',
        'color': 'red',
        'price': 250
    },

    {
        'id': 3,
        'product-name': 'Boots',
        'color': 'green',
        'price': 2340
    }
];


// id 1 price
var outputPrice1 = document.getElementsByClassName('1');
for (var index = 0; index < productObject.length; index++) {
    outputPrice1[index].innerHTML = (productObject[0].price)
}

// id 2 price
var outputPrice2 = document.getElementsByClassName('2');
for (var index = 0; index < productObject.length; index++) {
    outputPrice2[index].innerHTML = (productObject[1].price)
}

// id 3 price
var outputPrice3 = document.getElementsByClassName('3');
for (var index = 0; index < productObject.length; index++) {
    outputPrice3[index].innerHTML = (productObject[2].price)
}

// var myFunction = function () {
//     for (var index = 0; index < productObject.length; index++)
//     { outputPrice1[index].style.color = 'yellow' }
//     console.log('yellow')
// };
// myFunction()


