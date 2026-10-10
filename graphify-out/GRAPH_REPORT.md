# Graph Report - eshan-borewells  (2026-10-10)

## Corpus Check
- 137 files · ~488,798 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .css 3, (none) 2, .example 1)

## Summary
- 983 nodes · 1920 edges · 80 communities (62 shown, 18 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `29b0dbf6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- connector-preview-session.mjs
- cn
- sidebar.tsx
- Eshan Borewells website
- pnpm-install.mjs
- delivery.ts
- dependencies
- form.tsx
- package.json
- calculate.ts
- combobox.tsx
- connector-context.ts
- config.ts
- command.tsx
- devDependencies
- breadcrumb.tsx
- compilerOptions
- quote-pdf.ts
- Button
- get-quote/page.tsx
- app/page.tsx
- components.json
- item.tsx
- menubar.tsx
- getProductionUrl
- context-menu.tsx
- dropdown-menu.tsx
- carousel.tsx
- lucide-react
- chart.tsx
- route.ts
- sites-env.sh
- alert-dialog.tsx
- [slug]/page.tsx
- next
- field.tsx
- radix-ui
- attachment.tsx
- drawer.tsx
- sheet.tsx
- customer-reviews.tsx
- select.tsx
- quote-wizard.tsx
- connector-preview.d.ts
- navigation-menu.tsx
- pagination.tsx
- scripts
- empty.tsx
- utils.ts
- message-scroller.tsx
- popover.tsx
- toggle-group.tsx
- install-pnpm.sh
- bubble.tsx
- input-otp.tsx
- tabs.tsx
- class-variance-authority
- marker.tsx
- resizable.tsx
- install-ci.sh
- leads/route.ts
- hover-card.tsx
- sonner.tsx
- eslint.config.mjs
- cloudflare-env.d.ts
- ConnectorBinding
- scroll-area.tsx
- overrides
- drizzle-kit
- engines
- postcss.config.mjs
- build-verified.sh
- ConnectorContent
- ConnectorContext
- api.test.ts
- ConnectorFailureStatus
- ConnectorResult
- Json

## God Nodes (most connected - your core abstractions)
1. `cn()` - 329 edges
2. `react` - 61 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 34 edges
5. `Button()` - 26 edges
6. `class-variance-authority` - 17 edges
7. `compilerOptions` - 17 edges
8. `QuoteWizard()` - 14 edges
9. `Eshan Borewells website` - 13 edges
10. `getProductionUrl()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Implemented changes` --references--> `BreadcrumbList()`  [INFERRED]
  SEO_IMPLEMENTATION_REPORT.md → components/ui/breadcrumb.tsx
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `AccordionContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/accordion.tsx → lib/utils.ts
- `AccordionItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/accordion.tsx → lib/utils.ts
- `AccordionTrigger()` --calls--> `cn()`  [EXTRACTED]
  components/ui/accordion.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (80 total, 18 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "cn"
Cohesion: 0.09
Nodes (33): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Card(), CardAction() (+25 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.08
Nodes (33): InputGroupInput(), Input(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction() (+25 more)

### Community 3 - "Eshan Borewells website"
Cohesion: 0.07
Nodes (30): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+22 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.11
Nodes (16): readExecutionProfile(), NpmCacheProgress, runNpmInstall(), CACHE_SEEDS, holdInstallLocks(), InstallProgress, main(), openLock() (+8 more)

### Community 5 - "delivery.ts"
Cohesion: 0.16
Nodes (22): GET(), maxDuration, runtime, headers, maxDuration, POST(), runtime, allowSubmission() (+14 more)

### Community 6 - "dependencies"
Cohesion: 0.07
Nodes (27): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+19 more)

### Community 7 - "form.tsx"
Cohesion: 0.18
Nodes (13): FieldLabel(), FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue (+5 more)

### Community 8 - "package.json"
Cohesion: 0.07
Nodes (26): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, clsx, cmdk (+18 more)

### Community 9 - "calculate.ts"
Cohesion: 0.17
Nodes (17): calculateQuote(), CostLine, DrillingSlab, drillingSlabs(), formatRange(), quotePrice(), slabCost(), drilling() (+9 more)

### Community 10 - "combobox.tsx"
Cohesion: 0.12
Nodes (18): ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput(), ComboboxItem() (+10 more)

### Community 11 - "connector-context.ts"
Cohesion: 0.36
Nodes (3): bindings, getConnectorBinding(), connectorsForRequest()

### Community 12 - "config.ts"
Cohesion: 0.16
Nodes (16): casingDiameters, casingMaterials, diameterOptions, fixedOperationalCosts, machineOptions, machinePricing, pumpCapacities, pumpTypes (+8 more)

### Community 13 - "command.tsx"
Cohesion: 0.16
Nodes (16): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+8 more)

### Community 14 - "devDependencies"
Cohesion: 0.09
Nodes (22): devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, json-rpc-2.0, raw-body (+14 more)

### Community 15 - "breadcrumb.tsx"
Cohesion: 0.10
Nodes (18): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), Baseline evidence, Days 31–60 (+10 more)

### Community 16 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 17 - "quote-pdf.ts"
Cohesion: 0.15
Nodes (16): downloadQuote(), imageData(), ink, line, muted, navy, PdfInput, renderQuotePdf() (+8 more)

### Community 18 - "Button"
Cohesion: 0.24
Nodes (9): ConnectorError(), AlertDialogAction(), AlertDialogCancel(), Button(), buttonVariants, Calendar(), CalendarDayButton(), ComboboxChip() (+1 more)

### Community 19 - "get-quote/page.tsx"
Cohesion: 0.36
Nodes (5): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, WHATSAPP_NUMBER, metadata

### Community 20 - "app/page.tsx"
Cohesion: 0.16
Nodes (14): links, MobileMenu(), areaGroups, Brand(), ContactLink(), HomePage(), indexableSeoPages, questions (+6 more)

### Community 21 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, registries, rsc (+9 more)

### Community 22 - "item.tsx"
Cohesion: 0.20
Nodes (11): Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup(), ItemHeader(), ItemMedia() (+3 more)

### Community 23 - "menubar.tsx"
Cohesion: 0.12
Nodes (12): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 24 - "getProductionUrl"
Cohesion: 0.22
Nodes (10): GET(), revalidate, GET(), revalidate, getIndexableSeoPages(), SeoPage, seoPages, getProductionUrl() (+2 more)

### Community 25 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 26 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 27 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+6 more)

### Community 28 - "lucide-react"
Cohesion: 0.20
Nodes (10): EnquiryPopup(), EnquiryPopupProps, LeadDetails, LeadForm(), openWhatsappDraft(), readDetails(), submit(), LeadFormProps (+2 more)

### Community 29 - "chart.tsx"
Cohesion: 0.20
Nodes (13): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+5 more)

### Community 30 - "route.ts"
Cohesion: 0.33
Nodes (6): getDb(), GET(), POST(), toRouteErrorMessage(), notes, drizzle-orm

### Community 31 - "sites-env.sh"
Cohesion: 0.14
Nodes (13): HOME, MINIFLARE_REGISTRY_PATH, npm_config_audit, npm_config_cache, npm_config_fund, npm_config_update_notifier, sites-env.sh script, SITES_ENV_READY (+5 more)

### Community 32 - "alert-dialog.tsx"
Cohesion: 0.22
Nodes (8): AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay(), AlertDialogPortal(), AlertDialogTitle()

### Community 33 - "[slug]/page.tsx"
Cohesion: 0.29
Nodes (8): getSeoPage(), generateMetadata(), PageProps, SeoLandingPage(), buildIndexablePageSchemas(), buildWebsiteSchema(), IndexablePage, siteOrigin()

### Community 34 - "next"
Cohesion: 0.22
Nodes (5): metadata, siteUrl, websiteSchema, nextConfig, next

### Community 35 - "field.tsx"
Cohesion: 0.13
Nodes (17): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Field(), FieldContent(), FieldDescription(), FieldError() (+9 more)

### Community 36 - "radix-ui"
Cohesion: 0.11
Nodes (6): AccordionContent(), AccordionItem(), AccordionTrigger(), RadioGroup(), RadioGroupItem(), radix-ui

### Community 37 - "attachment.tsx"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 38 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 39 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 40 - "customer-reviews.tsx"
Cohesion: 0.24
Nodes (8): CustomerReview, CustomerReviews(), CustomerReviewsProps, customerRating, customerRatingSource, customerReviews, Marquee(), MarqueeProps

### Community 41 - "select.tsx"
Cohesion: 0.22
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 42 - "quote-wizard.tsx"
Cohesion: 0.13
Nodes (13): GetQuotePage(), Choices(), Props, QuoteWizard(), selectService(), update(), Result, SectionTitle() (+5 more)

### Community 43 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

### Community 44 - "navigation-menu.tsx"
Cohesion: 0.24
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 45 - "pagination.tsx"
Cohesion: 0.28
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 46 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, build, dev, graph:update, lint, start, test, test:quote (+1 more)

### Community 47 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 48 - "utils.ts"
Cohesion: 0.20
Nodes (8): Checkbox(), InputGroupText(), InputGroupTextarea(), Progress(), Slider(), Switch(), Textarea(), react

### Community 49 - "message-scroller.tsx"
Cohesion: 0.25
Nodes (6): MessageScroller(), MessageScrollerButton(), MessageScrollerContent(), MessageScrollerItem(), MessageScrollerViewport(), @shadcn/react

### Community 50 - "popover.tsx"
Cohesion: 0.25
Nodes (4): PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 51 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 52 - "install-pnpm.sh"
Cohesion: 0.39
Nodes (7): acquire_shared_lock(), can_write_directory(), release_shared_lock(), report_store(), install-pnpm.sh script, XDG_CACHE_HOME, XDG_DATA_HOME

### Community 53 - "bubble.tsx"
Cohesion: 0.38
Nodes (6): Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 54 - "input-otp.tsx"
Cohesion: 0.33
Nodes (4): InputOTP(), InputOTPGroup(), InputOTPSlot(), input-otp

### Community 55 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 56 - "class-variance-authority"
Cohesion: 0.28
Nodes (7): Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, class-variance-authority

### Community 57 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 58 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): ResizableHandle(), ResizablePanelGroup(), react-resizable-panels

### Community 59 - "install-ci.sh"
Cohesion: 0.40
Nodes (4): NPM_CONFIG_FETCH_RETRIES, NPM_CONFIG_FETCH_TIMEOUT, NPM_CONFIG_MAXSOCKETS, install-ci.sh script

### Community 63 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 67 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

## Knowledge Gaps
- **265 isolated node(s):** `Executive summary`, `Baseline evidence`, `Keyword-to-page map`, `Local SEO and content priorities`, `First 30 days` (+260 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 349 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `form.tsx`, `combobox.tsx`, `command.tsx`, `breadcrumb.tsx`, `Button`, `item.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `lucide-react`, `chart.tsx`, `alert-dialog.tsx`, `field.tsx`, `radix-ui`, `attachment.tsx`, `drawer.tsx`, `sheet.tsx`, `customer-reviews.tsx`, `select.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `empty.tsx`, `utils.ts`, `message-scroller.tsx`, `popover.tsx`, `toggle-group.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `class-variance-authority`, `marker.tsx`, `resizable.tsx`, `hover-card.tsx`, `scroll-area.tsx`?**
  _High betweenness centrality (0.214) - this node is a cross-community bridge._
- **Why does `react` connect `utils.ts` to `cn`, `sidebar.tsx`, `form.tsx`, `package.json`, `combobox.tsx`, `command.tsx`, `breadcrumb.tsx`, `quote-pdf.ts`, `Button`, `app/page.tsx`, `item.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `lucide-react`, `chart.tsx`, `alert-dialog.tsx`, `field.tsx`, `radix-ui`, `attachment.tsx`, `drawer.tsx`, `sheet.tsx`, `customer-reviews.tsx`, `select.tsx`, `quote-wizard.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `message-scroller.tsx`, `popover.tsx`, `toggle-group.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `class-variance-authority`, `marker.tsx`, `hover-card.tsx`, `scroll-area.tsx`?**
  _High betweenness centrality (0.199) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `cn`, `sidebar.tsx`, `package.json`, `combobox.tsx`, `command.tsx`, `breadcrumb.tsx`, `quote-pdf.ts`, `Button`, `get-quote/page.tsx`, `app/page.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `[slug]/page.tsx`, `radix-ui`, `sheet.tsx`, `select.tsx`, `quote-wizard.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `utils.ts`, `message-scroller.tsx`, `input-otp.tsx`, `resizable.tsx`, `sonner.tsx`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **What connects `Executive summary`, `Baseline evidence`, `Keyword-to-page map` to the rest of the system?**
  _265 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0595959595959596 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.09446693657219973 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07957957957957958 - nodes in this community are weakly interconnected._