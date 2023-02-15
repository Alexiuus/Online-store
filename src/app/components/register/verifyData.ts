function   isValidPassword(password : any) : boolean {
  const passwordValue : string = password.value?? '';
  
  const passwordRegex : RegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const passwordCheck : boolean = passwordRegex.test(passwordValue);

  return passwordCheck;
}

function isEqualPassword(password : any, vPassword : any) : boolean{
  const passwordValue : string = password.value?? '';
  const vPasswordValue : string = vPassword.value?? '';

  return (passwordValue === vPasswordValue);
}

function isEmptyPassword(password : any) : boolean {
  const isPasswordRequired : boolean = password?.errors?.['required']?? false;

  return isPasswordRequired;
}

export {
    isEmptyPassword,
    isValidPassword,
    isEqualPassword
}