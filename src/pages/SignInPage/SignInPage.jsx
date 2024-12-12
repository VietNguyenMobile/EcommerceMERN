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
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import Loading from "../../components/LoadingComponent/Loading";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as message from "../../components/Message/Message";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  // const mutation = useMutationHooks((data) => UserService.loginUser(data));

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("https://api.github.com/repos/TanStack/query").then((res) =>
  //       res.json()
  //     ),
  // });

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => UserService.loginUser(data),
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { data, error, isLoading, isSuccess, isError } = mutation;
  // console.log("SignInPage data", data);
  // console.log("SignInPage error", error);
  // console.log("SignInPage isLoading", isLoading);
  // console.log("isSuccess", isSuccess);

  useEffect(() => {
    if (isSuccess) {
      // message.success("Đăng nhập thành công");
      navigate("/");
      // console.log("data", data);
      localStorage.setItem("token", data?.access_token);
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log("decoded", decoded);
        // localStorage.setItem("user", JSON.stringify(decoded));
        if (decoded?.id) {
          handleGetDetailUser(decoded?.id, data?.access_token);
        }
      }
    } else if (isError) {
      message.error("Đăng nhập thất bại");
    }
  }, [isSuccess, isError]);

  const handleOnChangeEmail = (e) => {
    // console.log("handleOnChangeEmail value", value);
    // console.log("handleOnChangeEmail e.target.value", value.target.value);
    setEmail(e.target.value);
  };

  const handleGetDetailUser = async (userId, access_token) => {
    const res = await UserService.getDetailUser(userId, access_token);
    console.log("handleGetDetailUser res", res);
    dispatch(updateUser({ ...res.data, access_token }));
  };

  const handleOnChangePassword = (e) => {
    // console.log("handleOnChangePassword value", value);
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    console.log("Sign In", email, password);
    mutation.mutate({ email, password });
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
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>

          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          <Loading isLoading={!!isLoading}>
            <ButtonComponent
              disabled={email === "" || password === ""}
              textButton="Đăng nhập"
              onClick={handleSignIn}
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
            />
          </Loading>

          <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          <p>
            Chưa có tài khoản?{" "}
            <WrapperTextLight
              style={{ cursor: "pointer" }}
              onClick={handleNavigateSignUp}
            >
              Đăng ký
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

export default SignInPage;
