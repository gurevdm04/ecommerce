import { toast } from "react-toastify";

export const toastInfo = (label: string): void => {
  toast.info(label);
};

export const toastSuccess = (label: string): void => {
  toast.success(label);
};

export const toastWarning = (label: string): void => {
  toast.warning(label);
};

export const toastError = (label: string): void => {
  toast.error(label);
};

export const toastDefault = (label: string): void => {
  toast(label);
};
