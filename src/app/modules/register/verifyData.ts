function   isValidPassword(password : any) : boolean {
  const passwordValue : string = password.value?? '';
  
  const passwordRegex : RegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const passwordCheck : boolean = passwordRegex.test(passwordValue);

  return passwordCheck;
}

function isEqualPassword(password : any, vPassword : any) : boolean{
  const passwordValue : string = password.value?? '';
  const vPasswordValue : string = vPassword.value?? '';

  return (password === vPassword);
}

function isEmptyPassword(password : any, vPassword : any) : boolean {
  const isPasswordRequired : boolean = password?.errors?.['required'];
  const isVPasswordRequired : boolean = vPassword?.errors?.['required'];

  return (isPasswordRequired || isVPasswordRequired);
}

export {
    isEmptyPassword,
    isValidPassword,
    isEqualPassword
}