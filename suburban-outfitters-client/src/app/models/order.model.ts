export interface IOrderRequest {
  customer_id: number;
  order_status_id: number;
  order_date: Date;
  departure_date?: Date;
  delivery_date?: Date;
  purchase_date?: Date;
  return_date?: Date;
  created_at: Date;
  updated_at?: Date;
}

export interface IOrderResponse {
  id: number;
  customer_id: number;
  order_status_id: number;
  order_date: Date;
  departure_date?: Date;
  delivery_date?: Date;
  purchase_date?: Date;
  return_date?: Date;
  created_at: Date;
  updated_at?: Date;
}
