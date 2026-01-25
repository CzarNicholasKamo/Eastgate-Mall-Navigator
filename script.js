function getDirections() {
  const entrance = document.getElementById("entrance").value;
  const store = document.getElementById("store").value;

  const directions = {
    // Anchor Stores
    "Woolworths": "Head to the far end of the mall near Entrance 6, Upper Level.",
    "Checkers": "Located on the Lower Level, best accessed via Entrance 3.",
    "Edgars": "A massive multi-level store located near the Centre Court, Entrance 2.",
    
    // Fashion & Sport
    "JD Sports": "Upper Level, close to Entrance 1 (near the Food Court).",
    "Adidas": "Upper Level, located centrally near the Centre Court.",
    "Nike": "Upper Level, situated between Entrance 1 and the Centre Court.",
    "H&M": "Large multi-level store near Entrance 2 and Entrance 4.",
    "Zara": "Upper Level, located near the Entrance 2 wing.",
    "Mr Price": "Lower Level, near Entrance 4 and the movie area.",
    "Cotton On": "Upper Level, near Entrance 6.",

    // Tech & Hobbies
    "iStore": "Upper Level, centrally located near the Centre Court lifts.",
    "Incredible Connection": "Lower Level, near the Entrance 3 corridor.",
    "Cosmic Comics": "Lower Level, near Entrance 2.",
    "BT Games": "Lower Level, near the Ster-Kinekor entrance.",

    // Food & Lifestyle
    "La Parada": "Located on the Rooftop Piazza (Level 3), use lifts near Entrance 9.",
    "Nespresso": "Upper Level, kiosk-style near Entrance 8.",
    "Starbucks": "Upper Level, centrally located near the Centre Court.",
    "Mugg & Bean": "Upper Level, near Entrance 6.",
    "Krispy Kreme": "Upper Level, near the Food Court (Entrance 1).",
    "Ster-Kinekor": "Lower Level, located at the Entrance 4 entertainment wing."
};

const message = `From ${entrance}, head towards ${store}. ${directions[store]}`;
    const outputBox = document.getElementById("output");

    outputBox.classList.remove("show-output");
    void outputBox.offsetWidth; 
    
    outputBox.innerText = message;
    outputBox.classList.add("show-output");
}





