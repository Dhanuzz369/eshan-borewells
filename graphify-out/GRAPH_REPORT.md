# Graph Report - eshan-borewells  (2026-10-02)

## Corpus Check
- 116 files · ~476,468 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .example 1)

## Summary
- 829 nodes · 1581 edges · 69 communities (52 shown, 17 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `394bae31`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- connector-preview-session.mjs
- package.json
- sidebar.tsx
- cn
- pnpm-install.mjs
- field.tsx
- dependencies
- combobox.tsx
- command.tsx
- Eshan Borewells website
- devDependencies
- connector-context.ts
- compilerOptions
- components.json
- menubar.tsx
- context-menu.tsx
- dropdown-menu.tsx
- lucide-react
- Button
- app/page.tsx
- chart.tsx
- sites-env.sh
- utils.ts
- attachment.tsx
- drawer.tsx
- item.tsx
- sheet.tsx
- toggle-group.tsx
- select.tsx
- accordion.tsx
- route.ts
- navigation-menu.tsx
- LeadForm
- [slug]/page.tsx
- layout.tsx
- empty.tsx
- popover.tsx
- install-pnpm.sh
- bubble.tsx
- input-otp.tsx
- tabs.tsx
- class-variance-authority
- marker.tsx
- install-ci.sh
- leads/route.ts
- customer-reviews.tsx
- cloudflare-env.d.ts
- postcss.config.mjs
- build-verified.sh
- radix-ui
- avatar.tsx
- scripts
- resizable.tsx
- sonner.tsx
- eslint.config.mjs
- connector-preview.d.ts
- hover-card.tsx
- overrides
- drizzle-kit
- engines
- ConnectorBinding
- ConnectorContent
- ConnectorContext
- ConnectorFailureStatus
- ConnectorResult
- Json

## God Nodes (most connected - your core abstractions)
1. `cn()` - 329 edges
2. `react` - 59 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 31 edges
5. `Button()` - 26 edges
6. `compilerOptions` - 17 edges
7. `class-variance-authority` - 17 edges
8. `Eshan Borewells website` - 12 edges
9. `getProductionUrl()` - 12 edges
10. `Separator()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `Menubar()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts
- `MenubarCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts
- `MenubarItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts
- `MenubarLabel()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (69 total, 17 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "package.json"
Cohesion: 0.08
Nodes (24): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, clsx, date-fns (+16 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.08
Nodes (33): InputGroupInput(), Input(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction() (+25 more)

### Community 3 - "cn"
Cohesion: 0.09
Nodes (33): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), Card(), CardAction() (+25 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.11
Nodes (16): readExecutionProfile(), NpmCacheProgress, runNpmInstall(), CACHE_SEEDS, holdInstallLocks(), InstallProgress, main(), openLock() (+8 more)

### Community 5 - "field.tsx"
Cohesion: 0.10
Nodes (22): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSet() (+14 more)

### Community 6 - "dependencies"
Cohesion: 0.08
Nodes (25): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+17 more)

### Community 7 - "combobox.tsx"
Cohesion: 0.11
Nodes (22): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput() (+14 more)

### Community 8 - "command.tsx"
Cohesion: 0.15
Nodes (17): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+9 more)

### Community 9 - "Eshan Borewells website"
Cohesion: 0.12
Nodes (20): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+12 more)

### Community 10 - "devDependencies"
Cohesion: 0.10
Nodes (21): devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, json-rpc-2.0, raw-body (+13 more)

### Community 11 - "connector-context.ts"
Cohesion: 0.36
Nodes (3): bindings, getConnectorBinding(), connectorsForRequest()

### Community 12 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 13 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, registries, rsc (+9 more)

### Community 14 - "menubar.tsx"
Cohesion: 0.12
Nodes (12): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 15 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 16 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 17 - "lucide-react"
Cohesion: 0.18
Nodes (9): links, MobileMenu(), Brand(), ContactLink(), HomePage(), links, ScrollNav(), Spinner() (+1 more)

### Community 18 - "Button"
Cohesion: 0.05
Nodes (43): ConnectorError(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+35 more)

### Community 19 - "app/page.tsx"
Cohesion: 0.22
Nodes (10): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, WHATSAPP_NUMBER, areaGroups, questions, serviceAreas, services (+2 more)

### Community 20 - "chart.tsx"
Cohesion: 0.20
Nodes (13): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+5 more)

### Community 21 - "sites-env.sh"
Cohesion: 0.14
Nodes (13): HOME, MINIFLARE_REGISTRY_PATH, npm_config_audit, npm_config_cache, npm_config_fund, npm_config_update_notifier, sites-env.sh script, SITES_ENV_READY (+5 more)

### Community 22 - "utils.ts"
Cohesion: 0.16
Nodes (9): Checkbox(), Progress(), RadioGroup(), RadioGroupItem(), ScrollArea(), ScrollBar(), Slider(), Switch() (+1 more)

### Community 23 - "attachment.tsx"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 24 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 25 - "item.tsx"
Cohesion: 0.14
Nodes (16): ButtonGroupSeparator(), FieldSeparator(), Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup() (+8 more)

### Community 26 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 27 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 28 - "select.tsx"
Cohesion: 0.22
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 29 - "accordion.tsx"
Cohesion: 0.40
Nodes (3): AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 30 - "route.ts"
Cohesion: 0.33
Nodes (6): getDb(), GET(), POST(), toRouteErrorMessage(), notes, drizzle-orm

### Community 31 - "navigation-menu.tsx"
Cohesion: 0.24
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 32 - "LeadForm"
Cohesion: 0.25
Nodes (8): EnquiryPopup(), EnquiryPopupProps, LeadDetails, LeadForm(), openWhatsappDraft(), readDetails(), submit(), LeadFormProps

### Community 33 - "[slug]/page.tsx"
Cohesion: 0.18
Nodes (13): GET(), revalidate, GET(), revalidate, getSeoPage(), SeoPage, seoPages, getProductionUrl() (+5 more)

### Community 34 - "layout.tsx"
Cohesion: 0.22
Nodes (5): metadata, siteUrl, websiteSchema, nextConfig, next

### Community 35 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 36 - "popover.tsx"
Cohesion: 0.25
Nodes (4): PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 37 - "install-pnpm.sh"
Cohesion: 0.39
Nodes (7): acquire_shared_lock(), can_write_directory(), release_shared_lock(), report_store(), install-pnpm.sh script, XDG_CACHE_HOME, XDG_DATA_HOME

### Community 38 - "bubble.tsx"
Cohesion: 0.38
Nodes (6): Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 39 - "input-otp.tsx"
Cohesion: 0.33
Nodes (4): InputOTP(), InputOTPGroup(), InputOTPSlot(), input-otp

### Community 40 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 41 - "class-variance-authority"
Cohesion: 0.28
Nodes (7): Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, class-variance-authority

### Community 42 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 43 - "install-ci.sh"
Cohesion: 0.40
Nodes (4): NPM_CONFIG_FETCH_RETRIES, NPM_CONFIG_FETCH_TIMEOUT, NPM_CONFIG_MAXSOCKETS, install-ci.sh script

### Community 45 - "customer-reviews.tsx"
Cohesion: 0.24
Nodes (8): CustomerReview, CustomerReviews(), CustomerReviewsProps, customerRating, customerRatingSource, customerReviews, Marquee(), MarqueeProps

### Community 50 - "radix-ui"
Cohesion: 0.24
Nodes (4): ButtonGroup(), ButtonGroupText(), buttonGroupVariants, radix-ui

### Community 51 - "avatar.tsx"
Cohesion: 0.29
Nodes (6): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage()

### Community 52 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, graph:update, lint, start

### Community 53 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): ResizableHandle(), ResizablePanelGroup(), react-resizable-panels

### Community 56 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 57 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

### Community 60 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

## Knowledge Gaps
- **217 isolated node(s):** `Deployment and enquiries`, `Customer reviews`, `Token-free codebase updates`, `Prerequisites`, `Sites Lifecycle` (+212 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 292 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `field.tsx`, `combobox.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `lucide-react`, `Button`, `chart.tsx`, `utils.ts`, `attachment.tsx`, `drawer.tsx`, `item.tsx`, `sheet.tsx`, `toggle-group.tsx`, `select.tsx`, `accordion.tsx`, `navigation-menu.tsx`, `empty.tsx`, `popover.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `class-variance-authority`, `marker.tsx`, `customer-reviews.tsx`, `radix-ui`, `avatar.tsx`, `resizable.tsx`, `hover-card.tsx`?**
  _High betweenness centrality (0.276) - this node is a cross-community bridge._
- **Why does `react` connect `utils.ts` to `package.json`, `sidebar.tsx`, `cn`, `field.tsx`, `combobox.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `lucide-react`, `Button`, `chart.tsx`, `attachment.tsx`, `drawer.tsx`, `item.tsx`, `sheet.tsx`, `toggle-group.tsx`, `select.tsx`, `accordion.tsx`, `navigation-menu.tsx`, `LeadForm`, `popover.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `class-variance-authority`, `marker.tsx`, `customer-reviews.tsx`, `radix-ui`, `avatar.tsx`, `hover-card.tsx`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `package.json`, `sidebar.tsx`, `cn`, `combobox.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `Button`, `app/page.tsx`, `utils.ts`, `sheet.tsx`, `select.tsx`, `accordion.tsx`, `navigation-menu.tsx`, `LeadForm`, `[slug]/page.tsx`, `input-otp.tsx`, `resizable.tsx`, `sonner.tsx`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **What connects `Deployment and enquiries`, `Customer reviews`, `Token-free codebase updates` to the rest of the system?**
  _217 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07823613086770982 - nodes in this community are weakly interconnected._