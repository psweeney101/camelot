import type { ArgTypes } from '@storybook/react-vite';
import type { ReactNode } from 'react';

/** Builds the Storybook metadata for a component given its cva schema */
export function getStoryMeta({
  schema,
  children,
}: {
  schema: Record<
    string,
    {
      values: readonly (boolean | number | string)[];
      defaultValue?: boolean | number | string;
    }
  >;
  children: ReactNode;
}) {
  // Grab variants from the schema
  const variants = Object.entries(schema).map(([name, variant]) => ({
    name,
    ...variant,
  }));

  const argTypes: ArgTypes = {
    // Only show children when they're strings
    children:
      typeof children === 'string'
        ? { control: 'text' }
        : { table: { disable: true } },
    ...Object.fromEntries(
      variants.map(({ name, values }) => [
        name,
        { control: 'select', options: [...values] },
      ]),
    ),
  };

  return {
    tags: ['autodocs'],
    args: {
      children,
      ...Object.fromEntries(
        variants.map(({ name, defaultValue }) => [name, defaultValue]),
      ),
    },
    argTypes,
  };
}
