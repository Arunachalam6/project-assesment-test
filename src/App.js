import React from "react";
import { useState } from "react";
import {
  Button,
  Typography,
  CardMedia,
  TextField,
  Grid,
  Container,
  Card,
  CardContent,
  Fab,
  CardActions,
} from "@mui/material";
import Hidden from '@mui/material/Hidden';
import { Link } from "react-scroll";
import ModalView from "./components/modalView";
import Swal from "sweetalert2";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import "./App.css";
import { motion } from "framer-motion";
import appIcon from "./images/appIcon.jpg";
import deliveryIcon from "./images/deliveryIco.jpg";
import resturantIcon from "./images/resturantIcon.jpg";
import banner1 from "./images/grilled-beef-pork-with-fresh-guacamole-generated-by-ai.jpg";
import banner2 from "./images/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai.jpg";
import banner3 from "./images/susaifoodd.jpg";
import LogoImage from "./images/logoimg.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!email || !email.includes("@gmail.com")) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Invalid email address.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Thank you! " + email + " We wil get back you later.",
      });
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="topBar" style={{ backgroundColor: "rgb(38, 6, 6)" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={2}>
            <div className="logoContainer">
              <img src={LogoImage} alt="Logo" className="logo" />
            </div>
          </Grid>
          <Grid item xs={false} sm={false} md={1}></Grid>
          <Grid item xs={12} sm={12} md={6} container justifyContent="center">
            <Hidden mdDown>
            <div className="menuContainer">
              <a className="menuItem">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Home
                </Link>
              </a>
              <a className="menuItem">
                <Link
                  activeClass="active"
                  to="joinus"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  Join Us
                </Link>
              </a>
              <a className="menuItem">
                <Link
                  activeClass="active"
                  to="southIndFood"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1500}
                >
                  South Indian Food
                </Link>
              </a>
              <a className="menuItem">
                <Link
                  activeClass="active"
                  to="fastFood"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={2000}
                >
                  Fast Food
                </Link>
              </a>
              <a className="menuItem">
                <Link
                  activeClass="active"
                  to="northIndFood"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={3000}
                >
                  North Indian Food
                </Link>
              </a>
            </div>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12} md={2} container justifyContent="flex-end" sx={{ position: "absolute", top: 15, right: 15 }}>
            <div className="signInContainer">
              <Button
                variant="contained"
                className="signinbtn"
                style={{
                  backgroundColor: "white",
                  color: "rgb(38, 6, 6)",
                  borderRadius: "15px",
                }}
                onClick={openModal}
              >
                Sign In
              </Button>
              {showModal && <ModalView onClose={closeModal} />}
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="App" id="home">
        <CardMedia
          className="image"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            className="headContent"
            gutterBottom
            sx={{
              fontSize: {
                xs: '2rem', 
                sm: '2rem', 
                md: '2rem', 
                lg: '3rem',
                xl: '3.5rem',
              },
              textAlign: 'center',
            }}
          >
            Welcome to Foodify
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            className="headContent"
            gutterBottom
          >
              Enter your email to connect with us
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="filled-hidden-label-small"
              label="Email"
              variant="filled"
              size="small"
              onChange={handleEmailChange}
            />
            <motion.div whileHover={{ scale: 1.1 }}>
              <Fab
                className="button"
                style={{ marginLeft: "15px" }}
                size="small"
                onClick={handleSubmit}
              >
                <ArrowForwardSharpIcon />
              </Fab>
            </motion.div>
          </div>
        </CardMedia>
        <Container className="container" id="joinus">
          <Grid sx={{ flexGrow: 1 }} container spacing={6}>
            <Grid item xs={12} sm={12} xl={4} md={4} sx={{ marginBottom: "15px" }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    src={resturantIcon}
                    className="resturantImg"
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Become A Partner
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Are you a restaurant owner looking to expand your reach
                      and serve more customers? Partner with us and join our
                      network of esteemed restaurants. By becoming a restaurant
                      partner, you'll have access to a wide customer base, and
                      the opportunity to increase your revenue.
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.25 }}
                    >
                      <Button
                        variant="contained"
                        className="signinbtn"
                        style={{
                          backgroundColor: "rgb(38, 6, 6)",
                          color: "white",
                          borderRadius: "15px",
                        }}
                        onClick={openModal}
                      >
                        Sign In
                      </Button>
                      {showModal && <ModalView onClose={closeModal} />}
                    </motion.div>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} xl={4} md={4} sx={{ marginBottom: "15px" }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    src={deliveryIcon}
                    className="deliveryImg"
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Become Foodifer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Are you passionate about delivering great food and
                      exceptional service? Join our team of Dashers and become a
                      vital part of our food delivery network. As a Dasher,
                      you'll enjoy flexible hours, competitive earnings, and the
                      satisfaction of bringing delicious meals to hungry
                      customers.
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.25 }}
                    >
                      <Button
                        variant="contained"
                        className="signinbtn"
                        style={{
                          backgroundColor: "rgb(38, 6, 6)",
                          color: "white",
                          borderRadius: "15px",
                        }}
                        onClick={openModal}
                      >
                        Join Us
                      </Button>
                      {showModal && <ModalView onClose={closeModal} />}
                    </motion.div>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} xl={4} md={4}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    src={appIcon}
                    className="appImg"
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Get the App
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Experience the convenience of ordering delicious meals
                      right at your fingertips. Download our user-friendly
                      mobile app and gain instant access to a world of culinary
                      delights. With our app, you can browse menus, place
                      orders, and track your deliveries with ease.
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.25 }}
                    >
                      <Button
                        variant="contained"
                        className="signinbtn"
                        style={{
                          backgroundColor: "rgb(38, 6, 6)",
                          color: "white",
                          borderRadius: "15px",
                        }}
                        onClick={openModal}
                      >
                        App Link
                      </Button>
                      {showModal && <ModalView onClose={closeModal} />}
                    </motion.div>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className="appContainer" maxWidth="xl" id="southIndFood">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} xl={5} md={5} sx={{ outline: "none" }}>
            <Card
              style={{
                backgroundColor: "white",
                margin: "20px",
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="maroon"
                >
                  <b> SouthIndian Foods</b>
                </Typography>
                <Typography variant="h5" color="maroon">
                  Experience the rich blend of aromatic spices and vibrant
                  flavors that define South Indian dishes. Immerse yourself in
                  the culinary traditions of South India, where every bite tells
                  a story of heritage, culture, and a love for good food.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} xl={7} md={7}>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardMedia component="img" src={banner1} className="iconImg" />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container className="resturantContainer" maxWidth="xl" id="fastFood">
        <Grid container spacing={6} alignItems="center">
          <Grid
            item
            xs={12}
            sm={12}
            xl={7}
            md={7}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Card>
                <CardMedia component="img" src={banner2} className="iconImg" />
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} xl={5} md={5} sx={{ outline: "none" }}>
            <Card
              style={{
                backgroundColor: "white",
                margin: "20px",
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="maroon"
                >
                  <b>Fast Foods</b>
                </Typography>
                <Typography variant="h5" color="maroon">
                  Treat yourself to a delightful array of burgers, pizzas,
                  fries, and more, satisfying your cravings for quick and
                  delicious meals. Experience the convenience and excitement of
                  fast food, where every bite brings a burst of flavors and a
                  touch of indulgence to your day.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className="appContainer" maxWidth="xl" id="northIndFood">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} xl={5} md={5} sx={{ outline: "none" }}>
            <Card
              style={{
                backgroundColor: "white",
                margin: "20px",
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color="maroon"
                >
                  <b>NorthIndian Foods</b>
                </Typography>
                <Typography variant="h5" color="maroon">
                  Experience the rich flavors and aromatic spices of North
                  Indian cuisine, where every bite takes you on a culinary
                  journey filled with hearty curries, tandoori delights, and
                  mouthwatering biryanis. Indulge in the authentic taste of
                  North India, where traditional recipes and bold flavors come
                  together to create a truly satisfying dining experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} xl={7} md={7}>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardMedia component="img" src={banner3} className="iconImg" />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container className="footer" maxWidth="xl">
        <Typography
          component="body2"
          variant="h5"
          color={"white"}
          align="center"
        >
          © 2023 Food Delivery App. All rights reserved.
        </Typography>
        <Typography variant="body2" color="white" align="center">
          Contact Us: arunarunacahalam444@gmail.com | Phone: **** *** ***
        </Typography>
        <br />
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.25 }}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={3000}
            >
              <Button
                variant="contained"
                className="signinbtn"
                style={{
                backgroundColor: "white",
                color: "rgb(38, 6, 6)",
                borderRadius: "15px",
                }}
              >
              Back to Home
              </Button>
            </Link>
          {showModal && <ModalView onClose={closeModal} />}
        </motion.div>
      </Container>
    </div>
  );
}

export default App;
