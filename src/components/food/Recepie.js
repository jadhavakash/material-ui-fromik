import React from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    // backgroundColor:theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
}));
export default function Recepie(props) {
  const classes = useStyles();
  const { recepies } = props;
  return (
    <Container className={classes.root}>
      <Grid container spacing={3} >
        {recepies.map((recipe) => (
          <Grid item lg={3} md={6}>
            <Card variant="outlined">
              <CardHeader
                avatar={<Avatar>AJ</Avatar>}
                subheader="posted on 11 Aug 2021"
                title="akash"
              />
              <CardActionArea>
                <CardMedia
                  image={recipe.recipe.image}
                  style={{ height: 300 }}
                />
                <CardContent>
                  <Typography variant="h5">{recipe.recipe.label}</Typography>
                  <Typography variant="subtitle1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem alias necessitatibus obcaecati!
                  </Typography>
                  <CardActions>
                    <Button>Read More</Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}

        {/* <Grid item lg={3} md={6}>
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h5">Read Docs</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga error autem itaque qui atque, facere aliquid ex ipsa perferendis. Enim, omnis necessitatibus odio inventore ullam impedit blanditiis explicabo cumque.</Typography>
                            <Button>Read More</Button>
                        </Box>
                    </Paper>
                </Grid> */}
        {/* <Grid item lg={3} md={6}>
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h5">Read Docs</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga error autem itaque qui atque, facere aliquid ex ipsa perferendis. Enim, omnis necessitatibus odio inventore ullam impedit blanditiis explicabo cumque.</Typography>
                            <Button>Read More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={6}>
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h5">Read Docs</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga error autem itaque qui atque, facere aliquid ex ipsa perferendis. Enim, omnis necessitatibus odio inventore ullam impedit blanditiis explicabo cumque.</Typography>
                            <Button>Read More</Button>
                        </Box>
                    </Paper>
                </Grid> */}
      </Grid>
    </Container>
  );
}
