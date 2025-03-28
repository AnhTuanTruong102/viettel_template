"use client";

import useLoginModel from "@/hook/useLoginModal";
import useRegisterModal from "@/hook/useRegisterModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";

type Props = {};

function LoginModal({}: Props) {
  const router = useRouter();
  const registerModel = useRegisterModal();
  const loginModel = useLoginModel();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Đăng nhập thành công");
        router.refresh();
        loginModel.onClose();
      } else if (callback?.error) {
        toast.error("Đã có lỗi xảy ra");
      }
    });
  };

  const toggle = useCallback(() => {
    loginModel.onClose();
    registerModel.onOpen();
  }, [loginModel, registerModel]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Chào mừng trở lại" subtitle="Đăng nhập vào tài khoản của bạn!" center />
      <Input
        id="email"
        label="Địa chỉ Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Mật khẩu"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Tiếp tục với Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Tiếp tục với Facebook"
        icon={AiFillFacebook}
        onClick={() => signIn("facebook")}
        isColor
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div>
          {`Bạn chưa có tài khoản?`}{" "}
          <span
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Tạo tài khoản
          </span>
        </div>
      </div>
    </div>
  );
  
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModel.isOpen}
      title="Đăng nhập"
      actionLabel="Tiếp tục"
      onClose={loginModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
