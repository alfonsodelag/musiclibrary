import "./assets/css/main.scss";
const { JSDOM } = require("jsdom");
const myJSDom = new JSDOM (html);
const $ = require('jquery')(myJSDom.window);
