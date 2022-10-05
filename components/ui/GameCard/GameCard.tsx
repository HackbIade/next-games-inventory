import {
  Card,
  Grid,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
} from "@mui/material";
import SportsEsports from "@mui/icons-material/SportsEsports";

import { GameCardProps } from "./types";

export const GameCard = ({ title, platform, description }: GameCardProps) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 4 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://upload.wikimedia.org/wikipedia/en/a/a3/Halo_TMCC_KeyArt_Vert_2019.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title || "Pending..."}
        </Typography>
        <Grid container>
          <SportsEsports sx={{ mr: 1 }} />
          <Typography gutterBottom variant="body1">
            {platform || "Pending"}
          </Typography>
        </Grid>
        {!!description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>
  );
};
