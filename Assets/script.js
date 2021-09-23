var textArea = $(".text-area"); 
var currentHour = moment().hour(); // Number in 24hr
var workTime = $(".hour"); 

// Display current date in header
$("#currentDay").text(moment().format("dddd Do MMM, YYYY"));

// Functions
colorSelection();
loadPage();

// Create an each() loop to check if the hour matches with the textArea element
function colorSelection() {
    textArea.each(function() {
        // $(this) is required to select the index of the element from textArea
        // Parse String to Integer or else it won't match with current hour
        var thisTextArea = parseInt($(this).attr("id")); 

        if (thisTextArea < currentHour) { 
            $(this).addClass("past");
        } else if (thisTextArea === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
            // console.log(currentHour, thisTextArea);
        }
    })
};

// Save time and text in local storage 
$(".saveBtn").on("click", function() {

    // console.log(this);
    // Use "this" to call each of the same element and siblings to call other elements
    var time = $(this).siblings(".hour").text();
    var text = $(this).siblings(".text-area").val().trim();

    localStorage.setItem(time, text);  // 9AM | `text`
})

// Load text onto screen from local storage 
function loadPage() {
    // Use each() to get key from local storage based on "hour"
    workTime.each(function() {
        // Index for each hour (Index will be text in this case)
        var workHour = $(this).text();
        // console.log(workHour);
        // console.log(localStorage.getItem(workHour)) --> empty string returns null

        if (workHour != null) {
            $(this).siblings(textArea).val(localStorage.getItem(workHour));
        } else
        return;
    })
}