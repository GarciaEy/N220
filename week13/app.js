function validatePassword() {
  const passwordRef = document.getElementById("password");
  //keyword typeof see what datatype
  //   console.log(passowrd.value.length);
  //   console.log(passowrd.value[3]);
  console.log("password: ", passwordRef.value);

  //   let validatePassword = false;
  let containsLowerCase = false;
  let containsNumber = false;

  // at least 1 number
  // at least 1 lowercase letter

  for (let i = 0; i < passwordRef.value.length; i++) {
    const currentCharacter = passwordRef.value;
    console.log(isNaN(passwordRef.value[i]));

    if (isNaN(currentCharacter) === false) {
      containsNumber = true;
    }

    if (
      currentCharacter === currentCharacter.toLowerCase() &&
      isNaN(currentCharacter)
    ) {
      containsLowerCase = true;
    }
  }

  const validPassword = containsLowerCase && containsNumber;

  if (validPassword) {
    alert("woo");
    passwordRef.value = "";
  } else {
    alert("do better");
  }
  console.log(containsNumber && containsLowerCase);
}

const newBtn = document.createElement("button");
newBtn.innerHTML = "Check Password";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);
