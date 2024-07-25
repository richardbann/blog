import React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <button
      onClick={
        onClick
          ? (e) => {
              onClick(e);
            }
          : undefined
      }
      type="button"
      className="rounded bg-white px-2 py-1 text-xs font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
    >
      {children}
    </button>
  );
}
