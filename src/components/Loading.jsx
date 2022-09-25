import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <CircularProgress size="5rem" sx={{ color: "#fc1503", zIndex: "2" }} />
  );
};

export default Loading;
