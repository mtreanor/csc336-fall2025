
async function getWorldInfo(url) {
    if (url.charAt(url.length-1) === "/") {
        url = url.slice(0, url.length-1);
    }
    console.log(url);


    let response = await fetch(`${url}/world`);
    let json = await response.json();
    console.log(json);

}


const SHEET_ID = "11XhA5zlgcSNtbhrCKjInq330YgjbAxXrl41rbtzc8Yw";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

async function fetchAndParseSheet() {
  try {
    const res = await fetch(SHEET_URL);
    const text = await res.text();

    let lines = text.split("\n");
    let headers = lines[0].split(",");
    let studentInfos = [];
    for (let i = 1; i < lines.length; i ++) {
        let line = lines[i].trim();
        let entries = line.split(",");
        let student = {};
        for (let j = 0; j < entries.length; j++) {
            student[headers[j].trim()] = entries[j];
        }
        studentInfos.push(student);
    }
    

    for (let student of studentInfos) {
        if (student["render"] !== "" && student["cors"] === "1") {
            console.log(`${student["First"]}'s World:`);
            let response = await getWorldInfo(student["render"]);
            let worldJSON = response.json();
            console.log(worldJSON);
        }
    }
  } catch {
    console.log("!!!");
  }
}

fetchAndParseSheet();