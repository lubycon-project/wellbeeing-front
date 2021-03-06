import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;
/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;


const AuthForm = () => {
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form>
                <StyledInput
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                <ButtonWithMarginTop gray halfWidth>
                    회원가입
                </ButtonWithMarginTop>
                <ButtonWithMarginTop cyan halfWidth>
                    로그인
                </ButtonWithMarginTop>
            </form>
            <Footer>
                <Link to="/register">비밀번호를 잊으셨나요?</Link>
            </Footer>
            <form>
                <ButtonWithMarginTop green fullWidth>
                    네이버 로그인
                </ButtonWithMarginTop>
                <ButtonWithMarginTop blue fullWidth>
                    페이스북 로그인
                </ButtonWithMarginTop>
                <ButtonWithMarginTop red fullWidth>
                    구글 로그인
                </ButtonWithMarginTop>
            </form>
        </AuthFormBlock>
    );
};

export default AuthForm;