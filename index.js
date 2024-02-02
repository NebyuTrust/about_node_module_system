import dataHanlder from "./reveal_module_pattern.js";
import employeeDataHandler from "./dynamic_import/index.js";
import missingFields from "./missing_fields.js";
import importJson from "./import_json/index.js";

// Reveal module pattern
console.log(dataHanlder.customMessage());
console.log(dataHanlder.getData());

// Dynamic importing - This is async operation
employeeDataHandler(process.argv[2]);

// Missing Fields
console.log("Missing fields ", missingFields());

// Import json using custom require function
console.log("JSON file ", importJson());
