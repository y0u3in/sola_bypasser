var elements = document.getElementsByClassName("btn btn-primary disabled");
for (var i = 0; i < elements.length; i++) {
    elements[i].className = "btn btn-primary";
}

const checkBox = document.getElementById("checked-syllabus");
checkBox.removeAttribute("disabled");
checkBox.click();
