import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";
import React from "react";

export default {
  title: "Tailwind/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Title = Template.bind({});

Title.args = {
  children: "example text",
  size: "md",
};
