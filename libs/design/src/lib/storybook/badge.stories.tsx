import type { Meta, StoryObj } from '@storybook/react-vite';
import { getSchema } from 'cva/tools';
import { BadgeCheck } from 'lucide-react';
import { Badge, badgeVariants } from '../components/badge';
import { getStoryMeta } from '../utils';

const meta = {
  component: Badge,
  title: 'Badge',
  ...getStoryMeta({
    schema: getSchema(badgeVariants),
    children: 'Verified',
  }),
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof Badge>;

export const Text = {} satisfies Story;

export const TextWithIcon = {
  render: args => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args}>
        <BadgeCheck data-icon="inline-start" />
        {args.children}
      </Badge>
      <Badge {...args}>
        {args.children}
        <BadgeCheck data-icon="inline-end" />
      </Badge>
    </div>
  ),
} satisfies Story;
