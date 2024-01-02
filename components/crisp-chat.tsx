"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("94d8f92a-44a4-45a8-912b-ec1abe8f7c30");
  }, []);
  return null;
};
