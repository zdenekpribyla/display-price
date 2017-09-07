var priceBike = 5800;
var priceBall = 250;
var priceBoots = 2340;


// bike price
var outputPriceBike = document.getElementsByClassName('price-bike');
for (var index = 0; index < outputPriceBike.length; index++) {
    outputPriceBike[index].innerHTML = (priceBike)
}

// ball price
var outputPriceBall = document.getElementsByClassName('price-ball');
for (var index = 0; index < outputPriceBall.length; index++) {
    outputPriceBall[index].innerHTML = (priceBall)
}

// boots price
var outputPriceBoots = document.getElementsByClassName('price-boots');
for (var index = 0; index < outputPriceBoots.length; index++) {
    outputPriceBoots[index].innerHTML = (priceBoots)
}
