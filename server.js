const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await axios.post("http://localhost:11434/api/generate", {
            model: "llama2",
            prompt,
            stream: false
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error procesando la solicitud" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
