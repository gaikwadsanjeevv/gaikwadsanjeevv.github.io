const auth = firebase.auth();
const usernameSpan = document.getElementById("username");

auth.onAuthStateChanged((user) => {
  if (user) {
    const nameRef = firebase.database().ref("users/" + user.uid + "/username");
    nameRef.once("value").then((snapshot) => {
      const name = snapshot.val();
      usernameSpan.innerText = name || "User";
    });
  } else {
    // Redirect if not logged in
    window.location.href = "index.html";
  }
});

function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

document.getElementById("feedback-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const feedback = e.target.querySelector("textarea").value;

  const user = auth.currentUser;
  if (user) {
    firebase.database().ref("feedback/" + user.uid).push({
      message: feedback,
      timestamp: Date.now()
    }).then(() => {
      alert("Thanks for your feedback!");
      e.target.reset();
    });
  }
});
