const form = document.getElementById("myform");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  handleFormSubmission();
});

function handleFormSubmission() {
  const formData = new FormData(form);
  const date = formData.get("date");
  const statusId = formData.get("status");

  console.log(date);
  console.log(statusId);

  if (!date) {
    alert("Please select a date of attendance.");
    return;
  }
  if (!statusId) {
    alert("Please select an attendance status.");
    return;
  }
  alert("Submission Succesfully");
}
