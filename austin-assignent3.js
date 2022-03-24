function RecursiveCopy(str, n) {
    /*
    returns the string to the number arguement
    */
    if (str.length <= n + 1) {
        n += 1;
        str += str;
        return RecursiveCopy(str, n)

    }
    return str;

}
console.log(RecursiveCopy("A", 10));

function CountChar(str) {
    let characterLength;
    characterLength = RecursiveCopy(str, 10);
    return "the result is " + characterLength.length + "characters";
}
console.log(CountChar("A"));