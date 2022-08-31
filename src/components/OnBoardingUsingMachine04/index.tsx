import * as React from "react";
import { useMachine } from "@xstate/react";
import { useLazyQuery, gql } from "@apollo/client";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import OnBoardingOneMachine, {
  OnBoardingSteps,
  OnBoardingStates,
} from "../../machines/onboarding-04";
import { Container, TextField } from "@mui/material";

const steps = ["Choose Username", "Set basic info", "Confirmation"];

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// Passar um service async por aqui
export default function HorizontalLinearStepper() {
  const [getLocations, { loading, error, data }] = useLazyQuery(GET_LOCATIONS);

  const [state, send] = useMachine(OnBoardingOneMachine, {
    services: {
      fetchData: (context, event) => getLocations(),
    },
  });

  const handleNext = () => send("NEXT");

  const handleBack = () => send("PREV");

  const handleReset = () => {
    console.log("Go to the App");
  };
  const handleChangeUserName = (event: any) => {
    const textValue = event.target.value;

    send("SET_USER_NAME", { value: textValue });
  };

  const currentStateValueAsString =
    state.value.toString() as keyof typeof OnBoardingSteps;

  React.useEffect(() => {
    console.log("GET_LOCATIONS", data);
  }, [data]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={OnBoardingSteps[currentStateValueAsString]}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {state.matches(OnBoardingStates.DONE) ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Go to the App</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {currentStateValueAsString}
          </Typography>
          <Container maxWidth="sm">
            {state.matches(OnBoardingStates.CHOOSE_USER_NAME) && (
              <TextField
                id="outlined-basic"
                label="Type your username"
                variant="outlined"
                onChange={handleChangeUserName}
              />
            )}

            <div>
              <code>
                {JSON.stringify({
                  currentState: state.value,
                  context: state.context,
                })}
              </code>
            </div>
          </Container>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={state.matches(OnBoardingStates.CHOOSE_USER_NAME)}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {state.matches(OnBoardingStates.CONFIRMATION) ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
