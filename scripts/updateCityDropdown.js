const cityOptions = {
  br: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"],
  pt: ["Lisboa", "Porto", "Coimbra", "Braga"],
  us: ["Nova Iorque", "Los Angeles", "Chicago", "Miami"],
};

document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("country");
  const citySelect = document.getElementById("city");
  const showMapBtn = document.getElementById("showMapBtn");

  function validateSelection() {
    const countryValid = countrySelect.value !== "";
    const cityValid = citySelect.value !== "";
    showMapBtn.disabled = !(countryValid && cityValid);
  }

  countrySelect.addEventListener("change", () => {
    updateCities();
    validateSelection();
  });

  citySelect.addEventListener("change", validateSelection);

  showMapBtn.addEventListener("click", () => {
    const selectedCountry = countrySelect.value;
    const selectedCity = citySelect.options[citySelect.selectedIndex]?.text;


    const mapFrame = document.getElementById("mapFrame");
    mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(
      selectedCity + ", " + selectedCountry
    )}&output=embed`;

    showMapSection();
  });
});

function updateCities() {
  const countrySelect = document.getElementById("country");
  const citySelect = document.getElementById("city");
  const selectedCountry = countrySelect.value;

  citySelect.innerHTML = '<option selected disabled value="">cidade</option>';
  citySelect.disabled = false;

  if (cityOptions[selectedCountry]) {
    cityOptions[selectedCountry].forEach((city) => {
      const option = document.createElement("option");
      option.value = city.toLowerCase().replace(/\s/g, "-");
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

function showMapSection() {
  const mapSection = document.getElementById("mapSection");
  if (mapSection) {
    mapSection.style.display = "block";
  }
}