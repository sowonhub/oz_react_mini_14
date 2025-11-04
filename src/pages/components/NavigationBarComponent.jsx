import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useDebounceHook from "./hooks/useDebounceHook.js";
import useTmdbKeywordDataHook from "../assets/data/hooks/useTmdbKeywordDataHook.js";

// <-------------------- function -------------------->

export default function NavigationBarComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParam = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordParam);

  const debouncedKeyword = useDebounceHook(keyword, 100);
  useTmdbKeywordDataHook(debouncedKeyword);

  useEffect(() => {
    if (keyword.trim() === "") {
      const params = new URLSearchParams(searchParams);
      params.delete("keyword");
      setSearchParams(params);
    } else {
      setSearchParams({ keyword });
    }
  }, [keyword, searchParams, setSearchParams]);

  // <-------------------- return -------------------->

  return (
    <NavigationbarComponent>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Logo>🎬 WISH MOVIE</Logo>
      </Link>

      <SearchBox>
        <input
          name="q"
          type="text"
          placeholder="tell me your wish 🧞‍♂️"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SearchBox>
      <Buttons>
        <LoginBtn to="/login">로그인</LoginBtn>
        <SignupBtn to="/signup">회원가입</SignupBtn>
      </Buttons>
    </NavigationbarComponent>
  );
}

// <-------------------- styled-components -------------------->

const NavigationbarComponent = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  overflow: hidden;
  gap: 10px;
`;

const Logo = styled.h1`
  font-size: 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #757575;
`;

const SearchBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 15px;
    font-size: 16px;
    background-color: #bafd00;
  }
`;

// const SearchResults = styled.div`
//   position: absolute;
//   top: 70px;
//   background-color: #111;
//   width: 300px;
//   max-height: 400px;
//   overflow-y: auto;
//   color: white;
//   border-radius: 8px;
//   padding: 10px;
// `;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

const LoginBtn = styled(Link)`
  background: none;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  padding: 5px 15px;
  cursor: pointer;
`;

const SignupBtn = styled(Link)`
  background-color: white;
  color: #141414;
  border: none;
  border-radius: 15px;
  padding: 5px 15px;
  cursor: pointer;
`;
