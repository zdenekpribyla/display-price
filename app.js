


for (var index = 0; index < products.length; index++) {

    var product = products[index];

    var productElements = document.getElementsByClassName(product.id);
    console.log('productElements', productElements);

    for (var i = 0; i < productElements.length; i++) {
        productElements[i].innerHTML = product.price;
    }

}




