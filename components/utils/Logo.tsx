import { Box } from "@mui/material";
import Image from "next/image";
import { styleGlobalMainBackgroundColor } from "../../styles/variables";
import { PROJECT_LOGO } from "../../utils/constants";

const styleMainBox = {
  position: "relative",
  textAlign: "center",
  marginTop: "3rem",
};

const styleLogoShadowWithFakeObject = {
  position: "relative",
  "::before": {
    content: "''",
    position: "absolute",
    top: "-40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: styleGlobalMainBackgroundColor,
    filter: "drop-shadow(0 6px 7px rgba(0,0,0,0.5))",
  },
};

export const Logo = () => {
  return (
    <Box sx={styleMainBox}>
      <Box component="span" sx={styleLogoShadowWithFakeObject}>
        <Image
          src={`/${PROJECT_LOGO}`}
          alt="Project logo"
          height="50"
          width="50"
          layout="fixed"
        />
      </Box>
    </Box>
  );
};
