import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputFieldComponent from "./components/InputFieldComponent.jsx";

// <-------------------- function -------------------->

export default function SignUpPage() {
  const [signUp, setSignUp] = useState({
    email: "",
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

  // <-------------------- return -------------------->

  return (
    <SignUppage onSubmit={onSubmit}>
      <InputFieldComponent
        label="이메일"
        name="email"
        type="email"
        placeholder="example@oz.co.kr"
        value={signUp.email}
        onChange={onChange}
        error={errors.email}
        required
        autoComplete="email"
        inputMode="email"
      />

      <InputFieldComponent
        label="아이디"
        name="username"
        placeholder="example"
        value={signUp.username}
        onChange={onChange}
        error={errors.username}
        required
        // hint="2~8자, 숫자/한글/영문 사용"
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
      <PrimaryBtn type="submit">회원가입</PrimaryBtn>
      <LinkBtn to="/login">로그인으로</LinkBtn>
      <LinkBtn to="/">홈으로</LinkBtn>
    </SignUppage>
  );
}

// <-------------------- styled-components -------------------->

const SignUppage = styled.form`
  max-width: 420px;
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
  background: #111827; /* gray-900 */
  color: #fff;
  font-weight: 600;
  text-decoration: none;
`;
