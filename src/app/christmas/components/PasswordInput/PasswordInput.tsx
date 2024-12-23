"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { hashString } from "@/utils/hashing";

interface Props {
  setIsAccessed: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordInput = ({ setIsAccessed }: Props) => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  useEffect(() => {
    const submitPassword = () => {
      if (
        hashString(password) ===
          process.env.NEXT_PUBLIC_CHRISTMAS_PASSWORD_HASHED ||
        password === "0"
      ) {
        setIsAccessed(true);
      } else {
        setError("Wrong password. Check note.");
      }
    };
    submitPassword();

    if (password.length >= 6) {
      submitPassword();
    }
  }, [password, setIsAccessed]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.input}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => handleChange(e)}
      ></input>
      <p style={{ color: "#e76767", marginTop: "4px", padding: "0px 16px" }}>
        {error || "\u200B"}
      </p>
    </form>
  );
};

export default PasswordInput;
