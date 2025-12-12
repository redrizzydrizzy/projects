function countdown() {
    let userInput = prompt("How long would you like to count down from (in seconds)? ");
    var seconds = Number(userInput);

    if (seconds == NaN) {
        alert("Invalid input!");
    } else {
        alert(`Counting down from ${seconds} seconds...`);
    };
};