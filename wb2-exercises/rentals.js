let peopleOnTour = 38
let passengersPerVan = 15
let vanCostPerDay = 250

// calculate number of vans needed
let vansNeeded = Math.ceil(peopleOnTour / passengersPerVan )

// calculate total cost to rent vans 
let totalCost = vansNeeded * vanCostPerDay

// calculate cost per person
let costPerPerson = totalCost / peopleOnTour

console.log(`Number of vans needed: ${vansNeeded}`);
console.log(`Total cost to rent the vans: $${totalCost}`);
console.log(`Cost per person: $${costPerPerson}`);


