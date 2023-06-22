import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Headers from "./headerLoginForm";
import { loginFormSchema } from "./formValidator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { baseUrl } from "../api/url";



export default function LoginPage(props) {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginFormSchema) });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLoginUser = props.setLoginUser
  const redirect = useNavigate();


  
  const onSubmit = async (formData) => {

    const response = await axios.post(baseUrl + "students/login", {
      email: formData.email,
      password: formData.password
    });

    console.log(response.data);
    if (response.data) {
    //   localStorage.setItem('profileId', response.data.accessToken);

      setLoginUser();

      toast.success(`Login successful, ${email}`, {
        autoClose: 3000,
        toastId: "login-success"

      })
      redirect('/student')
    } else {
      toast.error("Login failed!", {
        autoClose: 3000,
        toastId: "login-failed"
      })
      redirect('/')
    }
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)} class=' d-flex flex-column align-items-start ps-4 pt-2'>
      <Headers />
      <div class='w-50'>
        <input {...register("email")} placeholder="Email" name='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
        {errors.email && (
          <p className="loginFormError">
            {errors.email.message}
          </p>
        )}
        <br />
        <input {...register("password")} placeholder="Password" type='password' name='password' value={password} onChange={(evt) => setPassword(evt.target.value)} />
        {errors.password && (
          <p className="loginFormError">
            {errors.password.message}
          </p>
        )}
        <br />

        <input type="submit" value='Login' />
      </div>
    </form>

  );
}