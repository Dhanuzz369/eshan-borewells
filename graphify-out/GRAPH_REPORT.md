# Graph Report - eshan-borewells  (2026-09-30)

## Corpus Check
- 105 files · ~406,732 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .xml 1)

## Summary
- 781 nodes · 1487 edges · 67 communities (50 shown, 17 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b09b92e7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- connector-preview-session.mjs
- context-menu.tsx
- combobox.tsx
- sidebar.tsx
- pnpm-install.mjs
- cn
- field.tsx
- dependencies
- package.json
- command.tsx
- devDependencies
- connector-context.ts
- item.tsx
- compilerOptions
- components.json
- menubar.tsx
- dropdown-menu.tsx
- vinext-starter
- utils.ts
- chart.tsx
- radix-ui
- sites-env.sh
- carousel.tsx
- attachment.tsx
- drawer.tsx
- sheet.tsx
- class-variance-authority
- select.tsx
- navigation-menu.tsx
- breadcrumb.tsx
- route.ts
- card.tsx
- empty.tsx
- popover.tsx
- install-pnpm.sh
- bubble.tsx
- lucide-react
- tabs.tsx
- scripts
- marker.tsx
- alert-dialog.tsx
- install-ci.sh
- Button
- pagination.tsx
- cloudflare-env.d.ts
- scroll-area.tsx
- react
- resizable.tsx
- sonner.tsx
- postcss.config.mjs
- build-verified.sh
- eslint.config.mjs
- connector-preview.d.ts
- ConnectorBinding
- ConnectorContent
- ConnectorContext
- ConnectorFailureStatus
- ConnectorResult
- Json
- overrides
- drizzle-kit
- engines
- message-scroller.tsx
- hover-card.tsx
- badge.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 327 edges
2. `react` - 57 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 29 edges
5. `Button()` - 26 edges
6. `compilerOptions` - 17 edges
7. `class-variance-authority` - 17 edges
8. `Separator()` - 10 edges
9. `vinext-starter` - 10 edges
10. `ComboboxInput()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `ContextMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/context-menu.tsx → lib/utils.ts
- `ContextMenuContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/context-menu.tsx → lib/utils.ts
- `ContextMenuItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/context-menu.tsx → lib/utils.ts
- `ContextMenuLabel()` --calls--> `cn()`  [EXTRACTED]
  components/ui/context-menu.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (67 total, 17 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 2 - "combobox.tsx"
Cohesion: 0.11
Nodes (19): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput() (+11 more)

### Community 3 - "sidebar.tsx"
Cohesion: 0.08
Nodes (34): InputGroupInput(), Input(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction() (+26 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.11
Nodes (16): readExecutionProfile(), NpmCacheProgress, runNpmInstall(), CACHE_SEEDS, holdInstallLocks(), InstallProgress, main(), openLock() (+8 more)

### Community 5 - "cn"
Cohesion: 0.12
Nodes (26): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Kbd(), KbdGroup() (+18 more)

### Community 6 - "field.tsx"
Cohesion: 0.10
Nodes (23): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+15 more)

### Community 7 - "dependencies"
Cohesion: 0.08
Nodes (25): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+17 more)

### Community 8 - "package.json"
Cohesion: 0.08
Nodes (24): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, clsx, date-fns (+16 more)

### Community 9 - "command.tsx"
Cohesion: 0.15
Nodes (17): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+9 more)

### Community 10 - "devDependencies"
Cohesion: 0.10
Nodes (21): devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, json-rpc-2.0, raw-body (+13 more)

### Community 11 - "connector-context.ts"
Cohesion: 0.36
Nodes (3): bindings, getConnectorBinding(), connectorsForRequest()

### Community 12 - "item.tsx"
Cohesion: 0.14
Nodes (17): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Item(), ItemActions(), ItemContent(), ItemDescription() (+9 more)

### Community 13 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 14 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, registries, rsc (+9 more)

### Community 15 - "menubar.tsx"
Cohesion: 0.12
Nodes (12): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 16 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 17 - "vinext-starter"
Cohesion: 0.09
Nodes (21): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+13 more)

### Community 18 - "utils.ts"
Cohesion: 0.36
Nodes (4): InputGroupText(), InputGroupTextarea(), Progress(), Textarea()

### Community 19 - "chart.tsx"
Cohesion: 0.20
Nodes (13): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+5 more)

### Community 20 - "radix-ui"
Cohesion: 0.14
Nodes (5): Checkbox(), RadioGroup(), RadioGroupItem(), Switch(), radix-ui

### Community 21 - "sites-env.sh"
Cohesion: 0.14
Nodes (13): HOME, MINIFLARE_REGISTRY_PATH, npm_config_audit, npm_config_cache, npm_config_fund, npm_config_update_notifier, sites-env.sh script, SITES_ENV_READY (+5 more)

### Community 22 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+6 more)

### Community 23 - "attachment.tsx"
Cohesion: 0.22
Nodes (10): Attachment(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants, AttachmentTitle() (+2 more)

### Community 24 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 25 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 26 - "class-variance-authority"
Cohesion: 0.39
Nodes (6): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority

### Community 27 - "select.tsx"
Cohesion: 0.22
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 28 - "navigation-menu.tsx"
Cohesion: 0.24
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 29 - "breadcrumb.tsx"
Cohesion: 0.25
Nodes (6): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator()

### Community 30 - "route.ts"
Cohesion: 0.33
Nodes (6): getDb(), GET(), POST(), toRouteErrorMessage(), notes, drizzle-orm

### Community 31 - "card.tsx"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

### Community 32 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 33 - "popover.tsx"
Cohesion: 0.25
Nodes (4): PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 34 - "install-pnpm.sh"
Cohesion: 0.39
Nodes (7): acquire_shared_lock(), can_write_directory(), release_shared_lock(), report_store(), install-pnpm.sh script, XDG_CACHE_HOME, XDG_DATA_HOME

### Community 35 - "bubble.tsx"
Cohesion: 0.38
Nodes (6): Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 36 - "lucide-react"
Cohesion: 0.08
Nodes (26): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, WHATSAPP_NUMBER, EnquiryPopup(), EnquiryPopupProps, links, MobileMenu() (+18 more)

### Community 37 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 38 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, graph:update, lint, start

### Community 39 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 40 - "alert-dialog.tsx"
Cohesion: 0.20
Nodes (9): AlertDialogAction(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay(), AlertDialogPortal() (+1 more)

### Community 41 - "install-ci.sh"
Cohesion: 0.40
Nodes (4): NPM_CONFIG_FETCH_RETRIES, NPM_CONFIG_FETCH_TIMEOUT, NPM_CONFIG_MAXSOCKETS, install-ci.sh script

### Community 42 - "Button"
Cohesion: 0.29
Nodes (8): ConnectorError(), AlertDialogCancel(), AttachmentAction(), Button(), buttonVariants, Calendar(), CalendarDayButton(), react-day-picker

### Community 43 - "pagination.tsx"
Cohesion: 0.28
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 46 - "react"
Cohesion: 0.22
Nodes (6): Alert(), AlertDescription(), AlertTitle(), alertVariants, Slider(), react

### Community 47 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): ResizableHandle(), ResizablePanelGroup(), react-resizable-panels

### Community 52 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 53 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

### Community 61 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

### Community 64 - "message-scroller.tsx"
Cohesion: 0.25
Nodes (6): MessageScroller(), MessageScrollerButton(), MessageScrollerContent(), MessageScrollerItem(), MessageScrollerViewport(), @shadcn/react

## Knowledge Gaps
- **200 isolated node(s):** `EnquiryPopupProps`, `links`, `services`, `whyCards`, `questions` (+195 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 273 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `context-menu.tsx`, `combobox.tsx`, `sidebar.tsx`, `field.tsx`, `command.tsx`, `item.tsx`, `menubar.tsx`, `dropdown-menu.tsx`, `utils.ts`, `chart.tsx`, `radix-ui`, `carousel.tsx`, `attachment.tsx`, `drawer.tsx`, `sheet.tsx`, `class-variance-authority`, `select.tsx`, `navigation-menu.tsx`, `breadcrumb.tsx`, `card.tsx`, `empty.tsx`, `popover.tsx`, `bubble.tsx`, `lucide-react`, `tabs.tsx`, `marker.tsx`, `alert-dialog.tsx`, `Button`, `pagination.tsx`, `scroll-area.tsx`, `react`, `resizable.tsx`, `message-scroller.tsx`, `hover-card.tsx`, `badge.tsx`?**
  _High betweenness centrality (0.291) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `context-menu.tsx`, `combobox.tsx`, `sidebar.tsx`, `cn`, `field.tsx`, `package.json`, `command.tsx`, `item.tsx`, `menubar.tsx`, `dropdown-menu.tsx`, `utils.ts`, `chart.tsx`, `radix-ui`, `carousel.tsx`, `attachment.tsx`, `drawer.tsx`, `sheet.tsx`, `class-variance-authority`, `select.tsx`, `navigation-menu.tsx`, `breadcrumb.tsx`, `card.tsx`, `popover.tsx`, `bubble.tsx`, `lucide-react`, `tabs.tsx`, `marker.tsx`, `alert-dialog.tsx`, `Button`, `pagination.tsx`, `scroll-area.tsx`, `message-scroller.tsx`, `hover-card.tsx`, `badge.tsx`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._
- **Why does `json-rpc-2.0` connect `connector-preview-session.mjs` to `package.json`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **What connects `EnquiryPopupProps`, `links`, `services` to the rest of the system?**
  _200 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `context-menu.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `combobox.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11067193675889328 - nodes in this community are weakly interconnected._