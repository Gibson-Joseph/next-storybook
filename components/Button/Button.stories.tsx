import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  // Naming stories
  title: "All Buttons/Buttons",
  // Setup automated documentation
  // https://storybook.js.org/docs/react/writing-docs/autodocs#setup-automated-documentation
  tags: ["autodocs"],
  // Using parameters
  parameters: {
    // https://storybook.js.org/docs/react/writing-stories/introduction#using-parameters

    // This would helps you to change your storybook template color
    backgrounds: {
      values: [
        { name: "White", value: "#fff" },
        { name: "Black", value: "#000" },
        { name: "Red", value: "#f00" },
        { name: "Green", value: "#0f0" },
        { name: "Blue", value: "#00f" },
      ],
    },
  },
  // using-decorators
  // https://storybook.js.org/docs/react/writing-stories/introduction#using-decorators
  decorators: [
    // A simple example is adding padding to a component’s stories.
    (Story) => (
      <div
        style={{
          margin: "3em",
        }}
      >
        <Story />
      </div>
    ),
  ],
  // trigger the onClick action
  argTypes: {
    handleClick: {
      action: "handleClick",
    },
  },
  // https://storybook.js.org/docs/react/writing-stories/args#component-args

  args: {
    // Now all Button stories will be btnName
    btnName: "Logout",
  },
};

export default meta;
type story = StoryObj<typeof Button>;

export const Small: story = {
  // https://storybook.js.org/docs/react/writing-stories/args
  args: {
    background: "bg-blue-400",
    // btnName: "Submit",
    size: "small",
  },
};

export const Medium: story = {
  args: {
    background: "bg-blue-400",
    btnName: "Submit",
    size: "medium",
  },
  // Component parameters
  // https://storybook.js.org/docs/react/writing-stories/parameters#component-parameters
  parameters: {
    backgrounds: {
      values: [{ name: "red", value: "#f00" }],
    },
  },
};

export const Large: story = {
  args: {
    background: "bg-blue-400",
    btnName: "Submit",
    size: "large",
    // handleClick: () => console.log("Button clicked"),
  },
  // Component decorators
  // https://storybook.js.org/docs/react/writing-stories/decorators#component-decorators
  decorators: [
    (Story) => (
      <div className="bg-indigo-200 py-3 px-3 flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
};

export const PrimaryColor: story = {
  name: "I am the primary", // You can rename any particular story you need
  args: {
    background: "bg-blue-800",
    btnName: "Submit",
    size: "medium",
    textColor: "text-white",
  },
};

// https://storybook.js.org/docs/react/writing-stories/introduction
export const SecondryColor: story = {
  args: {
    //// One Method
    // background: "bg-green-300",
    // btnName: "Login",
    // size: "large",
    // textColor: "text-slate-700",

    //// Second method
    ...PrimaryColor.args,
    background: "bg-green-300",
    textColor: "text-slate-700",
  },
};
