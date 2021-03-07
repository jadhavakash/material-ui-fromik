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
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import SearchBar from 'material-ui-search-bar'


const useStyles =  makeStyles(theme=>({
    root:{

    },
    jumbtron:{
        textAlign:"center",
        backgroundColor:"#ff3f34",
        color:"#fff",
        paddingTop:theme.spacing(8),
        height:"30vh",
    },
    brandicon:{
        fontSize:"100px",
    },
    search:{
        margin:"auto",
        width:"500px",
    }
}))


export default function Header(props) {
    const {search,onInputChange} = props;

    const classes = useStyles();
    return (
        <Container >
            <Grid className={classes.jumbtron}>
                <Typography variant="h2">
                    <FastfoodSharpIcon  className={classes.brandicon}/>
                    Fast Food
                </Typography>
                <SearchBar 
                    className={classes.search}
                    placeholder="Search Food..."
                    variant="outlined"
                    value={search}
                    onChange={onInputChange}
                />
             </Grid>
        </Container>
    )
}
