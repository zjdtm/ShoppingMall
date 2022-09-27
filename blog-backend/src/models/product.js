import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  name: String,
  manufacturer: String,
  product_image: String,
  product_info: String,
  price: Number,
  size: {
    type: Array,
    default: [
      '220',
      '225',
      '230',
      '235',
      '240',
      '245',
      '250',
      '255',
      '260',
      '265',
      '270',
      '275',
      '280',
      '285',
      '290',
    ],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
