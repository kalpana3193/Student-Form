

const studentForm = document.getElementById("studentForm");
const table = document.getElementById("tableDetails").getElementsByTagName('tbody')[0];
var editIndex = null;

studentForm.addEventListener("submit", (event) => {

  event.preventDefault();
  document.getElementById("tableDetails").style.display = "";
  const name = document.getElementById("userName").value;

  const age = document.getElementById("userAge").value;
  const genderMale = document.getElementById("userGenderMale").value;
  const genderFemlae = document.getElementById("userGenderFemale").value;
  const email = document.getElementById("userEmail").value;

  var gender = (document.getElementById("userGenderMale").checked) ? 1 : (document.getElementById("userGenderMale").checked) ? 2 : null;
if(gender==null){
  alert("Please selct Gender");
  return;
}


  if (editIndex != null) {  // Edit Action index value is there checking condition
    const editRow = table.rows[editIndex]
    editRow.cells[0].textContent = name;
    editRow.cells[1].textContent = age;
    editRow.cells[2].textContent = gender;
    editRow.cells[3].textContent = email;
    editIndex = null;

  } else {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = email;
    const actionRow = row.insertCell(4);

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "btn_classEdit");

    const delButton = document.createElement('button');
    delButton.setAttribute("class", "btn_classDelete");
    delButton.textContent = "Delete";

    actionRow.appendChild(editButton)
    actionRow.appendChild(delButton)


    editButton.onclick = () => {
      editIndex = row.rowIndex - 1;
      const editRow = table.rows[editIndex]
      document.getElementById("userName").value = editRow.cells[0].textContent;
      document.getElementById("userAge").value = editRow.cells[1].textContent;

      var genderId = (editRow.cells[2].textContent == 1) ? "userGenderMale" : "userGenderFemale";

      document.getElementById(genderId).checked = true;
      document.getElementById("userEmail").value = editRow.cells[3].textContent;

    }

    delButton.onclick = () => {
      var clickedIndex = row.rowIndex - 1;
      table.deleteRow(clickedIndex)

    }


  }

  studentForm.reset();

});
