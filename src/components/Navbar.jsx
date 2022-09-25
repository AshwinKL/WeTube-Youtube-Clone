import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  return (
    <Stack
      zIndex={2}
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#111",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography
          variant="subtitle1"
          className="title"
          ml="10px"
          color="#FC1503"
        >
          WeTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
