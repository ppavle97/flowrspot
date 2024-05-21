export type ModalType =
  | "login"
  | "signup"
  | "profile"
  | "success_singup"
  | "success_login"
  | null;

export interface ModalState {
  modalType: ModalType;
}
