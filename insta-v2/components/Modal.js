// import React from 'react'
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
   const [open, setOpen] = useRecoilState(modalState)

  return (
    <div>
      <h1>Modal</h1>
    </div>
  )
}

export default Modal;
