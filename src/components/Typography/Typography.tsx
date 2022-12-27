import React from "react";
import styled from "@emotion/styled";
import { getSizeStyles } from "./Styles/Typography.Styled";

export interface TextProps {
  size?: "xs" | "sm" | "md" | "lg" | "2xl" | "3xl" | "4xl" | "5xl";
  variant?: "display" | "title" | "text" | "small";
  children: React.ReactNode;
  href?: string;
  onClick: (e: any) => any;
}

const Text = styled.p<TextProps>`
  ${({ size }) => getSizeStyles(size)};
`;

const Typography = ({ size, children, onClick, href, ...rest }: TextProps) => {
let SIZE;
    if (size === "xs" || "sm" || "md" || "lg" || "2xl" || "3xl" || "4xl" || "5xl"){
      
    };
  return (
    <Text onClick={onClick} size={size} {...rest}>
      {children}
    </Text>
  );
};
export default Typography;
