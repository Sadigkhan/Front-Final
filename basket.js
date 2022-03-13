// var adds= document.querySelectorAll(".cart-button")
// adds.forEach(add => {
//     add.addEventListener("click",function (e) {
//         e.preventDefault()
        
//         let addParent=add.parentElement
//         let Price1=  addParent.children[0].children[0].children[0].innerHTML
//         let Price= Price1.substring(1,Price1.length)
//         let Name=addParent.parentElement.children[0].children[0].innerHTML
//         let Img=addParent.parentElement.parentElement.children[0].children[1].children[1].children[0].getAttribute("src")
//         let Id=addParent.parentElement.parentElement.getAttribute("data-id")
//             if (localStorage.getItem("basket")==null) {
//                 localStorage.setItem("basket",JSON.stringify([]))
//             }

//      let basket=JSON.parse(localStorage.getItem("basket"))
//      let ExsistProduct=basket.find((p)=>p.id==Id)
//        if (ExsistProduct==undefined) {
//            let Product={
//                id:Id,
//                name:Name,
//                img:Img,
//                Price:Price,
//                Count:1,
//                TotalCount:0
               
//            }
//            basket.push(Product)

//        }else{
//            ExsistProduct.Count++
//        }
//      localStorage.setItem("basket",JSON.stringify(basket))
//       ShowItem()
      
//     })
// });
// ShowItem()
//   function ShowItem() {
//     var getItem =JSON.parse(localStorage.getItem("basket"))
//     var list= document.querySelector(".basket-list") 
//     // var total=TotalCount()
//     var Totale=Totalprice()
//     list.innerHTML=""
//     for (let i = 0; i < getItem.length; i++) {
//         li=document.createElement("li")
//         li.innerHTML=`
//         <img src="${getItem[i].img}" alt="">
//         <div class="description">
//             <div class="name"> x ${getItem[i].name}</div>
//             <div class="price">
//                 <span class="quantity">${getItem[i].Count}</span> × <span
//                     class="amount">${getItem[i].Price}</span>
//             </div>
//         </div>
//         <i class="fa-solid fa-xmark delete"  ></i>
//         `
//         list.append(li)
//     }
//     var tt=document.querySelector(".cart-footer .total .price")
//     tt.innerHTML=`$ ${Totale}`
     
//   }
//   Totalprice()
//   function Totalprice() {
//       let Totalprice=0
//       var getItem=JSON.parse(localStorage.getItem("basket"))
//       getItem.forEach(item => {
//           Totalprice+=item.Price*item.Count
//       });
//       return Totalprice
//   }


////////////////////////////////////////////////////////////////////////////////////////////////////////

// var delet= document.querySelectorAll(".delete")  
// delet.forEach(del => {
    
//     del.addEventListener("click",function (e) {
//         e.preventDefault()
//        localStorage.removeItem("basket")
//     })
// });

 


    // function TotalCount() {
       
    //     let totalCount=0
    //   var getItem=  JSON.parse(localStorage.getItem("basket"))

    //   getItem.forEach(item => {
    //     totalCount+=item.Count
    //   });
      
    //       return totalCount
    // }  
    

    if (localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", JSON.stringify([]));
    }
    
    function AddBasketBtn() {
        let ProductList = document.querySelectorAll("#ProList .main-block .block-bottom  .bottom-cart .cart-button a")
        
        for (addBasket of ProductList) {
            addBasket.addEventListener("click", function (e) {
                e.preventDefault();
                
                let basket = JSON.parse(localStorage.getItem("basket"));
                let data_id = this.parentElement.parentElement.parentElement.parentElement.getAttribute("data-id");
                
                let pro_name = this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerText
                
                let pro_new_price = this.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText
                
                let pro_rate = this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.innerText
                
                let src = this.parentElement.parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.getAttribute("src")
                
                let priceN = pro_new_price.substring(1, pro_new_price.length)
                let priceNum = Number(priceN)
                console.log(priceNum)
                let existingPro = basket.find(p => p.Id == data_id);
                if (existingPro == undefined) {
                    basket.push(
                        {
                            Id: data_id,
                            Name: pro_name,
                            Src: src,
                            Price: priceNum,
                            Rate: pro_rate,
                            Count: 1,
                        })
                }
                else {
                    existingPro.Count += 1;
                }
                localStorage.setItem("basket", JSON.stringify(basket));
                CountBasket();
                
    
            })
        }
    }
    AddBasketBtn();
    function CountBasket() {
        let basket = JSON.parse(localStorage.getItem("basket"));
        //let countPro = basket.reduce((total, p) => total + p.Count, 0);
        let countItem = basket.length
        document.getElementById("ProCount").innerText = countItem;
        document.getElementById("ProCount_mob").innerText = countItem;
    
    }
    CountBasket();