const portionInput = document.getElementById('portionInput');
const weightInput = document.getElementById('weightInput');
const liquidInput = document.getElementById('liquidInput');

const calculateBtn = document.getElementById('calculateBtn');

const wasteSaved = document.getElementById('wasteSaved');
const totalCarbonSaved = document.getElementById('carbonSaved');
const totalWaterSaved = document.getElementById('waterSaved');

const impactImage = document.getElementById('impactImage');
const impactTitle = document.getElementById('impactTitle');
const impactDesc = document.getElementById('impactDesc');

calculateBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const portion = Number(portionInput.value) || 0;
  const weight = Number(weightInput.value) || 0;
  const liquid = Number(liquidInput.value) || 0;

  // rumus
  const totalKg = (portion * .5) + weight + (liquid * 1);
  const carbonSaved = totalKg * 2.5;
  const waterSaved = totalKg * 1000;

  // konversi hasil rumus jadi string dengan display 1 digit behind comma symbols
  wasteSaved.textContent = totalKg.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  totalCarbonSaved.textContent = carbonSaved.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  totalWaterSaved.textContent = waterSaved.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  if (totalKg === 0) {
    // Kondisi Default: Sayuran/Bahan segar
    impactImage.src = "https://images.unsplash.com/photo-1571987530791-58e3e7744d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    impactTitle.textContent = "Let's calculate!";
    impactDesc.textContent = "Enter your donation details to see how many plates you can fill and the resources you save.";
  } 
  else if (totalKg > 0 && totalKg <= 10) {
    // dampak kecil
    impactImage.src = "https://images.unsplash.com/photo-1564759224907-65b945ff0e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    impactTitle.textContent = "A Meaningful Meal";
    impactDesc.textContent = "You're feeding a family and keeping perfectly good food out of landfills. This simple act prevents harmful methane emissions and saves hundreds of liters of agricultural water.";
  } 
  else if (totalKg > 10 && totalKg <= 50) {
    // dampak menengah
    impactImage.src = "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    impactTitle.textContent = "Feeding the Community";
    impactDesc.textContent = "Amazing! You've rescued enough food to serve a local shelter. By not throwing this away, you're drastically shrinking our community's carbon footprint and conserving precious natural resources.";
  } 
  else if (totalKg > 50){
    // dampak besar
    impactImage.src = "https://images.unsplash.com/photo-1633437805600-2c58bf56663c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    impactTitle.textContent = "Zero-Waste Champion!";
    impactDesc.textContent = "Massive impact! You're feeding an entire neighborhood while preventing huge spikes in greenhouse gases. You are directly conserving thousands of liters of water and protecting our ecosystem.";
  }
});