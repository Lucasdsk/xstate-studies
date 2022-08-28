import { ComponentStory, ComponentMeta } from "@storybook/react";

import HorizontalStepper from "../components/OnBoardingUsingMachine01";

export default {
  title: "Examples/Basic example with machine",
  component: HorizontalStepper,
} as ComponentMeta<typeof HorizontalStepper>;

export const ExampleUsingMachineOne: ComponentStory<typeof HorizontalStepper> =
  () => <HorizontalStepper />;
