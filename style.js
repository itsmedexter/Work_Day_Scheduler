// get date and time, and have time block reflect that time, standard business hours
// Id #CurrentDay
// .date where new time blocks go        
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format("dddd, MMMM D, YYYY");
// 1 create a field on the time block where user can place info blocks of hours 9 to 5
//-- Create a list or table store timeblock, contain the time, input field (user can place note), hold button.
var data = [{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false },
{ date: new Date(), todo: '', editing: false }]
// how to style dynamic timeblock with different colors? 


// dymnamicly add event container to the date container.
function generateData() {
  $("#calendar").empty();
  for (var i = 0; i < data.length; i++) {
    var todo = data[i];
    var inEditingMode = todo.editing === true;
    todo.todo = localStorage.getItem("newData" + i);
    var date = $("<td>").addClass("time-block").text(todo.date.toLocaleTimeString());
    var input = $("<input>").attr("type", "text").val(todo.todo).addClass("input" + i);
    var span = $("<span>").attr('data-state', 'not-editing').text(todo.todo)
    var inputTd;
    var button;
    if (inEditingMode) {
      inputTd = $("<td>").append(input);
      button = $("<button>").addClass("saveBtnS").text("save").attr('data-index', i).addClass("save-btn");

    }
    else {
      inputTd = $("<td>").append(span);
      button = $("<button>").addClass("saveBtnE").text("edit").attr('data-index', i).addClass('edit-btn');

    }
    var buttonTd = $("<td>").append(button).addClass("saveBtn");
    var tr = $("<tr>").addClass("future").append(date, inputTd, buttonTd);
    $("#calendar").append(tr);

  }
};

generateData();
//tr.addClass("");
/* <input type="text"></input> */
//date.text("date");
//input.attr("type", "text");
//inputTd.append(input);
//button.text("what");
//buttonTd.append(button);
//tr.append(date, inputTd, buttonTd);



/* 
<tr>
            <td>9:00 a.m</td>
            <td><input>texter</input></td>
            <td><button>button</button></td>
          </tr>

          */
// 2 have a button where user can edit info in timeblock then save information into localStorage.
// click event button to enable editing. lets user type info in input field. when button clicked again saves to local storge.
$(document).on("click", '.edit-btn', function () {
  console.log('editing working', $(this));
  console.log('This is the record we want to update', data[$(this).attr('data-index')])

  // var buttonText = $(this).text();
  // console.log(buttonText);
  // if (buttonText === "edit"){
  var oldEditingValue = data[$(this).attr('data-index')].editing;

  data[$(this).attr('data-index')].editing = !oldEditingValue;
  generateData();

  // }

});
  // button for saves revised text and into localStorage, figure how to put data into local storage. me implementing above to save

  $(document).on("click", ".save-btn", function () {
    var newEditingValue = data[$(this).attr("data-index")].editing;
    var index = $(this).attr("data-index");
    var note = $(".input" + index).val();
    console.log(note);
    console.log(newEditingValue);
    console.log("save button clicked");
    data[$(this).attr("data-index")].editing = !newEditingValue;
    localStorage.setItem("newData" + index, note);
    generateData();

  });




// inputbox or the span


// make a button enable input in table data
// make button save information in local storage

// 3 when page is refreshed, keep it in local storage. Read from localStorage to display info on page.

// 4 Each timeblock is color coded to indicate whether it is in a past, present, or future hour.




// code drills 4(),5 will help understand.








