"use client";
import AuthRedirectSection from "@/_components/_common/AuthRedirectSection";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { useGoogleLogin } from "@react-oauth/google";
import { LoginValidations } from "@/_validations/authValidations";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import CommonButton from "@/_components/_common/CommonButton";

const Login = () => {
  const formConfig = useForm();
  const { handleSubmit } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <AuthRedirectSection
        text="Don't have an account? "
        linkText="Sign up"
        linkUrl="/sign-up"
        className="right-align"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login!</h2>
        <CommonTextInput
          fieldName="username"
          formConfig={formConfig}
          type="text"
          placeholder="Enter Username"
          rules={LoginValidations["userName"]}
          label="Username or email address"
        />
        <CommonTextInput
          fieldName="password"
          formConfig={formConfig}
          placeholder="Enter Password"
          rules={LoginValidations["password"]}
          label="Your password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={
            <Image
              src={showPassword ? "/icons/closedEye.svg" : "/icons/openEye.svg"}
              alt="Toggle Password Visibility Icon"
              width={24}
              height={24}
            />
          }
        />
        <AuthRedirectSection
          text=""
          linkText="Forgot your password"
          linkUrl="/forgot-password"
          className="text-right"
        />
        <CommonButton type="submit" className="sign-in-button" text="Sign in" />
        <AuthRedirectSection
          text="Don't have an acount? "
          linkText="Sign up"
          linkUrl="/sign-up"
        />
      </form>
      {/* <div className="social-login-section">
        <div className="or">Or</div>
        <button
          type="submit"
          onClick={handleLoginWithGoogle}
          className="social-login-button text-center px-5 py-2.5 rounded-full text-black text-sm tracking-wider font-medium border border-current outline-none bg-transparent  active:bg-[#333]"
        >
         <Image
            src="/icons/google-icon.svg"
            alt="Google Icon"
            width={24}
            height={24}
          />
          <div className="text">Continue with Google</div>
        </button>
      </div> */}
    </>
  );
};

export default Login;
