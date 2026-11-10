import type { Meta, StoryObj } from '@storybook/react-vite';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../components/input-otp';

const meta = {
  component: InputOTP,
  title: 'Input OTP',
  args: {
    children: null,
  },
  argTypes: {
    children: { table: { disable: true } },
    containerClassName: { table: { disable: true } },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof InputOTP>;
export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default = {
  render: args => (
    <InputOTP
      maxLength={6}
      disabled={args.disabled}
      pattern={REGEXP_ONLY_DIGITS}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
} satisfies Story;
