import { Card, Grid, CardMedia, Typography, CardContent } from "@mui/material";
import SportsEsports from "@mui/icons-material/SportsEsports";

import { GameCardProps } from "./types";

export const GameCard = ({ name, platform, description }: GameCardProps) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 2 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://upload.wikimedia.org/wikipedia/en/a/a3/Halo_TMCC_KeyArt_Vert_2019.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name || "Pending..."}
        </Typography>
        <Grid container>
          <SportsEsports color="primary" sx={{ mr: 1 }} />
          <Typography color="primary" gutterBottom variant="body1">
            {platform || "Pending"}
          </Typography>
        </Grid>
        {!!description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
