interface ActivityRegion {
  [key: string]: string[];
}

interface ManagerType {
  id: number;
  managerName: string;
  managerPhoneNumber: string;
  region: ActivityRegion;
  level: number;
  certificateStatus: string;
  certificateStatusEtc: string;
  fieldExperience: string;
  mainJobStatus: boolean;
  mainJobStatusEtc: string;
  vehicle: boolean;
  memo: string;
  prevManagerStatus: string;
  currManagerStatus: string;
}
