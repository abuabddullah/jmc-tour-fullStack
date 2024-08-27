import dbConnect from "@/lib/dbConnect";
import TourModel from "@/model/Tour.model";

export const GET = async (request) => {
  await dbConnect();
  try {
    const tours = await TourModel.find();
    return Response.json(
      {
        success: true,
        tours,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking tours:", error);
    return Response.json(
      {
        success: false,
        message: "Error getting tours",
      },
      { status: 500 }
    );
  }
};
