let temp_converter = {
  temprature: 0,
  read: function () {
    this.temprature = Number(prompt("Enter temperature in Celsius"));
  },
  toFahrenheit: function () {
    return (this.temprature * 9 / 5) + 32;
  },
  toKelvin: function () {
    return this.temprature + 273.15;
  },
  display: function () {
    console.log("Celsius:", this.temprature);
    console.log("Fahrenheit:", this.toFahrenheit());
    console.log("Kelvin:", this.toKelvin());
  }
};
temp_converter.read();
temp_converter.display();
