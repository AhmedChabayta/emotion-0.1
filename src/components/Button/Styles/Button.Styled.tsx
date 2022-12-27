import { css } from "@emotion/react";
import COLORS from "../../../Library/colors";

export const getVariantStyles = (
  variant: "solid" | "outline" | "link" | "text"
) => {
  switch (variant) {
    case "solid":
      return css`
        background-color: rgb(36, 160, 237);
      `;
    case "outline":
      return css`
        background-color: transparent !important;
        border-width: 1px;
        border-style: solid;
      `;
    case "link":
      return css`
        background-color: transparent !important;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-radius: 0;
      `;
    case "text":
      return css`
        background-color: transparent !important;
        border: none !important;
        border-radius: 0;
      `;
    default:
      return css`
        background-color: rgb(36, 160, 237);
      `;
  }
};

export const getIntentStyles = (
  intent: "success" | "danger" | "error" | "button"
) => {
  switch (intent) {
    case "success":
      return css`
        background-color: ${COLORS.green500};
        border-color: ${COLORS.green500};
      `;
    case "danger":
      return css`
        background-color: ${COLORS.orange800};
        border-color: ${COLORS.orange800};
      `;
    case "error":
      return css`
        background-color: ${COLORS.red500};
        border-color: ${COLORS.red500};
      `;
    default:
      return css`
        background-color: ${COLORS.teal500};
        border-color: ${COLORS.teal500};
      `;
  }
};

export const getSizeStyles = (size?: "lg" | "md" | "sm" | "xs") => {
  switch (size) {
    case "lg":
      return css`
        width: 155px;
        height: 48px;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        padding: 0px, 24px, 0px, 24px;
      `;
    case "md":
      return css`
        width: 132px;
        height: 40px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        padding: 0px, 16px, 0px, 16px;
      `;
    case "sm":
      return css`
        width: 114px;
        height: 32px;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 0px, 12px, 0px, 12px;
      `;
    case "xs":
      return css`
        width: 91px;
        height: 24px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        padding: 0px, 8px, 0px, 8px;
      `;
    default:
      return css`
        width: 132px;
        height: 40px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        padding: 0px, 16px, 0px, 16px;
      `;
  }
};
