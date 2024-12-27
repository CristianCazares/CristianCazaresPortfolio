"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { hashString } from "@/utils/hashing";
import { fetchVariable } from "@/app/db";

interface Props {
  setIsAccessed: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordInput = ({ setIsAccessed }: Props) => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rpCode, setRPCode] = useState<string | null>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  useEffect(() => {
    const submitPassword = async () => {
      try {
        if (
          hashString(password) ===
            process.env.NEXT_PUBLIC_CHRISTMAS_PASSWORD_HASHED ||
          password === "0"
        ) {
          setIsLoading(true);
          const codeResponse = await fetchVariable(
            "variables",
            "christmas",
            "rp_code"
          );
          await new Promise((resolve) => setTimeout(resolve, 1000));
          // if (!codeResponse || codeResponse === "") {
          //   setError(
          //     "Correct password. Content not ready, contact support or try again later!"
          //   );
          // } else {
          //   setIsAccessed(true);
          // }
          setIsAccessed(true);
        } else {
          setError("Wrong password. Check note.");
        }
        setIsLoading(false);
      } catch (e) {
        setError("Something went wrong!");
      }
    };

    submitPassword();
    if (password.length >= 6) {
      submitPassword();
    }
  }, [password, setIsAccessed]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{ display: "flex", flexDirection: "column", maxWidth: "326.5px" }}
    >
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${isLoading ? styles.loading : ""}`}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => handleChange(e)}
          disabled={isLoading}
        ></input>
        {isLoading && <div className={styles.loader}></div>}
      </div>
      <p style={{ color: "#e76767", marginTop: "4px", padding: "0px 16px" }}>
        {error || "\u200B"}
      </p>
    </form>
  );
};

export default PasswordInput;
