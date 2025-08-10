import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI =
  "mongodb+srv://sarthakgoel1203:sarthakgoel1203@cluster0.v3hoixo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
  shortUrl: String,
});
const Url = mongoose.model("Url", urlSchema);

app.post("/api/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ error: "URL required" });
  const shortId = nanoid(7);
  const shortUrl = `${req.protocol}://${req.get("host")}/${shortId}`;
  const url = new Url({ originalUrl, shortId, shortUrl });
  await url.save();
  res.json({ originalUrl, shortUrl, shortId });
});

app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });
  if (url) return res.redirect(url.originalUrl);
  res.status(404).send("Not found");
});

app.get("/api/urls", async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
