import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 },
  size: { type: String }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
export default CartItem;
