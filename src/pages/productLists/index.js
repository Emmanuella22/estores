import { AppLayout } from "../../layout";
// import styles from "./styles.module.css";

const ProductLists = () => {
  return (
    <AppLayout>
      <script src="https://cdn.tailwindcss.com"></script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Sora:wght@100;200;300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
        crossorigin="anonymous" />

      <main className="body  p-4 justify-center">
        <section class="up-section mb-20 ">
          <div classname="back&name flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left mr-3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <h2 classname="text-xl mb-5 font-semibold leading-6 text-[#776644] mb-2 relative">
              Continue shopping
            </h2>
          </div>

          <div class="flex justify-center">
            <div class="main-details flex mr-5">
              <div class="image-sction">
                <div class="large-img">
                  <img
                    src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                    class="w-[443.88px] h-[380.31px] mb-3"
                  />
                </div>

                <div className="sm-img grid-cols-4 gap-2 flex ">
                  <img
                    src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                    class="w-[105px] h-[90px] mb-3"
                  />
                  <img
                    src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                    class="w-[105px] h-[90px] mb-3"
                  />
                  <img
                    src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                    class="w-[105px] h-[90px] mb-3"
                  />
                  <img
                    src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                    class="w-[105px] h-[90px] mb-3"
                  />
                </div>
              </div>
            </div>

            <div classname="product-details p-4  flex  bg-[#F4F4F4]">
              <div classname="left ">
                <div class="flex justify-between">
                  <h2 classname="text-black font-semibold mb-4 text-[30px]">
                    Chelsea Boot
                  </h2>
                  <p classname="text-[18px] text-black font-medium pr-10 ">
                    Boots
                  </p>{" "}
                </div>
                <p classname="text-[18px] mb-2 text-[#979797] mb-4 ">
                  COD: BRW-CB
                </p>
                <h2 classname="text-black font-semibold text-[30px] mb-4 ">
                  GHS 145.00
                </h2>
                <p classname="line-through text-[25px] font-medium mb-4 ">
                  GHS 150.00
                </p>
                <p classname="text-[18px] mb-4 font-semibold  ">Size:39</p>

                <div classname="buttons grid-col-3">
                  <button classname="cart-botton mt-4 mr-4 bg-[#776644] p-4 rounded-3xl text-white text-[23.54px]">
                    Add to cart
                  </button>
                  <button classname="cart-botton mt-4 mr-4 bg-[#776644] p-4 rounded-3xl text-white text-[23.54px]">
                    Buy now{" "}
                  </button>
                  <button classname="cart-botton mt-4 bg-white p-4 rounded-3xl text-[#776644] text-[23.54px] border-4 outline-[#776644]">
                    Message Seller
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div classname="similar-section"></div>
        </section>

        <section classname="similar-section">
          <h2 classname="text-sm font-semibold leading-6 text-[#776644] mb-2 ">
            Categories
          </h2>

          <div classname="similar-contents flex">
            <div classname="product-1 pt-2 drop-shadow-md bg-white pb-3">
              <div classname="product-image">
                <img
                  src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                  class="w-80 h-64 mb-3"
                />

                <div classname="product-details pl-4 pr-4 flex justify-between">
                  <div classname="left ">
                    <h2 classname="text-black font-semibold mb-2">
                      Chelsea Boot
                    </h2>
                    <p classname="text-[10px] mb-2 text-[#979797]">
                      COD: BRW-CB
                    </p>
                    <h2 classname="text-black font-semibold text-[17px]">
                      GHS 145.00
                    </h2>
                    <p classname="line-through text-[13px] font-medium">
                      GHS 150.00
                    </p>
                  </div>

                  <div class="right ">
                    <p class="text-[10px] mb-2 text-black font-medium pl-5">
                      Boots
                    </p>
                    <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
              <div class="product-image">
                <img
                  src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                  class="w-80 h-64 mb-3"
                />

                <div class="product-details pl-4 pr-4 flex justify-between">
                  <div class="left ">
                    <h2 class="text-black font-semibold mb-2">Chelsea Boot</h2>
                    <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
                    <h2 class="text-black font-semibold text-[17px]">
                      GHS 145.00
                    </h2>
                    <p class="line-through text-[13px] font-medium">
                      GHS 150.00
                    </p>
                  </div>

                  <div class="right ">
                    <p class="text-[10px] mb-2 text-black font-medium pl-5">
                      Boots
                    </p>
                    <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
              <div class="product-image">
                <img
                  src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                  class="w-80 h-64 mb-3"
                />

                <div class="product-details pl-4 pr-4 flex justify-between">
                  <div class="left ">
                    <h2 class="text-black font-semibold mb-2">Chelsea Boot</h2>
                    <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
                    <h2 class="text-black font-semibold text-[17px]">
                      GHS 145.00
                    </h2>
                    <p class="line-through text-[13px] font-medium">
                      GHS 150.00
                    </p>
                  </div>

                  <div class="right ">
                    <p class="text-[10px] mb-2 text-black font-medium pl-5">
                      Boots
                    </p>
                    <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
              <div class="product-image">
                <img
                  src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484"
                  class="w-80 h-64 mb-3"
                />

                <div class="product-details pl-4 pr-4 flex justify-between">
                  <div class="left ">
                    <h2 class="text-black font-semibold mb-2">Chelsea Boot</h2>
                    <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
                    <h2 class="text-black font-semibold text-[17px]">
                      GHS 145.00
                    </h2>
                    <p class="line-through text-[13px] font-medium">
                      GHS 150.00
                    </p>
                  </div>

                  <div class="right ">
                    <p class="text-[10px] mb-2 text-black font-medium pl-5">
                      Boots
                    </p>
                    <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
};

export { ProductLists };
