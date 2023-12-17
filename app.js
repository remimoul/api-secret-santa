const express = require("express");
const server = express();
const port = 3005;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Secret Santa API",
      description: "MDS API for Secret Santa",
      contact: {
        name: "Rémi",
      },
      servers: ["http://localhost:3005"],
    },
  },
  apis: ["./api-docs/swagger.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/secret-santa");

server.use(express.urlencoded({extended:true}));
server.use(express.json());


const userRoute = require("./routes/userRoute");
server.use("/", userRoute);

const groupRoute = require("./routes/groupRoute");
server.use("/group", groupRoute);


server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
