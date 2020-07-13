import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

import {getDetails} from "../../api/MovieService"

const getPosterUrl = (imageUri) =>
  imageUri
    ? `https://image.tmdb.org/t/p/w200${imageUri}`
    : "https://placehold.co/200x300?text=No+image";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  let history = useHistory();
  
  useEffect(() => {
    getDetails(id).then(results => setMovie(results.data))
  },[id])

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardMedia image="" description="movie poster">
            <img src={getPosterUrl(movie.poster_path)} />
          </CardMedia>
          <Typography variant="h5">{movie.original_title}</Typography>
          <Typography variant="body2" color="textSecondary">
            Details for movie {movie.original_title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default MovieDetails;
