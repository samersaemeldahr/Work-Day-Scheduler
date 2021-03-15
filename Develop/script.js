
var time = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text("Today is " + time);


$(document).ready(function(){
    var container = $('.container');
    $('container').append('<div class="input-group input-group-lg"></div>');
    $('input-group').append('<div class="input-group-prepend">')
})
/*
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

<div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  </div>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
</div>
*/