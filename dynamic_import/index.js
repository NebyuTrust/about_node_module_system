/**
 * Sometimes we need to dynamically import files. But we don't now how to
 * deal with it dynamically. We can do it using dynamic importing.
 *
 * For example, we have different files with different locations employees' data.
 * Lets import it dynamically using dynamic import.
 */

export default (country) => {
  // Check if country exists
  if (!country) throw new Error("Please provide country");

  // Supported countries
  const countries = ["eth", "ken", "rwd"];
  if (!countries.includes(country)) throw new Error("Unsupported country");

  // File path
  const filePath = `./data/${country}.js`;

  // Import dynamically
  import(filePath)
    .then((data) => {
      console.log(country);
      console.log(...data.default);
    })
    .catch((err) => {
      console.log(err);
    });
};
