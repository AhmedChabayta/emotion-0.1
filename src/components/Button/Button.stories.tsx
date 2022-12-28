import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Button from "./Button";

export default {
  title: "Emotion/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  variant: "solid",
  children: "Button",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Button",
};
export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Button",
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Button",
};
