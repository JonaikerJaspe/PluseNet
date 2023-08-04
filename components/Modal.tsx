import { useCallback } from "react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  titles?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  titles,
  body,
  actionLabel,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
        "
      >
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3x6 h-full lg:h-auto">
          {/*content*/}
          <div
            className="
            h-full
            lg:h-auto
            border-10
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-black 
            outline-none 
            focus:outline-none
            "
          >
            {/*header*/}
            <div
              className="
              flex 
              items-center 
              justify-between 
              p-8
              rounded-t
              "
            >
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button
                className="
                p-1 
                ml-auto
                border-0 
                text-white 
                hover:opacity-70
                transition
                "
                onClick={handleClose}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/*body*/}
            <h6 className="text-3x1 font-semibold text-white ml-9 p-0">
              {titles}
            </h6>
            <div className="relative p-4 flex-auto">{body}</div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-2">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
