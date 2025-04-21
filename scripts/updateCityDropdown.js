const cityOptions = {
  br: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"],
  pt: ["Lisboa", "Porto", "Coimbra", "Braga"],
  us: ["Nova Iorque", "Los Angeles", "Chicago", "Miami"],
};

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

function updateMap() {
  const countrySelect = document.getElementById("country");
  const citySelect = document.getElementById("city");
  const selectedCountry = countrySelect.value;

  const selectedCity = citySelect.options[citySelect.selectedIndex]?.text;
  if (!selectedCity) return;

  const mapFrame = document.getElementById("mapFrame");
  mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(
    selectedCity + ", " + selectedCountry
  )}&output=embed`;
}

document.addEventListener("DOMContentLoaded", () => {
  const verButton = document.querySelector('[data-bs-target="#map"]');
  if (verButton) {
    verButton.addEventListener("click", updateMap);
  }
});

// show second column
function showMapSection() {
  const mapSection = document.getElementById("mapSection");
  if (mapSection) {
    mapSection.style.display = "block";
  }
}
