export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  details: {
    manufacturer: string;
    warranty: string;
    attributes: { key: string; value: string }[];
  };
  images: { url: string; description: string }[];
}
