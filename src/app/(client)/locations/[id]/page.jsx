// "use client";

// import React, { useEffect, useState } from "react";

// export default function LocationPage({ params }) {
//   const [location, setLocation] = useState({});
//   const { id } = params;
//   useEffect(() => {
//     async function getLocationData() {
//       const res = await fetch(`/api/locations/location/${id}`);
//       const data = await res.json();
//       const { location } = data;
//       setLocation(location);
//     }
//     getLocationData();
//   }, [_id]);

//   return <div>page: {location ? location._id : "not found"}</div>;
// }









import React from 'react';

export default async function LocationPage({ params }) {
  const { id } = params; // Assuming route is /locations/[id]
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/locations/location/${id}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch location data: ${res.statusText}`);
  }

  const data = await res.json();
  const { location } = data;

  return <div>page: {location ? location._id : "not found"}</div>;
}

export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/locations/all-locations`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const { locations } = await res.json();

    return locations.map((location) => ({
      id: location._id.toString(), // Ensure this matches the dynamic parameter name
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Handle the error as needed
  }
}
