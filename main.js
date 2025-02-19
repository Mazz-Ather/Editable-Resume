var _a;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElem = document.getElementById("name");
    var emailElem = document.getElementById("email");
    var phoneElem = document.getElementById("phone");
    var educationElem = document.getElementById("education");
    var experienceElem = document.getElementById("experience");
    var skillsElem = document.getElementById("skills");
    if (nameElem &&
        emailElem &&
        phoneElem &&
        educationElem &&
        experienceElem &&
        skillsElem) {
        var name_1 = nameElem.value;
        var email = emailElem.value;
        var phone = phoneElem.value;
        var education = educationElem.value;
        var experience = experienceElem.value;
        var skills = skillsElem.value;
        var resumeOutput = "\n    <h1>RESUME</h1> \n    <h2> Name:</h2>\n    <p> <span id=\"editName\" class=\"editable\"> ".concat(name_1, " </span></p>\n\n    <h2> Email:</h2> \n    <p > <span id=\"editEmail\" class=\"editable\">").concat(email, " </span></p>\n\n <h2> phone no.:</h2>\n<p> <span id=\"editPhone\" class=\"editable\">").concat(phone, "</span> </p>\n\n<h2> Education:</h2>\n <p> <span id=\"editEducation\" class=\"editable\">").concat(education, " </span></p>\n\n \n <h2> Skills: </h2>\n <p> <span id=\"editSkills\" class=\"editable\">").concat(skills, " </span></p>\n \n <h2> Experience:</h2>\n  <p> <span id=\"editExperience\" class=\"editable\">").concat(experience, " </span></p>\n");
        var button = document.querySelector("#button");
        var outputElem = document.getElementById("resumeOutput");
        if (outputElem) {
            outputElem.innerHTML = resumeOutput;
            button.innerHTML = "Edit";
            maeEditable();
        }
    }
    else {
        console.error("please fill out every input properly");
    }
});
function maeEditable() {
    var editAbleElements = document.querySelectorAll(".editable");
    editAbleElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
