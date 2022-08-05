import { Box } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { styleGlobalBackgroundColor } from "../../styles/variables";
import { Logo } from "./Logo";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="main" sx={{ bgColor: styleGlobalBackgroundColor }}>
      <Container maxWidth="md">
        <Logo />
        {children}
      </Container>
    </Box>
  );
};
