import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ReactStars from "react-stars";

export default function Home() {
  const [product, setProduct] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("/api/v1/products/");
      setProduct(response.data.products);
      console.log("Fetched product:", response.data.products);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
      toast.error("You are Login plz login plz. Please try again later.");
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <div className="flex  min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
            <ul className="flex justify-around  sm:sticky sm:top-[106px] sm:flex-col">
              <Link to={"/videoList-page-by-card"} className="mb-2">
                <li class="">
                  <Link to={"/videoList-page-by-card"}>
                    <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                      <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                        <svg
                          style={{ width: "100%" }}
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 15.9997H14M9.0177 1.76375L2.23539 7.03888C1.78202 7.3915 1.55534 7.56781 1.39203 7.78861C1.24737 7.9842 1.1396 8.20454 1.07403 8.43881C1 8.70327 1 8.99045 1 9.56481V16.7997C1 17.9198 1 18.4799 1.21799 18.9077C1.40973 19.284 1.71569 19.59 2.09202 19.7818C2.51984 19.9997 3.07989 19.9997 4.2 19.9997H15.8C16.9201 19.9997 17.4802 19.9997 17.908 19.7818C18.2843 19.59 18.5903 19.284 18.782 18.9077C19 18.4799 19 17.9198 19 16.7997V9.56481C19 8.99045 19 8.70327 18.926 8.43881C18.8604 8.20454 18.7526 7.9842 18.608 7.78861C18.4447 7.56781 18.218 7.3915 17.7646 7.03888L10.9823 1.76376C10.631 1.4905 10.4553 1.35388 10.2613 1.30136C10.0902 1.25502 9.9098 1.25502 9.73865 1.30136C9.54468 1.35388 9.36902 1.4905 9.0177 1.76375Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>

                      <span class="block sm:hidden sm:group-hover:inline lg:inline">
                        Home
                      </span>
                    </button>
                  </Link>
                </li>
              </Link>
              <Link to={"/uplaod-product"}>
                {" "}
                <li className="hidden sm:block">
                  <button
                    className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"
                    fdprocessedid="lrv5ih"
                  >
                    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                      <svg
                        style={{ width: "100%" }}
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 4.93137C21 4.32555 21 4.02265 20.8802 3.88238C20.7763 3.76068 20.6203 3.69609 20.4608 3.70865C20.2769 3.72312 20.0627 3.93731 19.6343 4.36569L16 8L19.6343 11.6343C20.0627 12.0627 20.2769 12.2769 20.4608 12.2914C20.6203 12.3039 20.7763 12.2393 20.8802 12.1176C21 11.9774 21 11.6744 21 11.0686V4.93137Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H11.2C12.8802 1 13.7202 1 14.362 1.32698C14.9265 1.6146 15.3854 2.07354 15.673 2.63803C16 3.27976 16 4.11984 16 5.8V10.2C16 11.8802 16 12.7202 15.673 13.362C15.3854 13.9265 14.9265 14.3854 14.362 14.673C13.7202 15 12.8802 15 11.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V5.8Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="block sm:hidden sm:group-hover:inline lg:inline">
                      Add Product
                    </span>
                  </button>
                </li>
              </Link>
             
            </ul>
          </aside>
          <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
              {Array.isArray(product) && product.length > 0 ? (
                product.map((product) => (
                  <div
                    key={product._id}
                    className="card shadow-lg p-2 hover:-translate-y-5 cursor-pointer mt-3 transition-all duration-500"
                  >
                    <img
                      className="h-60 md:h-72"
                      src={product.productFile}
                      alt=""
                    />
                    <h1>
                      <span className="text-blue-500">Name:</span>{" "}
                      {product.name}
                    </h1>
                    <h1 className="flex items-center mr-2">
                      <span className="text-blue-500">Rating:</span>
                      <ReactStars
                        size={25}
                        half={true}
                        //value={e.rating/e.rated}
                        edit={true}
                      />
                    </h1>
                    <h1>
                      <span className="text-blue-500">Price:</span>{" "}
                      {product.price}
                    </h1>
                    <h1>
                      <span className="text-blue-500">Company:</span>{" "}
                      {product.company}
                    </h1>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400">
                  No products available
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
