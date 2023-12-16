
export interface UploadProps {
  name: string;
  id: string;
  accept: Array<string>;
  file_limit: number;
  send_as_string?: boolean;
  label?: string;
}

export interface ImageUploadProps extends UploadProps {
  square?: boolean;
  rounded?: boolean;
}

