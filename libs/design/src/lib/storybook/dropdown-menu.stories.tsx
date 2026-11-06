import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react';
import { Button } from '../components/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../components/dropdown-menu';

const meta = {
  component: DropdownMenu,
  title: 'Dropdown Menu',
  args: { defaultOpen: true },
} satisfies Meta<typeof DropdownMenu>;
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

const trigger = (
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    Open
  </DropdownMenuTrigger>
);

export const Primary = {
  render: (args) => (
    <DropdownMenu {...args}>
      {trigger}
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserIcon />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
} satisfies Story;

export const Checkboxes = {
  render: (args) => (
    <DropdownMenu {...args}>
      {trigger}
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem defaultChecked>
          Show toolbar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show sidebar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem disabled>
          Show footer
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
} satisfies Story;

export const RadioGroup = {
  render: (args) => (
    <DropdownMenu {...args}>
      {trigger}
      <DropdownMenuContent>
        <DropdownMenuRadioGroup defaultValue="system">
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
} satisfies Story;

export const Submenu = {
  render: (args) => (
    <DropdownMenu {...args}>
      {trigger}
      <DropdownMenuContent>
        <DropdownMenuItem>New file</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
} satisfies Story;
