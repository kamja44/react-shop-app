"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/firebase/firebase";
import { usePathname } from "next/navigation";
import InnerHeader from "../innerHeader/InnerHeader";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "@/redux/slice/authSlice";

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("user", user);
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        // 유저 정보를 리덕스 스토어에 저장하기
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.userName : displayName,
            userId: user.uid,
          })
        );
      } else {
        setDisplayName("");
        // 유저 정보 리덕스 스토어에서 파기
        dispatch(
          REMOVE_ACTIVE_USER({
            email: null,
            userName: null,
            userId: null,
          })
        );
      }
    });
  }, [dispatch, displayName]);

  const logoutUser = (event) => {
    signOut(auth)
      .then(() => {
        toast.success("로그아웃 되었습니다.");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/reset"
  )
    return null;
  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/login"}>로그인</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/admin/dashboard"}>관리자</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/order-history"}>주문 목록</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              로그아웃
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>제휴 마케팅</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>쿠팡 플레이</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>고객센터</Link>
          </li>
        </ul>
      </div>
      {pathname.startsWith("/admin") ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
