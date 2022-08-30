// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    setUserName: "SET_USER_NAME";
    validateUsernameDisponibility: "";
  };
  eventsCausingServices: {};
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
