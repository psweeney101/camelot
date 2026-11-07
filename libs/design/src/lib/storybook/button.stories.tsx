import type { Meta, StoryObj } from '@storybook/react-vite';
import { getSchema } from 'cva/tools';
import { SaveIcon } from 'lucide-react';
import { Button, buttonVariants } from '../components/button';
import { getStoryMeta } from '../utils';

const meta = {
  component: Button,
  title: 'Button',
  ...getStoryMeta({
    schema: getSchema(buttonVariants),
    children: 'Save',
  }),
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Text = {} satisfies Story;

export const Icon = {
  args: {
    children: <SaveIcon />,
    size: 'icon',
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Story;

export const TextWithIcon = {
  render: args => (
    <div className="flex gap-2">
      <Button {...args}>
        {args.children}
        <SaveIcon data-icon="inline-start" />
      </Button>
      <Button {...args}>
        <SaveIcon data-icon="inline-end" />
        {args.children}
      </Button>
    </div>
  ),
} satisfies Story;
