"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { hashString } from "@/utils/hashing";
import { fetchVariable } from "@/app/db";

interface Props {
  setIsAccessed: React.Dispatch<React.SetStateAction<boolean>>;
}

const TARGET_TIME = new Date("2025-01-01 00:00:00-06:00");

const PasswordInput = ({ setIsAccessed }: Props) => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [isTimeError, setIsTimeError] = useState<boolean>(false);

  const isDatePast = (date: Date): boolean => {
    const nowInTimeZone = new Date(
      new Date(Date.now()).toLocaleString("en-US", {
        timeZone: "America/Mexico_City",
      })
    );

    return date.getTime() < new Date(Date.now()).getTime();
  };

  useEffect(() => {
    const targetTime = new Date(TARGET_TIME).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  useEffect(() => {
    isDatePast(TARGET_TIME);
    const submitPassword = async () => {
      try {
        if (
          hashString(password) ===
            process.env.NEXT_PUBLIC_CHRISTMAS_PASSWORD_HASHED ||
          password === "0"
        ) {
          setIsLoading(true);

          await new Promise((resolve) => setTimeout(resolve, 1000));

          const isContentReadyResponse = await fetchVariable(
            "variables",
            "christmas",
            "is_content_ready"
          );

          if (!isDatePast(TARGET_TIME)) {
            setIsTimeError(true);
          } else if (
            !isContentReadyResponse ||
            isContentReadyResponse !== true
          ) {
            setError(
              "Correct password. Content not ready, contact support or try again later!"
            );
          } else {
            setIsAccessed(true);
          }
        } else {
          setError("Wrong password. Check note.");
        }
        setIsLoading(false);
      } catch (e) {
        setError("Something went wrong!");
      }
    };

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
      {isTimeError ? (
        <p style={{ color: "#e76767", marginTop: "4px", padding: "0px 16px" }}>
          Come back later! Time left: {timeLeft}
        </p>
      ) : (
        <p style={{ color: "#e76767", marginTop: "4px", padding: "0px 16px" }}>
          {error || "\u200B"}
        </p>
      )}
    </form>
  );
};

export default PasswordInput;
