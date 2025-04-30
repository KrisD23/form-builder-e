import FormBuilder from "@/components/form/form-builder";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create Form</h1>
        <p className="text-gray-500 mt-5">Design a new form</p>
      </div>

      {/* Form Builder */}
      <FormBuilder />
    </div>
  );
};

export default page;
