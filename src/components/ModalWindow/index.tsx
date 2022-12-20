import React, {Dispatch, FC, SetStateAction} from 'react'
import cls from './ModalWindow.module.scss'
import {Dialog} from "@headlessui/react";


interface IModalWindowProp {
  isOpen: boolean
  changeOpen: Dispatch<SetStateAction<boolean>>
}

const ModalWindow: FC<IModalWindowProp> = (
  {
    isOpen,
    changeOpen
  }) => {


  return (

    <Dialog
      open={isOpen}
      onClose={() => changeOpen(false)}
    >
      <div className={cls.background}>

        <Dialog.Panel className={cls.popup}>
          <Dialog.Title className={cls.heading}>
            <h3>Contact with us</h3>
            <span onClick={() => changeOpen(false)}>&times;</span>
          </Dialog.Title>
          <div className={cls.form}>
            <form>
              <div className={cls.header}>
                <span>Interested in</span>
                <select>
                  <option>Internship</option>
                  <option>Software Developing</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className={cls.body}>
                <label>
                  <span>First name</span>
                  <input type="text"/>
                </label>
              </div>
              <div className={cls.footer}>

              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>

    </Dialog>
  )
}

export default ModalWindow
