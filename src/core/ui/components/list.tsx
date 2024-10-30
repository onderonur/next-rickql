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
        'flex [&>li]:border-slate-300',
        direction === 'horizontal'
          ? 'gap-3'
          : 'flex-col [&>li:last-child]:border-none [&>li]:border-b',
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
  return <li className="[&>*]:block [&>*]:py-4">{children}</li>;
}

type ListItemTitleProps = {
  children: React.ReactNode;
};

export function ListItemTitle(props: ListItemTitleProps) {
  return <div className="text-lg font-semibold" {...props} />;
}

type ListItemSubtitleProps = {
  children: React.ReactNode;
};

export function ListItemSubtitle(props: ListItemSubtitleProps) {
  return <div className="mt-1 font-semibold text-muted" {...props} />;
}
