import React from "react";


export type ModalFormProps = {
  modalFormRef: ModalFormRef
  formTitle?: string
  rowData?: any
}
export type SetModalVisit = {
  setModalVisit: React.Dispatch<React.SetStateAction<boolean>>
}
export type ModalFormRef = React.RefObject<SetModalVisit>