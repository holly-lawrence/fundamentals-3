let TaxCalculator = class TaxCalculator {
  constructor(year) {
    if (year === undefined) {
      let date = new Date();
      this.year = date.getFullYear();
    } else {
      this.year = year;
    }
  }

  getYear() {
    return this.year;
  }

  calculateInitialPayment(fuelType, co2Emissions) {
    const co2_bounds = [0,1,51,76,91,101,111,131,151,171,191,226,256];

    const init_prices = {
        'Petrol': [0,10,25,105,125,145,165,205,515,,830,1240,1760,2070],
        'Diesel': [0,25,105,125,145,165,205,515,830,1240,1760,2070,2070],
        'Alternative fuel': [0,0,15,95,115,135,155,195,505,820,1230,1750,2060]
        };

    const co2_bound = co2_bounds.find(x => x > co2Emissions) - 1;

    const initial_price = init_prices[`${fuelType}`][co2_bound];
    console.log(init_prices[`${fuelType}`]);
    return initial_price;
  }


  calculateTax(vehicle) {
    // Find Car Age


    // Find Price
    initial_price = this.calculateInitialPayment(vehicle.fuelType, vehicle.co2Emissions);

    return initial_price


  }
}

module.exports = { TaxCalculator: TaxCalculator }