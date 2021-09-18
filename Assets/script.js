$("#currentDay").text(moment().format("dddd Do MMM, YYYY"));

console.log(typeof $(".time-block"));

var timeBlock = $(".time-block"); // object
var timeDif = 9; 

function colourBlock(){
    var hour = moment().hours(); // number (24hrs)

    for (i = 0; i < timeBlock.length; i++) {
        if (i = i) {
            console.log("hi");
        }
    }

}
