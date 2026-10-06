# Graph Report - eshan-borewells  (2026-10-06)

## Corpus Check
- 133 files · ~487,484 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .css 3, (none) 2, .example 1)

## Summary
- 955 nodes · 1873 edges · 79 communities (61 shown, 18 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c9e3d40f`
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
- breadcrumb.tsx
- HomePage
- carousel.tsx
- get-quote/page.tsx
- chart.tsx
- sites-env.sh
- delivery.ts
- attachment.tsx
- drawer.tsx
- item.tsx
- sheet.tsx
- class-variance-authority
- select.tsx
- empty.tsx
- route.ts
- navigation-menu.tsx
- lucide-react
- [slug]/page.tsx
- layout.tsx
- dropdown-menu.tsx
- popover.tsx
- install-pnpm.sh
- bubble.tsx
- input-otp.tsx
- tabs.tsx
- alert.tsx
- marker.tsx
- install-ci.sh
- leads/route.ts
- app/page.tsx
- cloudflare-env.d.ts
- postcss.config.mjs
- build-verified.sh
- radix-ui
- config.ts
- scripts
- resizable.tsx
- alert-dialog.tsx
- sonner.tsx
- eslint.config.mjs
- connector-preview.d.ts
- quote-wizard.tsx
- calculate.ts
- overrides
- drizzle-kit
- engines
- ConnectorBinding
- ConnectorContent
- ConnectorContext
- ConnectorFailureStatus
- ConnectorResult
- Json
- message-scroller.tsx
- utils.ts
- Button
- pagination.tsx
- quote-pdf.ts
- api.test.ts
- input-group.tsx
- scroll-nav.tsx
- badge.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 329 edges
2. `react` - 61 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 34 edges
5. `Button()` - 26 edges
6. `compilerOptions` - 17 edges
7. `class-variance-authority` - 17 edges
8. `QuoteWizard()` - 13 edges
9. `Eshan Borewells website` - 13 edges
10. `getProductionUrl()` - 12 edges

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

## Communities (79 total, 18 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "package.json"
Cohesion: 0.07
Nodes (26): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, clsx, date-fns (+18 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.08
Nodes (34): InputGroupInput(), Input(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction() (+26 more)

### Community 3 - "cn"
Cohesion: 0.09
Nodes (33): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Card(), CardAction() (+25 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.11
Nodes (16): readExecutionProfile(), NpmCacheProgress, runNpmInstall(), CACHE_SEEDS, holdInstallLocks(), InstallProgress, main(), openLock() (+8 more)

### Community 5 - "field.tsx"
Cohesion: 0.10
Nodes (23): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+15 more)

### Community 6 - "dependencies"
Cohesion: 0.07
Nodes (27): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+19 more)

### Community 7 - "combobox.tsx"
Cohesion: 0.12
Nodes (17): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput() (+9 more)

### Community 8 - "command.tsx"
Cohesion: 0.15
Nodes (17): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+9 more)

### Community 9 - "Eshan Borewells website"
Cohesion: 0.07
Nodes (30): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+22 more)

### Community 10 - "devDependencies"
Cohesion: 0.09
Nodes (22): devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, json-rpc-2.0, raw-body (+14 more)

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

### Community 16 - "breadcrumb.tsx"
Cohesion: 0.25
Nodes (6): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator()

### Community 17 - "HomePage"
Cohesion: 0.31
Nodes (8): EnquiryPopup(), LeadForm(), openWhatsappDraft(), readDetails(), submit(), Brand(), ContactLink(), HomePage()

### Community 18 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+6 more)

### Community 19 - "get-quote/page.tsx"
Cohesion: 0.36
Nodes (5): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, WHATSAPP_NUMBER, metadata

### Community 20 - "chart.tsx"
Cohesion: 0.20
Nodes (13): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+5 more)

### Community 21 - "sites-env.sh"
Cohesion: 0.14
Nodes (13): HOME, MINIFLARE_REGISTRY_PATH, npm_config_audit, npm_config_cache, npm_config_fund, npm_config_update_notifier, sites-env.sh script, SITES_ENV_READY (+5 more)

### Community 22 - "delivery.ts"
Cohesion: 0.21
Nodes (17): GET(), maxDuration, runtime, headers, maxDuration, POST(), runtime, allowSubmission() (+9 more)

### Community 23 - "attachment.tsx"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 24 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 25 - "item.tsx"
Cohesion: 0.14
Nodes (17): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Item(), ItemActions(), ItemContent(), ItemDescription() (+9 more)

### Community 26 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 27 - "class-variance-authority"
Cohesion: 0.39
Nodes (6): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority

### Community 28 - "select.tsx"
Cohesion: 0.22
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 29 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 30 - "route.ts"
Cohesion: 0.33
Nodes (6): getDb(), GET(), POST(), toRouteErrorMessage(), notes, drizzle-orm

### Community 31 - "navigation-menu.tsx"
Cohesion: 0.24
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 32 - "lucide-react"
Cohesion: 0.20
Nodes (7): EnquiryPopupProps, LeadDetails, LeadFormProps, links, MobileMenu(), Spinner(), lucide-react

### Community 33 - "[slug]/page.tsx"
Cohesion: 0.18
Nodes (13): GET(), revalidate, GET(), revalidate, getSeoPage(), SeoPage, seoPages, getProductionUrl() (+5 more)

### Community 34 - "layout.tsx"
Cohesion: 0.33
Nodes (3): metadata, siteUrl, websiteSchema

### Community 35 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

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

### Community 41 - "alert.tsx"
Cohesion: 0.50
Nodes (4): Alert(), AlertDescription(), AlertTitle(), alertVariants

### Community 42 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 43 - "install-ci.sh"
Cohesion: 0.40
Nodes (4): NPM_CONFIG_FETCH_RETRIES, NPM_CONFIG_FETCH_TIMEOUT, NPM_CONFIG_MAXSOCKETS, install-ci.sh script

### Community 45 - "app/page.tsx"
Cohesion: 0.16
Nodes (14): CustomerReview, CustomerReviews(), CustomerReviewsProps, customerRating, customerRatingSource, customerReviews, areaGroups, questions (+6 more)

### Community 50 - "radix-ui"
Cohesion: 0.15
Nodes (3): Checkbox(), HoverCardContent(), radix-ui

### Community 51 - "config.ts"
Cohesion: 0.13
Nodes (19): casingDiameters, casingMaterials, diameterOptions, extras, fixedOperationalCosts, machineOptions, machinePricing, Pricing (+11 more)

### Community 52 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, graph:update, lint, start, test:quote

### Community 53 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): ResizableHandle(), ResizablePanelGroup(), react-resizable-panels

### Community 54 - "alert-dialog.tsx"
Cohesion: 0.18
Nodes (10): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay() (+2 more)

### Community 56 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 57 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

### Community 58 - "quote-wizard.tsx"
Cohesion: 0.15
Nodes (12): GetQuotePage(), Choices(), Props, QuoteWizard(), selectService(), update(), Result, SectionTitle() (+4 more)

### Community 59 - "calculate.ts"
Cohesion: 0.20
Nodes (16): calculateQuote(), CostLine, DrillingSlab, drillingSlabs(), formatRange(), Quote, quotePrice(), slabCost() (+8 more)

### Community 60 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

### Community 70 - "message-scroller.tsx"
Cohesion: 0.25
Nodes (6): MessageScroller(), MessageScrollerButton(), MessageScrollerContent(), MessageScrollerItem(), MessageScrollerViewport(), @shadcn/react

### Community 71 - "utils.ts"
Cohesion: 0.12
Nodes (11): AccordionContent(), AccordionItem(), AccordionTrigger(), Progress(), RadioGroup(), RadioGroupItem(), ScrollArea(), ScrollBar() (+3 more)

### Community 72 - "Button"
Cohesion: 0.38
Nodes (6): ConnectorError(), Button(), buttonVariants, Calendar(), CalendarDayButton(), react-day-picker

### Community 73 - "pagination.tsx"
Cohesion: 0.28
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 74 - "quote-pdf.ts"
Cohesion: 0.12
Nodes (18): downloadQuote(), imageData(), ink, line, muted, navy, PdfInput, renderQuotePdf() (+10 more)

### Community 76 - "input-group.tsx"
Cohesion: 0.43
Nodes (5): InputGroupAddon(), inputGroupAddonVariants, InputGroupText(), InputGroupTextarea(), Textarea()

## Knowledge Gaps
- **251 isolated node(s):** `PdfInput`, `navy`, `teal`, `ink`, `muted` (+246 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 333 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `field.tsx`, `combobox.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `breadcrumb.tsx`, `carousel.tsx`, `chart.tsx`, `attachment.tsx`, `drawer.tsx`, `item.tsx`, `sheet.tsx`, `class-variance-authority`, `select.tsx`, `empty.tsx`, `navigation-menu.tsx`, `lucide-react`, `dropdown-menu.tsx`, `popover.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `alert.tsx`, `marker.tsx`, `app/page.tsx`, `radix-ui`, `resizable.tsx`, `alert-dialog.tsx`, `message-scroller.tsx`, `utils.ts`, `Button`, `pagination.tsx`, `input-group.tsx`, `badge.tsx`?**
  _High betweenness centrality (0.212) - this node is a cross-community bridge._
- **Why does `react` connect `utils.ts` to `package.json`, `sidebar.tsx`, `cn`, `field.tsx`, `combobox.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `breadcrumb.tsx`, `carousel.tsx`, `chart.tsx`, `attachment.tsx`, `drawer.tsx`, `item.tsx`, `sheet.tsx`, `class-variance-authority`, `select.tsx`, `navigation-menu.tsx`, `lucide-react`, `dropdown-menu.tsx`, `popover.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `alert.tsx`, `marker.tsx`, `app/page.tsx`, `radix-ui`, `alert-dialog.tsx`, `quote-wizard.tsx`, `message-scroller.tsx`, `Button`, `pagination.tsx`, `quote-pdf.ts`, `input-group.tsx`, `scroll-nav.tsx`, `badge.tsx`?**
  _High betweenness centrality (0.202) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `package.json`, `sidebar.tsx`, `cn`, `combobox.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `breadcrumb.tsx`, `carousel.tsx`, `get-quote/page.tsx`, `sheet.tsx`, `select.tsx`, `navigation-menu.tsx`, `[slug]/page.tsx`, `dropdown-menu.tsx`, `input-otp.tsx`, `app/page.tsx`, `radix-ui`, `resizable.tsx`, `sonner.tsx`, `quote-wizard.tsx`, `message-scroller.tsx`, `utils.ts`, `Button`, `pagination.tsx`, `quote-pdf.ts`, `scroll-nav.tsx`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **What connects `PdfInput`, `navy`, `teal` to the rest of the system?**
  _251 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07557354925775979 - nodes in this community are weakly interconnected._