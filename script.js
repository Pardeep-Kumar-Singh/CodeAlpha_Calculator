let string = ""; 
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if (string.includes("/0")) {
        alert("Cannot divide by zero!");
        string = ""; // Reset the input string
        document.querySelector("input").value = string; // Clear the input field
      } else {
        try {
          string = eval(string);
          document.querySelector("input").value = string;
        } catch (error) {
          document.querySelector("input").value = "Error";
          string = "";
        }
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "√") {
      try {
        if (parseFloat(string) < 0) {
          alert("Invalid input for square root!");
          string = ""; // Reset the input string
          document.querySelector("input").value = string; // Clear the input field
        } else {
          string = Math.sqrt(string);
          document.querySelector("input").value = string;
        }
      } catch (error) {
        document.querySelector("input").value = "Error";
        string = "";
      }
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string; 
    }
  }); 
});
