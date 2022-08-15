var dg = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    tn = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    tw = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function toWords(e) {
    return e < 10 ? dg[e] : "1" == e.toString()[0] ? tn[e - 10] : tw[e.toString()[0] - 2] + "-" + dg[e.toString()[1]]
}
let bday = new Date(2008, 1, 22),
    ageDiff = Date.now() - bday,
    age = new Date(ageDiff);
$(".age").html(toWords(age.getUTCFullYear() - 1970));