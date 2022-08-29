import { createMachine } from "xstate";
import { assign } from "xstate/lib/actions";

interface OnBoardingContext {
  userName: string;
}

type OnBoardingMachineEvents =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "SET_USER_NAME"; value: string };

export const OnBoardingSteps = {
  chooseUsername: 0,
  setBasicInfo: 1,
  confirmation: 2,
  done: 3,
};

export enum OnBoardingStates {
  CHOOSE_USER_NAME = "chooseUsername",
  SET_BASIC_INFO = "setBasicInfo",
  CONFIRMATION = "confirmation",
  DONE = "done",
}

export interface OnBoardingMachineContext {}

const onBoardingMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QHsB2AhZBDAThAlqlAHQDGAFssrGAKo06pYC2YAxAHICiAGgCqJQAB2r4ALvjSCQAD0QAmAMzzi8tQA4A7ABYtARgCsWxeoA0IAJ6I9mvcQCcANkfrFe7ffkHHABiUBff3M0TFwCIjJKajoGJlY2AGUuPgB9WiSAJRSOAEEAWS5pEVhxSVRpOQRNA2I9PR8PbQMm7T11R01zKwR5LWIG+01NJ09bez1A4IxsPEISGjF0LBLSAElUADNkTl4BJBBi0ql9yu1HFVsfe2v5bR869XlOy2tPYk1lRybNdXUDB8mIBCM3C8zAi2W+DWm22AAUMlwAGpFUQSY6gSpqbS1O7OIyeJ5YrrWRzEdQ+AwmPzaVquJqKQHAsJzMhoDb4HDMLBo1A7fgoko8iqIRzXWqDJ7uPS+dTuYkIeo+WrORzeQai3QBIJA6bMiKkNkcrk8tjwpECo7lE6IM4XWWKbTVeyO+RXRzyt4GHzehoGJz-L0GQLa1DICBwaRM2b6qI0ehgRgsMAWoXWhDaeQeuwq1W+HyPewGAzyRm66NgiErdZbFNlYUINyaBw+c46TQ+aomaUe7HSvF5gtFkvaqOg1mbI3cuv7Q6pjGIIuk5oazwGJ32RQe0k5oYedTOpyaUuhcvECBoZMz1HT+dVN6yrzXaqOPS3Z7dJzEHNNeTnJzqR1jxBOZa3RWRrDMF4EAAWiLcUzjuXp8T0Exg38IA */
  createMachine(
    {
      tsTypes: {} as import("./onboarding-02.typegen").Typegen0,
      schema: {
        context: {} as OnBoardingContext,
        events: {} as OnBoardingMachineEvents,
      },
      context: { userName: "" },
      predictableActionArguments: true,
      initial: "chooseUsername",
      id: "onBoarding",
      states: {
        chooseUsername: {
          on: {
            NEXT: {
              target: "setBasicInfo",
            },
            SET_USER_NAME: {
              actions: "setUserName",
            },
          },
        },
        setBasicInfo: {
          on: {
            NEXT: {
              target: "confirmation",
            },
            PREV: {
              target: "chooseUsername",
            },
          },
        },
        confirmation: {
          on: {
            NEXT: {
              target: "done",
            },
            PREV: {
              target: "setBasicInfo",
            },
          },
        },
        done: {},
      },
    },
    {
      actions: {
        setUserName: assign({
          userName: (context, event) => event.value,
        }),
      },
    }
  );

export default onBoardingMachine;
