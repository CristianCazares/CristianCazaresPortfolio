"use client";
import { useEffect, useState } from "react";
import PasswordInput from "../PasswordInput";
import Card from "../Card";

const Content = () => {
  const [isAccessed, setIsAccessed] = useState<boolean>(false);
  const [isScreenValid, setIsScreenValid] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setIsScreenValid(mediaQuery.matches);

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      {!isAccessed ? (
        <PasswordInput setIsAccessed={setIsAccessed} />
      ) : isScreenValid ? (
        <Card />
      ) : (
        <p>A PC is required for better experience.</p>
      )}
    </div>
  );
};

export default Content;
