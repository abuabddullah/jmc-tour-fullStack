import React from "react";

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
