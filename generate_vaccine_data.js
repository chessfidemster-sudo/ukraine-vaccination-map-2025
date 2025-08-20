// Helper script to generate vaccine data for all hospitals
// This will convert the old load values to realistic vaccine coverage percentages

const generateVaccineData = (load) => {
  // Convert load to a base percentage and add some variation for each vaccine
  const base = load * 10; // Convert 1-8 scale to roughly 10-80%
  const variation = () => Math.floor(Math.random() * 10) - 5; // ±5% variation
  
  return {
    bcg: Math.max(30, Math.min(85, base + variation())),
    hepB: Math.max(30, Math.min(85, base + variation())),
    dtp: Math.max(30, Math.min(85, base + variation())),
    polio: Math.max(30, Math.min(85, base + variation())),
    hib: Math.max(30, Math.min(85, base + variation())),
    mmr: Math.max(30, Math.min(85, base + variation()))
  };
};

// Sample hospital entries with load values to convert
const sampleHospitals = [
  {name: 'КНП Галицький ЦПМСД', load: 5},
  {name: 'КНП Більшівцівський ЦПМСД', load: 5},
  {name: 'ФОП Футерко Святослав Володимирович', load: 4}
];

// Generate and log the converted data
sampleHospitals.forEach(hospital => {
  const vaccines = generateVaccineData(hospital.load);
  console.log(`{name: '${hospital.name}', vaccines: {bcg: ${vaccines.bcg}, hepB: ${vaccines.hepB}, dtp: ${vaccines.dtp}, polio: ${vaccines.polio}, hib: ${vaccines.hib}, mmr: ${vaccines.mmr}}},`);
});
