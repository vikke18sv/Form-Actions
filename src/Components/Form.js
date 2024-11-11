import React from "react";

const Form = ({ handleChange, handleSubmit, formData }) => {
  return (
    <div>
      <label htmlFor="name">Name :</label>
      <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
        placeholder="Antony"
      />
      <label htmlFor="role">Role :</label>
      <input
        type="text"
        onChange={handleChange}
        value={formData.role}
        name="role"
        placeholder="admin"
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
};

export default Form;
