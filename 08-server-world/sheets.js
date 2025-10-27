// You need to run 'npm install node-fetch csc-parse' in order to use this.
import fetch from "node-fetch";
import { parse } from "csv-parse/sync";

// Replace this with your own sheet
const SHEET_ID = "11XhA5zlgcSNtbhrCKjInq330YgjbAxXrl41rbtzc8Yw";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

async function fetchAndParseSheet() {
  try {
    // Step 1: Download the CSV
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const csvText = await response.text();

    // Step 2: Parse CSV to JSON
    const records = parse(csvText, {
      columns: true,       // use first row as keys
      skip_empty_lines: true,
    });

    console.log("Parsed records:", records);
  } catch (err) {
    console.error("Failed to fetch sheet:", err);
  }
}

fetchAndParseSheet();