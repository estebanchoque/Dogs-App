const { v4: uuidv4 } = require("uuid");
const { Dog } = require("../../db");

const addDog = (req, res, next) => {
  const { name, height, weight, life_span, image, temperament } = req.body;
  if (!name || !height || !weight || !temperament) {
    return res.status(400).send("Form can't be empty");
  }
  return Dog.create({
    id: uuidv4(),
    name,
    height,
    weight,
    life_span,
    image,
  })
    .then((response) => {
      console.log(response)
      response.addTemperament(temperament);
      return res.send(response);
    })
    .catch((err) => next(err));
};

module.exports = {
  addDog,
};
