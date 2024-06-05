const failureMessages = [
  "Access Denied. Incorrect Code.",
  "Failure. The code does not match.",
  "Invalid Entry. Try a different combination.",
  "Error. Code rejected.",
  "Wrong code. This vault is still locked.",
];

function checkPassword() {
  const input = document.getElementById("passwordInput");
  const message = document.getElementById("message");
  const randomIndex = Math.floor(Math.random() * failureMessages.length);

  Swal.fire({
    icon: "error",
    title: "Vault Locked",
    text: failureMessages[randomIndex],
  });

  message.textContent = failureMessages[randomIndex];
  input.value = ""; // Clear input after each attempt
}
