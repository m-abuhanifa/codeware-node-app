interface Product {
  product: string;
}

interface OrderItems {
  id: string;
  products: Product[];
  quantity: number;
}

interface Order {
  id: string;
  phone: string;
  orderItems: OrderItems[];
}
