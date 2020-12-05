import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainContext from './../context/main-context';
import Layout from "../hoc/Layout";
import Rating from '@material-ui/lab/Rating';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));


export default function ProductDetail(props) {
    const classes = useStyles();
    const [priceHistory, setPriceHistory] = useState([]);
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (props.location.state && props.location.state.product) {
            setProduct(props.location.state.product);
            fetchCompetitive(props.location.state.product.asin);
        }

    }, [props.location.state]);

    const fetchCompetitive = (asin) => {
        const options = {
            method: 'GET',
            url: 'https://amazon-price-history.p.rapidapi.com/api/us/price_history',
            params: {
                asin: asin,
                price_type: "amazon"
            },
            headers: {
                "x-rapidapi-key": "9df2eee8demsh5eb4cb861dad089p10f9cajsn34bde118ea1b",
                "x-rapidapi-host": "amazon-price-history.p.rapidapi.com",
            }
        };

        axios.request(options).then(function (response) {
            console.log('req', response);
            if (response.data && response.data.price_history && response.data.price_history.length) {

                setPriceHistory(response.data.price_history);
            }

        }).catch(function (error) {
            console.error(error);
        });

    }


    return (
        <Layout>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={product.thumbnail}
                            title={product.title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.title}
                            </Typography>
                            <Typography>
                                User Reviews: {product.total_reviews}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography component="legend">
                                Price ${product.current_price}
                            </Typography>
                            <Typography component="legend">Rating</Typography>
                            <Rating name="read-only" value={parseFloat(product.rating)} readOnly />
                        </CardActions>
                    </Card>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="lg">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Typography component="h1" variant="h4" align="center" color="textPrimary" >
                        Price history
                    </Typography>
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <List className={classes.root}>
                            {priceHistory ? priceHistory.map((card) => (
                                <React.Fragment>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={product.thumbnail} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={card.price}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Price Date: {card.price_date}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            )) : (
                                 <Typography component="h4" variant="h4" align="center" color="textPrimary" >
                                    No history found
                                </Typography>
                            )}
                        </List>
                    </Container>
                </Grid>
            </Container>

            {/* End footer */}
        </Layout>
    );
}
