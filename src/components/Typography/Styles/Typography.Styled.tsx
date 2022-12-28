import { css } from "@emotion/react";

export const getSizeStyles = (
  size?: "xs" | "sm" | "md" | "lg" | "2xl" | "3xl" | "4xl" | "5xl"
) => {
  switch (size) {
    case "xs":
      return css`
        font-size: 14px;
        font-weight: 700;
        line-height: 16.8px;
      `;
    case "sm":
      return css`
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
      `;
    case "md":
      return css`
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
      `;
    case "lg":
      return css`
        font-size: 30px;
        font-weight: 700;
        line-height: 36px;
      `;
    case "2xl":
      return css`
        font-size: 36px;
        font-weight: 600;
        line-height: 43.2px;
      `;
    case "3xl":
      return css`
        font-size: 48px;
        font-weight: 600;
        line-height: 48px;
      `;
    case "4xl":
      return css`
        font-size: 60px;
        font-weight: 600;
        line-height: 60px;
      `;
    case "5xl":
      return css`
        font-size: 72px;
        font-weight: 600;
        line-height: 72px;
      `;

    default:
      return css`
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      `;
  }
};
