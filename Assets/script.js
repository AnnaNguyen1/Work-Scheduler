$("#currentDay").text(moment().format("dddd Do MMM, YYYY"));

var textArea = $(".text-area"); 
var currentHour = moment().hour(); // Number in 24hr

// Create an each() loop to check if the hour matches with the timeBlock element
function colorSelection() {
    textArea.each(function() {
        // $(this) is required to select the index of the element from timeBlock
        // Parse String to Integer
        var thisTextArea = parseInt($(this).attr("id")); 

        if (thisTextArea < currentHour) { 
            $(this).addClass("past");
        } 
        else if (thisTextArea === currentHour) {
            $(this).addClass("present");
        } 
        else {
            $(this).addClass("future");
            console.log(currentHour, thisTextArea);
        }
    })
};

colorSelection();