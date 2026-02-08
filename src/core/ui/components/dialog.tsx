import { useOnRouteChange } from '@/core/routing/hooks';
import { Button } from '@/core/ui/components/button';
import React, { useImperativeHandle, useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';

export type DialogRef = {
  showModal: VoidFunction;
};

type DialogProps = {
  ref: React.Ref<DialogRef>;
  title: string;
  children: React.ReactNode;
};

export function Dialog({ ref, title, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      showModal: () => {
        dialogRef.current?.showModal();
      },
    };
  }, []);

  useOnRouteChange(() => {
    dialogRef.current?.close();
  });

  return (
    <dialog
      ref={dialogRef}
      className="m-auto w-full rounded-3xl border p-6 shadow-sm backdrop:bg-black/30 backdrop:backdrop-blur-md"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <Button
            onClick={() => {
              dialogRef.current?.close();
            }}
          >
            <RxCross2 className="text-xl" />
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </dialog>
  );
}
