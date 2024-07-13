import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const productSchema = new mongoose.Schema(
  {
    productFile: {
      type: String, // cloudinaty url
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    rating:{
      type: Number,
      default: 0,
    },
   
    featured: {
      type: Boolean,
      default: true,
    },
    company:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);

productSchema.plugin(mongooseAggregatePaginate);

export const Product = mongoose.model("Product", productSchema);
