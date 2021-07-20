export default function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Name can't be empty";
  } else if (!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(input.name)) {
    errors.name = "Name it must be a string";
  }

  if (!input.height) {
    errors.height = "Height can't be empty";
  } else if (!/^\d+$/.test(input.height)) {
    errors.height = "Height it must be a number";
  }

  if (!input.weight) {
    errors.weight = "Weight can't be empty";
  } else if (!/^\d+$/.test(input.weight)) {
    errors.weight = "Weight it must be a number";
  }

  if (!input.temperaments.length) {
    errors.temperaments = "Must select at least one temperament";
  }

  if (!input.life_span) {
    errors.life_span = "Life span can't be empty";
  } else if (!/^\d+$/.test(input.life_span)) {
    errors.life_span = "Life span must be a number";
  }

  return errors;
}
