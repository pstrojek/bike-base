export interface BikeDetail {
  date_stolen: number;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: null;
  location_found: null;
  manufacturer_name: string;
  external_id: null;
  registry_name: null;
  registry_url: null;
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
  paint_description: null;
  name: null;
  frame_size: null;
  rear_tire_narrow: boolean;
  front_tire_narrow: null;
  type_of_cycle: string;
  test_bike: boolean;
  rear_wheel_size_iso_bsd: null;
  front_wheel_size_iso_bsd: null;
  handlebar_type_slug: null;
  frame_material_slug: null;
  front_gear_type_slug: null;
  rear_gear_type_slug: null;
  extra_registration_number: null;
  additional_registration: null;
  stolen_record: {
    date_stolen: number;
    location: string;
    latitude: number;
    longitude: number;
    theft_description: null;
    locking_description: null;
    lock_defeat_description: null;
    police_report_number: null;
    police_report_department: null;
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
