export interface Artist {
  id: string;
  name: string;
  genre: string;
  image_url: string;
  social_links: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  created_at: string;
}

export interface ScheduleItem {
  id: string;
  day: number;
  time: string;
  artist_id: string | null;
  artist?: Artist;
  stage: string;
  description: string;
  created_at: string;
}

export interface MerchandiseItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  icon_name: string;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  total: number;
  status: string;
  created_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_type: string;
  product_id: string;
  quantity: number;
  price: number;
  created_at: string;
}