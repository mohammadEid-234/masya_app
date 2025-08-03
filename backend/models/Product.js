import mongoose from 'mongoose';
import slugify from 'slugify';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String },
  images: [{ type: String }],
  videos: [{type: String}],
  sizes: [{ type: String }],
  price: { type: Number, required: true },
  outOfStock : {type: Boolean , default : true},
  quantityInStock: { type: Number, default: 1 },
  discount: {
    type: Number, // percentage (e.g., 20 for 20% off)
    default: 0
  },
  discountStartDate: Date,
  discountEndDate: Date,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  createdAt: { type: Date, default: Date.now }
});

//before saving the product , make sure that the product name appears in a URL friendly format to improve SEO for the page
productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;
