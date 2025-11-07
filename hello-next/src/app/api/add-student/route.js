import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  const { name } = await request.json(); // read data sent from client

  const filePath = path.join(process.cwd(), "data", "students.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Create new entry with random grade
  const newStudent = {
    name: name || "Unnamed Student",
    grade: Math.floor(Math.random() * 101)
  };

  jsonData.push(newStudent);

  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

  return NextResponse.json({ message: "Student added", student: newStudent });
}
