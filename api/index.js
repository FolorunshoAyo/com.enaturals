const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const cors = require('cors');
const dotenv = require("dotenv");
const path = require("path");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
// const reviewsRoute = require("./routes/reviews");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");
const replyRoute = require("./routes/reply");
const productReviewRoute = require("./routes/productReview");
const slideRoute = require("./routes/slide");
const testimonialRoute = require("./routes/testimonial");
const picturesRoute = require("./routes/pictureGallery");
const videosRoute = require("./routes/videoGallery");
const addressRoute = require("./routes/address");

    dotenv.config();

    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => { console.log("DBConnection Successfull") })
    .catch((err) => {
        console.log(err);
    });

    app.use(express.json());
    app.use(cors());
    app.use(express.static("client-static"));
    app.use("/api/users", userRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/products", productRoute);
    app.use("/api/orders", orderRoute);
    app.use("/api/blogs", postRoute);
    app.use("/api/comment", commentRoute);
    app.use("/api/reply", replyRoute);
    app.use("/api/productReview", productReviewRoute);
    app.use("/api/slides", slideRoute);
    app.use("/api/testimonials", testimonialRoute);
    app.use("/api/pictures", picturesRoute);
    app.use("/api/videos", videosRoute);
    app.use("/api/address", addressRoute);

    /* app.get("/admin", (req, res) => {
     // Build index.html file for the admin react app here
        res.sendFile(path.join(__dirname, "admin-static/index.html"));   
    }); */

    app.get("*", (req, res) => {
        // Build index.html file for the client react app here
        res.sendFile(path.join(__dirname, "client-static/index.html")); 
    });

    app.listen(5000, () => {
        console.log("Backend server running at port 5000");
    });



