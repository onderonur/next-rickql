type AlertProps = {
  children: React.ReactNode;
};

export function Alert({ children }: AlertProps) {
  return (
    <div className="rounded border border-error bg-muted px-4 py-2 text-error">
      {children}
    </div>
  );
}
