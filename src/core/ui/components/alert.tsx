type AlertProps = {
  children: React.ReactNode;
};

export function Alert({ children }: AlertProps) {
  return (
    <div className="border-error bg-muted text-error rounded-sm border px-4 py-2">
      {children}
    </div>
  );
}
