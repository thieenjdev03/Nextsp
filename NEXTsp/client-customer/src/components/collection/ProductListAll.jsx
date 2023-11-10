import React from "react";
import "../../assets/css/collection.css";
import axios from "axios";
import FilterButtonSection from "./FilterButtonSection";
import "../../assets/css/main.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductListAll(props) {
  const [products, setProducts] = React.useState([]);
  const param = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:3101/api/products/getall"
      );
      setProducts(result.data.products);
    };

    fetchData();
  }, []);

  function formatPrice(price) {
    if (price) {
      return `${price.toLocaleString()}đ`;
    }
    return "Not Available "; // You can change this message to your preferred text
  }

  return (
    <div className="productList max-h-full w-full bg-white rounded-md pb-4">
      <h1 className="CategoryTitle">{param.nameCategory}</h1>
      <FilterButtonSection />
      <div className=" flex flex-wrap  gap-1 content-center justify-center pt-12">
        {products
          .slice()
          .reverse()
          .map(
            (product, index) =>
              index < props.amountProduct && (
                <Link
                  to={`/products/${product.id}`}
                  key={index}
                  className="productItem flex flex-col  border-black-500/100 p-4 gap-1 "
                >
                  <div className="product_image w-72 h-52 object-contain">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="w-full h-44 object-contain "
                    />
                  </div>
                  <div className="product_title">
                    <h1 className=" ">{product.nameProduct} </h1>
                  </div>
                  <div>
                    <p className="product_oldPrice font-bold RobotoViet">
                      {formatPrice(product.oldprice)}
                    </p>
                    <p className="product_price font-normal RobotoViet">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <div className="product_rating flex gap-1 items-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/013/743/605/original/golden-star-icon-png.png"
                      alt=""
                      className="w-6 h-6"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/013/743/605/original/golden-star-icon-png.png"
                      alt=""
                      className="w-6 h-6"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/013/743/605/original/golden-star-icon-png.png"
                      alt=""
                      className="w-6 h-6"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/013/743/605/original/golden-star-icon-png.png"
                      alt=""
                      className="w-6 h-6"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/013/743/605/original/golden-star-icon-png.png"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p className="text-xs	">(5 đánh giá)</p>
                  </div>
                  <div className="over-button flex gap-4 items-center justify-center mt-3">
                    <div className="btn p-1  flex justify-center btn-sell ">
                      Mua Ngay
                    </div>
                    <div className="btn p-1 flex justify-center btn-addCart">
                      Thêm Vào Giỏ
                    </div>
                  </div>
                </Link>
              )
          )}
      </div>
    </div>
  );
}
export default ProductListAll;