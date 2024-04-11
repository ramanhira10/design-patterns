function Fedex() {
  this.calculate = function (package) {
    return 2.45;
  };
}

function UPS() {
  this.calculate = function (package) {
    return 1.56;
  };
}

function USPS() {
  this.calculate = function (package) {
    return 4.5;
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = function (company) {
    this.company = company;
  };
  this.calculate = function (package) {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = {
  from: 'Alabama',
  to: 'Georgia',
  weight: 1.56
};

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex: " + shipping.calculate(package));

shipping.setStrategy(ups);
console.log("UPS: " + shipping.calculate(package));

shipping.setStrategy(usps);
console.log("USPS: " + shipping.calculate(package));