$("#currentDay").text(moment().format("dddd Do MMM, YYYY"));

console.log(typeof $(".text-area"));

var timeBlock = $(".time-block");
var textArea = $(".text-area"); // object
var currentHour = moment().hour(); //number in 24hr

// Create a jquery .each() loop to check if the hour matches with the timeBlock element
function colorBlock() {
    timeBlock.each(function(){
        if (parseInt(timeBlock.attr("id")) === currentHour) { // Parse string to integer
            textArea.addClass("present");
        } else if (parseInt(timeBlock.attr("id")) < currentHour) {
            textArea.addClass("past");
            console.log(parseInt(timeBlock.attr("id")));
            console.log(currentHour);
        } else {
            textArea.addClass("future");
        }
    })
};

colorBlock();