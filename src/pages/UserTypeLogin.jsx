import { Box, ButtonBase, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import logo from "../assets/radleycare-logo.png";
import clientIcon from "../assets/client-icon.png";
import peerIcon from "../assets/peer-icon.png";

export default function UserTypeLogin() {
  const options = [
    {
      to: "/patientlogin",
      icon: clientIcon,
      title: "I'm a Client",
      subtitle: "Looking to get personalised care",
    },
    {
      to: "/login",
      icon: peerIcon,
      title: "I'm a Peer-Supporter",
      subtitle: "Seeking to provide care",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
        background: "linear-gradient(180deg, #e8f5f2 0%, #ffffff 80%)",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="RadleyCare"
        sx={{ height: 44, width: "auto", mb: "38px" }}
      />

      <Box
        component="nav"
        aria-label="Choose your account type"
        sx={{
          width: "100%",
          maxWidth: 485,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          mb: "28px",
        }}
      >
        {options.map((option) => (
          <ButtonBase
            key={option.to}
            component={RouterLink}
            to={option.to}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
              width: "100%",
              minHeight: 70,
              px: 2,
              py: 1,
              textAlign: "left",
              bgcolor: "#fff",
              border: "1px solid #d5dadd",
              borderRadius: "12px"
              
            }}
          >
            <Box
              sx={{
                width: 40,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={option.icon}
                alt=""
                sx={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>

            <Box sx={{ alignSelf: "flex-start", pt: 0.25 }}>
              <Typography
                sx={{ fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.3 }}
              >
                {option.title}
              </Typography>
              <Typography
                className="option-subtitle"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: "text.secondary",
                  transition: "color 0.15s ease",
                }}
              >
                {option.subtitle}
              </Typography>
            </Box>
          </ButtonBase>
        ))}
      </Box>

      <Typography
        sx={{
          maxWidth: 270,
          textAlign: "center",
          fontSize: "0.8125rem",
          fontWeight: 500,
          lineHeight: 1.25,
        }}
      >
        By continuing, you agree to our Terms of Service and Privacy Policy
      </Typography>
    </Box>
  );
}