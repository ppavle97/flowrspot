export type ModalType =
  | "login"
  | "signup"
  | "profile"
  | "success_singup"
  | null;

export interface ModalState {
  modalType: ModalType;
}
