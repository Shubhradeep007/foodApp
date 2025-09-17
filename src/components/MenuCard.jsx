import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MenuCard = ({ card, handleRating }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#121A1D",
        position: "relative",
        borderRadius: "15px"
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="220"
          image={card.image}
          alt={card.title}
          sx={{ mt: "8px", borderRadius: "15px" }}
        />
        <FavoriteBorderIcon
          aria-label="add to favorites"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "white",
            backgroundColor: "#121A1D",
            borderRadius: "50%",
            width: 30,
            height: 30,
            padding: 1,
            color: "#D68240",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <FavoriteIcon sx={{ color: "#D68240" }} />
        </FavoriteBorderIcon>
      </Box>

      <CardContent>
        <Rating
          name={`star-rating-${card.id}`}
          value={card.rating}
          precision={0.5} // Allows half-stars
          onChange={(event, newValue) => handleRating(card.id, newValue)}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          sx={{
            color: "#FFD700", // Gold color for stars
            mb: 1,
          }}
        />

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: "#D68240" }}
        >
          {card.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#A0A0A0", minHeight: 60 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          similique provident ipsum quae.
        </Typography>

        {/* Price and Add to Cart Section */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#D68240" }}
          >
            Rs.{card.price}
          </Typography>
          <IconButton
            aria-label="add to basket"
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #D68240",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
