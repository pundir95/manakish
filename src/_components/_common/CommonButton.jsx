"use client";
import React from "react";

// const CommonButton = ({type, onClick, loader, className="", disabled=false, text}) => {
const CommonButton = ({
  type,
  loader,
  className = "",
  disabled = false,
  text,
}) => {
  return (
    <>
      <button disabled={disabled} type={type} className={className}>
        {/* {loader ? "loading" : text} */}
        {/* {`${text} ${loader ? "<Loader/>" : ""}`} */}
        {text}
      </button>
    </>
  );
};

export default CommonButton;
