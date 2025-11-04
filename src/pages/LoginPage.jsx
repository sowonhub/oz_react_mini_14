import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputFieldComponent from "./components/InputFieldComponent.jsx";

// <-------------------- function -------------------->

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

  // <-------------------- return -------------------->

  return (
    <Loginpage onSubmit={onSubmit}>
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
      <PrimaryBtn type="submit">로그인</PrimaryBtn>
      <LinkBtn to="/signup">회원가입</LinkBtn>
      <LinkBtn to="/">홈으로</LinkBtn>
    </Loginpage>
  );
}

// <-------------------- styled-components -------------------->

const Loginpage = styled.form`
  max-width: 360px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
`;

const PrimaryBtn = styled.button`
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 12px 16px;
  background: #374151; /* gray-700 */
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

const LinkBtn = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  padding: 12px 16px;
  background: #111827;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
`;
