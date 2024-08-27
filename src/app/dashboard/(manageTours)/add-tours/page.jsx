"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddTour = () => {
  const router = useRouter();
  const [tourData, setTourData] = useState({
    title: "",
    location: "",
    country: "",
    ratings: 0,
    cost: 0,
    image: "",
    category: "",
    tourCount: 0,
  });
  // handleAddPost
  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      // for submitting form with data
      const response = await axios.post("/api/tours/post-tour", tourData);
      alert("post data done");

      router.replace(`/`);
    } catch (error) {
      console.error("Error during posting tour:", error);
      alert("post tour failed");
    }
  };
  return (
    <>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Tour
        </h2>

        <form onSubmit={handleAddPost}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="title">
                Title
              </label>
              <input
                onChange={(e) =>
                  setTourData({ ...tourData, title: e.target.value })
                }
                id="title"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="location">
                Location
              </label>
              <input
                onChange={(e) =>
                  setTourData({ ...tourData, location: e.target.value })
                }
                id="location"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="country">
                Country
              </label>
              <input
                onChange={(e) =>
                  setTourData({ ...tourData, country: e.target.value })
                }
                id="country"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="image">
                Image
              </label>
              <input
                onChange={(e) =>
                  setTourData({ ...tourData, image: e.target.value })
                }
                id="image"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="category">
                category
              </label>
              <select
                onChange={(e) =>
                  setTourData({ ...tourData, category: e.target.value })
                }
                id="category"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option selected disabled>
                  Select One
                </option>
                <option value="Adventure">Adventure</option>
                <option value="Wildlife">Wildlife</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="ratings">
                Tour Count
              </label>
              <input
                onChange={(e) =>
                  setTourData({ ...tourData, tourCount: e.target.value })
                }
                id="tourCount"
                type="number"
                placeholder="0"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="ratings">
                Ratings
              </label>
              <input
                onChange={(e) =>
                  setTourData({ ...tourData, ratings: e.target.value })
                }
                id="ratings"
                type="number"
                placeholder="0"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="cost">
                Cost
              </label>
              <input
                onChange={(e) =>
                  setTourData({ ...tourData, cost: e.target.value })
                }
                id="cost"
                type="number"
                placeholder="0"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button
              type="submit"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddTour;
