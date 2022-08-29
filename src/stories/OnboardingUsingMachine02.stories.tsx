import { ComponentStory, ComponentMeta } from "@storybook/react";

import HorizontalStepper from "../components/OnBoardingUsingMachine02";

export default {
  title: "Examples/Basic example with machine",
  component: HorizontalStepper,
} as ComponentMeta<typeof HorizontalStepper>;

export const ExampleUsingMachineTwo: ComponentStory<typeof HorizontalStepper> =
  () => <HorizontalStepper />;
