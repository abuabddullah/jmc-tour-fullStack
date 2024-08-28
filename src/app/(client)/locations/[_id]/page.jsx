// import React from 'react';
// import path from 'path';
// import fs from 'fs/promises';

// // This function runs at build time
// export async function generateStaticParams() {
//   const dataPath = path.join(process.cwd(), 'data', 'locations.json');
//   const jsonData = await fs.readFile(dataPath, 'utf8');
//   const locations = JSON.parse(jsonData);

//   return locations.map((location) => ({
//     _id: location._id.toString(),
//   }));
// }

// // This function also runs at build time
// async function getLocationData() {
//   const dataPath = path.join(process.cwd(), 'data', 'locations.json');
//   const jsonData = await fs.readFile(dataPath, 'utf8');
//   return JSON.parse(jsonData);
// }

// export default async function LocationPage({ params }) {
//   const { _id } = params;
//   const locations = await getLocationData();
//   const location = locations.find(loc => loc._id === _id);

//   return (
//     <div>
//       page: {location ? location._id : "not found"}
//     </div>
//   );
// }

import React from "react";
import path from "path";
import fs from "fs/promises";

// This function runs at build time
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/locations/all-locations");
  const data = await res.json();
  const { locations } = data;

  return locations.map((location) => ({
    _id: location._id.toString(),
  }));
}

// This function also runs at build time
async function getLocationData(id) {
  const res = await fetch(`http://localhost:3000/api/locations/location/${id}`);
  const data = await res.json();
  const { location } = data;
  return location;
}

export default async function LocationPage({ params }) {
  const { _id } = params;
  const location = await getLocationData(_id);

  return <div>page: {location ? location._id : "not found"}</div>;
}
