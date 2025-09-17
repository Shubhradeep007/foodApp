import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MenuCard from "../../components/MenuCard";
import menu1 from "../../assets/menu/menu1.png";
import menu2 from "../../assets/menu/menu2.png";
import menu3 from "../../assets/menu/menu3.png";
import menu4 from "../../assets/menu/menu4.png";
import menu5 from "../../assets/menu/menu5.png";
import menu6 from "../../assets/menu/menu6.png";
import menu7 from "../../assets/menu/menu7.png";
import menu8 from "../../assets/menu/menu8.png";
import menu9 from "../../assets/menu/menu9.png";
import { useState } from "react";

const initialData = [
  { id: 1, image: menu1, title: "Chicken", rating: 5, price: "250" },
  { id: 2, image: menu2, title: "Fried Rice", rating: 3, price: "99" },
  { id: 3, image: menu3, title: "Chicken Burger", rating: 4, price: "175" },
  { id: 4, image: menu4, title: "Grilled Fish", rating: 4, price: "156" },
  { id: 5, image: menu5, title: "Veg Pizza", rating: 5, price: "159" },
  { id: 6, image: menu6, title: "Pasta", rating: 3, price: "135" },
  { id: 7, image: menu7, title: "Salad Bowl", rating: 4, price: "450" },
  { id: 8, image: menu8, title: "Paneer Tikka", rating: 2, price: "199" },
  { id: 9, image: menu9, title: "Ice Cream", rating: 5, price: "95" },
];

const Deliciousmenu = () => {
  const [cardData] = useState(initialData);

  // const handleRating = (id, newValue) => {
  //   setCardData((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, rating: newValue } : item
  //     )
  //   );
  // };

  return (
    <>
      <Box sx={{ backgroundColor: "#0A1316" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 10,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Our Declicious Menu</Typography>
          <br />
          <Container>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              libero at quibusdam quod eos et, deserunt maiores possimus quas,
              nostrum cumque reprehenderit placeat eveniet, architecto dolor
              laboriosam velit repellat soluta.
            </Typography>
          </Container>
        </Container>

        <Box>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button color="containedSecondary" variant="outlined">
              Indian
            </Button>
            <Button color="containedSecondary" variant="outlined">
              Mexican
            </Button>
            <Button color="containedSecondary" variant="outlined">
              Italian
            </Button>
            <Button color="containedSecondary" variant="outlined">
              Chinese
            </Button>
            <Button color="containedSecondary" variant="outlined">
              Bengali
            </Button>
            <Button color="containedSecondary" variant="outlined">
              Arabian
            </Button>
            <Button color="containedSecondary" variant="outlined">
              Japanese
            </Button>
          </Stack>
        </Box>

        <Container>
          <Box sx={{ flexGrow: 1, p: 3,  }}>
            <Grid container spacing={3}>
              {cardData.map((card) => (
                <Grid item xs={4} key={card.id}>
                  <Paper elevation={3} sx={{ height: "100%", backgroundColor: "#121A1D"}}>
                    <MenuCard card={card} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Deliciousmenu;
