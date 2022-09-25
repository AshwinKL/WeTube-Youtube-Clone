import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
      window.scrollTo(0, 0);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((err) => console.log(err.message));
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          background:
            "linear-gradient(77deg, rgba(149,165,255,1) 0%, rgba(255,69,55,1) 100%)",
          height: "300px",
          zIndex: "10",
        }}
      >
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box display="flex" sx={{ p: "80px 10px" }}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
