// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "done.invoke.onBoarding.chooseUsername.validating:invocation[0]": {
      type: "done.invoke.onBoarding.chooseUsername.validating:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    fetchData: "done.invoke.onBoarding.chooseUsername.validating:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: "fetchData";
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    fetchDataSuccess: "done.invoke.onBoarding.chooseUsername.validating:invocation[0]";
    setUserName: "SET_USER_NAME";
  };
  eventsCausingServices: {
    fetchData: "";
  };
  eventsCausingGuards: {
    validateUserNameLength: "";
  };
  eventsCausingDelays: {};
  matchesStates:
    | "chooseUsername"
    | "chooseUsername.idle"
    | "chooseUsername.valid"
    | "chooseUsername.validating"
    | "confirmation"
    | "done"
    | "setBasicInfo"
    | { chooseUsername?: "idle" | "valid" | "validating" };
  tags: never;
}
