import { Router } from "express";
import {
  getAllProduct,
  AddProduct,
  UpdateProductInfo,
  deleteProduct,
  featuredProduct,
  getProductsByPrice,
  getProductsByRating
} from "../controllers/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router
  .route("/")
   .get(getAllProduct)
  .post(
    upload.fields([
      {
        name: "productFile",
        maxCount: 1,
      },

    ]),
    AddProduct
  );

router
  .route("/:productId")
  .delete(deleteProduct)
  .patch( UpdateProductInfo);

router.route("/toggle/publish/:productId").patch(featuredProduct);
router.route("/toggle/price/:price").get(getProductsByPrice);
router.route("/toggle/rating/:rating").get(getProductsByRating);


export default router;
