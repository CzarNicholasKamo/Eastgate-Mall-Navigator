function getDirections() {
  const entrance = document.getElementById("entrance").value;
  const store = document.getElementById("store").value;

  const directions = {
    "JD Sports": "Located near Entrance 1, Upper Level.",
    "La Parada": "On the Rooftop Piazza near Entrance 9.",
    "Checkers LiquorShop": "Lower Level, Entrance 3.",
    "Cosmic Comics": "Entrance 2, Lower Level.",
    "Nespresso": "Upper Level, Entrance 8.",
    "Adidas": "Second level,  Entrance 1.",
  };
const message = `From ${entrance}, head towards ${store}. ${directions[store]}`;
    const outputBox = document.getElementById("output");

    outputBox.classList.remove("show-output");
    void outputBox.offsetWidth; 
    
    outputBox.innerText = message;
    outputBox.classList.add("show-output");
}




