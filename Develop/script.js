//Show date and time
var time = moment().format("dddd, MMMM Do, YYYY, h:mm A");
$("#currentDay").text("Today is " + time);


$(document).ready(function(){

    // Get local storage data otherwise create an empty object
    var textInput = JSON.parse(localStorage.getItem("tasks")) || {}

    // Save event
    $(".saveBtn").on("click", function () {
       var task = $(this).prev().val()
       var hour = $(this).prev().attr("id")
 
       textInput[hour] = task

       // Set local storage
       localStorage.setItem("tasks", JSON.stringify(textInput))
    })
    
    // Show input
    for (var prop in textInput) {
       $(`#${prop}`).val(textInput[prop])
    }

    // Change color function
    function color() {

        // Get time
        var timeNow = moment().hours();
  
        // Color rows based on current time
        $(".hour").each(function () {
           var timeHour = parseInt($(this).attr("id"));

           // Past
           if (timeHour < timeNow) {
              $(this).addClass("past");
  
            // Future
           } else if (timeHour > timeNow) {
              $(this).addClass("future");
              $(this).removeClass("present");
              $(this).removeClass("past");

            // Present
           } else if (timeHour === timeNow) {
              $(this).addClass("present");
              $(this).removeClass("past");
              $(this).removeClass("future");
  
           }
        });
     }

     color();
})