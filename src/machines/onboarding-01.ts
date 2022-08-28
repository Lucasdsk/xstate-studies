import { createMachine } from "xstate";

interface OnBoardingContext {}

type OnBoardingMachineEvents = { type: "NEXT" } | { type: "PREV" };

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

type OnBoardingTypestate =
  | {
      value: OnBoardingStates.CHOOSE_USER_NAME;
      context: OnBoardingContext;
    }
  | {
      value: OnBoardingStates.SET_BASIC_INFO;
      context: OnBoardingContext;
    }
  | {
      value: OnBoardingStates.CONFIRMATION;
      context: OnBoardingContext;
    }
  | {
      value: OnBoardingStates.DONE;
      context: OnBoardingContext;
    };

export interface OnBoardingMachineContext {}

const onBoardingMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QHsB2AhZBDAThAlqlAHQDGAFssrGAKo06pYC2YAxAHICiAGgCqJQAB2r4ALvjSCQAD0QAmeQBZiABgDsqgMxKAHAE4AbHoCsARkMAaEAE9EZ3SvVLDZrY93qt6gwF9f1miYuARExDRi6Fiw+KQAkqgAZsicvAJIICIxElIZcggu8sTqZqr65cqqZg7y6tZ2CGb6RV7yxiY+uuYO-oEY2HiEJBFRMfFJKQAKAEpcAGrSWeKSqNL5iipmSqqGXqpKLib66la2iPqqaqrX+0eG5iaqJr0gQQOhJKRoifg4zFg5VCpfiLUSAtaIQzlYhNdS1LYWVS6Lb1ezXGGGTEmKEnfR6eRaF5vEJDMjfX7-QFsGbzUHZFYQgqGFrInTqI5KOFlU4NZrER43JR3B5PfwBECoZAQODSYmDMIUKg0ehgRgsMB05a5UD5JTyVEIfRmYiYrGGa66eT6EwmeRE-oksIjaKxBLJTXgvKILRmdTEC7M5yadnuCwGvEYs0Wq02u3iuUfMlJCkAhkZJaenWIG2GfkuPHNDpHfRacO5027Zz6AxKIzqe3BeUkCBoDXpsFprMIdR85HyYvs1zKOpnQ3l01CtpWwyOevxh1Nj2d2T2XQGhxXa5CrRGXSWzFx-xAA */
  createMachine<
    OnBoardingContext,
    OnBoardingMachineEvents,
    OnBoardingTypestate
  >({
    context: {},
    id: "onBoarding",
    initial: OnBoardingStates.CHOOSE_USER_NAME,
    states: {
      chooseUsername: {
        on: {
          NEXT: OnBoardingStates.SET_BASIC_INFO,
        },
      },
      setBasicInfo: {
        on: {
          NEXT: OnBoardingStates.CONFIRMATION,
          PREV: OnBoardingStates.CHOOSE_USER_NAME,
        },
      },
      confirmation: {
        on: {
          NEXT: OnBoardingStates.DONE,
          PREV: OnBoardingStates.SET_BASIC_INFO,
        },
      },
      done: {},
    },
  });

export default onBoardingMachine;
