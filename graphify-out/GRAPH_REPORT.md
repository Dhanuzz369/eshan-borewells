# Graph Report - eshan-borewells  (2026-10-10)

## Corpus Check
- 133 files · ~487,434 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .css 3, (none) 2, .example 1)

## Summary
- 959 nodes · 1880 edges · 76 communities (56 shown, 20 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b7f14bbb`
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
- sheet.tsx
- context-menu.tsx
- accordion.tsx
- app/page.tsx
- Button
- get-quote/page.tsx
- chart.tsx
- sites-env.sh
- delivery.ts
- attachment.tsx
- drawer.tsx
- breadcrumb.tsx
- card.tsx
- class-variance-authority
- select.tsx
- empty.tsx
- route.ts
- navigation-menu.tsx
- lucide-react
- [slug]/page.tsx
- next
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
- customer-reviews.tsx
- cloudflare-env.d.ts
- postcss.config.mjs
- build-verified.sh
- config.ts
- scripts
- resizable.tsx
- hover-card.tsx
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
- badge.tsx
- utils.ts
- react
- scroll-area.tsx
- quote-pdf.ts
- api.test.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 329 edges
2. `react` - 61 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 34 edges
5. `Button()` - 26 edges
6. `compilerOptions` - 17 edges
7. `class-variance-authority` - 17 edges
8. `QuoteWizard()` - 14 edges
9. `Eshan Borewells website` - 13 edges
10. `getProductionUrl()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `SheetFooter()` --calls--> `cn()`  [EXTRACTED]
  components/ui/sheet.tsx → lib/utils.ts
- `ContextMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/context-menu.tsx → lib/utils.ts
- `ContextMenuContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/context-menu.tsx → lib/utils.ts
- `ContextMenuItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/context-menu.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (76 total, 20 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "package.json"
Cohesion: 0.08
Nodes (25): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, clsx, date-fns (+17 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.08
Nodes (34): InputGroupInput(), Input(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction() (+26 more)

### Community 3 - "cn"
Cohesion: 0.07
Nodes (39): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Kbd(), KbdGroup() (+31 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.11
Nodes (16): readExecutionProfile(), NpmCacheProgress, runNpmInstall(), CACHE_SEEDS, holdInstallLocks(), InstallProgress, main(), openLock() (+8 more)

### Community 5 - "field.tsx"
Cohesion: 0.06
Nodes (37): ButtonGroupSeparator(), Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend() (+29 more)

### Community 6 - "dependencies"
Cohesion: 0.07
Nodes (27): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+19 more)

### Community 7 - "combobox.tsx"
Cohesion: 0.11
Nodes (19): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput() (+11 more)

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

### Community 14 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 15 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 16 - "accordion.tsx"
Cohesion: 0.40
Nodes (3): AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 17 - "app/page.tsx"
Cohesion: 0.17
Nodes (13): links, MobileMenu(), areaGroups, Brand(), ContactLink(), HomePage(), questions, serviceAreas (+5 more)

### Community 18 - "Button"
Cohesion: 0.05
Nodes (43): ConnectorError(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+35 more)

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
Cohesion: 0.16
Nodes (23): GET(), maxDuration, runtime, headers, maxDuration, POST(), runtime, quotePrice() (+15 more)

### Community 23 - "attachment.tsx"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 24 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 25 - "breadcrumb.tsx"
Cohesion: 0.25
Nodes (6): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator()

### Community 26 - "card.tsx"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

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
Cohesion: 0.24
Nodes (9): EnquiryPopup(), EnquiryPopupProps, LeadDetails, LeadForm(), openWhatsappDraft(), readDetails(), submit(), LeadFormProps (+1 more)

### Community 33 - "[slug]/page.tsx"
Cohesion: 0.18
Nodes (13): GET(), revalidate, GET(), revalidate, getSeoPage(), SeoPage, seoPages, getProductionUrl() (+5 more)

### Community 34 - "next"
Cohesion: 0.22
Nodes (5): metadata, siteUrl, websiteSchema, nextConfig, next

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

### Community 45 - "customer-reviews.tsx"
Cohesion: 0.24
Nodes (8): CustomerReview, CustomerReviews(), CustomerReviewsProps, customerRating, customerRatingSource, customerReviews, Marquee(), MarqueeProps

### Community 51 - "config.ts"
Cohesion: 0.14
Nodes (18): casingDiameters, casingMaterials, diameterOptions, extras, fixedOperationalCosts, machineOptions, machinePricing, Pricing (+10 more)

### Community 52 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, graph:update, lint, start, test:quote

### Community 53 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): ResizableHandle(), ResizablePanelGroup(), react-resizable-panels

### Community 56 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 57 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

### Community 58 - "quote-wizard.tsx"
Cohesion: 0.14
Nodes (12): GetQuotePage(), Choices(), Props, QuoteWizard(), selectService(), update(), Result, SectionTitle() (+4 more)

### Community 59 - "calculate.ts"
Cohesion: 0.22
Nodes (13): calculateQuote(), CostLine, DrillingSlab, drillingSlabs(), Quote, slabCost(), drilling(), accessOptions (+5 more)

### Community 60 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

### Community 71 - "utils.ts"
Cohesion: 0.12
Nodes (10): ButtonGroup(), ButtonGroupText(), buttonGroupVariants, Checkbox(), Progress(), RadioGroup(), RadioGroupItem(), Slider() (+2 more)

### Community 72 - "react"
Cohesion: 0.43
Nodes (4): InputGroupText(), InputGroupTextarea(), Textarea(), react

### Community 74 - "quote-pdf.ts"
Cohesion: 0.15
Nodes (18): downloadQuote(), imageData(), ink, line, muted, navy, PdfInput, renderQuotePdf() (+10 more)

## Knowledge Gaps
- **252 isolated node(s):** `metadata`, `revalidate`, `links`, `services`, `areaGroups` (+247 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 335 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `field.tsx`, `combobox.tsx`, `command.tsx`, `sheet.tsx`, `context-menu.tsx`, `accordion.tsx`, `Button`, `chart.tsx`, `attachment.tsx`, `drawer.tsx`, `breadcrumb.tsx`, `card.tsx`, `class-variance-authority`, `select.tsx`, `empty.tsx`, `navigation-menu.tsx`, `dropdown-menu.tsx`, `popover.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `alert.tsx`, `marker.tsx`, `customer-reviews.tsx`, `resizable.tsx`, `hover-card.tsx`, `badge.tsx`, `utils.ts`, `react`, `scroll-area.tsx`?**
  _High betweenness centrality (0.210) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `package.json`, `sidebar.tsx`, `cn`, `field.tsx`, `combobox.tsx`, `command.tsx`, `sheet.tsx`, `context-menu.tsx`, `accordion.tsx`, `app/page.tsx`, `Button`, `chart.tsx`, `attachment.tsx`, `drawer.tsx`, `breadcrumb.tsx`, `card.tsx`, `class-variance-authority`, `select.tsx`, `navigation-menu.tsx`, `lucide-react`, `dropdown-menu.tsx`, `popover.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `alert.tsx`, `marker.tsx`, `customer-reviews.tsx`, `hover-card.tsx`, `quote-wizard.tsx`, `badge.tsx`, `utils.ts`, `scroll-area.tsx`, `quote-pdf.ts`?**
  _High betweenness centrality (0.203) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `package.json`, `sidebar.tsx`, `cn`, `combobox.tsx`, `command.tsx`, `sheet.tsx`, `context-menu.tsx`, `accordion.tsx`, `app/page.tsx`, `Button`, `get-quote/page.tsx`, `breadcrumb.tsx`, `select.tsx`, `navigation-menu.tsx`, `[slug]/page.tsx`, `dropdown-menu.tsx`, `input-otp.tsx`, `resizable.tsx`, `sonner.tsx`, `quote-wizard.tsx`, `utils.ts`, `quote-pdf.ts`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **What connects `metadata`, `revalidate`, `links` to the rest of the system?**
  _252 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07681365576102418 - nodes in this community are weakly interconnected._