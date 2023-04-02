import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Palette from "../../palette";

const Login = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "40vh",
        background: Palette.greyDark,
        position: "absolute",
        top: "50%",
        left: "50%",
        mr: "-50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 4,
      }}
    >
      <Typography variant="h4">Sing in/Sing up</Typography>
      <Button variant="outlined" size="large" sx={{}}>
        Google auth
      </Button>
    </Container>
  );
};

export default Login;
