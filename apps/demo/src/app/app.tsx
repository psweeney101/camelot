import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  buttonVariants,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DirectionProvider,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  Kbd,
  KbdGroup,
  Label,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  NativeSelect,
  NativeSelectOption,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider,
  Toaster,
  toast,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@camelot/design';
import {
  Bell,
  Bold,
  Home,
  Inbox,
  Italic,
  Mail,
  Search,
  Settings,
  Underline,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ThemeToggle } from './components/theme-toggle';

const chartData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 173, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
} satisfies ChartConfig;

const frameworks = ['React', 'Vue', 'Svelte', 'Angular', 'Solid'];

const invoices = [
  { id: 'INV001', status: 'Paid', method: 'Credit card', amount: '$250.00' },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  {
    id: 'INV003',
    status: 'Unpaid',
    method: 'Bank transfer',
    amount: '$350.00',
  },
];

const tags = Array.from({ length: 20 }, (_, i) => `Release v1.${i}`);

function Section({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{children}</CardContent>
    </Card>
  );
}

export function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [progress, setProgress] = useState(60);
  const [open, setOpen] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(true);

  const outline = buttonVariants({ variant: 'outline' });

  return (
    <ThemeProvider defaultTheme="dark">
      <DirectionProvider direction="ltr">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="flex flex-wrap items-center justify-between gap-4 border-b px-6 py-4">
              <div className="flex flex-col gap-1">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Design system</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Component gallery</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-2xl font-semibold tracking-tight">
                  Camelot components
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'icon',
                    })}
                  >
                    <Bell />
                  </TooltipTrigger>
                  <TooltipContent>Notifications</TooltipContent>
                </Tooltip>
                <ThemeToggle></ThemeToggle>
              </div>
            </header>

            {/* Navigation bars */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b px-6 py-2">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarCheckboxItem
                      checked={showBookmarks}
                      onCheckedChange={setShowBookmarks}
                    >
                      Show bookmarks
                    </MenubarCheckboxItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Getting started
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-64 gap-2 p-2">
                        <li>
                          <NavigationMenuLink href="#">
                            Introduction
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="#">
                            Installation
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="#">
                            Theming
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#" className="px-3 py-2">
                      Docs
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <main className="mx-auto grid max-w-7xl gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Buttons & badges */}
              <Section
                title="Buttons"
                description="Variants, groups and status badges."
              >
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                  <Button disabled>
                    <Spinner /> Saving
                  </Button>
                </div>
                <ButtonGroup>
                  <Button variant="outline">Archive</Button>
                  <Button variant="outline">Report</Button>
                  <ButtonGroupSeparator />
                  <Button variant="outline">Snooze</Button>
                </ButtonGroup>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Toggle aria-label="Toggle bold">
                    <Bold />
                  </Toggle>
                  <ToggleGroup variant="outline">
                    <ToggleGroupItem value="bold" aria-label="Bold">
                      <Bold />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Italic">
                      <Italic />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Underline">
                      <Underline />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  Open the command palette with
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                  </KbdGroup>
                </div>
              </Section>

              {/* Form inputs */}
              <Section
                title="Form"
                description="Fields, inputs and selection controls."
              >
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                    <FieldDescription>
                      We only use this for receipts.
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="bio">Bio</FieldLabel>
                    <Textarea
                      id="bio"
                      placeholder="Tell us a little about yourself"
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="native-role">Role (native select)</Label>
                    <NativeSelect id="native-role" defaultValue="dev">
                      <NativeSelectOption value="dev">
                        Developer
                      </NativeSelectOption>
                      <NativeSelectOption value="design">
                        Designer
                      </NativeSelectOption>
                      <NativeSelectOption value="pm">
                        Product manager
                      </NativeSelectOption>
                    </NativeSelect>
                  </Field>
                  <Field>
                    <Label>Region</Label>
                    <Select defaultValue="eu">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pick a region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Regions</SelectLabel>
                          <SelectItem value="eu">Europe</SelectItem>
                          <SelectItem value="na">North America</SelectItem>
                          <SelectItem value="apac">Asia Pacific</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Label>Framework</Label>
                    <Combobox items={frameworks}>
                      <ComboboxInput placeholder="Search frameworks" />
                      <ComboboxContent>
                        <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                        <ComboboxList>
                          {(item: string) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  </Field>
                  <Field>
                    <Label htmlFor="search">Search</Label>
                    <InputGroup>
                      <InputGroupAddon>
                        <Search />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="search"
                        placeholder="Search components"
                      />
                      <InputGroupAddon align="inline-end">
                        <InputGroupText>12 results</InputGroupText>
                        <InputGroupButton>Go</InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                  <Field>
                    <Label>One-time code</Label>
                    <InputOTP maxLength={6}>
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
                  </Field>
                  <FieldSet>
                    <FieldLegend variant="label">Plan</FieldLegend>
                    <RadioGroup defaultValue="pro">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="free" id="plan-free" />
                        <Label htmlFor="plan-free">Free</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="pro" id="plan-pro" />
                        <Label htmlFor="plan-pro">Pro</Label>
                      </div>
                    </RadioGroup>
                  </FieldSet>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" defaultChecked />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="marketing" />
                    <Label htmlFor="marketing">Product updates</Label>
                  </div>
                  <Field>
                    <Label>Volume</Label>
                    <Slider defaultValue={[40]} max={100} step={1} />
                  </Field>
                </FieldGroup>
                <Button
                  onClick={() => {
                    toast.add({
                      title: 'Event created',
                      description: 'Sunday, December 3 at 9:00 AM',
                      actionProps: {
                        children: 'Undo',
                      },
                    });
                  }}
                >
                  Submit
                </Button>
              </Section>

              {/* Feedback */}
              <Section
                title="Feedback"
                description="Alerts, progress and loading states."
              >
                <Alert>
                  <Bell />
                  <AlertTitle>Heads up</AlertTitle>
                  <AlertDescription>
                    Your trial ends in three days.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Payment failed</AlertTitle>
                  <AlertDescription>
                    Check your card details and try again.
                  </AlertDescription>
                </Alert>
                <div className="flex flex-col gap-2">
                  <Progress value={progress} />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setProgress(p => Math.max(0, p - 10))}
                    >
                      −10
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setProgress(p => Math.min(100, p + 10))}
                    >
                      +10
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Skeleton className="size-12 rounded-full" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Spinner />
                  <span className="text-sm text-muted-foreground">
                    Loading…
                  </span>
                </div>
              </Section>

              {/* Overlays */}
              <Section
                title="Overlays"
                description="Dialogs, sheets, popovers and menus."
              >
                <div className="flex flex-wrap gap-2">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger className={outline}>Dialog</DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Update your name and username.
                        </DialogDescription>
                      </DialogHeader>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="dlg-name">Name</FieldLabel>
                          <Input id="dlg-name" defaultValue="Ada Lovelace" />
                        </Field>
                      </FieldGroup>
                      <DialogFooter>
                        <DialogClose className={outline}>Cancel</DialogClose>
                        <Button
                          onClick={() => {
                            setOpen(false);
                            toast.add({
                              title: 'Profile updated',
                              type: 'success',
                            });
                          }}
                        >
                          Save changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger
                      className={buttonVariants({ variant: 'destructive' })}
                    >
                      Delete
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Delete this project?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This permanently removes the project and its data.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Keep project</AlertDialogCancel>
                        <AlertDialogAction>Delete project</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Sheet>
                    <SheetTrigger className={outline}>Sheet</SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>
                          Narrow down the results.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="flex flex-col gap-4 px-4">
                        <div className="flex items-center gap-2">
                          <Switch id="sheet-archived" />
                          <Label htmlFor="sheet-archived">
                            Include archived
                          </Label>
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose className={outline}>Close</SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>

                  <Drawer>
                    <DrawerTrigger className={outline}>Drawer</DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Set a daily goal</DrawerTitle>
                        <DrawerDescription>
                          Pick how many tasks you want to finish each day.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="px-4">
                        <Slider defaultValue={[5]} max={20} step={1} />
                      </div>
                      <DrawerFooter>
                        <Button>Save goal</Button>
                        <DrawerClose className={outline}>Cancel</DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  <Popover>
                    <PopoverTrigger className={outline}>Popover</PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-2">
                      <Label htmlFor="pop-width">Width</Label>
                      <Input id="pop-width" defaultValue="100%" />
                    </PopoverContent>
                  </Popover>

                  <HoverCard>
                    <HoverCardTrigger
                      href="#"
                      className="self-center text-sm underline underline-offset-4"
                    >
                      @camelot
                    </HoverCardTrigger>
                    <HoverCardContent className="flex gap-3">
                      <Avatar>
                        <AvatarFallback>CM</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">@camelot</span>
                        <span className="text-sm text-muted-foreground">
                          The design system behind this app.
                        </span>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <DropdownMenu>
                    <DropdownMenuTrigger className={outline}>
                      Menu
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>My account</DropdownMenuLabel>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          Profile{' '}
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Settings{' '}
                          <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuCheckboxItem
                          checked={showBookmarks}
                          onCheckedChange={setShowBookmarks}
                        >
                          Show bookmarks
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <ContextMenu>
                  <ContextMenuTrigger className="flex h-24 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                    Right-click here
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>
                      Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Inspect</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>

                <Command className="rounded-lg border">
                  <CommandInput placeholder="Type a command…" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <Home /> Home
                      </CommandItem>
                      <CommandItem>
                        <Mail /> Messages
                        <CommandShortcut>⌘M</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>
                        <Settings /> Preferences
                        <CommandShortcut>⌘,</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </Section>

              {/* Disclosure */}
              <Section
                title="Disclosure"
                description="Tabs, accordion and collapsible content."
              >
                <Tabs defaultValue="account">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="text-sm">
                    Make changes to your account here.
                  </TabsContent>
                  <TabsContent value="password" className="text-sm">
                    Change your password here.
                  </TabsContent>
                </Tabs>

                <Accordion defaultValue={['item-1']}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It follows the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it themeable?</AccordionTrigger>
                    <AccordionContent>
                      Yes. Colors come from your theme tokens.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Collapsible className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      3 starred repositories
                    </span>
                    <CollapsibleTrigger
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      Toggle
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-md border px-3 py-2 text-sm">
                    camelot/design
                  </div>
                  <CollapsibleContent className="flex flex-col gap-2">
                    <div className="rounded-md border px-3 py-2 text-sm">
                      camelot/web
                    </div>
                    <div className="rounded-md border px-3 py-2 text-sm">
                      camelot/api
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Section>

              {/* Data display */}
              <Section title="Data" description="Tables, chart and pagination.">
                <Table>
                  <TableCaption>Recent invoices</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map(invoice => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">
                          {invoice.id}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              invoice.status === 'Paid' ? 'default' : 'outline'
                            }
                          >
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{invoice.method}</TableCell>
                        <TableCell className="text-right">
                          {invoice.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <ChartContainer config={chartConfig} className="h-48 w-full">
                  <BarChart data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      radius={4}
                    />
                    <Bar
                      dataKey="mobile"
                      fill="var(--color-mobile)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>

                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </Section>

              {/* Content blocks */}
              <Section
                title="Content"
                description="Avatars, items, media and empty states."
              >
                <div className="flex -space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>GH</AvatarFallback>
                  </Avatar>
                </div>

                <ItemGroup>
                  <Item variant="outline">
                    <ItemMedia variant="icon">
                      <Inbox />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Inbox</ItemTitle>
                      <ItemDescription>12 unread messages</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button size="sm" variant="outline">
                        Open
                      </Button>
                    </ItemActions>
                  </Item>
                </ItemGroup>

                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden rounded-lg bg-muted"
                >
                  <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
                    16 / 9
                  </div>
                </AspectRatio>

                <Separator />

                <ScrollArea className="h-40 rounded-md border">
                  <div className="p-4">
                    <h4 className="mb-3 text-sm font-medium">Releases</h4>
                    {tags.map(tag => (
                      <div key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <Empty className="border border-dashed">
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <Inbox />
                    </EmptyMedia>
                    <EmptyTitle>No messages yet</EmptyTitle>
                    <EmptyDescription>
                      New messages will show up here.
                    </EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button size="sm">Compose message</Button>
                  </EmptyContent>
                </Empty>
              </Section>

              {/* Calendar & carousel */}
              <Section title="Pickers" description="Calendar and carousel.">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="self-center rounded-md border"
                />
                <Carousel className="mx-12">
                  <CarouselContent>
                    {[1, 2, 3, 4].map(n => (
                      <CarouselItem key={n}>
                        <Card>
                          <CardContent className="flex aspect-video items-center justify-center text-3xl font-semibold">
                            {n}
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </Section>

              {/* Layout */}
              <Section
                title="Layout"
                description="Resizable panels and sidebar."
                className="md:col-span-2 xl:col-span-3"
              >
                <ResizablePanelGroup
                  orientation="horizontal"
                  className="min-h-40 rounded-lg border"
                >
                  <ResizablePanel defaultSize={30}>
                    <div className="flex h-full items-center justify-center p-6 text-sm">
                      Sidebar
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={70}>
                    <div className="flex h-full items-center justify-center p-6 text-sm">
                      Content
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>

                <div className="overflow-hidden rounded-lg border">
                  <SidebarProvider className="h-64 min-h-0 [--sidebar-width:12rem]">
                    <Sidebar collapsible="none" className="border-r">
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton isActive>
                                  <Home /> Home
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <Inbox /> Inbox
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <Settings /> Settings
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                    </Sidebar>
                    <SidebarInset className="items-center justify-center text-sm">
                      Main content area
                    </SidebarInset>
                  </SidebarProvider>
                </div>
              </Section>
            </main>
          </div>
          <Toaster />
        </TooltipProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
}

export default App;
