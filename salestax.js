var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var indResultsObj = {};

  for (var i in salesData) {
    var company = salesData[i];
    nameOfCompany = company.name;

    // Sum the sales
    var totalSalesResult = 0;
    for (s=0; s < company.sales.length; s++) {
      totalSalesResult += company.sales[s];
    }

    // Find province tax rate
    var prov = company.province;
    var taxRate = salesTaxRates[prov];

    // Calculate total taxes
    var totalTaxesResult = totalSalesResult * taxRate;

    var existingCompany;
    for( var company in indResultsObj) {
      if (company === nameOfCompany) {
        existingCompany = indResultsObj[company];
      }
    }

    if (existingCompany) {
      existingCompany.totalSales += totalSalesResult;
      existingCompany.totalTaxes += totalTaxesResult;
    } else {
      // Add company object to individual results array
      indResultsObj[nameOfCompany] = {
        totalSales: totalSalesResult,
        totalTaxes: totalTaxesResult
      };
    }


  }
  console.log(indResultsObj);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}

For each company name:
  Sum sales
  Get province sales tax from other array
  Multiply total sales by province tax
  Create array with total sales and total taxes
*/
