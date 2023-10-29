import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  padding: 0; /* Default padding for mobile */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 200px;
    border: 2px solid #ccc;
    padding: 20px; /* Padding for desktop */
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */

  @media (min-width: 768px) {
    /* padding: 40px; */
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  /* padding: 20px; */

  box-shadow: 1px 1px 4px 1px gray;
  border-radius: 20px;
  @media (min-width: 768px) {
    /* padding: 40px; */
  }
`;

const FormDiv = styled.div`
  width: 80%;
  max-width: 400px;
  border: 2px red;
`;
const H1 = styled.div`
  text-align: center;
  color: #04072f;

  font-family: Poppins;
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: center;
`;

const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #1575a7;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChangePasswordLink = styled.a`
  text-decoration: none;
  color: #f78719;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 90%;
  width: 80%;
`;
const CheckBoxinput = styled.div`
  display: flex;
  justify-content: space-between;
`;

function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login button clicked");
  };

  return (
    <LoginContainer>
      <LeftSide>
        <Image
          src="../../public/undraw_authentication_re_svpt 1.png"
          alt="Login"
        />
      </LeftSide>
      <RightSide>
        <FormDiv>
          <H1> LOGIN</H1>
          <p>Login ID</p>

          <form onSubmit={handleSubmit}>
            <InputField type="text" placeholder="Username" />
            <InputField type="password" placeholder="Password" />

            <CheckBoxinput>
              <div>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember Me
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={() => setAgreeToTerms(!agreeToTerms)}
                  />
                  Agree to Terms & Conditions
                </CheckboxLabel>
              </div>
              <ChangePasswordLink href="/change-password">
                Change Password
              </ChangePasswordLink>
            </CheckBoxinput>

            <SubmitButton type="submit">Login</SubmitButton>

            <p>
              Don’t have an account? <a href="/register">Register Here</a>
            </p>
          </form>
        </FormDiv>
      </RightSide>
    </LoginContainer>
  );
}

export default LoginScreen;
