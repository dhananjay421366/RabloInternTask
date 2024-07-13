import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [featured, setFeatured] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title.trim() || !videoFile || !price.trim() || !company.trim()) {
      toast.error("🦄 All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", description);
    formData.append("productFile", videoFile);
    formData.append("price", price);
    formData.append("company", company);
    formData.append("featured", featured);

    try {
      const res = await axios.post("/api/v1/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("🦄 Video uploaded successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/videoList-page-by-card");
    } catch (err) {
      toast.error("🦄 Failed to upload video", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)] ">
          <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
            <ul className="flex justify-around  sm:sticky sm:top-[106px] sm:flex-col">
              <Link to={"/videoList-page-by-card"} class="mb-2">
                <li>
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
              <Link to={"/uplaod-video"}>
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
          <section className="relative w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="relative min-h-[150px] w-full pt-[16.28%]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                  alt="cover-photo"
                />
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-4 pb-4 pt-6">
                <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                  <img
                    src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Channel"
                    className="h-full w-full"
                  />
                </span>
                <div className="mr-auto inline-block">
                  <h1 className="font-bold text-xl">React Patterns</h1>
                  <p className="text-sm text-gray-400">@reactpatterns</p>
                  <p className="text-sm text-gray-400">
                    600k Subscribers · 220 Subscribed
                  </p>
                </div>
                <div className="inline-block">
                  <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                    <span className="inline-block w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </span>
                    Edit
                  </button>
                </div>
              </div>
              <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                <li className="w-full">
                  <button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
                    Videos
                  </button>
                </li>
                <li className="w-full">
                  <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                    Playlist
                  </button>
                </li>
                <li className="w-full">
                  <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                    Tweets
                  </button>
                </li>
                <li className="w-full">
                  <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                    Subscribed
                  </button>
                </li>
              </ul>
              <div className="flex justify-center p-4">
                <div className="w-full max-w-sm text-center">
                  <p className="mb-3 w-full">
                    <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </span>
                  </p>
                  <h5 className="mb-2 font-semibold">No Product uploaded</h5>
                  <p>
                    This page has yet to upload a video. Search another page in
                    order to find more videos.
                  </p>
                  <button className="mt-4 inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    New Product
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-10 bg-black/50 px-4 pb-[86px] pt-4 sm:px-14 sm:py-8">
              <div className="h-full overflow-auto border bg-[#121212]">
                <div className="flex items-center justify-between border-b p-4">
                  <h2 className="text-xl font-semibold">Add Product</h2>
                  <button
                    onClick={handleSubmit}
                    className="group/btn mr-1 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  >
                    {loading ? <TailSpin height={25} color="white" /> : "Save"}
                  </button>
                </div>
                <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4">
                  <div className="w-full border-2 border-dashed px-4 py-12 text-center">
                    <span className="mb-4 inline-block w-24 rounded-full bg-[#E4D3FF] p-4 text-[#AE7AFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                    </span>
                    <h6 className="mb-2 font-semibold">
                      Drag and drop video files to upload
                    </h6>
                    <p className="text-gray-400">
                      Your videos will be private until you publish them.
                    </p>
                    <label
                      htmlFor="upload-video"
                      className="group/btn mt-4 inline-flex w-auto cursor-pointer items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                    >
                      <input
                        type="file"
                        id="upload-video"
                        onChange={(e) => setVideoFile(e.target.files[0])}
                        className="sr-only"
                      />
                      Select Files
                    </label>
                  </div>
                  <div className="w-full">
                    <label htmlFor="price" className="mb-1 inline-block">
                      Price<sup>*</sup>
                    </label>
                    <input
                      id="price"
                      value={price}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*\.?\d*$/.test(value)) {
                          setPrice(value);
                        }
                      }}
                      type="text"
                      className="w-full border p-1 bg-black"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="name" className="mb-1 inline-block">
                      Title<sup>*</sup>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full border bg-transparent px-2 py-1 outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="company" className="mb-1 inline-block">
                      Comapny<sup>*</sup>
                    </label>
                    <textarea
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      id="company"
                      className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="featured" className="mb-1 inline-block">
                      Featured<sup>*</sup>
                    </label>
                    <input
                      id="featured"
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="w-full border bg-transparent px-2 py-1 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
