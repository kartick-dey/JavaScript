function numDivisibilityCheck(num) {
    if (num % 7 == 0) {
        if (num % 3 == 0){
            console.log("World ABC");
            return;
        }
        else {
            console.log("World");
            return
        }
    }
    else if (num % 3 == 0) {
        console.log("ABC");
        return
    }
    else console.log("Number is not divisible by 7 or 3 and both");
    return;
}

const number = 42;
numDivisibilityCheck(number);
