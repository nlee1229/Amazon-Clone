const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IUKWwJpaSoRz1wyaPPiKBoozEBCUXfxnSVMdUndukO6NLP3U2WbvhRBVHHrJj54RrnDMu7tc5nq0dEIhmPSuo9J00q29hr02v');


// ALL BELOW IS TO SET UP AN API

// App config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// API routes
app.get("/", (request, response) => response.status(200).send("Hello there"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("****Payment request successful****", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK-Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);