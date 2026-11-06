import type { Meta, StoryObj } from '@storybook/react-vite';
import { getSchema } from 'cva/tools';
import { HomeIcon } from 'lucide-react';
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
    children: <HomeIcon />,
    size: 'icon',
  },
  argTypes: {
    children: { control: false },
  },
} satisfies Story;
