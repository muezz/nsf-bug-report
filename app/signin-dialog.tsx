"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAction } from "next-safe-action/hooks";
import Image from "next/image";
import React from "react";
import { signinWithGoogle } from "./actions";

type SigninDialogProps = {
  children: React.ReactNode;
};

const SigninDialog = ({ children }: SigninDialogProps) => {
  const { execute, isExecuting } = useAction(signinWithGoogle);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col justify-center items-center space-y-5">
            <Image
              alt="logo.svg"
              src="/logo.svg"
              className="h-7"
              width="229"
              height="25"
            />
            <p className="text-3xl">Get started in seconds</p>
          </DialogTitle>
          <DialogDescription className="w-full flex justify-center">
            <Button
              className=" flex justify-center w-[90%] gap-2 rounded-full p-8"
              variant="default"
              onClick={() => execute()}
              disabled={isExecuting}
            >
              Sign In with Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SigninDialog;
