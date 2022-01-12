import { useState } from "react";

const useForm = (inicalState) => {
  const [form, setForm] = useState(inicalState);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(inicalState);
  };

  return [form, handleInputChange, clear, setForm];
};

export default useForm;
