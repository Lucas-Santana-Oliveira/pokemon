import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../utils/constants";

export const getInitialPokemonData = createAsyncThunk(
  "pokémon/dados iniciais",
  async () => {
    try {
      const { data } = await axios.get(pokemonsRoute);
      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);
