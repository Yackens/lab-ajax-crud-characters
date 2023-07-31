const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      console.log("fetch all clicked");
      const { data } = await charactersAPI.getFullList();
      console.log("here is the full list", data);
      const charContainer = document.querySelector(".characters-container");
      charContainer.innerHTML = "";

      data.forEach((oneChar) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("character-info");
        newDiv.innerHTML = `<div class="name">Name: ${oneChar.name}</div>
        <div class="occupation">Occupation: ${oneChar.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${oneChar.cartoon}</div>
        <div class="weapon">Character Weapon: ${oneChar.weapon}</div>`;
        charContainer.appendChild(newDiv);
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      console.log("fetch one clicked");
      const oneCharId = document.getElementById("one-char-id-input").value;
      console.log("here is our character ID", oneCharId);
      const { data } = await charactersAPI.getOneRegister(oneCharId);
      console.log("here is the found char", data);
      const charContainer = document.querySelector(".characters-container");
      charContainer.innerHTML = "";
      const newDiv = document.createElement("div");
      newDiv.classList.add("character-info");
      newDiv.innerHTML = `<div class="name">Name: ${data.name}</div>
      <div class="occupation">Occupation: ${data.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
      <div class="weapon">Character Weapon: ${data.weapon}</div>`;
      charContainer.appendChild(newDiv);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      console.log("delete clicked");
      const deleteId = document.querySelector("#one-char-id-delete").value;
      console.log("here is the id to delete", deleteId);
      await charactersAPI.deleteOneRegister(deleteId);
      const { data } = await charactersAPI.getFullList();
      console.log("here is the full list:", data);
      const charContainer = document.querySelector(".characters-container");
      charContainer.innerHTML = "";

      data.forEach((oneChar) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("character-info");
        newDiv.innerHTML = `<div class="name">Name: ${oneChar.name}</div>
        <div class="occupation">Occupation: ${oneChar.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${oneChar.cartoon}</div>
        <div class="weapon">Character Weapon: ${oneChar.weapon}</div>`;
        charContainer.appendChild(newDiv);
      });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      console.log("submit clicked");
      const updatedId = document.querySelector("#one-char-id-update").value;
      console.log("here is the id to delete", updatedId);
      await charactersAPI.updateOneRegister(updatedId);
      const { data } = await charactersAPI.getFullList();
      // Revise in morning session.
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      console.log("submit clicked");
      // Revise in morning session.

    });
});