import { load, save } from "./localStorage.js";
import { throttle } from "lodash";
// import _ from "lodash";
// const _ = require("lodash");
const form = document.querySelector(".feedback-form");
const s_key = "feedback-form-state";
const form_data = {
  email: "",
  message: "",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.clear();
  save(s_key, form_data);
  form.reset();
  console.log(form_data);
});

form.addEventListener(
  "input",
  _.throttle((e) => {
    form_data[e.target.name] = e.target.value === "" ? "" : e.target.value;
  }, 500)
);

window.onload = () => {
  let data = load(s_key);
  data = data === undefined ? { email: "", message: "" } : data;
  if (data) {
    form.elements[0].value = data.email;
    form.elements[1].value = data.message;
  }
};
