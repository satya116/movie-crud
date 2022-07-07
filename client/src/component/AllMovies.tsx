import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import { getAllMovieDetails, deleteDetailsApi } from "../services/movieDetails";

import { Link } from "react-router-dom";

const AllMovies = () => {
  let navigate = useNavigate()
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    lol();
  }, []);

  const lol = async () => {
    const mc = await getAllMovieDetails();
    console.log(mc?.data);
    setMovies(mc?.data);
  };

  const deleteDetails = async (id: any) => {
    await deleteDetailsApi(id)
    navigate('/all')
  }

  return (
    <>
      <Navbar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Movie Name </TableCell>
            <TableCell> Rating </TableCell>
            <TableCell> cast </TableCell>
            <TableCell> Genre  </TableCell>
            <TableCell> Release Date </TableCell>
            <TableCell> Delete/Edit </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map(
            (movie: {
              _id: string;
              movieName: string;
              rating: string;
              cast: string;
              genre: string;
              releaseDate: String;

            }) => {
              return (
                <TableRow key={movie?._id}>
                  <TableCell> {movie?.movieName} </TableCell>
                  <TableCell> {movie?.rating} </TableCell>
                  <TableCell> {movie?.cast} </TableCell>
                  <TableCell> {movie?.genre} </TableCell>
                  <TableCell> {movie?.releaseDate} </TableCell>

                  <TableCell> <Button component={Link} to={`/edit/${movie._id}`} color="primary" variant='contained'>Edit </Button> <Button color="warning" variant='contained' onClick={(e) => deleteDetails(movie?._id)} > Delete </Button> </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default AllMovies;
