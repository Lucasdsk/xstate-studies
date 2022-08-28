import { ComponentStory, ComponentMeta } from "@storybook/react";

import HorizontalStepper from "../components/OnBoardingUsingState";

export default {
  title: "Examples/Example using state",
  component: HorizontalStepper,
} as ComponentMeta<typeof HorizontalStepper>;

export const ExampleUsingState: ComponentStory<typeof HorizontalStepper> =
  () => <HorizontalStepper />;
