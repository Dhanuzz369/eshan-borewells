# Graph Report - eshan-borewells  (2026-10-21)

## Corpus Check
- 156 files · ~498,874 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .css 3, (none) 2, .ttf 2)

## Summary
- 1092 nodes · 2186 edges · 81 communities (65 shown, 16 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f4d12ab4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- connector-preview-session.mjs
- cn
- sidebar.tsx
- react
- pnpm-install.mjs
- Eshan Borewells GEO + AEO: Phase 2 design
- config.ts
- delivery.ts
- dependencies
- app/page.tsx
- package.json
- connector-context.ts
- combobox.tsx
- devDependencies
- lucide-react
- compilerOptions
- quote-wizard.tsx
- field.tsx
- getProductionUrl
- components.json
- quote-pdf.ts
- menubar.tsx
- calculate.ts
- context-menu.tsx
- attachment.tsx
- business-config.ts
- empty.tsx
- carousel.tsx
- [slug]/page.tsx
- marker.tsx
- route.ts
- chart.tsx
- sites-env.sh
- item.tsx
- alert-dialog.tsx
- Eshan Borewells website
- renderInternalPdf
- Button
- drawer.tsx
- form.tsx
- select.tsx
- chatgpt-auth.ts
- navigation-menu.tsx
- class-variance-authority
- popover.tsx
- V2 quote setup
- scripts
- connector-preview.d.ts
- alert.tsx
- Eshan Borewells GEO/AEO implementation report
- ConnectorBinding
- install-pnpm.sh
- bubble.tsx
- radix-ui
- ConnectorContent
- Search and AI visibility measurement log
- dropdown-menu.tsx
- install-ci.sh
- leads/route.ts
- ConnectorContext
- sonner.tsx
- eslint.config.mjs
- cloudflare-env.d.ts
- overrides
- drizzle-kit
- engines
- postcss.config.mjs
- build-verified.sh
- internal-document.test.ts
- ConnectorFailureStatus
- ConnectorResult
- Json
- tabs.tsx
- ref_node_assert
- LeadForm
- button-group.tsx
- internal-result.tsx
- page-schema.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 329 edges
2. `react` - 63 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 35 edges
5. `Button()` - 26 edges
6. `QuoteWizard()` - 21 edges
7. `formatRange()` - 17 edges
8. `compilerOptions` - 17 edges
9. `class-variance-authority` - 17 edges
10. `calculateQuote()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Task 6: Whole-project validation and graph refresh` --references--> `main()`  [INFERRED]
  docs/superpowers/plans/2026-10-10-evidence-first-geo-aeo.md → scripts/pnpm-install.mjs
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `Verified baseline` --references--> `BreadcrumbList()`  [INFERRED]
  docs/superpowers/specs/2026-10-10-geo-aeo-design.md → components/ui/breadcrumb.tsx
- `Implemented changes` --references--> `BreadcrumbList()`  [INFERRED]
  SEO_IMPLEMENTATION_REPORT.md → components/ui/breadcrumb.tsx
- `AccordionContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/accordion.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (81 total, 16 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "cn"
Cohesion: 0.07
Nodes (40): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), BreadcrumbEllipsis(), BreadcrumbItem() (+32 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.07
Nodes (40): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+32 more)

### Community 3 - "react"
Cohesion: 0.07
Nodes (24): AccordionContent(), AccordionItem(), AccordionTrigger(), Checkbox(), HoverCardContent(), InputGroupInput(), InputGroupText(), InputGroupTextarea() (+16 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.07
Nodes (27): Evidence-First GEO + AEO Implementation Plan, File Structure, Global Constraints, Plan self-review, Review Focus, Task 1: Public business facts and stable entity schema, Task 2: Answer-first content and safe locality differentiation, Task 3: Accurate sitemap and discovery coverage (+19 more)

### Community 5 - "Eshan Borewells GEO + AEO: Phase 2 design"
Cohesion: 0.06
Nodes (29): BreadcrumbList(), 1. Explicit public-facts model, 2. Content model that differentiates service from locality intent, 3. Entity and structured-data alignment, 4. Crawl and discovery accuracy, 5. Safe technical hardening, 6. Measurement and evidence operations, Acceptance criteria (+21 more)

### Community 6 - "config.ts"
Cohesion: 0.14
Nodes (20): accessOptions, casingDiameters, casingMaterials, diameterOptions, fixedOperationalCosts, localities, machineOptions, machinePricing (+12 more)

### Community 7 - "delivery.ts"
Cohesion: 0.15
Nodes (23): GET(), maxDuration, runtime, headers, maxDuration, POST(), runtime, payload (+15 more)

### Community 8 - "dependencies"
Cohesion: 0.07
Nodes (27): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+19 more)

### Community 9 - "app/page.tsx"
Cohesion: 0.11
Nodes (21): CustomerReview, CustomerReviews(), CustomerReviewsProps, customerRating, customerRatingSource, customerReviews, links, MobileMenu() (+13 more)

### Community 10 - "package.json"
Cohesion: 0.08
Nodes (24): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, cmdk, date-fns (+16 more)

### Community 11 - "connector-context.ts"
Cohesion: 0.36
Nodes (3): bindings, getConnectorBinding(), connectorsForRequest()

### Community 12 - "combobox.tsx"
Cohesion: 0.11
Nodes (19): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput() (+11 more)

### Community 13 - "devDependencies"
Cohesion: 0.09
Nodes (22): devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, json-rpc-2.0, raw-body (+14 more)

### Community 14 - "lucide-react"
Cohesion: 0.10
Nodes (20): ConnectorError(), Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+12 more)

### Community 15 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 16 - "quote-wizard.tsx"
Cohesion: 0.19
Nodes (21): MaterialQuantities(), Props, Props, QuoteWizard(), scrollTop(), submit(), SectionTitle(), formatRange() (+13 more)

### Community 17 - "field.tsx"
Cohesion: 0.19
Nodes (11): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSet() (+3 more)

### Community 18 - "getProductionUrl"
Cohesion: 0.23
Nodes (9): GET(), revalidate, GET(), revalidate, getProductionUrl(), GET(), revalidate, buildSitemapXml() (+1 more)

### Community 19 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, registries, rsc (+9 more)

### Community 20 - "quote-pdf.ts"
Cohesion: 0.17
Nodes (14): downloadQuote(), imageData(), ink, line, muted, navy, PdfInput, renderQuotePdf() (+6 more)

### Community 21 - "menubar.tsx"
Cohesion: 0.12
Nodes (12): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 22 - "calculate.ts"
Cohesion: 0.13
Nodes (20): calculateQuote(), CostLine, DrillingSlab, drillingSlabs(), Quote, slabCost(), drilling(), extras (+12 more)

### Community 23 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 24 - "attachment.tsx"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 25 - "business-config.ts"
Cohesion: 0.16
Nodes (15): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, publicBusinessFacts, WHATSAPP_NUMBER, EstimateQuoteGeneratorPage(), metadata, GetQuotePage() (+7 more)

### Community 26 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 27 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+6 more)

### Community 28 - "[slug]/page.tsx"
Cohesion: 0.29
Nodes (10): getRelatedSeoPages(), getSeoContent(), SeoContent, seoContentBySlug, getSeoPage(), SeoPage, seoPages, generateMetadata() (+2 more)

### Community 29 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 30 - "route.ts"
Cohesion: 0.33
Nodes (6): getDb(), GET(), POST(), toRouteErrorMessage(), notes, drizzle-orm

### Community 31 - "chart.tsx"
Cohesion: 0.20
Nodes (13): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+5 more)

### Community 32 - "sites-env.sh"
Cohesion: 0.14
Nodes (13): HOME, MINIFLARE_REGISTRY_PATH, npm_config_audit, npm_config_cache, npm_config_fund, npm_config_update_notifier, sites-env.sh script, SITES_ENV_READY (+5 more)

### Community 33 - "item.tsx"
Cohesion: 0.18
Nodes (12): Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup(), ItemHeader(), ItemMedia() (+4 more)

### Community 34 - "alert-dialog.tsx"
Cohesion: 0.18
Nodes (10): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay() (+2 more)

### Community 35 - "Eshan Borewells website"
Cohesion: 0.15
Nodes (13): Customer reviews, Deployment and enquiries, Diagnostic Commands, Eshan Borewells website, Evidence-first SEO / GEO / AEO, Included Shape, Learn More, Local D1 migrations (+5 more)

### Community 36 - "renderInternalPdf"
Cohesion: 0.52
Nodes (7): renderInternalPdf(), ensure(), header(), paragraph(), row(), section(), summary()

### Community 37 - "Button"
Cohesion: 0.12
Nodes (19): Button(), buttonVariants, Calendar(), CalendarDayButton(), DialogFooter(), MessageScroller(), MessageScrollerButton(), MessageScrollerContent() (+11 more)

### Community 38 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 39 - "form.tsx"
Cohesion: 0.21
Nodes (11): FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue, FormLabel() (+3 more)

### Community 40 - "select.tsx"
Cohesion: 0.22
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 41 - "chatgpt-auth.ts"
Cohesion: 0.33
Nodes (9): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+1 more)

### Community 42 - "navigation-menu.tsx"
Cohesion: 0.24
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 43 - "class-variance-authority"
Cohesion: 0.39
Nodes (6): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority

### Community 44 - "popover.tsx"
Cohesion: 0.25
Nodes (4): PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 45 - "V2 quote setup"
Cohesion: 0.22
Nodes (9): 1. Google Sheet, 2. Apps Script, 3. Durable capture and IDs, 4. Automatic delivery retries, 5. Test before launch, 6. Export and credentials, Architecture, Rate changes (+1 more)

### Community 46 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, build, dev, graph:update, lint, start, test, test:quote (+1 more)

### Community 47 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

### Community 48 - "alert.tsx"
Cohesion: 0.50
Nodes (4): Alert(), AlertDescription(), AlertTitle(), alertVariants

### Community 49 - "Eshan Borewells GEO/AEO implementation report"
Cohesion: 0.25
Nodes (8): 30/60/90-day follow-through, Eshan Borewells GEO/AEO implementation report, Executive summary, Implemented changes, Public baseline and evidence, Remaining owner evidence and limitations, Search intent and answer map, Validation status

### Community 51 - "install-pnpm.sh"
Cohesion: 0.39
Nodes (7): acquire_shared_lock(), can_write_directory(), release_shared_lock(), report_store(), install-pnpm.sh script, XDG_CACHE_HOME, XDG_DATA_HOME

### Community 52 - "bubble.tsx"
Cohesion: 0.38
Nodes (6): Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 53 - "radix-ui"
Cohesion: 0.18
Nodes (3): Badge(), badgeVariants, radix-ui

### Community 55 - "Search and AI visibility measurement log"
Cohesion: 0.33
Nodes (6): Fixed query set, Interpretation guardrails, Observation fields, Round log, Search and AI visibility measurement log, Search Console / analytics baseline

### Community 56 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 57 - "install-ci.sh"
Cohesion: 0.40
Nodes (4): NPM_CONFIG_FETCH_RETRIES, NPM_CONFIG_FETCH_TIMEOUT, NPM_CONFIG_MAXSOCKETS, install-ci.sh script

### Community 62 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 64 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

### Community 70 - "internal-document.test.ts"
Cohesion: 0.33
Nodes (3): input, quote, initialInput

### Community 75 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 76 - "ref_node_assert"
Cohesion: 0.27
Nodes (4): homePage, getIndexableSeoPages(), nextConfig, next

### Community 77 - "LeadForm"
Cohesion: 0.25
Nodes (8): EnquiryPopup(), EnquiryPopupProps, LeadDetails, LeadForm(), openWhatsappDraft(), readDetails(), submit(), LeadFormProps

### Community 78 - "button-group.tsx"
Cohesion: 0.36
Nodes (6): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, FieldSeparator(), Separator()

### Community 79 - "internal-result.tsx"
Cohesion: 0.27
Nodes (8): downloadInternalPdf(), Props, InternalResult(), download(), Props, Table(), InternalDocument, jspdf

### Community 80 - "page-schema.ts"
Cohesion: 0.24
Nodes (9): metadata, siteUrl, websiteSchema, buildHomePageSchema(), buildIndexablePageSchemas(), buildLocalBusinessSchema(), buildWebsiteSchema(), IndexablePage (+1 more)

## Knowledge Gaps
- **308 isolated node(s):** `machinePricing`, `fixedOperationalCosts`, `sensorFixedOperationalCosts`, `input`, `quote` (+303 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 393 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `react`, `Eshan Borewells GEO + AEO: Phase 2 design`, `app/page.tsx`, `combobox.tsx`, `lucide-react`, `field.tsx`, `menubar.tsx`, `context-menu.tsx`, `attachment.tsx`, `empty.tsx`, `carousel.tsx`, `marker.tsx`, `chart.tsx`, `item.tsx`, `alert-dialog.tsx`, `Button`, `drawer.tsx`, `form.tsx`, `select.tsx`, `navigation-menu.tsx`, `class-variance-authority`, `popover.tsx`, `alert.tsx`, `bubble.tsx`, `radix-ui`, `dropdown-menu.tsx`, `tabs.tsx`, `button-group.tsx`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `cn`, `sidebar.tsx`, `app/page.tsx`, `package.json`, `combobox.tsx`, `lucide-react`, `quote-wizard.tsx`, `field.tsx`, `quote-pdf.ts`, `menubar.tsx`, `context-menu.tsx`, `attachment.tsx`, `carousel.tsx`, `marker.tsx`, `chart.tsx`, `item.tsx`, `alert-dialog.tsx`, `Button`, `drawer.tsx`, `form.tsx`, `select.tsx`, `navigation-menu.tsx`, `class-variance-authority`, `popover.tsx`, `alert.tsx`, `bubble.tsx`, `radix-ui`, `dropdown-menu.tsx`, `tabs.tsx`, `LeadForm`, `button-group.tsx`, `internal-result.tsx`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `cn`, `sidebar.tsx`, `react`, `app/page.tsx`, `package.json`, `combobox.tsx`, `quote-wizard.tsx`, `quote-pdf.ts`, `menubar.tsx`, `context-menu.tsx`, `business-config.ts`, `carousel.tsx`, `[slug]/page.tsx`, `Button`, `select.tsx`, `navigation-menu.tsx`, `dropdown-menu.tsx`, `sonner.tsx`, `LeadForm`, `internal-result.tsx`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **What connects `machinePricing`, `fixedOperationalCosts`, `sensorFixedOperationalCosts` to the rest of the system?**
  _308 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.07397959183673469 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06938020351526364 - nodes in this community are weakly interconnected._