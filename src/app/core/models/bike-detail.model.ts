export interface BikeDetail {
  date_stolen: number;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  location_found: string;
  manufacturer_name: string;
  external_id: number;
  registry_name: string;
  registry_url: string;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: [number, number];
  stolen_location: string;
  thumb: string;
  title: string;
  url: string;
  year: number;
  propulsion_type_slug: string;
  cycle_type_slug: string;
  registration_created_at: number;
  registration_updated_at: number;
  api_url: string;
  manufacturer_id: number;
  paint_description: string;
  name: string;
  rear_tire_narrow: boolean;
  type_of_cycle: string;
  test_bike: boolean;
  stolen_record: {
    date_stolen: number;
    location: string;
    latitude: number;
    longitude: number;
    theft_description: string;
    locking_description: string;
    lock_defeat_description: string;
    police_report_number: string;
    police_report_department: string;
    created_at: number;
    create_open311: boolean;
    id: number;
  };
  public_images: [];
  components: [];
}

export interface BikeDetailPayload {
  bike: BikeDetail;
}
