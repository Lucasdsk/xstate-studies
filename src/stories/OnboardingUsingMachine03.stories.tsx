import { ComponentStory, ComponentMeta } from "@storybook/react";

import HorizontalStepper from "../components/OnBoardingUsingMachine03";

export default {
  title: "Examples/Basic example with machine",
  component: HorizontalStepper,
} as ComponentMeta<typeof HorizontalStepper>;

export const ExampleUsingMachineThree: ComponentStory<
  typeof HorizontalStepper
> = () => <HorizontalStepper />;
