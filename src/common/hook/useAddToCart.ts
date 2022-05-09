import apis from "../../services/apis";
import { InputTypeCart } from "../type";
const useAddToCart = () => {
  const addToCart = async (data: InputTypeCart) => {
    const cart = await apis.addToCart(data).then((data) => data);
    return cart;
  };
  return {
    addToCart,
  };
};

export default useAddToCart;
