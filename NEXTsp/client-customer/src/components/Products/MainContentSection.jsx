import React from "react";

function MainContentSection(props) {
  return (
    <div className="flex flex-col gap-6 mt-8 mr-8 ml-8 border-b-2 h-96">
      <div className="productTitle h-22">
        Laptop gaming ASUS TUF Gaming F15 FX507VV4 LP382W
      </div>
      <div className="priceSection flex gap-2 h-8">
        <div className="productPrice">35.490.000đ</div>
        <div className="productOldPrice">42.990.000đ</div>
        <div className="productSale">-17%</div>
      </div>
      <div className="btnSection flex gap-2">
        <div className="btn-BuyNow bg-black text-white text-center p-2 flex flex-col items-center rounded-sm">
          <p>Mua Ngay</p>
          <p>Giao hàng tận nơi hoặc nhận tại cửa hàng</p>
        </div>
        <div className="btn-AddToCart bg-black text-white text-center p-2 flex items-center rounded-sm">
          <p>Thêm vào giỏ hàng</p>
        </div>
      </div>
      <div className="productPolicySection flex flex-col gap-1">
        <span>✔ Bảo hành chính hãng 24 tháng.</span>
        <span>✔ Hỗ trợ đổi mới trong 7 ngày.</span>
        <span>✔ Miễn phí giao hàng toàn quốc.</span>
        <span>✔ Trả góp 0%</span>
      </div>
    </div>
  );
}

export default MainContentSection;