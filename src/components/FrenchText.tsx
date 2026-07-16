import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { Children, isValidElement, cloneElement } from 'react';
import { ft } from '../lib/frenchType';

function processNode(node: ReactNode): ReactNode {
  if (typeof node === 'string') return ft(node);
  if (typeof node === 'number') return node;
  if (Array.isArray(node)) {
    return Children.map(node, (child) => processNode(child));
  }
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children != null) {
    return cloneElement(node, {
      ...node.props,
      children: processNode(node.props.children),
    });
  }
  return node;
}

type FrenchTextProps<T extends ElementType = 'span'> = {
  as?: T;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;

/**
 * Renders copy with French line-break hygiene (no orphan short words).
 * Walks string leaves only; keeps nested markup (em, strong, br…).
 */
export function FrenchText<T extends ElementType = 'span'>({
  as,
  children,
  ...rest
}: FrenchTextProps<T>) {
  const Tag = (as ?? 'span') as ElementType;
  return <Tag {...rest}>{processNode(children)}</Tag>;
}
