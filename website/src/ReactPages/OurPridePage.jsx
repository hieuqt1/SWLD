import { Grid2, Typography } from "@mui/material";
import LionCard from "../components/LionCard";
import lions from "../data/lions.json";
import CommonPageLayout from "./CommonPageLayout";

export default function OurPridePage() {
  return (
    <CommonPageLayout
      title={"Our Pride"}
      image={"/src/assets/lion-lineup-6.png"}
    >
      <Typography sx={{ color: "#0000008F" }}>
        Our lions are handmade by skilled craftsmen worldwide using bamboo,
        rattan, and papier-mâché. Feel free to request specific colors or
        styles, or contact us for expert recommendations.
      </Typography>
      <Grid2 container spacing={6} sx={{ width: "100%" }} alignItems="stretch">
        {lions.map((lion) => {
          return (
            <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
              <LionCard lion={lion} />
            </Grid2>
          );
        })}
      </Grid2>
    </CommonPageLayout>
  );
}
