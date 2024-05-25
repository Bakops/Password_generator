var copyBtn = document.getElementById("btn-first");

function getPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 16;
  var password = "";

  //générer le mot de passe
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);

    //afficher le mot de passe
    document.getElementById("password").value = password;
    copyBtn.style.background = "#5b5b5b";
    copyBtn.style.color = "#FFFF";
    copyBtn.style.border = "none";
  }
}

//Copier le mot de passe

function copyPassword() {
  var inputPassword = document.getElementById("password");

  // Vérifier la longueur du message
  if (inputPassword.value.length == 16) {
    // Copier le mot de passe
    inputPassword.select();
    document.execCommand("Copy");

    //changer le style du bouton copier
    copyBtn.style.background = "transparent";
    copyBtn.style.color = "#000";

    // Alert mots de passe copié
    alert("Mots de passe copié !");
  } else {
    alert("Veuillez générer un mot de passe");
  }
}
