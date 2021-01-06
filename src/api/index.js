// import products from "./products.json";
import axios from "axios";

export const getProducts = async () => {
  return await axios
    .get(
      "https://www.fastmock.site/mock/b3fb1711049eb284f006b4d4f1e2664b/shop/api/shop"
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      alert("没拿到数据啊！！！");
    });
};
