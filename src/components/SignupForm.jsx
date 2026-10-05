import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Field from "./Field";
import usStates from "../data/usStates";

const ZIP_LABEL = "Zip Code";
const ZIP_PLACEHOLDER = "Enter 5-digit zip code";

const countryCodes = ["+1","+44","+91","+61"];
const genders = ["Male", "Female","Prefer not to say"];

const initialValues = {
  firstName: "",
  lastName: "",
  countryCode: "+1",
  phone: "",
  email: "",
  dob: null,
  gender: "",
  zip: "",
  city: "",
  state: "",
  password: "",
  consent: false,
};

const bigSelectSx = { "& .MuiSelect-select": { fontSize: "1rem" } };

const row = { display: "flex", gap: "7px" };

export default function SignupForm({ userType, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { userType, ...values };
    if (onSubmit) onSubmit(payload);
    else console.log("Signup:", payload);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: "6px" }}
      >
        <Box sx={row}>
          <Field id="firstName" label="First Name">
            <TextField
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              fullWidth
              required
              slotProps={{ htmlInput: { autoComplete: "given-name" } }}
            />
          </Field>
          <Field id="lastName" label="Last Name">
            <TextField
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              fullWidth
              required
              slotProps={{ htmlInput: { autoComplete: "family-name" } }}
            />
          </Field>
        </Box>

        <Field id="phone" label="Phone Number">
          <Box sx={row}>
            <Select
              id="countryCode"
              name="countryCode"
              value={values.countryCode}
              onChange={handleChange}
              sx={{ width: 95, flexShrink: 0, ...bigSelectSx }}
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
              required
              slotProps={{
                htmlInput: { inputMode: "tel", autoComplete: "tel-national" },
              }}
            />
          </Box>
        </Field>

        <Field id="email" label="Email Address">
          <TextField
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            fullWidth
            required
            slotProps={{ htmlInput: { autoComplete: "email" } }}
          />
        </Field>

        <Box sx={row}>
          <Field id="dob" label="Date of Birth">
            <DatePicker
              value={values.dob}
              onChange={(date) => setValues((p) => ({ ...p, dob: date }))}
              format="MM/DD/YYYY"
              disableFuture
              slotProps={{
                textField: {
                  id: "dob",
                  name: "dob",
                  fullWidth: true,
                  required: true,
                },
                openPickerButton: { sx: { color: "text.primary" } },
              }}
            />
          </Field>
          <Field id="gender" label="Gender">
            <Select
              id="gender"
              labelId="gender-label"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              fullWidth
              required
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </Field>
        </Box>

        <Box sx={row}>
          <Field id="zip" label={ZIP_LABEL}>
            <TextField
              id="zip"
              name="zip"
              value={values.zip}
              onChange={handleChange}
              placeholder={ZIP_PLACEHOLDER}
              fullWidth
              required
              slotProps={{
                htmlInput: {
                  inputMode: "numeric",
                  maxLength: 5,
                  pattern: "[0-9]{5}",
                  autoComplete: "postal-code",
                },
              }}
            />
          </Field>
          <Field id="city" label="City">
            <TextField
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              fullWidth
              required
              slotProps={{ htmlInput: { autoComplete: "address-level2" } }}
            />
          </Field>
        </Box>

        <Field id="state" label="State">
          <Select
            id="state"
            labelId="state-label"
            name="state"
            value={values.state}
            onChange={handleChange}
            displayEmpty
            renderValue={(selected) => selected || "Select State"}
            fullWidth
            required
            sx={bigSelectSx}
            MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
          >
            {usStates.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Field>

        <Field id="password" label="Password">
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            fullWidth
            required
            slotProps={{
              htmlInput: { autoComplete: "new-password" },
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

        <FormControlLabel
          sx={{ alignItems: "flex-start", m: 0, mt: 1 }}
          control={
            <Checkbox
              name="consent"
              checked={values.consent}
              onChange={handleChange}
              required
              sx={{
                p: 0,
                mr: 1,
                mt: "2px",
                color: "text.primary",
                "& .MuiSvgIcon-root": { fontSize: 22 },
              }}
            />
          }
          label={
            <Typography
              sx={{ fontSize: "0.50rem", fontWeight: 500, lineHeight: 1.35 }}
            >
              By consenting, I allow the application to store my personal
              information and acknowledge that the admin may contact me via
              phone or email for further clarification.
            </Typography>
          }
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            height: 38,
            mt: 0.5,
            textTransform: "none",
            fontSize: "1.15rem",
            fontWeight: 500,
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Sign Up
        </Button>

        <Typography sx={{ mt: 0.5, fontSize: "1.1rem", fontWeight: 500 }}>
          Already Registered?{" "}
          <MuiLink
            component={RouterLink}
            to="/login"
            underline="hover"
            sx={{ color: "primary.main", fontWeight: 500 }}
          >
            Sign in !
          </MuiLink>
        </Typography>
      </Box>
    </LocalizationProvider>
  );
}