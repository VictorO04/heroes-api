import express from "express";
import "dotenv/config";
import heroRoutes from "./routes/heroRoutes.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("HEROES API");
});

app.use("/api/heroes", heroRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
})

app.listen(port, () => {
    console.log(`-- http://localhost:${port}`)
})