"use client";

import { Text } from "@chakra-ui/react";

export const Footer = () => {
  const now = new Date().getFullYear();
  return (
    <footer className="bg-slate-100">
      <div>
        <Text className="text-center py-4">
          Powered by <b>HappyFox Developers&copy;</b> <span>{now}</span>
        </Text>
      </div>
    </footer>
  );
};
