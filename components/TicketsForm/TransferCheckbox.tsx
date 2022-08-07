import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import {
  styleGlobalBluePrimary,
  styleGlobalGray,
  styleGlobalBlueSecondary,
} from "../../styles/variables";
import { MAX_TRANSFER_OPTIONS } from "../../utils/constants";

const styleCheckboxContainer = {
  display: "flex",
  position: "relative",
  padding: "0 0.6rem",
  ":hover": {
    bgcolor: styleGlobalBlueSecondary,
  },
  ":hover p": {
    display: "inline-block",
  },
};

const styleOnlyLabel = {
  display: "none",
  cursor: "pointer",
  position: "absolute",
  top: "30%",
  right: "5%",
  fontSize: "0.65rem",
  fontWeight: "700",
  textTransform: "uppercase",
  color: styleGlobalBluePrimary,
};

const MyCheckboxInput = styled("input")`
  opacity: 0;
  & + label {
    width: 100%;
    cursor: pointer;
    position: relative;
    display: inline-block;
    font-size: 0.8rem;
    padding-left: 8px;
    margin: 8px 10px;
    line-height: 18px;
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: -22px;
      width: 18px;
      height: 18px;
      border-radius: 3px;
      outline: 1px solid ${styleGlobalGray};
    }
  }
  &:checked + label {
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: -22px;
      width: 18px;
      height: 18px;
      border-radius: 3px;
      background-color: ${styleGlobalBlueSecondary};
      outline: 1px solid ${styleGlobalBluePrimary};
    }
    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: -14px;
      width: 18px;
      height: 18px;
      transform: rotate(45deg);
      height: 6px;
      width: 2px;
      border-bottom: 2px solid ${styleGlobalBluePrimary};
      border-right: 2px solid ${styleGlobalBluePrimary};
      opacity: 1;
      transition: all 0.2s ease;
    }
  }
  &:not(:checked) + label {
    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: -14px;
      width: 18px;
      height: 18px;
      transform: rotate(45deg);
      height: 6px;
      width: 2px;
      border-bottom: 2px solid ${styleGlobalBluePrimary};
      border-right: 2px solid ${styleGlobalBluePrimary};
      opacity: 0;
      transition: all 0.2s ease;
    }
  }
`;

type TTransferCheckbox = {
  label: string;
  transferValue: number;
  handleTransfer: (transfer: number, only?: boolean) => void;
};
export const TransferCheckbox = ({
  label,
  transferValue,
  handleTransfer,
}: TTransferCheckbox) => {
  /**
   * Utility function that loops over all transfer option and unchecks unneeded.
   * It starts with `-1` as the default option is also `-1`.
   */
  const checkMarkOneCheckboxOnly = (transferValue: number) => {
    for (let i = -1; i < MAX_TRANSFER_OPTIONS - 1; i++) {
      const checkbox = document.getElementById(
        `transfer-checkbox-${i}`
      ) as HTMLInputElement;
      if (i === transferValue) {
        checkbox.checked = true;
        continue;
      }
      checkbox.checked = false;
    }
  };
  return (
    <Box sx={styleCheckboxContainer}>
      <MyCheckboxInput
        id={`transfer-checkbox-${transferValue}`}
        type="checkbox"
        name="transfer-checkbox"
        onChange={() => handleTransfer(transferValue)}
      />
      <label htmlFor={`transfer-checkbox-${transferValue}`}>{label}</label>
      <Typography
        sx={styleOnlyLabel}
        onClick={() => {
          checkMarkOneCheckboxOnly(transferValue);
          handleTransfer(transferValue, true);
        }}
      >
        Только
      </Typography>
    </Box>
  );
};
