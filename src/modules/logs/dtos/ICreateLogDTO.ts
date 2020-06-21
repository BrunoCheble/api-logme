interface IDetailsDTO {
  [index: string]: any;
}

export default interface ICreateLogDTO {
  application: string;
  description: string;
  created_by: string;
  type: string;
  details?: IDetailsDTO;
}
