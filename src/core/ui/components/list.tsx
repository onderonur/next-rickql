import { twMerge } from 'tailwind-merge';

type ListProps = {
  direction?: 'vertical' | 'horizontal';
  className?: string;
  children: React.ReactNode;
};

export function List({
  direction = 'vertical',
  className,
  ...rest
}: ListProps) {
  return (
    <ul
      className={twMerge(
        'flex',
        direction === 'horizontal'
          ? 'gap-3'
          : '*:last-child:border-none flex-col *:border-b',
        className,
      )}
      {...rest}
    />
  );
}

type ListItemProps = {
  children: React.ReactNode;
};

export function ListItem({ children }: ListItemProps) {
  return <li className="*:block *:py-4">{children}</li>;
}

type ListItemTitleProps = {
  children: React.ReactNode;
};

export function ListItemTitle(props: ListItemTitleProps) {
  return <div className="font-semibold" {...props} />;
}

type ListItemSubtitleProps = {
  children: React.ReactNode;
};

export function ListItemSubtitle(props: ListItemSubtitleProps) {
  return (
    <div
      className="text-muted-foreground mt-1 text-sm font-semibold"
      {...props}
    />
  );
}
