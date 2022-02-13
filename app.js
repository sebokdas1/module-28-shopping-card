function caseNumber(isIncreasing) {
    const inputText = document.getElementById('case-input');
    const inputValue = inputText.value;
    if (isIncreasing == true) {
        inputText.value = parseInt(inputValue) + 1;
    } else if (inputValue > 0) {
        inputText.value = parseInt(inputValue) - 1;
    };
};
document.getElementById('case-plus').addEventListener('click', function () {
    caseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    caseNumber(false);
});