"use strict";

function getDogImage() {
  let breed = $("#display").val();
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => checkbreed(responseJson))
    .catch((error) => console.log(error));
}

function happyCase(imageLink) {
  $(".results").replaceWith(
    `<div class="results"><h2>Look at this dog!</h2><img src="${imageLink}" class="results-img"></div>`
  );
}

function unhappyCase() {
  $(".results").replaceWith(
    `<h2 class="results">${$("#display").val()} breed Not found</h2>`
  );
}

function checkbreed(responseJson) {
  console.log(responseJson);
  if (responseJson.status == "success") {
    happyCase(responseJson.message);
  } else {
    unhappyCase();
  }
  $(".results").removeClass("hidden");
  $("#display").val("");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
