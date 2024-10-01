"use strict";

function addToken() {
  const input = document.getElementById("tokenInput");
  const tokenValue = input.value.trim();

  if (tokenValue) {
    const tokenContainer = document.querySelector(".token-container");
    const newToken = document.createElement("div");
    newToken.className = "token";
    newToken.onclick = function () {
      removeToken(this);
    };
    newToken.innerHTML = `${tokenValue} <span class="close">&times;</span>`;
    tokenContainer.insertBefore(newToken, input);
    input.value = "";
  }
}

function removeToken(token) {
  token.remove();
}
