'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSidebar } from '@/hooks/useSidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Function to check if current path is in submenu
  const isInSubmenu = (item: NavItem): boolean => {
    if (item.href === path) return true;
    if (item.submenu) {
      return item.submenu.some((subItem) => isInSubmenu(subItem));
    }
    return false;
  };

  // Close all submenus when sidebar is minimized
  useEffect(() => {
    if (isMinimized) {
      setOpenSubmenus({});
    }
  }, [isMinimized]);

  // if (!items?.length) {
  //   return null;
  // }

  const toggleSubmenu = (title: string) => {
    if (!isMinimized) {
      setOpenSubmenus((prev) => ({ ...prev, [title]: !prev[title] }));
    }
  };

  // const isActiveRoute = (item: NavItem): boolean => {
  //   if (item.href === path) return true;
  //   if (item.submenu) {
  //     return item.submenu.some((subItem) => isActiveRoute(subItem));
  //   }
  //   return false;
  // };

  const renderNavItem = (item: NavItem, depth = 0) => {
    const Icon = Icons[item.icon || 'arrowRight'];
    const isActive = isInSubmenu(item);
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isSubmenuOpen = openSubmenus[item.title];

    return (
      <React.Fragment key={item.title}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={item.disabled ? '/' : item.href || '#'}
              className={cn(
                'flex items-center gap-2 rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                isActive ? 'bg-accent' : 'transparent',
                item.disabled && 'cursor-not-allowed opacity-80',
                depth > 0 && 'pl-6'
              )}
              onClick={(e) => {
                if (hasSubmenu) {
                  e.preventDefault();
                  toggleSubmenu(item.title);
                }
                if (setOpen) setOpen(false);
              }}
            >
              <Icon className={`ml-3 h-5 w-5 flex-none`} />
              {(isMobileNav || (!isMinimized && !isMobileNav)) && (
                <span className="mr-2 truncate">{item.title}</span>
              )}
              {hasSubmenu &&
                !isMinimized &&
                (isSubmenuOpen ? (
                  <ChevronDown className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-auto h-4 w-4" />
                ))}
            </Link>
          </TooltipTrigger>
          <TooltipContent
            align="center"
            side="right"
            sideOffset={8}
            className={!isMinimized ? 'hidden' : 'inline-block'}
          >
            {item.title}
          </TooltipContent>
        </Tooltip>
        {hasSubmenu && isSubmenuOpen && !isMinimized && (
          <div className="ml-4">
            {item.submenu!.map((subItem) => renderNavItem(subItem, depth + 1))}
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item) => renderNavItem(item))}
      </TooltipProvider>
    </nav>
  );
}
