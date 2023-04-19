import React from "react";
import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  handleJobFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  jobFilterValues: { entry_level: boolean; intermediate: boolean; expert: boolean };
}

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export const ExperienceLevel = ({ jobFilterValues, handleJobFilterChange }: Props) => {
  const { entry_level, intermediate, expert } = jobFilterValues;

  return (
    <div className="bg-white  rounded-xl p-4 space-y-2 ">
      <div className="bg-white  rounded-xl  space-y-2 ">
        <div className="flex justify-between items-center">
          <p className="text-orange-900  font-Poppins font-bold">
            Experience Level
          </p>
          <button className=" h-[2.4rem] w-[6rem] rounded-full flex justify-center items-center">
            <span className="text-blue-700 text-md font-Poppins">
              Clear all
            </span>
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-between px-3">
        <div className="flex items-center space-x-">
          <FormControl>
            <FormGroup>
              <FormControlLabel
                control={
                  <BpRadio
                    checked={entry_level}
                    name="entry_level"
                    onChange={(event) => handleJobFilterChange(event)}
                  />
                }
                label="Entry Level"
              />
              <FormControlLabel
                control={
                  <BpRadio
                    checked={intermediate}
                    name="intermediate"
                    onChange={(event) => handleJobFilterChange(event)}
                  />
                }
                label="Intermediate"
              />
              <FormControlLabel
                control={
                  <BpRadio
                    checked={expert}
                    name="expert"
                    onChange={(event) => handleJobFilterChange(event)}
                  />
                }
                label="Expert"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div>
          {/* <p className="text-sm text-gray-600 font-Poppins ">2 MOs</p> */}
        </div>
      </div>
    </div>
  );
};
