import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { getGames } from "../service";
import { GameCard } from "../components/ui";
import { GamesType } from "../service/games/types";

const Home: NextPage = () => {
  const [games, setGames] = useState<GamesType[]>([]);

  const fetchGames = async () => {
    const gamesFetchResult = await getGames();

    if (!!gamesFetchResult) {
      const {
        result: { list },
      } = gamesFetchResult;
      setGames(list);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Grid container justifyContent="center">
      <Button
        disabled
        color="primary"
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ marginTop: 2, marginLeft: 2, minWidth: 200 }}
      >
        Add New Game
      </Button>
      <Grid container>
        {games?.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
