"use client";
import Image from "next/image";
import React, { useState } from "react";
import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";
import styles from "./Auth.module.scss";
import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";
import AutoSignInCheckbox from "@/components/autoSignInCheckbox/AutoSignInCheckbox";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };
  const loginUser = (event) => {
    event.preventDefault();
    setIsLoading(true);
  };
  const signInWithGoogle = () => {
    // firebase code
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>
          <form className={styles.form} onSubmit={loginUser}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="ID(e-mail)"
              className={styles.control}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className={styles.group}>
              {/* 자동 로그인, 비밀번호 수정 */}
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(event) => setIsAutoLogin(event.target.checked)}
              />
            </div>
            <div className={styles.buttonGroup}>
              {/* Button */}Button
              <div>{/* Button */}Button</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
