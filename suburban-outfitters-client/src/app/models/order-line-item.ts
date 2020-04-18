export interface IOrderLineItem {
  order_id: number;
  product_id: number;
  inventory_id: number;
  quantity: number;
  created_at: Date;
  updated_at?: Date;
}
