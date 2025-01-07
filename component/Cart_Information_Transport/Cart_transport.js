// // import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { IoIosArrowDown } from "react-icons/io";
// import styles from "./Cart_transport.module.scss";
// import classnames from "classnames/bind"

// const cx = classnames.bind(styles);

// function Cart_transport() {
//     const [showDropdown1, setShowDropdown1] = useState(false);
// const [showDropdown2, setShowDropdown2] = useState(false);
// const [showDropdown3, setShowDropdown3] = useState(false);
// const [selectedAddress1, setSelectedAddress1] = useState('Chọn Tỉnh/Thành phố');
// const [selectedAddress2, setSelectedAddress2] = useState('Chọn Quận/Huyện');
// const [selectedAddress3, setSelectedAddress3] = useState('Chọn Phường/Xã');

// const [selectedDiv, setSelectedDiv] = useState(null);

// const handleDropdown1Click = () => {
//     setShowDropdown1(!showDropdown1);
//     setShowDropdown2(false);
//     setShowDropdown3(false);
// };

// const handleDropdown2Click = () => {
//     setShowDropdown1(false);
//     setShowDropdown2(!showDropdown2);
//     setShowDropdown3(false);
// };

// const handleDropdown3Click = () => {
//     setShowDropdown1(false);
//     setShowDropdown2(false);
//     setShowDropdown3(!showDropdown3);
// };

// const handleDropdown1Select = (address) => {
//     setSelectedAddress1(address);
//     setSelectedDiv(1); // Cập nhật trạng thái được chọn của div 1
//     setShowDropdown1(false);
// };

// const handleDropdown2Select = (address) => {
//     setSelectedAddress2(address);
//     setSelectedDiv(2); // Cập nhật trạng thái được chọn của div 2
//     setShowDropdown2(false);
// };

// const handleDropdown3Select = (address) => {
//     setSelectedAddress3(address);
//     setSelectedDiv(3); // Cập nhật trạng thái được chọn của div 3
//     setShowDropdown3(false);
// };

// const handleOutsideClick = (event) => {
//     if (
//         selectedDiv !== null &&
//         event.target.closest(`.quan`) === null
//     ) {
//         setShowDropdown1(false);
//         setShowDropdown2(false);
//         setShowDropdown3(false);
//         setSelectedDiv(null); // Reset trạng thái được chọn của div
//     }
// };

// useEffect(() => {
//     document.addEventListener('click', handleOutsideClick);
//     return () => {
//         document.removeEventListener('click', handleOutsideClick);
//     };
// }, [handleOutsideClick]);

//     return (
//         <div className={cx("Cart_transport")}>
//             <div className={cx("topic")}>Thông tin vận chuyển</div>
//             <div className={cx("name_phone")}>
//                 <div className={cx("name")}>
//                     <div className={cx("topic_text")}>Họ và tên</div>
//                     <div className={cx("text")}>
//                         <input type='text' placeholder='Nhập tên của bạn'/>
//                     </div>
//                 </div>
//                 <div className={cx("phone")}>
//                     <div className={cx("topic_text")}>Số điện thoại</div>
//                     <div className={cx("text")}>
//                         <input type='text' placeholder='Nhập số điện thoại của bạn'/>
//                     </div>
//                 </div>
//             </div>
//             <div className={cx("email")}>
//                 <div className={cx("topic_text")}>Email</div>
//                 <div className={cx("text")}>
//                     <input type='text' placeholder='Nhập Email của bạn'/>
//                 </div>
//             </div>
//             <div className={cx("address")}>
//                 <div className={cx("topic_text")}>Họ và tên</div>
//                 <div className={cx("text")}>
//                     <div className={cx("address")}>
//                         <input type='text' placeholder='Địa chỉ(ví dụ:352 Mai Đăng Chơn, phường Hòa Quý)'/>
//                     </div>
//                     <div className={cx("quan_huyen_xa")}>
//                         <div className={cx("quan")} id={cx("button1")}
//                         style={{backgroundColor: selectedDiv === 1 ? '#FF0000' : '#E6E6E6'}}
//                         onClick={() => {handleDropdown1Click();}}>
//                             <div>
//                                 <label><span>{selectedAddress1}</span></label>
//                                 <button>
//                                     <IoIosArrowDown id={cx("icon")}/>
//                                 </button>
//                             </div>

//                             {showDropdown1 && (
//                                 <ul>
//                                     <li onClick={() => handleDropdown1Select("Hồ Chí Minh")}>Hồ Chí Minh</li>
//                                     <li onClick={() => handleDropdown1Select("Hà Nội")}>Hà Nội</li>
//                                 </ul>
//                             )}

//                         </div>
//                         <div className={cx("huyen")} id={cx("button2")} style={{backgroundColor: selectedDiv === 2 ? '#FF0000' : '#E6E6E6'}} onClick={() => {handleDropdown2Click();}}>
//                             <div>
//                                 <label><span>{selectedAddress2}</span></label>
//                                 <button>
//                                     <IoIosArrowDown id={cx("icon")}/>
//                                 </button>
//                             </div>

//                             {showDropdown2 && (
//                                 <ul id={cx("menu2")} className={cx("menu2")}>
//                                     <li onClick={() => handleDropdown2Select("Hồ Chí Minh")}>Hồ Chí Minh</li>
//                                     <li onClick={() => handleDropdown2Select("Hà Nội")}>Hà Nội</li>
//                                 </ul>
//                             )}

//                         </div>
//                         <div className={cx("xa")} id={cx("button3")} onClick={handleDropdown3Click}>
//                             <div>
//                                 <label><span>{selectedAddress3}</span></label>
//                                 <button>
//                                     <IoIosArrowDown id={cx("icon")}/>
//                                 </button>
//                             </div>

//                             {showDropdown3 && (
//                                 <ul id={cx("menu3")} className={cx("menu3")}>
//                                     <li onClick={() => handleDropdown3Select("Hồ Chí Minh")}>Hồ Chí Minh</li>
//                                     <li onClick={() => handleDropdown3Select("Hà Nội")}>Hà Nội</li>
//                                 </ul>
//                             )}

//                         </div>
//                     </div>
//                     <div className={cx("note")}>
//                         <input type='text' placeholder='Ghi chú thêm(ví dụ:Giao hàng giờ hành chính)'/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart_transport;

// import React from 'react';
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Cart_transport.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Cart_transport() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [selectedAddress1, setSelectedAddress1] = useState(
    "Chọn Tỉnh/Thành phố"
  );
  const [selectedAddress2, setSelectedAddress2] = useState("Chọn Quận/Huyện");
  const [selectedAddress3, setSelectedAddress3] = useState("Chọn Phường/Xã");

  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDropdown1Click = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
    setShowDropdown3(false);
    setSelectedDiv(1);
  };

  const handleDropdown2Click = () => {
    setShowDropdown1(false);
    setShowDropdown2(!showDropdown2);
    setShowDropdown3(false);
    setSelectedDiv(2);
  };

  const handleDropdown3Click = () => {
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(!showDropdown3);
    setSelectedDiv(3);
  };

  const handleDropdown1Select = (address) => {
    setSelectedAddress1(address);
    setSelectedDiv(1);
    setShowDropdown1(false);
  };

  const handleDropdown2Select = (address) => {
    setSelectedAddress2(address);
    setSelectedDiv(2);
    setShowDropdown2(false);
  };

  const handleDropdown3Select = (address) => {
    setSelectedAddress3(address);
    setSelectedDiv(3);
    setShowDropdown3(false);
  };

  const [activeDiv, setActiveDiv] = useState(null);

  const handleOutsideClick = (event) => {
    // Kiểm tra xem có một div "active" hiện tại hay không
    if (activeDiv !== null) {
      // Kiểm tra xem người dùng có nhấn vào ngoài các div ".quan", ".huyen" và ".xa" hay không
      if (
        !event.target.closest(".quan") &&
        !event.target.closest(".huyen") &&
        !event.target.closest(".xa")
      ) {
        // Nếu đúng, ẩn các menu dropdown và đặt lại các biến trạng thái
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown3(false);

        // setActiveDiv(null);
        // setSelectedDiv(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className={cx("Cart_transport")}>
      <div className={cx("topic")}>Thông tin vận chuyển</div>
      <div className={cx("name_phone")}>
        <div className={cx("name")}>
          <div className={cx("topic_text")}>Họ và tên</div>
          <div className={cx("text")}>
            <input type="text" placeholder="Nhập tên của bạn" />
          </div>
        </div>
        <div className={cx("phone")}>
          <div className={cx("topic_text")}>Số điện thoại</div>
          <div className={cx("text")}>
            <input type="text" placeholder="Nhập số điện thoại của bạn" />
          </div>
        </div>
      </div>
      <div className={cx("email")}>
        <div className={cx("topic_text")}>Email</div>
        <div className={cx("text")}>
          <input type="text" placeholder="Nhập Email của bạn" />
        </div>
      </div>
      <div className={cx("address")}>
        <div className={cx("topic_text")}>Họ và tên</div>
        <div className={cx("text")}>
          <div className={cx("address")}>
            <input
              type="text"
              placeholder="Địa chỉ(ví dụ:352 Mai Đăng Chơn, phường Hòa Quý)"
            />
          </div>
          <div className={cx("quan_huyen_xa")}>
            <div
              className={cx("quan")}
              id={cx("button1")}
              style={{
                backgroundColor: selectedDiv === 1 ? "#E6E6E6" : "#FFFFFF",
              }}
              onClick={() => {
                handleDropdown1Click();
              }}
            >
              <div>
                <label>
                  <span>{selectedAddress1}</span>
                </label>
                <button>
                  <IoIosArrowDown id={cx("icon")} />
                </button>
              </div>

              {showDropdown1 && (
                <ul>
                  <li onClick={() => handleDropdown1Select("Hồ Chí Minh")}>
                    Hồ Chí Minh
                  </li>
                  <li onClick={() => handleDropdown1Select("Hà Nội")}>
                    Hà Nội
                  </li>
                </ul>
              )}
            </div>
            <div
              className={cx("huyen")}
              id={cx("button2")}
              style={{
                backgroundColor: selectedDiv === 2 ? "#E6E6E6" : "#FFFFFF",
              }}
              onClick={() => {
                handleDropdown2Click();
              }}
            >
              <div>
                <label>
                  <span>{selectedAddress2}</span>
                </label>
                <button>
                  <IoIosArrowDown id={cx("icon")} />
                </button>
              </div>

              {showDropdown2 && (
                <ul id={cx("menu2")} className={cx("menu2")}>
                  <li onClick={() => handleDropdown2Select("Quận 1")}>
                    Quận 1
                  </li>
                  <li onClick={() => handleDropdown2Select("Quận 2")}>
                    Quận 2
                  </li>
                </ul>
              )}
            </div>
            <div
              className={cx("xa")}
              id={cx("button3")}
              style={{
                backgroundColor: selectedDiv === 3 ? "#E6E6E6" : "#FFFFFF",
              }}
              onClick={() => {
                handleDropdown3Click();
              }}
            >
              <div>
                <label>
                  <span>{selectedAddress3}</span>
                </label>
                <button>
                  <IoIosArrowDown id={cx("icon")} />
                </button>
              </div>

              {showDropdown3 && (
                <ul id={cx("menu3")} className={cx("menu3")}>
                  <li onClick={() => handleDropdown3Select("Phường 1")}>
                    Phường 1
                  </li>
                  <li onClick={() => handleDropdown3Select("Phường 2")}>
                    Phường 2
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className={cx("note")}>
            <div className={cx("loca")}>
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <span>Giao giờ hành chính</span>
              </div>
            </div>
            <div className={cx("loca")}>
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <span>Giao giờ hành chính</span>
              </div>
            </div>
            {/* //<input type='text' placeholder='Ghi chú thêm(ví dụ:Giao hàng giờ hành chính)' /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart_transport;
