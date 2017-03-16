$(document).ready(function(){
    $(".input .option-item").click(function(){
        $(".input .option-item-selected").removeClass("option-item-selected");
        $(this).addClass("option-item-selected");
        calculate();
    });

    $(".output .option-item").click(function(){
        $(".output .option-item-selected").removeClass("option-item-selected");
        $(this).addClass("option-item-selected");
        calculate();
    });

    $("#calculate").click(calculate);
});

function calculate() {
        var inputBase = $(".input .option-item-selected").text(); 
        var outputBase = $(".output .option-item-selected").text(); 
        var inputValue = $("input[name='input']").val().toUpperCase();
        var outputValue;

        if (toBase(inputBase) != 10) 
            outputValue = toDecimal(inputValue.split(""), toBase(inputBase));
        else 
            outputValue = parseInt(inputValue);

        $("input[name='output']").val(outputValue != NaN ? outputValue.toString(toBase(outputBase)).toUpperCase() : "");
    }

function toDecimal(arrayNumber, pow) {
    var result = 0;
    for (var i = arrayNumber.length - 1, j = 0; i >= 0; i--, j++)
        result += getIntFromChar(arrayNumber[i]) * Math.pow(pow, j);
    return result;
}

function getIntFromChar(n) {
    if (n >= '0' && n <= '9')
        return n.charCodeAt(0) - "0".charCodeAt(0);
    else if (n >= 'A' && n <= 'F')
        return n.charCodeAt(0) - "A".charCodeAt(0) + 10;
    else
        return -1;
}

function toBase(stringBase) {
    var base = 0;
    if (stringBase == "DEC")
        base = 10;
    else if (stringBase == "BIN")
        base = 2;
    else if (stringBase == "HEX")
        base = 16;
    else if (stringBase == "OCT")
        base = 8;
    return base;
}