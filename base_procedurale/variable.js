let variableLet = "globale";
var variableVar = "globale";

if(true) {

    let variableLet = "locale";//nouvelle variable locale
    var variableVar = "locale";//réaffectation

    console.log("let : " + variableLet);//locale
    console.log("var : " + variableVar);//locale

}

console.log("let : " + variableLet);//globale
console.log("var : " + variableVar);//locale   etait globale

// privilégipns le let