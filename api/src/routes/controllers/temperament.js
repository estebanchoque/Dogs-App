require("dotenv").config();
const fetch = require("node-fetch");
const { v4: uuidv4 } = require("uuid");
const { Temperament } = require("../../db");
const { API_KEY } = process.env;

const arrReducer = (arr, key) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key]) {
      arr[i][key].split(/\s*,\s*/).map((elem) => result.push(elem));
    }
  }
  result = result
    .reduce((acc, elem) => {
      if (!acc.includes(elem)) {
        acc.push(elem);
      }
      return acc;
    }, [])
    .sort();
  return result;
};

const getTemperaments = (req, res, next) => {
  return Temperament.findAll()
    .then((results) => {
      if (results.length) {
        return res.send(results);
      } else {
        return fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
          .then((res) => res.json())
          .then((json) => {
            const results = arrReducer(json, "temperament"); // Sorted array of temperaments.
            results.map((elem) => {
              Temperament.create({
                name: elem,
              });
            });
            return res.send(results);
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
};

module.exports = {
  getTemperaments,
};
