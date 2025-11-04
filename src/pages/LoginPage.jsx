import { useState } from "react";
import { Link } from "react-router-dom";
import InputFieldComponent from "./components/InputFieldComponent.jsx";

export default function LoginPage() {
  const [login, setlogin] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const onChange = (e) =>
    setlogin((p) => ({ ...p, [e.target.name]: e.target.value }));
  const validate = () => {
    const next = {};
    if (!login.email) next.email = "이메일을 입력해주세요.";
    if (!login.password) next.password = "비밀번호를 입력해주세요.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // 로그인 로직…
  };

  return (
    <LoginPage onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <InputFieldComponent
        label="이메일"
        name="email"
        type="email"
        placeholder="example@oz.co.kr"
        value={login.email}
        onChange={onChange}
        error={errors.email}
        required
        autoComplete="email"
        inputMode="email"
      />
      <InputFieldComponent
        label="비밀번호"
        name="password"
        type="password"
        placeholder="••••••••"
        value={login.password}
        onChange={onChange}
        error={errors.password}
        required
        autoComplete="current-password"
      />
      <Link
        to="/login"
        className="w-full rounded-md bg-gray-700 px-4 py-2 text-white block text-center"
      >
        로그인
      </Link>
    </LoginPage>
  );
}
