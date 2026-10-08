import { Box, Typography } from "@mui/material";
import HandshakeOutlined from "@mui/icons-material/HandshakeOutlined";
import logo from "../assets/radleycare-logo.png";
import panelBackground from "../assets/box-art.png";

function BrandPanel() {
  const centered = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center",
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 428,
        aspectRatio: "646 / 760",
        backgroundImage: `url(${panelBackground})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        filter: "drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12))",
      }}
    >
      <Typography
        component="p"
        sx={{
          ...centered,
          top: "36%",
          fontSize: "2.75rem",
          fontWeight: 500,
          lineHeight: 1.1,
        }}
      >
        RadleyCare
      </Typography>

      <Typography
        component="p"
        sx={{
          ...centered,
          top: "57%",
          width: "72%",
          fontSize: "1.25rem",
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        Empowering adults with serious mental illness to live amazing lives
      </Typography>

      <Box
        sx={{
          ...centered,
          top: "77.5%",
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          height: 39,
          px: 2,
          whiteSpace: "nowrap",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          borderRadius: "999px",
          fontSize: "0.95rem",
          fontWeight: 500,
        }}
      >
        <HandshakeOutlined fontSize="small" />
        Trusted by doctors, preferred by patients
      </Box>
    </Box>
  );
}

export default function LoginLayout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", bgcolor: "#fff" }}>
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          justifyContent: "center",
          py: 4,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="RadleyCare"
          sx={{
            height: 37,
            width: "auto",
            alignSelf: { xs: "flex-start", md: "auto" },
            position: { xs: "static", md: "absolute" },
            top: 20,
            left: 19,
            mb: { xs: 2, md: 0 },
          }}
        />

        <Box sx={{ width: "100%", maxWidth: 440 }}>{children}</Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 4,
        }}
      >
        <BrandPanel />
      </Box>
    </Box>
  );
}