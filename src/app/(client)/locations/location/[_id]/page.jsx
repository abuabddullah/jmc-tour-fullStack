import React from "react";


export async function generateStaticParams() {
  const data = await fetch(
    "http://localhost:3000/api/locations/all-locations"
  ).then((res) => res.json());

  return data.locations.map((location) => ({
    _id: location._id.toString(),
  }));
}

const getLocationById = async(id) => {
  const res = await fetch(`http://localhost:3000/api/locations/location/${id}`);
  const data = await res.json();
  return data.location;
};

const page = async({ params }) => {
    const location = await getLocationById(params?._id)
  return <div>page:{location?._id || "not found"}</div>;
};

export default page;





// import React from "react";

// // Fetch the list of all locations to generate static paths
// export async function getStaticPaths() {
//   // Fetch all locations
//   const res = await fetch("http://localhost:3000/api/locations/all-locations");
//   const data = await res.json();

//   // Generate paths from fetched data
//   const paths = data.locations.map((location) => ({
//     params: { id: location._id.toString() },
//   }));

//   // Return the paths and set fallback behavior
//   return {
//     paths,
//     fallback: false, // Change to 'blocking' or true if you want fallback behavior
//   };
// }

// // Fetch the data for a specific location
// export async function getStaticProps({ params }) {
//   // Fetch location by ID
//   const res = await fetch(`http://localhost:3000/api/locations/location/${params.id}`);
//   const data = await res.json();

//   // Return location data as props
//   return {
//     props: {
//       location: data.location || null,
//     },
//   };
// }

// // Page component to display the location data
// const LocationPage = ({ location }) => {
//   if (!location) {
//     return <div>Location not found</div>;
//   }

//   return (
//     <div>
//       <h1>Location ID: {location._id}</h1>
//       {/* Render other location details here */}
//     </div>
//   );
// };

// export default LocationPage;
