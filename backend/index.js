const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const controllers = require('./services/controllers');

const API_PORT = 3030;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());
app.use("/api", router);

router.post("/signupUser", async (req, res) => res.json(await controllers.signupUser(req.body)));

router.post("/loginUser", async (req, res) => res.json(await controllers.loginUser(req.body)));

router.get("/getUserProducts", async (req, res) => res.json(await controllers.getUserProducts(req.query)));

router.get("/getProduct", async (req, res) => res.json(await controllers.getProduct(req.query)));

router.post("/createProduct", async (req, res) => res.json(await controllers.createProduct(req.body)));

router.put("/saveProduct", async (req, res) => res.json(await controllers.saveProduct(req.body)));

router.delete("/deleteProduct", async (req, res) => res.json(await controllers.deleteProduct(req.query)));

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


