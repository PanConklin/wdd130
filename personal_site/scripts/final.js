document.getElementById("addIngredientButton").addEventListener("click", function () {
    const ingredientList = document.getElementById("ingredient-list");
    const newInput = document.createElement("li");
    newInput.innerHTML = '<input type="text" placeholder="Ingredient" /><br />';
    ingredientList.appendChild(newInput);
  });


  document.getElementById("addInstructionButton").addEventListener("click", function () {
    const instructionContainer = document.getElementById("instruction-list");
    const newInput = document.createElement("li");
    newInput.innerHTML = '<input type="text" placeholder="Enter the next step here" />';
    instructionContainer.appendChild(newInput);
});