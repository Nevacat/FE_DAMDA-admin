interface ActivityRegion {
  [key: string]: string[];
}

interface ManagerType {
  id: number;
  username: string;
  phoneNumber: string;
  address: string;
  activity_region: ActivityRegion;
  level: number;
  certificate_status: string;
  certificate_status_etc: string;
  vehicle: boolean;
  managerStatus: string;
  memo: string;
}
