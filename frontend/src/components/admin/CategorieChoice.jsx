import React from "react";

const CategorieChoice = ({ setCategorie }) => {
  const categorieOption = ["F1 with race", "F1 without race", "Autres"];

  const selectHandle = (e) => {
    const elmtIndex = document.getElementById("categorie");
    if (elmtIndex.selectedIndex > 0) {
      setCategorie(e.target.value);
    } else {
      setCategorie();
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix de la catégorie :</label>
      <select
        className="optionBox"
        name="categorie"
        id="categorie"
        onChange={selectHandle}
      >
        <option name="choice" key="choice" id="choice">
          Sélectionner dans la liste
        </option>
        {categorieOption.map((data) => (
          <option name={data} key={data} id={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorieChoice;
