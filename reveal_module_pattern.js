/**
 * The reveal module pattern uses IIFE or Immediately Invoked
 * Function Expression. IIFE helps us to create a private scope,
 * and reveal the contents that we want to the public module or API.
 *
 * For example, lets create a data handler function that only exposes
 * functions that are only returned from the IIFE.
 *
 */
export default (() => {
  // Data
  const data = {
    name: "Test",
    age: 50,
    job: "Developer",
  };

  // Custom message
  const customMessage = () =>
    `Name - ${data.name} | Age - ${data.age} | Job - ${data.job}`;

  // Get data
  const getData = () => data;

  return { customMessage, getData };
})();
