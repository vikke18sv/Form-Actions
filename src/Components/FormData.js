import React from "react";
import { useState } from "react";
import Table from "./Table";
import Form from "./Form";

const FormData = () => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const newData = (data) => ({ ...data, [e.target.name]: e.target.value });
    setFormData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmpty = !Object.values(formData).every((res) => res === "");
    if (checkEmpty) {
      const lowercaseFormData = formData.name.toLowerCase();
      const lowercaseTableData = tableData.map((element) =>
        element.name.toLowerCase()
      );
      console.log(lowercaseFormData);
      console.log(lowercaseTableData);
      if (lowercaseTableData.includes(lowercaseFormData)) {
        alert(`"${formData.name}" already exists!`);
      } else {
        const id = tableData.length
          ? tableData[tableData.length - 1].id + 1
          : 1;
        formData["id"] = id;
        const newInput = (data) => [...data, formData];
        setTableData(newInput);
        const emptyData = { name: "", role: "" };
        setFormData(emptyData);
      }
    }
  };

  const handleDelete = (id) => {
    const newTable = tableData.filter((data) => data.id !== id);
    setTableData(newTable);
  };

  const handleEdit = (id) => {
    console.log(id);
    console.log(tableData);
    const rowEdited = tableData.find((f) => f.id === id);
    setFormData(rowEdited);
  };
  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
      <Table
        tableData={tableData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default FormData;
