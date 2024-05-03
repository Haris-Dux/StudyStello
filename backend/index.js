
import express from "express";
import path from "path";


const app = express();

app.use(express.json({limit:'50mb'}));

const root = path.resolve();
app.use(express.static(path.join(root, 'dist')));

app.get("*", (req, res) => {
  res.sendFile(path.join(root, 'dist/index.html'));
});

app.listen(8000,console.log(`Server is running on http://localhost:${8000}`))

