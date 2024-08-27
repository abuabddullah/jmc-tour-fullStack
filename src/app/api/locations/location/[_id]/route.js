import dbConnect from "@/lib/dbConnect";
import LocationModel from "@/model/Location.model";

export const GET = async (request, { params }) => {
  await dbConnect();

  try {
    const location = await LocationModel.findById(params?._id);
    console.log(params?._id);
    console.log({
      success: true,
      location,
    },);
    return Response.json(
      {
        success: true,
        location,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting location role:", error);
    return Response.json(
      {
        success: false,
        message: "Error getting location role",
      },
      { status: 500 }
    );
  }
};
