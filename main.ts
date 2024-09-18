document.getElementById("resume")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameElem = document.getElementById("name") as HTMLInputElement;
  const emailElem = document.getElementById("email") as HTMLInputElement;
  const phoneElem = document.getElementById("phone") as HTMLInputElement;
  const educationElem = document.getElementById(
    "education"
  ) as HTMLInputElement;
  const experienceElem = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  const skillsElem = document.getElementById("skills") as HTMLInputElement;

  if (
    nameElem &&
    emailElem &&
    phoneElem &&
    educationElem &&
    experienceElem &&
    skillsElem
  ) {
    const name = nameElem.value;
    const email = emailElem.value;
    const phone = phoneElem.value;
    const education = educationElem.value;
    const experience = experienceElem.value;
    const skills = skillsElem.value;

    var resumeOutput = `
    <h1>RESUME</h1> 
    <h2> Name:</h2>
    <p> <span id="editName" class="editable"> ${name} </span></p>

    <h2> Email:</h2> 
    <p > <span id="editEmail" class="editable">${email} </span></p>

 <h2> phone no.:</h2>
<p> <span id="editPhone" class="editable">${phone}</span> </p>

<h2> Education:</h2>
 <p> <span id="editEducation" class="editable">${education} </span></p>

 
 <h2> Skills: </h2>
 <p> <span id="editSkills" class="editable">${skills} </span></p>
 
 <h2> Experience:</h2>
  <p> <span id="editExperience" class="editable">${experience} </span></p>
`;
    let button: any = document.querySelector("#button");
    const outputElem = document.getElementById("resumeOutput");
    if (outputElem) {
      outputElem.innerHTML = resumeOutput;
      button.innerHTML = "Edit";

      makeEditable();
    }
  } else {
    console.error("please fill out every input properly");
  }
});

function makeEditable() {
  const editAbleElements = document.querySelectorAll(".editable");
  editAbleElements.forEach((element) => {
    element.addEventListener("click", () => {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "p" || currentElement.tagName === "span") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing input");

        input.addEventListener("blur", () => {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
