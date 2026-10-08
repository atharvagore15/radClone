import { Box, Typography } from "@mui/material";

export default function Field({ id, label, children }) {
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography
        component="label"
        id={`${id}-label`}
        htmlFor={id}
        sx={{
          display: "block",
          mb: "2px",
          fontSize: "1.1rem",
          fontWeight: 500,
          lineHeight: 1.3,
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}