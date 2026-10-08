import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SmsOutlined from "@mui/icons-material/SmsOutlined";

import Field from "./Field";

const countryCodes = ["+1","+44","+91","+61"];

const initialValues = { countryCode: "+1", phone: "", password: "" };

const bigSelectSx = { "& .MuiSelect-select": { fontSize: "1.2rem" } };

const row = { display: "flex", gap: "7px" };

const linkSx = { color: "primary.dark", fontWeight: 500 };

export default function LoginForm({ userType, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { userType, ...values };
    if (onSubmit) onSubmit(payload);
    else
      console.log("Login:", {
        userType,
        countryCode: values.countryCode,
        phone: values.phone,
      });
  };

  return (
    <>
      <Typography
        component="h1"
        sx={{
          mb: "19px",
          fontSize: { xs: "1rem", md: "2rem" },
          fontWeight: 500,
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        Login to Your Account
      </Typography>

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: "6px" }}
      >
        <Field id="phone" label="Phone Number">
          <Box sx={row}>
            <Select
              id="countryCode"
              name="countryCode"
              value={values.countryCode}
              onChange={handleChange}
              sx={{ width: 101, flexShrink: 0, ...bigSelectSx }}
              SelectDisplayProps={{ "aria-label": "Country code" }}
            >
              {countryCodes.map((code) => (
                <MenuItem key={code} value={code}>
                  {code}
                </MenuItem>
              ))}
            </Select>
            <TextField
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              fullWidth
              slotProps={{
                htmlInput: { inputMode: "tel", autoComplete: "tel-national" },
              }}
            />
          </Box>
        </Field>

        <Field id="password" label="Password">
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            fullWidth
            slotProps={{
              htmlInput: { autoComplete: "current-password" },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword((show) => !show)}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Field>

        <MuiLink
          component={RouterLink}
          to="/forgot-password"
          underline="hover"
          sx={{
            ...linkSx,
            alignSelf: "flex-start",
            mt: "12px",
            fontSize: "1.3rem",
            lineHeight: 1.2,
          }}
        >
          Forgot your password?
        </MuiLink>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            height: 42,
            mt: "21px",
            textTransform: "none",
            fontSize: "1.2rem",
            fontWeight: 500,
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Log in
        </Button>

        <Divider
          sx={{
            my: "9px",
            color: "text.secondary",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          OR
        </Divider>

        <Button
          type="button"
          variant="outlined"
          fullWidth
          startIcon={<SmsOutlined />}
          sx={{
            height: 42,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 500,
            color: "text.primary",
            borderColor: "#d5dadd",
            "&:hover": {
              borderColor: "primary.main",
              bgcolor: "rgba(53, 127, 125, 0.06)",
            },
          }}
        >
          Login with OTP
        </Button>

        <Typography
          sx={{ fontSize: "1.3rem", fontWeight: 500, lineHeight: 1.2 }}
        >
          {"Don't have an Account?"}{" "}
          <MuiLink
            component={RouterLink}
            to="/UserTypeForRadley"
            underline="hover"
            sx={{ ...linkSx, fontSize: "inherit" }}
          >
            Sign up !
          </MuiLink>
        </Typography>
      </Box>
    </>
  );
}