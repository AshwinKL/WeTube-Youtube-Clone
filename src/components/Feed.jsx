import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loading from "./Loading";

const Feed = ({ loading, setLoading }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [selectedCategory, setLoading]);

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "90vh" },
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "#fff",
            fontWeight: "light",
            fontSize: "12px",
          }}
        >
          Made with ❤️ by Ashwin @2022
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflow: "auto",
          height: "90vh",
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!loading && (
          <>
            <Typography variant="h4" mb={2} sx={{ color: "white" }}>
              {selectedCategory}{" "}
              <span style={{ color: "#f31503" }}>Videos</span>
            </Typography>
            <Videos videos={videos} />
          </>
        )}
        {loading && <Loading />}
      </Box>
    </Stack>
  );
};

export default Feed;
