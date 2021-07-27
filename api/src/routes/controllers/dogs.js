require("dotenv").config();
const fetch = require("node-fetch");
const Sequelize = require("sequelize");
const { Dog, Temperament } = require("../../db");
const { API_KEY } = process.env;
const Op = Sequelize.Op;

const getDogs = (req, res, next) => {
  const { name } = req.query;
  if (!Object.keys(req.query).length) {
    const dbResponse = Dog.findAll({
      include: {
        model: Temperament,
        as: "temperament",
      },
    });
    const apiResponse = fetch(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    ).then((response) => response.json());
    Promise.all([dbResponse, apiResponse])
      .then((results) => {
        const [dbResults, apiResults] = results;
        const response = dbResults.concat(apiResults);
        if (!response.length) {
          return res.status(400).send("Dogs not found");
        }
        return res.json(response);
      })
      .catch((err) => next(err));
  } else if (Object.keys(req.query).length === 1 && name) {
    const apiResponse = fetch(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .catch((err) => next(err));
    const dbResponse = Dog.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      include: [Temperament],
    });
    Promise.all([dbResponse, apiResponse])
      .then((results) => {
        const [dbResults, apiResults] = results;
        const response = dbResults.concat(apiResults);
        if (!response.length) {
          return res.status(400).send("Dogs not found");
        }
        return res.json(response);
      })
      .catch((err) => next(err));
  } else if (!name) {
    return res.status(400).send("Insert a breed name");
  }
};

const getDogDetail = (req, res, next) => {
  const { id } = req.params;
  if (id) {
    const dbResponse = Dog.findAll({
      include: [Temperament],
    });
    const apiResponse = fetch(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    ).then((response) => response.json());
    Promise.all([dbResponse, apiResponse])
      .then((results) => {
        const [dbResults, apiResults] = results;
        const response = dbResults.concat(apiResults);
        const search = response.find((elem) => {
          return String(elem.id) === String(id);
        });
        if (!search) {
          return res.status(400).send("Insert a valid ID");
        }
        return res.send(search);
      })
      .catch((err) => next(err));
  }
};

module.exports = {
  getDogs,
  getDogDetail,
};
