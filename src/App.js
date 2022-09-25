import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Feed loading={loading} setLoading={setLoading} />}
          />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
