import { Box, Container } from "@mui/material";
import React from "react";
import { styleGlobalMainBackgroundColor } from "../../styles/variables";
import { Logo } from "./Logo";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="main" sx={{ bgColor: styleGlobalMainBackgroundColor }}>
      <Container maxWidth="md" sx={{ maxWidth: "870px" }}>
        <Logo />
        <Box sx={{ marginTop: "2.5rem" }}>{children}</Box>
      </Container>
    </Box>
  );
};
