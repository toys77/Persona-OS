import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  to?: string;
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  fullWidth,
  to,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    `button--${variant}`,
    fullWidth ? "button--full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
