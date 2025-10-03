"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CustomButtonProps {
  title: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  showIcon?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function CustomButton({
  title,
  bgColor = "bg-blue-600",
  borderColor = "border-blue-600",
  textColor = "text-white",
  showIcon = false,
  icon,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-sm font-semibold shadow-sm transition-all duration-200",
        bgColor,
        borderColor,
        textColor,
      )}
    >
      {showIcon && icon && <span className="h-4 w-4">{icon}</span>}
      {title}
    </button>
  );
}
