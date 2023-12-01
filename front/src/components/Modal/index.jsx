import { useEffect, useRef } from "react";
import { ModalContainer } from "./styles";

export const Modal = ({ children, blockClosing, toggleModal }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current) {
        return;
      }
      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return (
    <ModalContainer>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </ModalContainer>
  );
};
