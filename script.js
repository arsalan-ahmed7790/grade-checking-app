document.getElementById("gradeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var percentage = parseInt(document.getElementById("percentage").value);

    if (percentage >= 80) {
        document.getElementById("result").innerHTML = "Your grade is A+.";
    } else if (percentage >= 70) {
        document.getElementById("result").innerHTML = "Your grade is A.";
    } else if (percentage >= 60) {
        document.getElementById("result").innerHTML = "Your grade is B.";
    } else if (percentage >= 50) {
        document.getElementById("result").innerHTML = "Your grade is C.";
    } else {
        document.getElementById("result").innerHTML = "Your grade is F.";
    }
});