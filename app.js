function caseNumber(isIncreasing) {
    const inputText = document.getElementById('case-input');
    let inputValue = inputText.value;
    if (isIncreasing == true) {
        inputValue = parseInt(inputValue) + 1;
    } else if (inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    };
    inputText.value = inputValue;
    //update total
    const total = document.getElementById('case-total');
    total.innerText = inputValue * 59;
};
document.getElementById('case-plus').addEventListener('click', function () {
    caseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    caseNumber(false);
});