const faqs = document.querySelectorAll(".faq-box");

console.log(faqs);

for (let index = 0; index < faqs.length; index++) {
  console.log(faqs[index]);
  faqs[index].addEventListener("click", (data) => {
    console.log(data.target);

    let parentSection;

    if (
      data.target.classList.contains("a") ||
      data.target.classList.contains("heading") ||
      data.target.classList.contains("p") ||
      data.target.classList.contains("fa-plus")
    ) {
      console.log("jeg trykkede på en af dem");

      parentSection = data.target.parentNode.parentNode;
    } else {
      parentSection = data.target.parentNode;
    }

    parentSection.classList.toggle("active");
  });
}

function validate() {
  let form = document.forms["formm"];
  let errorbox = document.querySelector(".error-message");
  let textField = document.querySelector("textarea");

  const errorMessages = [];

  if (form["name"].value == "") {
    errorMessages.push("Name is Required |");
  }

  if (form["mail"].value == "") {
    errorMessages.push("Mail is Required |");
  } else {
    var emaildotdkvalidering = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[dk]{2,}$/;
    if (!emaildotdkvalidering.test(form["mail"].value)) {
      errorMessages.push(
        "Please enter a valid email address that ends with .dk |"
      );
    }
  }

  if (textField.value.length > 250) {
    console.log("hej");
    errorMessages.push("Max words is reached!! max words is (250) |");
  }

  if (errorMessages.length != 0) {
    errorbox.classList.add("show");
    errorbox.innerText = errorMessages.toString();
    return false;
  }

  return false;
}

function burgerMenu() {
  document.querySelector("nav").classList.toggle("active");
}
