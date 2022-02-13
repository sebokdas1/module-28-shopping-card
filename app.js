function updateProduceNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    };
    productInput.value = productNumber;
    //update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
};
//handle phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduceNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduceNumber('phone', 1219, false);
});

//handle case
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduceNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduceNumber('case', 59, false);
});