import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { find } from 'rxjs';
import { p_interface } from 'src/app/products/data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastr: ToastrService) { }

  addtocart(product: p_interface) {
    let cartdata: p_interface[] = []
    let localcart = localStorage.getItem('localcart')
    if (!localcart) {
      localStorage.setItem('localcart', JSON.stringify([(product)]))

    }
    else {
      cartdata = JSON.parse(localcart)
      if (cartdata.length <= 4) {
        let itemalready = cartdata.find((p: p_interface) => p.id === product.id)
        if (itemalready) {
          this.toastr.success('Item Already Exists')
        }
        else {
          cartdata.push(product)
          localStorage.setItem('localcart', JSON.stringify(cartdata))
          console.log(cartdata.length)
        }
      }
      else {
        this.toastr.success('max five items can be added')
      }
    }
  }
  // addtocart(product: p_interface) {
  //   let cartdata: p_interface[] = []
  //   let localcart = localStorage.getItem('localcart')
  //   if (!localcart) {
  //     localStorage.setItem('localcart', JSON.stringify([(product)]))

  //   }
  //   else {
  //     cartdata = JSON.parse(localcart)
  //     if(cartdata.length <=4){
  //       const isproductAlreadyadded = cartdata.find(cartdata.)
  //     }
  //   }
  // }

  getcart() {
    let localcart = localStorage.getItem('localcart')
    if (localcart == null) {
      return null
    }
    let cardData = JSON.parse(localcart)
    return cardData
  }


}
