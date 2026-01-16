import InputField from "./InputField";
import MyButton from "./MyButton";
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // TODO 7: Log all of the values to the console
    console.log("Name:", form.name);
    console.log("Email:", form.email);
    console.log("Phone Number:", form.phoneNumber);
    // TODO 7: Reset the form after submitting it
    const [form, setForm] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      sliderVal: 70,
    });
  }

  return (
    <form>
      <InputField
        label="Name"
        placeholder="Enter your name..."
        value={form.name}
        name="name"
        onChange={handleChange}
      />
      {/* TODO 6: Add input fields for email and phone  */}

      {/* TODO 6: Add the MyButton component with the onSubmit function as its onClick */}
      <InputField
        label="Email"
        placeholder="Enter your email..."
        value={form.email}
        name="email"
        onChange={handleChange}
      />
      <InputField
        label="Phone"
        placeholder="506-123-4567"
        value={form.phoneNumber}
        name="phoneNumber"
        onChange={handleChange}
      />
      <Slider
        size="large"
        value={form.sliderVal}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={(e, newValue) =>
          setForm((prev) => ({ ...prev, sliderVal: Number(newValue) }))
        }
      />

      <MyButton onClick={onSubmit} />
    </form>
  );
}
