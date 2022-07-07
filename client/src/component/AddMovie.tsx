import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SendAddMovieDetails } from "../services/movieDetails"; //
import Navbar from "./Navbar";

const FormGroupp = styled(FormGroup)`
  width: 50%;
  margin: 55px auto 0 auto;
  & > div {
    margin-top: 11px;
  }
`;

const initialValue = {
  movieName: "",
  rating: "",
  cast: "",
  genre: "",
  releaseDate: "",
};

const AddMovie = () => {
  const [movie, setMovie] = useState(initialValue);
  const navigate = useNavigate()

  const handleChange = (e: any) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const SendDetails = async () => {
   await SendAddMovieDetails(movie);
   navigate('/all');

  };

  return (
    <>
      <Navbar />
      <div>
        <FormGroupp>
          <Typography style={{ alignSelf: "center" }} variant="h4">

            Add Movie
          </Typography>
          <FormControl>
            <InputLabel> Movie name </InputLabel>
            <Input
              name="movieName"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <InputLabel> Rating </InputLabel>
            <Input
              name="rating"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <InputLabel> Cast </InputLabel>
            <Input
              name="cast"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <InputLabel> Genre </InputLabel>
            <Input
              name="genre"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            </FormControl>
            <FormControl>

          <InputLabel> Release Date  </InputLabel>
            <Input
              name="releaseDate"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>

          <Button
            onClick={(e) => SendDetails()}
            variant="contained"
            color="secondary"
            style={{ borderRadius: 0, marginTop: 11 }}
          >

            Add Movie
          </Button>
        </FormGroupp>
      </div>
    </>
  );
};

export default AddMovie;
