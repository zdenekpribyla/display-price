
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


// bike price
var outputPriceBike = document.getElementsByClassName('1');
for (var index = 0; index < outputPriceBike.length; index++) {
    outputPriceBike[index].innerHTML = (productObject[0].price)
}

// ball price
var outputPriceBall = document.getElementsByClassName('2');
for (var index = 0; index < outputPriceBall.length; index++) {
    outputPriceBall[index].innerHTML = (productObject[1].price)
}

// boots price
var outputPriceBoots = document.getElementsByClassName('3');
for (var index = 0; index < outputPriceBoots.length; index++) {
    outputPriceBoots[index].innerHTML = (productObject[2].price)
}







