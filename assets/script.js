// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //starting by listing the current day
  // TODO: Add code to display the current date in the header of the page.
  //site reference https://day.js.org/docs/en/display/format
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //making it o where the code is near the day
  function hourUpdate() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).parent().attr("id"));

      //making it to where the time ID is before what ever how it is right now
      // it will remove the past and future, to where it adds the present by using else if statements
      //but first I need to make it to where it removes each class
      $(this).removeClass("past present future");

      //now for the if statement
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $(".time-block").each(function () {
    var hour = $(this).parent().attr("id");
    var desc = localStorage.getItem(hour);

    if (desc) {
      $(this).val(desc);
    }
  });
  hourUpdate();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //using mdn documentations and stack overflow references on localstorage and save buttons, and references from previous lessions
  //i wwas able to solve the following
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var desc = $(this).siblings(".time-block").val();

    //making an if statement for it
    localStorage.setItem(hour, desc);
  });
  //
});
