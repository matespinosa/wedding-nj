import { createElement, type ComponentPropsWithoutRef, type ElementType } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export function Reveal<T extends ElementType>({
  as,
  className,
  ...props
}: { as: T; className: string } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>) {
  const { ref, visible } = useRevealOnScroll();
  const merged = `${className}${visible ? ' visible' : ''}`.trim();
  return createElement(as, { ref, className: merged, ...props } as never);
}
