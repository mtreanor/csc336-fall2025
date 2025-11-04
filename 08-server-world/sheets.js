import { parse } from "csv-parse/sync";

const SHEET_ID = "11XhA5zlgcSNtbhrCKjInq330YgjbAxXrl41rbtzc8Yw";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

async function fetchAndParseSheet() {
  try {
    
    const res = await fetch(SHEET_URL);
    const text = await res.text();

    // // ******************************
    // // *** 1. Get CSV and parse it manually

    // // Remove any extra whitespace at the start or end
    // const trimmedText = text.trim();

    // // Split the entire text into individual lines
    // const lines = trimmedText.split("\n");

    // // The first line contains the headers (column names)
    // const headerLine = lines[0];
    // const headers = headerLine.split(",");

    // // Prepare an array to store all the data objects
    // const data = [];

    // // Start from the second line (index 1) because the first line is headers
    // for (let lineIndex = 1; lineIndex < lines.length; lineIndex++) {
    //   const line = lines[lineIndex];

    //   // Skip empty lines (in case there are any)
    //   if (line.trim() === "") {
    //     continue;
    //   }

    //   // Split the current line by commas into individual cell values
    //   const values = line.split(",");

    //   // Create an empty object to represent this row
    //   const rowObject = {};

    //   // Go through each header and assign its corresponding value
    //   for (let i = 0; i < headers.length; i++) {
    //     const headerName = headers[i];
    //     const cellValue = values[i];

    //     // Add the key/value pair to the row object
    //     rowObject[headerName] = cellValue;
    //   }

    //   // Add the completed row object to the data array
    //   data.push(rowObject);
    // }

    // // Now `data` is an array of objects like:
    // // [ { Name: "Alice", Score: "10" }, { Name: "Bob", Score: "8" } ]

    // console.log(data);




    // ******************************
    // *** 2. Using fancy array functions ***
    // const lines = text.trim().split("\n");
    // const headers = lines[0].split(",");

    // const data = lines.slice(1).map(line => {
    //   const values = line.split(",");
    //   return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
    // });

    // console.log("Parsed data:", data);





    // ******************************
    // *** 3. Parse using Parse tool // import { parse } from "csv-parse/sync";
    const records = parse(text, {
      columns: true,       // use first row as keys
      skip_empty_lines: true,
    });

    // console.log("Parsed records:", records);


  } catch (err) {
    console.error("Failed to fetch sheet:", err);
  }
}

fetchAndParseSheet();