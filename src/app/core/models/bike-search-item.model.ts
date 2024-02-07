export interface BikeSearchItemModel {
  date_stolen: number;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  manufacturer_name: string;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: [number, number];
  stolen_location: string;
  thumb: string;
  title: string;
  url: string;
  year: number;
}

export interface BikeSearchPayload {
  bikes: BikeSearchItemModel[];
}
