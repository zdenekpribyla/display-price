
var productObject = [
    {
        'id': 1,
        'product-name': 'Bike',
        'color': 'red',
        'price': 5200
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


var outputPriceBikeElement = document.getElementsByClassName('price-bike');
var outputPriceBallElement = document.getElementsByClassName('price-ball');
var outputPriceBootsElement = document.getElementsByClassName('price-boots');

//where to output product price

 var whereOutputPrice = function () {
    console.log(('whereOutputPrice'));
    return {
        pro1: Number(outputPriceBikeElement),
        pro2: Number(outputPriceBallElement),
        pro3: Nummber(outputPriceBootsElement)
     };
     console.log(('vypise hodnoty'))


 };



// // bike price
// for (var index = 0; index < outputPriceBikeElement.length; index++) {
//     outputPriceBikeElement[index].innerHTML = (priceBike)
// }
//
// // ball price
// for (var index = 0; index < outputPriceBallElement.length; index++) {
//     outputPriceBallElement[index].innerHTML = (priceBall)
// }
//
// // boots price
// for (var index = 0; index < outputPriceBootsElement.length; index++) {
//     outputPriceBootsElement[index].innerHTML = (priceBoots)
// }


