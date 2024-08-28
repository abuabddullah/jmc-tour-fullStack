import React, { useEffect, useState } from "react";

// This function also runs at build time

export default async function LocationPage({ params }) {
  const [location, setLocation] = useState({});
  const { _id } = params;
  useEffect(() => {
    async function getLocationData(id) {
      const res = await fetch(`/api/locations/location/${id}`);
      const data = await res.json();
      const { location } = data;
      return location;
    }
    setLocation(getLocationData(_id));
  }, [_id]);

  return <div>page: {location ? location._id : "not found"}</div>;
}
