type CharacterListProps = {
  children: React.ReactNode;
};

export function CharacterList({ children }: CharacterListProps) {
  return <ul className="grid-cols-autofill-48 grid gap-2">{children}</ul>;
}
