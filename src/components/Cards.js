import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

export default function Cards() {
    return (
        <Container>
            <Grid container spacing={3} pt={20}>
                <Grid item lg={3} md={6}>
                    <Paper >
                        <Box p={2}>
                            <Typography variant="h5">Read Docs</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga error autem itaque qui atque, facere aliquid ex ipsa perferendis. Enim, omnis necessitatibus odio inventore ullam impedit blanditiis explicabo cumque.</Typography>
                            <Button>Read More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6}>
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h5">Read Docs</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga error autem itaque qui atque, facere aliquid ex ipsa perferendis. Enim, omnis necessitatibus odio inventore ullam impedit blanditiis explicabo cumque.</Typography>
                            <Button>Read More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6}>
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
                </Grid>
            </Grid>
        </Container>
    )
}
