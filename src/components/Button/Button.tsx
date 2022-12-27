import * as React from "react";
import Ripple from "./Ripple";
import styled from "@emotion/styled";
import {
  getIntentStyles,
  getSizeStyles,
  getVariantStyles,
} from "./Styles/Button.Styled";

export interface ButtonProps {
  variant: "solid" | "outline" | "link" | "text";
  size: "xs" | "sm" | "md" | "lg";
  intent: "success" | "danger" | "error" | "button";
  children: React.ReactNode;
}

const Btn = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  overflow: hidden;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: ${(props) => props.color};
  transition: transform 200ms linear;
  &:active {
    transform: scale(0.9);
  }
  ${({ variant }) => getVariantStyles(variant)};
  ${({ intent }) => getIntentStyles(intent)};
  ${({ size }) => getSizeStyles(size)};
`;

const Button = ({ variant, size, intent, children, ...rest }: ButtonProps) => (
  <Btn variant={variant} size={size} intent={intent} {...rest}>
    {children}
    <Ripple />
  </Btn>
);

export default Button;
