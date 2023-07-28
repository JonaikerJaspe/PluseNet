import { useState, useCallback } from "react";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //Todo add   register and login
      registerModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Correo Electronico"
        pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        required
      />
      <Input
        placeholder="Nombre"
        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
        required
      />
      <Input
        placeholder="Nombre de Usuario"
        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
        required
      />
      <Input
        placeholder="Contraseña"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        ¿Ya tienes una cuenta?
        <span
          onClick={onToggle}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Iniciar sesión
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Crear Una Cuenta "
      titles="Si es primera vez Usando PluseNet?"
      actionLabel="Registrar"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
