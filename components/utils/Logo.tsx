import { Avatar, Box } from "@mui/material";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import Image from "next/image";
import React from "react";
import { PROJECT_LOGO } from "../../utils/constants";

export const Logo = () => {
  console.log(PROJECT_LOGO);
  return (
    <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
      <Image src="/plane_icon.svg" alt="Project logo" height="50" width="50" />
    </Box>
  );
};
