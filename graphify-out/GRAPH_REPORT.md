# Graph Report - eshan-borewells  (2026-10-10)

## Corpus Check
- 139 files · ~491,393 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .css 3, (none) 2, .example 1)

## Summary
- 1012 nodes · 1949 edges · 80 communities (61 shown, 19 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `babc16be`
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
- lucide-react
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
- [slug]/page.tsx
- context-menu.tsx
- dropdown-menu.tsx
- carousel.tsx
- LeadForm
- chart.tsx
- route.ts
- sites-env.sh
- alert-dialog.tsx
- layout.tsx
- sheet.tsx
- field.tsx
- attachment.tsx
- drawer.tsx
- customer-reviews.tsx
- react
- select.tsx
- quote-wizard.tsx
- connector-preview.d.ts
- navigation-menu.tsx
- class-variance-authority
- scripts
- empty.tsx
- utils.ts
- pagination.tsx
- popover.tsx
- toggle-group.tsx
- install-pnpm.sh
- bubble.tsx
- input-otp.tsx
- tabs.tsx
- message-scroller.tsx
- accordion.tsx
- marker.tsx
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
6. `compilerOptions` - 17 edges
7. `class-variance-authority` - 17 edges
8. `QuoteWizard()` - 14 edges
9. `Eshan Borewells website` - 13 edges
10. `getProductionUrl()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Task 6: Whole-project validation and graph refresh` --references--> `main()`  [INFERRED]
  docs/superpowers/plans/2026-10-10-evidence-first-geo-aeo.md → scripts/pnpm-install.mjs
- `Verified baseline` --references--> `BreadcrumbList()`  [INFERRED]
  docs/superpowers/specs/2026-10-10-geo-aeo-design.md → components/ui/breadcrumb.tsx
- `Implemented changes` --references--> `BreadcrumbList()`  [INFERRED]
  SEO_IMPLEMENTATION_REPORT.md → components/ui/breadcrumb.tsx
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  components/ui/breadcrumb.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (80 total, 19 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "cn"
Cohesion: 0.09
Nodes (33): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Card(), CardAction() (+25 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.08
Nodes (31): SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction(), SidebarGroupContent(), SidebarGroupLabel() (+23 more)

### Community 3 - "Eshan Borewells website"
Cohesion: 0.07
Nodes (30): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+22 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.07
Nodes (27): Evidence-First GEO + AEO Implementation Plan, File Structure, Global Constraints, Plan self-review, Review Focus, Task 1: Public business facts and stable entity schema, Task 2: Answer-first content and safe locality differentiation, Task 3: Accurate sitemap and discovery coverage (+19 more)

### Community 5 - "delivery.ts"
Cohesion: 0.16
Nodes (22): GET(), maxDuration, runtime, headers, maxDuration, POST(), runtime, allowSubmission() (+14 more)

### Community 6 - "dependencies"
Cohesion: 0.07
Nodes (27): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+19 more)

### Community 7 - "form.tsx"
Cohesion: 0.17
Nodes (13): FieldLabel(), FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue (+5 more)

### Community 8 - "package.json"
Cohesion: 0.08
Nodes (25): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, clsx, cmdk (+17 more)

### Community 9 - "calculate.ts"
Cohesion: 0.17
Nodes (17): calculateQuote(), CostLine, DrillingSlab, drillingSlabs(), formatRange(), quotePrice(), slabCost(), drilling() (+9 more)

### Community 10 - "combobox.tsx"
Cohesion: 0.11
Nodes (19): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput() (+11 more)

### Community 11 - "connector-context.ts"
Cohesion: 0.36
Nodes (3): bindings, getConnectorBinding(), connectorsForRequest()

### Community 12 - "config.ts"
Cohesion: 0.16
Nodes (16): casingDiameters, casingMaterials, diameterOptions, fixedOperationalCosts, machineOptions, machinePricing, pumpCapacities, pumpTypes (+8 more)

### Community 13 - "lucide-react"
Cohesion: 0.11
Nodes (20): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+12 more)

### Community 14 - "devDependencies"
Cohesion: 0.09
Nodes (22): devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, json-rpc-2.0, raw-body (+14 more)

### Community 15 - "breadcrumb.tsx"
Cohesion: 0.05
Nodes (34): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), 1. Explicit public-facts model, 2. Content model that differentiates service from locality intent (+26 more)

### Community 16 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 17 - "quote-pdf.ts"
Cohesion: 0.15
Nodes (16): downloadQuote(), imageData(), ink, line, muted, navy, PdfInput, renderQuotePdf() (+8 more)

### Community 18 - "Button"
Cohesion: 0.29
Nodes (8): ConnectorError(), AlertDialogAction(), Button(), buttonVariants, Calendar(), CalendarDayButton(), DialogFooter(), react-day-picker

### Community 19 - "get-quote/page.tsx"
Cohesion: 0.24
Nodes (7): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, WHATSAPP_NUMBER, metadata, nextConfig, next

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

### Community 24 - "[slug]/page.tsx"
Cohesion: 0.17
Nodes (14): GET(), revalidate, GET(), revalidate, getIndexableSeoPages(), getSeoPage(), SeoPage, seoPages (+6 more)

### Community 25 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 26 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 27 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+6 more)

### Community 28 - "LeadForm"
Cohesion: 0.25
Nodes (8): EnquiryPopup(), EnquiryPopupProps, LeadDetails, LeadForm(), openWhatsappDraft(), readDetails(), submit(), LeadFormProps

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
Cohesion: 0.20
Nodes (9): AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay(), AlertDialogPortal() (+1 more)

### Community 33 - "layout.tsx"
Cohesion: 0.24
Nodes (7): metadata, siteUrl, websiteSchema, buildIndexablePageSchemas(), buildWebsiteSchema(), IndexablePage, siteOrigin()

### Community 34 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 35 - "field.tsx"
Cohesion: 0.15
Nodes (14): ButtonGroupSeparator(), Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLegend(), FieldSeparator() (+6 more)

### Community 37 - "attachment.tsx"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 38 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 39 - "customer-reviews.tsx"
Cohesion: 0.24
Nodes (8): CustomerReview, CustomerReviews(), CustomerReviewsProps, customerRating, customerRatingSource, customerReviews, Marquee(), MarqueeProps

### Community 40 - "react"
Cohesion: 0.29
Nodes (6): InputGroupInput(), InputGroupText(), InputGroupTextarea(), Input(), Textarea(), react

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

### Community 45 - "class-variance-authority"
Cohesion: 0.28
Nodes (7): Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, class-variance-authority

### Community 46 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, build, dev, graph:update, lint, start, test, test:quote (+1 more)

### Community 47 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 48 - "utils.ts"
Cohesion: 0.13
Nodes (11): ButtonGroup(), ButtonGroupText(), buttonGroupVariants, Checkbox(), Progress(), RadioGroup(), RadioGroupItem(), Slider() (+3 more)

### Community 49 - "pagination.tsx"
Cohesion: 0.28
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

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

### Community 56 - "message-scroller.tsx"
Cohesion: 0.25
Nodes (6): MessageScroller(), MessageScrollerButton(), MessageScrollerContent(), MessageScrollerItem(), MessageScrollerViewport(), @shadcn/react

### Community 57 - "accordion.tsx"
Cohesion: 0.40
Nodes (3): AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 58 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

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
- **286 isolated node(s):** `Global Constraints`, `Review Focus`, `Task 1: Public business facts and stable entity schema`, `Task 2: Answer-first content and safe locality differentiation`, `Task 3: Accurate sitemap and discovery coverage` (+281 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 372 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `form.tsx`, `combobox.tsx`, `lucide-react`, `breadcrumb.tsx`, `Button`, `item.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `chart.tsx`, `alert-dialog.tsx`, `sheet.tsx`, `field.tsx`, `attachment.tsx`, `drawer.tsx`, `customer-reviews.tsx`, `react`, `select.tsx`, `navigation-menu.tsx`, `class-variance-authority`, `empty.tsx`, `utils.ts`, `pagination.tsx`, `popover.tsx`, `toggle-group.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `message-scroller.tsx`, `accordion.tsx`, `marker.tsx`, `hover-card.tsx`, `scroll-area.tsx`?**
  _High betweenness centrality (0.235) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `cn`, `sidebar.tsx`, `form.tsx`, `package.json`, `combobox.tsx`, `lucide-react`, `breadcrumb.tsx`, `quote-pdf.ts`, `Button`, `app/page.tsx`, `item.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `LeadForm`, `chart.tsx`, `alert-dialog.tsx`, `sheet.tsx`, `field.tsx`, `attachment.tsx`, `drawer.tsx`, `customer-reviews.tsx`, `select.tsx`, `quote-wizard.tsx`, `navigation-menu.tsx`, `class-variance-authority`, `utils.ts`, `pagination.tsx`, `popover.tsx`, `toggle-group.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`, `message-scroller.tsx`, `accordion.tsx`, `marker.tsx`, `hover-card.tsx`, `scroll-area.tsx`?**
  _High betweenness centrality (0.211) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `cn`, `sidebar.tsx`, `package.json`, `combobox.tsx`, `breadcrumb.tsx`, `quote-pdf.ts`, `Button`, `get-quote/page.tsx`, `app/page.tsx`, `menubar.tsx`, `[slug]/page.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `LeadForm`, `sheet.tsx`, `select.tsx`, `quote-wizard.tsx`, `navigation-menu.tsx`, `utils.ts`, `pagination.tsx`, `input-otp.tsx`, `message-scroller.tsx`, `accordion.tsx`, `sonner.tsx`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **What connects `Global Constraints`, `Review Focus`, `Task 1: Public business facts and stable entity schema` to the rest of the system?**
  _286 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.09446693657219973 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08403361344537816 - nodes in this community are weakly interconnected._