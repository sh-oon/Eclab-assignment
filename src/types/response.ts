// Define the types for nested objects and arrays
export type School = {
  country_id: string;
  id: string;
  name: string;
  address: string;
  url: string;
  created_at: string;
  updated_at: string;
};

export type Profile = {
  id: string;
  school_id: string;
  gender: "MALE" | "FEMALE";
  birth_day: string;
  grade: string;
  year_admission: string;
  nationality: string[];
  status_type: "COMPLETED" | "IN_PROGRESS" | "PENDING";
  created_at: string;
  updated_at: string;
  school: School;
};

export type Student = {
  name: string;
  email: string;
  profile: Profile;
};

export type Counselor = {
  name: string;
  email: string;
};

export type EcDb = {
  year: string;
  id: string;
  name: string;
  organization: string;
  ec_type: "Writing Competitions" | "Competitions" | "Pre-college/Summer Programs";
  recognition_level: "State/Regional" | "International" | "N/A";
  nationality: "Resident" | "International";
  url: string;
  participate_way: ("Online" | "Offline")[];
  age_limit: string[];
  grade_limit: string[];
};

export type EcReportItem = {
  id: string;
  ec_db: EcDb;
  is_added: boolean;
};

export type TestData = {
  id: string;
  student: Student;
  counselor: Counselor;
  title: string;
  ec_report_status: "DELIVERED" | "PENDING" | "IN_PROGRESS";
  send_dt: string;
  delivered_dt: string;
  ec_report_items: EcReportItem[];
};
