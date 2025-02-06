"use client";

import CommonTextInput from "@/_form-fields/CommonTextInput";
import React from "react";
import { useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";

const ProfileSidebar = ({ isOpen, onClose }) => {
  const formConfig = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formConfig;

  const onSubmit = (values) => {
    console.log(values, "billing details");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-[#FFFFFF] text-white p-4 rounded-l-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-40`}
    >
      <div className="flex items-center justify-between">
        <div className="text-black">Edit Profile</div>
        <button
        className="text-gray-500 hover:text-black"
        onClick={onClose}
      >
        ✖
      </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="overflow-y-auto max-h-[calc(100vh-100px)] hide-scrollbar"
      >
         <div className="mt-8 mb-4">
        <ImageUpload/>
      </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            {...register("fullName", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Name must contain only alphabets",
              },
            })}
            placeholder="Enter your Name"
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone must contain only numbers",
              },
            })}
            placeholder="Phone Number"
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email format not correct",
              },
            })}
            placeholder="Email"
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Gender
          </label>
          <select
            name="gender"
            {...register("gender", {
              required: "Gender is required",
            })}
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none bg-white"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500">{errors.gender.message}</p>
          )}
        </div>

        {/* Language Select Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Preferred Language
          </label>
          <select
            name="language"
            {...register("language", {
              required: "Language is required",
            })}
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none bg-white"
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
          {errors.language && (
            <p className="text-red-500">{errors.language.message}</p>
          )}
        </div>

        {/* Old Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            {...register("oldPassword", {
              required: "Old password is required",
            })}
            placeholder="Enter old password"
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
          />
          {errors.oldPassword && (
            <p className="text-red-500">{errors.oldPassword.message}</p>
          )}
        </div>

        {/* New Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Enter new password"
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
          />
          {errors.newPassword && (
            <p className="text-red-500">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm New Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === formConfig.getValues("newPassword") ||
                "Passwords do not match",
            })}
            placeholder="Confirm new password"
            className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
          <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#34552d] text-white px-4 py-2 rounded-full"
        >
          Update Profile
        </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSidebar;
