$(document).ready(function() {
  // Function to diplay the current date in the header section
  function displayCurrentDate() {
    // Variable to reference current day DOM element
    var currentDay = $("#currentDay");
    // Variable to get current date through the moment API
    var diplayCurrentDay = moment().format("MMMM Do YYYY");
    console.log(diplayCurrentDay);
    currentDay.text(diplayCurrentDay);
  }
  // Function to change the color of the textarea based on the current time
  function changeColor() {
    // Variable to get the current hour through the moment API
    var currentHour = moment().get("hour");
    console.log(currentHour);
    // Loop to put hour-row elements into an array so that the index can be referenced
    $(".hour-row").each(function(index) {
      console.log(index);
      // Make sure that the textarea doesn't have a past, present or future class
      $(this)
        .children(".description")
        .removeClass("past present future");
      // Statement to add past class to textarea when the current hour is greater than the index (added 9 to current index to make it equal to the current time)
      if (index + 9 < currentHour) {
        $(this)
          .children(".description")
          .addClass("past");
        // Statement to add present class to textarea when the current hour is the same as the index (added 9 to current index to make it equal to the current time)
      } else if (index + 9 === currentHour) {
        $(this)
          .children(".description")
          .addClass("present");
        // Statement to add future class to textarea when the previous conditions aren't met
      } else {
        $(this)
          .children(".description")
          .addClass("future");
      }
    });
  }
  // Call the changeColor function
  changeColor();
  // Call the displayCurrentDate function
  displayCurrentDate();
});
