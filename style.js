// get date and time, and have time block reflect that time, standard business hours
// Id #CurrentDay
// .date where new time blocks go        

// 1 create a field on the time block where user can place info blocks of hours 9 to 5
//-- Create a list or table store timeblock, contain the time, input field (user can place note), hold button.

// dymnamicly add event container to the date container.
var tr = $("<tr>");
tr.addClass("");
var date = $("<td>");
var inputTd = $("<td>");
var buttonTd = $("<td>");
var input = $("<input>");
var button = $("<button>");
/* <input type="text"></input> */
date.text("date");
input.attr("type", "text");
inputTd.append(input);
button.text("what");
buttonTd.append(button);
tr.append(date, inputTd, buttonTd);
$("#calendar").append(tr);


/* 
<tr>
            <td>9:00 a.m</td>
            <td><input>texter</input></td>
            <td><button>button</button></td>
          </tr>

          */
// 2 have a button where user can edit info in timeblock then save information into localStorage.
// click event button to enable editing. lets user type info in input field. when button clicked again saves to local storge.
button.on("click") 
// make a button enable input in table data
// make button save information in local storage

// 3 when page is refreshed, keep it in local storage. Read from localStorage to display info on page.

// 4 Each timeblock is color coded to indicate whether it is in a past, present, or future hour.








