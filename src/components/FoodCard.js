import React from 'react';
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
} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles =  makeStyles(theme=>({
    root:{
        width:"100vw",
        height:"100vh",
        // backgroundColor:theme.palette.grey[200],
        paddingTop:theme.spacing(5),
    },
}))
export default function FoodCard() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={3} md={6}>
                    <Card variant="outlined">
                        <CardHeader 
                            avatar={
                                <Avatar>AJ</Avatar>
                            }
                            subheader="posted on 11 Aug 2021" 
                            title="akash"  
                        />
                        <CardActionArea>
                            <CardMedia image="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{height:300}}/>
                            <CardContent>
                                <Typography variant="h4">
                                    Post Tittle
                                </Typography>
                                <Typography variant="subtitle1">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem alias necessitatibus obcaecati!
                                </Typography>
                                <CardActions>
                                    <Button>Read More</Button>
                                </CardActions>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={3} md={6}>
                    <Card variant="outlined">
                        <CardHeader 
                                avatar={
                                    <Avatar>AJ</Avatar>
                                }
                                subheader="posted on 11 Aug 2021" 
                                title="akash"  
                            />
                        <CardActionArea>
                            <CardMedia image="https://images.pexels.com/photos/3893764/pexels-photo-3893764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{height:300}}/>
                            <CardContent>
                                <Typography variant="h4">
                                    Post Tittle
                                </Typography>
                                <Typography variant="subtitle1">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem alias necessitatibus obcaecati!
                                </Typography>
                                <CardActions>
                                    <Button>Read More</Button>
                                </CardActions>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={3} md={6}>
                    <Card variant="outlined">
                        <CardHeader 
                                avatar={
                                    <Avatar>AJ</Avatar>
                                }
                                subheader="posted on 11 Aug 2021" 
                                title="akash"  
                            />
                            <CardActionArea>
                            <CardMedia image="https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{height:300}}/>
                            <CardContent>
                                <Typography variant="h4">
                                    Post Tittle
                                </Typography>
                                <Typography variant="subtitle1">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem alias necessitatibus obcaecati!
                                </Typography>
                                <CardActions>
                                    <Button>Read More</Button>
                                </CardActions>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={3} md={6}>
                    <Card variant="outlined">
                        <CardHeader 
                            avatar={
                                <Avatar>AJ</Avatar>
                            }
                            subheader="posted on 11 Aug 2021" 
                            title="akash"  
                        />
                        <CardActionArea>
                            <CardMedia image="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{height:300}}/>
                            <CardContent>
                                <Typography variant="h4">
                                    Post Tittle
                                </Typography>
                                <Typography variant="subtitle1">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem alias necessitatibus obcaecati!
                                </Typography>
                                <CardActions>
                                    <Button>Read More</Button>
                                </CardActions>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
