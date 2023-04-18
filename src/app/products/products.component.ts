import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cartservice/cart.service';
import { p_interface} from './data'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products :p_interface[] = [
    { id: 1, p_name: 'Iphone', p_description: 'Ihone Mobile', p_image: 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max', p_price: 20, p_quantity: 1 },
    { id: 2, p_name: 'Samsung', p_description: 'Samsung mobile', p_image: 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max', p_price: 15, p_quantity: 1 },
    { id: 3, p_name: 'Nokia', p_description: 'Nokia mobile', p_image: 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max', p_price: 15, p_quantity: 1 },
    { id: 4, p_name: 'Redmi', p_description: 'Redmi mobile', p_image: 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max', p_price: 15, p_quantity: 1 },
    { id: 5, p_name: 'Vivo', p_description: 'Vivo mobile', p_image: 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max', p_price: 15, p_quantity: 1 }
  ]

  addToCart(product: p_interface) {
    this.cartservice.addtocart(product)
  }
  constructor(private cartservice :CartService) { }

  ngOnInit(): void {
  }

}
