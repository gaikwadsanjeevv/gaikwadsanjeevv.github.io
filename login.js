const auth = firebase.auth();
const db = firebase.database();
const form = document.getElementById("login-form");
const registerLink = document.getElementById("register");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form["email"].value;
  const password = form["password"].value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      form.reset();
    })
    .catch((err) => alert("Login failed: " + err.message));
});

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const username = document.getElementById("username")?.value.trim();

  if (!email || !password || !username) {
    alert("Please enter name, email, and password to register.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;

      db.ref("users/" + userId).set({
        username: username,
        email: email
      });

      alert("Registration successful!");
      form.reset();
    })
    .catch((error) => {
      alert("Registration error: " + error.message);
    });
});
