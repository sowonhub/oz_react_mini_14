import { useState } from "react";
import { InputFieldComponent } from "./components/InputFieldComponent";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
}
