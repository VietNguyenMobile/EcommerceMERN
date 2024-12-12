import React, { useState, useEffect } from "react";
import { Image } from "antd";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/sign_in.png";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as message from "../../components/Message/Message";

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const mutation = useMutation({
    mutationFn: (data) => UserService.signUpUser(data),
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { data, error, isLoading, isSuccess, isError } = mutation;
  console.log("SignUpPage data", data);
  console.log("SignUpPage error", error);
  console.log("SignUpPage isLoading", isLoading);

  useEffect(() => {
    if (isSuccess) {
      handleNavigateSignIn();
      message.success("Đăng ký thành công");
    } else if (isError) {
      message.error("Đăng ký thất bại");
    }
  }, [isSuccess, isError]);

  const handleSignUp = () => {
    console.log("Sign Up", email, password, confirmPassword);
    mutation.mutate({ email, password, confirmPassword });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#FFF",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnChangeEmail}
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
              }}
            >
              {isShowPassword ? (
                <EyeFilled style={{ fontSize: "16px" }} />
              ) : (
                <EyeInvisibleFilled style={{ fontSize: "16px" }} />
              )}
            </span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              style={{ marginBottom: "10px" }}
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
              }}
            >
              {isShowConfirmPassword ? (
                <EyeFilled style={{ fontSize: "16px" }} />
              ) : (
                <EyeInvisibleFilled style={{ fontSize: "16px" }} />
              )}
            </span>
            <InputForm
              placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              style={{ marginBottom: "10px" }}
              value={confirmPassword}
              onChange={handleOnChangeConfirmPassword}
            />
          </div>

          <ButtonComponent
            disabled={!(email && password && confirmPassword)}
            textButton="Đăng ký"
            styleButton={{
              backgroundColor: "rgb(255,57,69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
            }}
            size={40}
            onClick={handleSignUp}
          />
          <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          <p>
            Bạn đã có tài khoản?{" "}
            <WrapperTextLight
              style={{ cursor: "pointer" }}
              onClick={handleNavigateSignIn}
            >
              Đăng nhập
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="Logo Sign In"
            height="200px"
            width="200px"
          />
          <h4>Mua sắm tại LTTD</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
