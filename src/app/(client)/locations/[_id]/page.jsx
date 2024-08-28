"use client";

import React, { useEffect, useState } from "react";

export default function LocationPage({ params }) {
  const [location, setLocation] = useState({});
  const { _id } = params;
  useEffect(() => {
    async function getLocationData() {
      const res = await fetch(`/api/locations/location/${_id}`);
      const data = await res.json();
      const { location } = data;
      setLocation(location);
    }
    getLocationData();
  }, [_id]);

  return <div>page: {location ? location._id : "not found"}</div>;
}
