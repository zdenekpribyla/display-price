


for (var index = 0; index < products.length; index++) {

    var productID = products[index].id
    var productPrice = products[index].price

    var productElements = document.getElementsByClassName(productID);
     console.log('productElements', productElements);

    for (var i = 0; i < productElements.length; i++) {
        productElements[i].innerHTML = productPrice;
    }

}




