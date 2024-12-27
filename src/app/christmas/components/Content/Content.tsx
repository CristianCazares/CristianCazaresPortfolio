"use client";
import { useState } from "react";
import PasswordInput from "../PasswordInput";
import Card from "../Card";
import cardStyles from "../../components/Card/style.module.css";

const Content = () => {
  const [isAccessed, setIsAccessed] = useState<boolean>(true);

  return (
    <div>
      {!isAccessed ? <PasswordInput setIsAccessed={setIsAccessed} /> : <Card />}
    </div>
  );
};

export default Content;
