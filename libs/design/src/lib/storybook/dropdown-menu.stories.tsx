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

export const Primary = {
  render: args => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Open
      </DropdownMenuTrigger>
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
        <DropdownMenuCheckboxItem defaultChecked>
          Show toolbar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show sidebar</DropdownMenuCheckboxItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup defaultValue="system">
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">
                System
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
} satisfies Story;
