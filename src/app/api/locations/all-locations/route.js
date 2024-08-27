import dbConnect from "@/lib/dbConnect";
import LocationModel from "@/model/Location.model";


export const GET = async (request) => {
  await dbConnect();
  try {
    const locations = await LocationModel.find();
    return Response.json(
      {
        success: true,
        locations,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking locations:", error);
    return Response.json(
      {
        success: false,
        message: "Error getting locations",
      },
      { status: 500 }
    );
  }
};
