import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "right",
  },
}));

interface TextWithLabelProps {
  label: string;
  text: React.ReactNode;
}

const TextWithLabel = React.memo(({ label, text }: TextWithLabelProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between">
      <Typography color="textSecondary" variant="button">
        {label}
      </Typography>
      <Typography className={classes.text} color="secondary">
        {text}
      </Typography>
    </Box>
  );
});

export default TextWithLabel;
