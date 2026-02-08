'use client';

import { NextLink } from '@/core/routing/components/next-link';
import { Button } from '@/core/ui/components/button';
import type { DialogRef } from '@/core/ui/components/dialog';
import { Dialog } from '@/core/ui/components/dialog';
import { List, ListItem, ListItemTitle } from '@/core/ui/components/list';
import { usePathname } from 'next/navigation';
import { Suspense, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { twJoin } from 'tailwind-merge';

function NavMenuItems() {
  const pathname = usePathname();

  const items = [
    { href: '/', title: 'Home' },
    { href: '/characters', title: 'Characters' },
    { href: '/locations', title: 'Locations' },
    { href: '/episodes', title: 'Episodes' },
  ];

  return items.map((item) => {
    return (
      <ListItem key={item.href}>
        <NextLink
          href={item.href}
          className={twJoin(
            pathname === item.href
              ? 'text-foreground'
              : 'text-muted-foreground',
          )}
        >
          <ListItemTitle>{item.title}</ListItemTitle>
        </NextLink>
      </ListItem>
    );
  });
}

export function MobileNavMenu() {
  const dialogRef = useRef<DialogRef>(null);

  return (
    <div className="sm:hidden">
      {/* Since we use `useSearchParams` in `Dialog` under the hood,
      we need to wrap it with `Suspense` for statically rendered pages.
      https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
      https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering */}
      <Suspense>
        <Button
          aria-label="Open navigation menu"
          onClick={() => {
            dialogRef.current?.showModal();
          }}
        >
          <RxHamburgerMenu />
        </Button>
        <Dialog ref={dialogRef} title="Menu">
          <nav>
            <List>
              <NavMenuItems />
            </List>
          </nav>
        </Dialog>
      </Suspense>
    </div>
  );
}

export function NavMenu() {
  return (
    <div className="hidden sm:block">
      <nav>
        <List direction="horizontal">
          <NavMenuItems />
        </List>
      </nav>
    </div>
  );
}
