import * as yup from "yup";


//test password to include number
yup.addMethod(yup.string, "IncludeNum", function (message) {
  return this.test("IncludeNum", message, function (value) {
    return /[0-9]/.test(value);
  });
});
//test password to include uppercase and lowercase
yup.addMethod(yup.string, "UpperLowerCases", function (message) {
  return this.test("UpperLowerCases", message, function (value) {
    return /[A-Z]/.test(value) && /[a-z]/.test(value);
  });
});

//password special symb validation for yup
yup.addMethod(yup.string, "specialSymb", function (message) {
  return this.test("specialSymb", message, function (value) {
    return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);
  });
});

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required!")
    .email("Please enter a valid email!"),
  password: yup.string().required("Password is required!"),
});