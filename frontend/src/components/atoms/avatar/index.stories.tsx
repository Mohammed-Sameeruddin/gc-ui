import React from "react";
import Avatar from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import avatarImage from "../../../assets/images/avatarImage.png";


export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Default = Template.bind({});

Default.args = {
    src:avatarImage
};



