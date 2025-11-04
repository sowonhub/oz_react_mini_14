// SignUpPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import InputFieldComponent from "./components/InputFieldComponent.jsx";

export default function SignUpPage() {
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) =>
    setSignUp((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!/^[\w가-힣]{2,8}$/.test(signUp.username))
      next.username = "2~8자, 숫자/한글/영문 사용";
    if (signUp.password.length < 8)
      next.password = "비밀번호는 8자 이상이어야 합니다.";
    if (signUp.password2 !== signUp.password)
      next.password2 = "비밀번호가 일치하지 않습니다.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // 회원가입 요청…
  };

  return (
    <SignUpPage onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <InputFieldComponent
        label="아이디"
        name="username"
        placeholder="example"
        value={signUp.username}
        onChange={onChange}
        error={errors.username}
        required
      />
      <InputFieldComponent
        label="비밀번호"
        name="password"
        type="password"
        value={signUp.password}
        onChange={onChange}
        error={errors.password}
        required
        autoComplete="new-password"
      />
      <InputFieldComponent
        label="비밀번호 확인"
        name="password2"
        type="password"
        value={signUp.password2}
        onChange={onChange}
        error={errors.password2}
        required
        autoComplete="new-password"
      />
      <Link
        to="/signup"
        className="w-full rounded-md bg-gray-700 px-4 py-2 text-white block text-center"
      >
        회원가입
      </Link>
    </SignUpPage>
  );
}
