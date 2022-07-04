import { AppLayout } from "../../layout";


const ProductDetails = () => {
    return (
        <AppLayout>
            <script src="https://cdn.tailwindcss.com"></script>
    
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Sora:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />
   
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
 
   <link rel="stylesheet" href="/style.css" />
   <script src="/script.js" defer></script>
   <main className="body flex justify-center">
   <div class="side-left m-4 font-['Montserrat']">
      <div class="categories mb-3">
        <h2 class="text-sm font-semibold leading-6 text-[#776644] mb-2">Categories</h2>
        <div class="list-1 mb-2">
           <ul class="text-sm">
             <li class="mb-2">All</li>
             <li class="mb-2">Chalsea Boots</li>
             <li class="mb-2">Oxford Shose</li>
             <li class="mb-2">Sneakers</li>
          </ul>
          
          <hr class="mb-2 mt-3" />
          
        </div>
      </div>
      
        <div class="Sort-by mt-3 mb-3">
          <h2 class="text-sm font-semibold leading-6 text-[#776644] mb-2">Sort by</h2>
          <div class="list-1 mb-2">
           <ul class="text-sm">
             <li class="mb-2">Categories</li>
             <li class="mb-2">Lowest-price</li>
             <li class="mb-2">Highest-price</li>
             <li class="mb-2">A-Z</li>
             <li class="mb-2">Z-A</li>
          </ul>
          
          <hr class="mb-2 mt-3" />
          
        </div>
      </div>
      
      <div class="Layout mt-3 mb-3 " />
          <h2 class="text-sm font-semibold leading-6 text-[#776644] mb-2">Layout</h2>
          <div class="list-1">
           <ul class="text-sm">
             <li class="mb-2">Insta view</li>
             <li class="mb-2">List view</li>
          </ul>
          
          <hr class="mb-2 mt-3" />
          
        </div>
      </div>
      
      
       <div class="Store info">
          <h2 class="text-sm font-semibold leading-6 text-[#776644] mb-3">Store Info</h2>
           <div class="WhatsApp flex mb-3 ">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
             <p class="text-sm"> +233 203 567 890 </p>
             
            </div>
         
         <div class="Phone flex mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
             <p class="text-sm"> +233 203 567 890 </p>
             
            </div>
         
          <div class="Instagram flex mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
             <p class="text-sm"> @Emmy_shoes </p>
             
            </div>
         
          <div class="Facebook flex mb-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
             <p class="text-sm"> @Emmy_shoes </p>
             
            </div>
         
         <div class="Location flex mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
             <p class="text-sm"> Accra, Ghana </p>
             
            </div>
         
          <div class="mail flex mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
             <p class="text-sm"> emmy_shoes@gmail.com </p>
             
            </div>
         <p class="text-sm"> Working hours 9am-6pm Mon-Sat </p>
          
      </div>  
    
    <div class="product-section  font-['Montserrat'] ">
      <h2 class="text-sm font-semibold leading-6 text-[#776644] font-['Montserrat']">All</h2>
      <hr class="w-[52px] border-8 bg-[#776644] " />
  
      
      <div class="products  gap-4 grid grid-cols-3">
        
      <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image1.png?v=1656885399484" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Chelsea Boot</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
      
      <div class="product-2 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image2.png?v=1656894783588" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left">
            <h2 class="text-black font-semibold mb-2">Nike Sneakers</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Sneakers</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
      <div class="product-3 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image3.png?v=1656894863366" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Nike Kicks</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
    </div>
      
         <div class="procucts grid grid-cols-3 gap-4 mt-4">
        
      <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image4.png?v=1656899452276" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Jimmy Boots</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
      
      <div class="product-2 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image5.png?v=1656899460016" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left">
            <h2 class="text-black font-semibold mb-2">Chelsea Boot</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
      <div class="product-3 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image6.png?v=1656899468963" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Vans Kicks</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
    </div>
      
         <div class="procucts grid grid-cols-3 gap-4 mt-4">
        
      <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image7.png?v=1656901047420" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Diesel Boot</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
      
      <div class="product-2 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image8.png?v=1656901051086" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Air Jordan</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Sneakers</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
      <div class="product-3 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image9.png?v=1656901061205" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Metaverse Kicks</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>          
            
          <div class="right">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Sneakers</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
    </div>
      
         <div class="procucts grid grid-cols-3 gap-4 mt-4">
        
      <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image10.png?v=1656901812194" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Crocs</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
      
      <div class="product-2 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image11.png?v=1656901822180" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Yeezy Boost</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Sneakers</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
      <div class="product-3 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image12.png?v=1656901830586" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left ">
            <h2 class="text-black font-semibold mb-2">Nike Sneakers</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Sneakers</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
    </div>
      
         <div class="procucts grid grid-cols-3 gap-4 mt-4">
        
      <div class="product-1 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image13.png?v=1656902707824" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left">
            <h2 class="text-black font-semibold mb-2">Crocs</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Boots</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
      
      <div class="product-2 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image14.png?v=1656902716577" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left">
            <h2 class="text-black font-semibold mb-2">Yeezy Boost</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Sneakers</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
      <div class="product-3 pt-2 drop-shadow-md bg-white pb-3">
        <div class="product-image">
          <img src="https://cdn.glitch.global/c131041b-64de-4867-9047-0afad1d204a6/image15.png?v=1656902726531" class="w-80 h-64 mb-3"/>
          
          <div class="product-details pl-4 pr-4 flex justify-between">
            
          <div class="left">
            <h2 class="text-black font-semibold mb-2">Nike Sneakers</h2>
            <p class="text-[10px] mb-2 text-[#979797]">COD: BRW-CB</p>
            <h2 class="text-black font-semibold text-[17px]">GHS 145.00</h2>
            <p class="line-through text-[13px] font-medium">GHS 150.00</p>
          </div>
            
            
          <div class="right ">
            <p class="text-[10px] mb-2 text-black font-medium pl-5">Sneakers</p>
            <button class="cart-botton mt-4 bg-[#776644] p-3 rounded-full text-white text-[12px]">Add to cart</button>
          </div>
          </div>
        </div>
        
      </div>
        
    </div>
      
    </div>


   </main>
        </AppLayout>
    )
};



export { ProductDetails };