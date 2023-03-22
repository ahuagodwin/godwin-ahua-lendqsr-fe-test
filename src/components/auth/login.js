import React, { useState } from "react";
import { Style } from "../../common/styled/Styled";
import { Icons } from "../../constant/Icons";
import { Images } from "../../assets/import";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../constant/Schema";
import { toast } from "react-hot-toast";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "godwincahua@gmail.com",
      password: "password",
    },
    validationSchema: loginSchema,
  });

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const { email, password } = formik.values;
    if (email === "godwincahua@gmail.com" && password === "password") {
      // If email and password match the default values, navigate to dashboard and display success message
      toast.success("Login successful!");
      navigate("/dashboard/user");
      setIsLoading(false);
    } else {
      // If email and password do not match the default values, display error message
      toast.error("Please check your email and password.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Style.PublicLayout>
        {/* left */}
        <Style.Wrapper sx="auth__layout__left">
          <Icons.LendqsrLogo />
          <Style.Img img={Images.LoginImg} alt="" />
        </Style.Wrapper>

        {/* right */}
        <Style.Wrapper sx="auth__layout__right">
          <Style.Form onSubmit={handleSubmit}>
            <Style.Text>Welcome!</Style.Text>
            <Style.Text>Enter details to login</Style.Text>

            <Style.Section sx="auth__login__wrapper">
              <Style.Input type="email" name="email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email && (
                <div>{formik.errors.email}</div>
              )}
              <Style.Input type="password" name="password" {...formik.getFieldProps("password")} />
              {formik.touched.password && formik.errors.password && (
                <div>{formik.errors.password}</div>
              )}
              <Style.Text>Forgot Password?</Style.Text>
            </Style.Section>
            <Style.Button type="submit" name="Login" isLoading={isLoading} />
          </Style.Form>
        </Style.Wrapper>
      </Style.PublicLayout>
    </>
  );
};

export default Login;
