import { createMachine } from "xstate";
import { assign } from "xstate/lib/actions";

interface OnBoardingContext {
  userName: string;
  validUserName: boolean;
  canGoNext?: boolean;
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
  /** @xstate-layout N4IgpgJg5mDOIC5QHsB2AhZBDAThAlqlAHQDGAFssrGAKo06pYC2Yx+EANmAMQDKAUQAqAfVqCASiIByAQQCyAxKAAO1fABd8aZSAAeiAIwBWAAzEALBeMBmQwA47AJnsB2J6acAaEAE9ENsYWxGampgCcNmHG4cZOFgC+CT5omLgERGSU1HQMTKzsXLy6arCa2qi6BggWrsHhroauzU4xzYaGPv4INhYAbMSGLo5xDqYW40kpGNh4hCQUVDT0YIwsvNICABpCJepaOkj6iK59wfYxFvET4RZD3n6ITn32xGFh4R+xhn29UyCpWYZEg0DToLBlUgASVQADNkDxNjs9mUDpUjtVDGEbJZwnj7K0+oYbPYrl0jBMQu8+g0gv0LDZ-oD0vNiKDwZCYfCeAAFCQCABqKPKh1A1Ti5IQnze73sxPsnlMjkSyQBMxZmVIaFh+BwzCwaMR212R1KIvRYqeEWIgUirmM7j6fQinkl9ns4WIeLxpzqFw64SZ6rmmu1uv1hr5guFaKqRmxuPxhPlZMeUqcVLCcpJiuVSVVqGQEDgumZIYW2WWeXWhW4MYqcYQhkilmdtxsfVOTT6tklVgGoQiUVMMTiKumaXLWSWuVW+TYADcsJwOAb5vXRcceu6vU4HAq5S53JLjA5M6Y7A1TK5wn0nEHJ8DpzkVmsCkuVxANxat82M4YJl+EwbFuOUL0lFwBzCEwaVqOlOwfIFWUWF9q1Yb9GyGAYrFsBxnDcDwHm6PdglCH4fkCDszEZVUyyfdkIXwaE4WQDCMUQC5XlOYwzlsawRz3SVbkGJ1TkCWp7E7JVEI1BYwz1NdNzNWN2IQTs3VJc97R41wbA7cc1UfVkIDQMA2MtHoL2IZ5jBiJ073iD0NNI95tM7PSzhk8tzK3FxJTPd4lWdF5PDcGikiAA */
  createMachine(
    {
      context: { userName: "", validUserName: false, canGoNext: true },
      tsTypes: {} as import("./onboarding-04.typegen").Typegen0,
      schema: {
        context: {} as OnBoardingContext,
        events: {} as OnBoardingMachineEvents,
      },
      predictableActionArguments: true,
      initial: "chooseUsername",
      id: "onBoarding",
      states: {
        chooseUsername: {
          initial: "idle",
          states: {
            idle: {
              always: {
                cond: "validateUserNameLength",
                target: "validating",
              },
              on: {
                SET_USER_NAME: {
                  actions: "setUserName",
                },
              },
            },
            validating: {
              invoke: {
                src: "fetchData",
                onDone: {
                  actions: "fetchDataSuccess",
                },
              },
            },
            valid: {},
          },
          on: {
            NEXT: {
              target: "setBasicInfo",
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
      guards: {
        validateUserNameLength: (context, event) => {
          console.log("guard validateUserName", context, event);
          return context.userName.trimStart().length > 5;
        },
      },
      actions: {
        setUserName: assign({
          userName: (context, event) => event.value,
        }),
        fetchDataSuccess: (context, event) => {
          console.log("fetchDataSuccess", context, event.data);
        },
      },
    }
  );

export default onBoardingMachine;
