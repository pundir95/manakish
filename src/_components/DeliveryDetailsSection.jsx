"use client";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import React from "react";
import { useForm } from "react-hook-form";
const DELIVERY_DATES = [
  {
    day: "THU",
    date: "19-09",
    time: "Before 2 pm",
  },
  {
    day: "FRI",
    date: "20-09",
    time: "Before 2 pm",
  },
  {
    day: "SAT",
    date: "20-09",
    time: "Before 2 pm",
  },
  {
    day: "SUN",
    date: "20-09",
    time: "Before 2 pm",
  },
  {
    day: "MON",
    date: "20-09",
    time: "Before 2 pm",
  },
];
const DeliveryDetailsSection = () => {
  const formConfig = useForm();
  const { handleSubmit } = formConfig;
  const onSubmit = (values) => {
    console.log(values, "billing details");
  };
  return (
    <div>
      Delivery Details
      <CommonTextInput
        label="Expected Delivery"
        fieldName="expected_delivery"
        formConfig={formConfig}
        placeholder="Select Date"
      />
      <div className="dates-listing flex items-center space-x-4">
        {DELIVERY_DATES?.map(({ day, date, time }) => (
          <div className="date">
            <div className="day">{day}</div>
            <div className="date">{date}</div>
            <div className="time">{time}</div>
          </div>
        ))}
        <div className="date">Custom date</div>
      </div>
      <CommonTextInput
        type="textarea"
        rows={6}
        label="Extra Notes"
        fieldName="extra_notes"
        formConfig={formConfig}
      />
    </div>
  );
};

export default DeliveryDetailsSection;
