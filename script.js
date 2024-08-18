document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".box");

  items.forEach((item) => {
    const moinsBtn = item.querySelector(".moins");
    const plusBtn = item.querySelector(".plus");
    const numDisplay = item.querySelector(".num");
    const unitPrice = parseInt(item.querySelector("div span:nth-child(2)").innerText);
    const totalUnitDisplay = item.querySelector(".totalUnit .price");

    // Initialisation (Déjà faite dans le HTML)
    // numDisplay.innerText = 1;
    // totalUnitDisplay.innerText = unitPrice;

    // Décrémenter la quantité
    moinsBtn.addEventListener("click", () => {
      let count = parseInt(numDisplay.innerText);
      if (count > 1) {
        count--;
        numDisplay.innerText = count;
        totalUnitDisplay.innerText = count * unitPrice;
        updateTotal();
      }
    });

    // Incrémenter la quantité
    plusBtn.addEventListener("click", () => {
      let count = parseInt(numDisplay.innerText);
      if (count < 50) {
        count++;
        numDisplay.innerText = count;
        totalUnitDisplay.innerText = count * unitPrice;
        updateTotal();
      }
    });

    // Supprimer l'article du DOM
    const delBtn = item.querySelector(".faSolid");
    delBtn.addEventListener("click", () => {
      item.remove();
      updateTotal();
    });

    // Activer/Désactiver les favoris
    const likeBtn = item.querySelector(".btn");
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("active");
    });
  });

  // Mise à jour du total de la commande
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".box").forEach((item) => {
      const totalUnit = parseInt(item.querySelector(".totalUnit .price").innerText);
      total += isNaN(totalUnit) ? 0 : totalUnit;
    });
    document.getElementById("tyu").innerText = total;
  }
});
