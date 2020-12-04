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


const useStyles = makeStyles((theme) => ({
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
  const [relatedProducts, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (props.location.state)
        setProduct(props.location.state.product);
  }, [props.location.state]);

  const fetchCompetitive = () => {

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
              Competitive Products
            </Typography>
            {relatedProducts && relatedProducts.map((card) => (
              <Grid item key={card.asin} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.thumbnail}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      User Reviews: {card.total_reviews}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography component="legend">
                      Price ${card.current_price}
                    </Typography>
                     <Typography component="legend">Rating</Typography>
                    <Rating name="read-only" value={parseFloat(card.rating)} readOnly />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      {/* End footer */}
    </Layout>
  );
}
