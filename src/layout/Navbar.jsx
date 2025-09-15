import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container, IconButton, Link } from "@mui/material";
import imageUnion from "../assets/nav-basket.png";
import imageOodi from "../assets/oddi.png";
import imageF from "../assets/F.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuJson = [
  { name: "Home", navLink: "/home" },
  { name: "Menu", navLink: "/menu" },
  { name: "About Us", navLink: "/about-us" },
  { name: "Chef", navLink: "/chef" },
  { name: "Blog", navLink: "/blog" },
  { name: "Contact", navLink: "/contact" },
];

const navigate = useNavigate();


  return (
    <Container>
      <header
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "1.25rem",
          padding: "0.5rem 3.125rem",
          margin: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {/* logo of the navbar */}
        <IconButton>
          <img
            src={imageF}
            alt="flogo"
            style={{
              backgroundColor: "#D68240",
              padding: "0.5rem 0.5rem",
              borderRadius: "0.5rem",
            }}
          />
          <img src={imageOodi} alt="oodilogo" />
        </IconButton>

        {/* navbar menu  */}
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", gap: "1.5rem" }}>
            {menuJson.map((value, index) => {
              return (
                <Link
                  key={index}
                  variant="body2"
                  underline="none"
                  onClick={() => navigate(value.navLink)}
                 
                  sx={{
                    cursor: "pointer",
                    padding: "0.3rem",
                    color: "white",
                    fontSize: "1.1rem",
                    position: "relative",
                    "&::before, &::after": {
                      content: '""',
                      position: "absolute",
                      width: "8px",
                      height: "8px",
                      border: "2px solid orange",
                      opacity: 0,
                      transition: "all 0.3s ease",
                      
                    },
                    "&::before": {
                      top: 0,
                      left: 0,
                      borderRight: "none",
                      borderBottom: "none",
                    },
                    "&::after": {
                      bottom: 0,
                      right: 0,
                      borderLeft: "none",
                      borderTop: "none",
                    },
                    "&:hover::before, &:hover::after": {
                      opacity: 1,
                    },
                  }}
                >
                  {value.name}
                </Link>
              );
            })}
          </Box>
        </Toolbar>

        {/* login and icon */}
        <div>
          <IconButton sx={{ gap: "24px" }}>
            <Box
              component="img"
              src={imageUnion}
              alt="Logo"
              sx={{
                width: "1.231rem",
                height: "1.186rem",
                top: "0.125rem",
                left: "0.125rem",
              }}
            />
            <Button color="primary" variant="contained">
              LOGIN
            </Button>
          </IconButton>
        </div>
      </header>
    </Container>
  );
};

export default Navbar;