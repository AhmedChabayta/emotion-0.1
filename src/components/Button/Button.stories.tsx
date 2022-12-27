import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Emotion/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
