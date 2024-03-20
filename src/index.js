// @ts-check
import "./styles.css";
import { insertExample } from "./code-example";
import { handleNavigation } from "./navigation";

window.onload = () => {
  const webpackExamplePre = document.getElementById("webpack-example");
  insertExample(webpackExamplePre);
  const navbar = document.getElementById("nav-bar");
  handleNavigation(navbar);
};
