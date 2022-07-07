import { Button, FormControl, FormGroup, Input,InputLabel, styled,Typography,} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { editDetailsApi } from "../services/movieDetails";
import { getEditDetails } from "../services/movieDetails";
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

  const EditMovie = () => {
    const [movie, setMovie] = useState(initialValue);
    const navigate = useNavigate()
    const { id } = useParams()

    const handleChange = (e: any) => {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const editDetails = async (id: any, movie: any) => {
     await editDetailsApi( id, movie);// need to pass id, and value
     navigate('/all');
    };

    useEffect( () => {
      callEditDetails()
    }, [])

    const callEditDetails = async () => {
     const respo = await getEditDetails(id)
     setMovie(respo?.data)
    }

    return (
      <>
        <Navbar />
        <div>
          <FormGroupp>
            <Typography style={{ alignSelf: "center" }} variant="h4">
              Edit Movie
            </Typography>
            <FormControl>
              <InputLabel> Movie name </InputLabel>
              <Input
                name="movieName"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={movie.movieName}
              />
            </FormControl>
            <FormControl>
              <InputLabel> Rating </InputLabel>
              <Input
                name="rating"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={movie.rating}
              />
            </FormControl>
            <FormControl>
              <InputLabel> Cast </InputLabel>
              <Input
                name="cast"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={movie.cast}
              />
            </FormControl>
            <FormControl>
              <InputLabel> Genre </InputLabel>
              <Input
                name="genre"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={movie.genre}
              />
            </FormControl>
            <FormControl>
              <InputLabel> Release Date </InputLabel>
              <Input
                name="releaseDate"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={movie.releaseDate}
              />
            </FormControl>

            <Button
              onClick={(e) => editDetails(id, movie)}
              variant="contained"
              color="secondary"
              style={{ borderRadius: 0, marginTop: 11 }}
            >
              Edit Movie
            </Button>
          </FormGroupp>
        </div>
      </>
    );
  };

  export default EditMovie;
