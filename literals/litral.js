var data;
data = 123;
data = "abc";
// data = 23;
function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(4, 5, "as-number"));
console.log(combine("monu", "jay", "as-string"));
