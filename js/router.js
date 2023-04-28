"use strict";

const routes = {
  "/": "/pages/home.html",
  "/vermelho": "/pages/vermelho.html",
  "/azul": "/pages/azul.html",
};

const route = async () => {
  window.event.preventDefault();
  window.history.pushState({}, "", window.event.target.href);
  const path = window.location.pathname;
  const route = routes[path];

  const response = await fetch(route);
  const html = await response.text();
  // console.log(routes[path])

  document.getElementById("root").innerHTML = html;

  console.log(html);
};

window.route = route;
