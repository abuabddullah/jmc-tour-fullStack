import dbConnect from "@/lib/dbConnect";
import TourModel from "@/model/Tour.model";

export const POST = async (request) => {
  await dbConnect();
  const tourData = await request.json();
  try {
    const newTour = new TourModel(tourData);

    await newTour.save();
    return Response.json(
      {
        success: true,
        message: "newTour is posted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error posting newTour:", error);
    return Response.json(
      {
        success: false,
        message: "Error posting newTour",
      },
      { status: 500 }
    );
  }
};
