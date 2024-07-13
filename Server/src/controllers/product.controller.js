import mongoose, { isValidObjectId } from "mongoose";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/AppError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

const getAllProduct = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    query = "",
    sortBy = "createdAt",
    sortType = "desc",
    userId,
  } = req.query;

  // Convert page and limit to integers
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

 
  const searchQuery = {
    ...(query && { title: { $regex: query, $options: "i" } }),
    ...(userId && { userId }), 
  };

  const sortOrder = sortType === "asc" ? 1 : -1;
  const sortOptions = { [sortBy]: sortOrder };


  const products = await Product.find(searchQuery)
    .sort(sortOptions)
    .skip((pageNumber - 1) * limitNumber)
    .limit(limitNumber);
  const totalVideos = await Product.countDocuments(searchQuery);

  // Return the response
  res.status(200).json({
    page: pageNumber,
    limit: limitNumber,
    totalVideos,
    totalPages: Math.ceil(totalVideos / limitNumber),
    products,
  });
});

const  AddProduct = asyncHandler(async (req, res) => {
  const { name, price, company, featured } = req.body;

  // Validation
  if ([name, price, company, featured].some(field => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  // Check for product file
  const productLocalPath = req.files?.productFile?.[0]?.path;
  if (!productLocalPath) {
    throw new ApiError(400, "Product file is required");
  }

  // Upload product to Cloudinary
  const productResult = await uploadOnCloudinary(productLocalPath);
  if (!productResult) {
    throw new ApiError(500, "Failed to upload Product file to Cloudinary");
  }

  // Create entry in the database
  const product = await Product.create({
    name,
    price,
    company,
    featured,
    productFile: productResult?.url,
  });

  // Check if video was created
  if (!product) {
    throw new ApiError(500, "Failed to create Product entry in the database");
  }

  // Respond with success message
  return res.status(201).json(new ApiResponse(200, product, "Product Added successfully"));
});


const UpdateProductInfo = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { name , price,company } = req.body;

  // Validate input
  if (!productId) {
    throw new ApiError(400, "Video ID is missing");
  }

  // Build the update object dynamically
  const updateFields = {};
  if (name) updateFields.name = name;
  if (price) updateFields.price = price;
  if (company) updateFields.company = company;

  // Retrieve the video to get the old thumbnail URL
  const video = await Product.findById(productId);
  if (!video) {
    throw new ApiError(404, "Video not found");
  }



  
  // Find the video by ID and update it
  const updatedVideo = await Product.findByIdAndUpdate(
    productId,
    { $set: updateFields },
    { new: true, runValidators: true }
  );

  // Check if the video exists
  if (!updatedVideo) {
    throw new ApiError(404, "Product not found");
  }

  // Return the updated video data
  return res
    .status(200)
    .json(new ApiResponse(200, updatedVideo, "Product updated successfully"));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  //TODO: delete product
  if (!productId) {
    throw new ApiError(404, "productId is missing");
  }

  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  // Return a success response
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Product deleted successfully"));
});


// Fetch featured products
const featuredProduct = asyncHandler(
  async (req, res) => {
    try {
      const products = await Product.find({ featured: true });
      res.status(200).json(new ApiResponse({
        status: 200,
        message: "Featured Products",
       products,
      }));
    } catch (error) {
      res.status(400).json(new ApiError({
        status: 500,
        message: "An error occurred while fetching featured products",
        error: error.message,
      }));
    }
  }
);

// Fetch products with price less than a certain value
const getProductsByPrice = asyncHandler(async (req, res) => {
  const { price } = req.params;

  try {
    const products = await Product.find({ price:price});
    res.status(200).json(new ApiResponse({
      status: 200,
      message: "Products with price less than " + price,
      products,
    }));
  } catch (error) {
    res.status(400).json(new ApiError({
      status: 500,
      message: "An error occurred while fetching products by price",
      error: error.message,
    }));
  }
});

// Fetch products with rating higher than a certain value
const getProductsByRating =asyncHandler( async (req, res) => {
  const { rating } = req.params;

  try {
    const products = await Product.find({ rating: rating  });
    res.status(200).json(new ApiResponse({
      status: 200,
      message: "Products with rating higher than " + rating,
      products,
    }));
  } catch (error) {
    res.status(400).json(new ApiError({
      status: 500,
      message: "An error occurred while fetching products by rating",
      error: error.message,
    }));
  }
});


export {
  getAllProduct,
  AddProduct,
  UpdateProductInfo,
  deleteProduct,
  featuredProduct,
  getProductsByPrice,
  getProductsByRating
};
