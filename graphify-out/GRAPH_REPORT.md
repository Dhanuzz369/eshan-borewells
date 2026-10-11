# Graph Report - eshan-borewells  (2026-10-11)

## Corpus Check
- 150 files · ~495,934 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .css 3, (none) 2, .example 1)

## Summary
- 1057 nodes · 2070 edges · 77 communities (60 shown, 17 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9e6c8370`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- connector-preview-session.mjs
- cn
- sidebar.tsx
- utils.ts
- pnpm-install.mjs
- Eshan Borewells GEO + AEO: Phase 2 design
- quote/schema.ts
- delivery.ts
- dependencies
- app/page.tsx
- package.json
- connector-context.ts
- combobox.tsx
- devDependencies
- command.tsx
- compilerOptions
- quote-pdf.ts
- field.tsx
- [slug]/page.tsx
- components.json
- class-variance-authority
- menubar.tsx
- calculate.ts
- context-menu.tsx
- dropdown-menu.tsx
- QuoteWizard
- business-config.ts
- carousel.tsx
- form.tsx
- getProductionUrl
- route.ts
- chart.tsx
- sites-env.sh
- item.tsx
- alert-dialog.tsx
- Eshan Borewells website
- Button
- pagination.tsx
- drawer.tsx
- lucide-react
- select.tsx
- chatgpt-auth.ts
- navigation-menu.tsx
- empty.tsx
- input-group.tsx
- V2 quote setup
- scripts
- connector-preview.d.ts
- message-scroller.tsx
- Eshan Borewells GEO/AEO implementation report
- ConnectorBinding
- install-pnpm.sh
- bubble.tsx
- input-otp.tsx
- ConnectorContent
- Search and AI visibility measurement log
- page-schema.ts
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
- ref_node_assert
- ConnectorFailureStatus
- ConnectorResult
- Json
- tabs.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 329 edges
2. `react` - 61 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 34 edges
5. `Button()` - 26 edges
6. `compilerOptions` - 17 edges
7. `class-variance-authority` - 17 edges
8. `QuoteWizard()` - 15 edges
9. `calculateQuote()` - 14 edges
10. `Eshan Borewells website` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Task 6: Whole-project validation and graph refresh` --references--> `main()`  [INFERRED]
  docs/superpowers/plans/2026-10-10-evidence-first-geo-aeo.md → scripts/pnpm-install.mjs
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `Verified baseline` --references--> `BreadcrumbList()`  [INFERRED]
  docs/superpowers/specs/2026-10-10-geo-aeo-design.md → components/ui/breadcrumb.tsx
- `Implemented changes` --references--> `BreadcrumbList()`  [INFERRED]
  SEO_IMPLEMENTATION_REPORT.md → components/ui/breadcrumb.tsx
- `Empty()` --calls--> `cn()`  [EXTRACTED]
  components/ui/empty.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (77 total, 17 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "cn"
Cohesion: 0.06
Nodes (49): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+41 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.07
Nodes (42): InputGroupInput(), Input(), Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay() (+34 more)

### Community 3 - "utils.ts"
Cohesion: 0.06
Nodes (28): AccordionContent(), AccordionItem(), AccordionTrigger(), ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Checkbox() (+20 more)

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.07
Nodes (28): homePage, Evidence-First GEO + AEO Implementation Plan, File Structure, Global Constraints, Plan self-review, Review Focus, Task 1: Public business facts and stable entity schema, Task 2: Answer-first content and safe locality differentiation (+20 more)

### Community 5 - "Eshan Borewells GEO + AEO: Phase 2 design"
Cohesion: 0.06
Nodes (29): BreadcrumbList(), 1. Explicit public-facts model, 2. Content model that differentiates service from locality intent, 3. Entity and structured-data alignment, 4. Crawl and discovery accuracy, 5. Safe technical hardening, 6. Measurement and evidence operations, Acceptance criteria (+21 more)

### Community 6 - "quote/schema.ts"
Cohesion: 0.14
Nodes (18): Props, Result, casingDiameters, casingMaterials, diameterOptions, extras, fixedOperationalCosts, localities (+10 more)

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
Nodes (24): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, date-fns, @hookform/resolvers (+16 more)

### Community 11 - "connector-context.ts"
Cohesion: 0.36
Nodes (3): bindings, getConnectorBinding(), connectorsForRequest()

### Community 12 - "combobox.tsx"
Cohesion: 0.13
Nodes (15): ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput(), ComboboxItem() (+7 more)

### Community 13 - "devDependencies"
Cohesion: 0.09
Nodes (22): devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, json-rpc-2.0, raw-body (+14 more)

### Community 14 - "command.tsx"
Cohesion: 0.15
Nodes (17): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+9 more)

### Community 15 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 16 - "quote-pdf.ts"
Cohesion: 0.16
Nodes (17): downloadQuote(), imageData(), ink, line, muted, navy, PdfInput, renderQuotePdf() (+9 more)

### Community 17 - "field.tsx"
Cohesion: 0.19
Nodes (11): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSet() (+3 more)

### Community 18 - "[slug]/page.tsx"
Cohesion: 0.18
Nodes (15): getRelatedSeoPages(), getSeoContent(), SeoContent, seoContentBySlug, getIndexableSeoPages(), getSeoPage(), SeoPage, seoPages (+7 more)

### Community 19 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, registries, rsc (+9 more)

### Community 20 - "class-variance-authority"
Cohesion: 0.13
Nodes (16): Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, Marker(), MarkerContent() (+8 more)

### Community 21 - "menubar.tsx"
Cohesion: 0.12
Nodes (12): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 22 - "calculate.ts"
Cohesion: 0.14
Nodes (23): calculateQuote(), CostLine, DrillingSlab, drillingSlabs(), Quote, quotePrice(), slabCost(), drilling() (+15 more)

### Community 23 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 24 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 25 - "QuoteWizard"
Cohesion: 0.25
Nodes (5): Choices(), QuoteWizard(), selectService(), update(), SectionTitle()

### Community 26 - "business-config.ts"
Cohesion: 0.18
Nodes (13): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, publicBusinessFacts, WHATSAPP_NUMBER, GetQuotePage(), metadata, PUBLIC_BUSINESS_DESCRIPTION (+5 more)

### Community 27 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+6 more)

### Community 28 - "form.tsx"
Cohesion: 0.21
Nodes (11): FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue, FormLabel() (+3 more)

### Community 29 - "getProductionUrl"
Cohesion: 0.20
Nodes (8): metadata, siteUrl, websiteSchema, GET(), revalidate, GET(), revalidate, getProductionUrl()

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
Cohesion: 0.20
Nodes (11): Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup(), ItemHeader(), ItemMedia() (+3 more)

### Community 34 - "alert-dialog.tsx"
Cohesion: 0.18
Nodes (10): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay() (+2 more)

### Community 35 - "Eshan Borewells website"
Cohesion: 0.15
Nodes (13): Customer reviews, Deployment and enquiries, Diagnostic Commands, Eshan Borewells website, Evidence-first SEO / GEO / AEO, Included Shape, Learn More, Local D1 migrations (+5 more)

### Community 36 - "Button"
Cohesion: 0.33
Nodes (7): ConnectorError(), Button(), buttonVariants, Calendar(), CalendarDayButton(), ComboboxChip(), react-day-picker

### Community 37 - "pagination.tsx"
Cohesion: 0.28
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 38 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 39 - "lucide-react"
Cohesion: 0.13
Nodes (13): EnquiryPopup(), EnquiryPopupProps, LeadDetails, LeadForm(), openWhatsappDraft(), readDetails(), submit(), LeadFormProps (+5 more)

### Community 40 - "select.tsx"
Cohesion: 0.22
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 41 - "chatgpt-auth.ts"
Cohesion: 0.33
Nodes (9): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+1 more)

### Community 42 - "navigation-menu.tsx"
Cohesion: 0.24
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 43 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 44 - "input-group.tsx"
Cohesion: 0.36
Nodes (6): InputGroupAddon(), inputGroupAddonVariants, inputGroupButtonVariants, InputGroupText(), InputGroupTextarea(), Textarea()

### Community 45 - "V2 quote setup"
Cohesion: 0.22
Nodes (9): 1. Google Sheet, 2. Apps Script, 3. Durable capture and IDs, 4. Automatic delivery retries, 5. Test before launch, 6. Export and credentials, Architecture, Rate changes (+1 more)

### Community 46 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, build, dev, graph:update, lint, start, test, test:quote (+1 more)

### Community 47 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

### Community 48 - "message-scroller.tsx"
Cohesion: 0.25
Nodes (6): MessageScroller(), MessageScrollerButton(), MessageScrollerContent(), MessageScrollerItem(), MessageScrollerViewport(), @shadcn/react

### Community 49 - "Eshan Borewells GEO/AEO implementation report"
Cohesion: 0.25
Nodes (8): 30/60/90-day follow-through, Eshan Borewells GEO/AEO implementation report, Executive summary, Implemented changes, Public baseline and evidence, Remaining owner evidence and limitations, Search intent and answer map, Validation status

### Community 51 - "install-pnpm.sh"
Cohesion: 0.39
Nodes (7): acquire_shared_lock(), can_write_directory(), release_shared_lock(), report_store(), install-pnpm.sh script, XDG_CACHE_HOME, XDG_DATA_HOME

### Community 52 - "bubble.tsx"
Cohesion: 0.38
Nodes (6): Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 53 - "input-otp.tsx"
Cohesion: 0.33
Nodes (4): InputOTP(), InputOTPGroup(), InputOTPSlot(), input-otp

### Community 55 - "Search and AI visibility measurement log"
Cohesion: 0.33
Nodes (6): Fixed query set, Interpretation guardrails, Observation fields, Round log, Search and AI visibility measurement log, Search Console / analytics baseline

### Community 56 - "page-schema.ts"
Cohesion: 0.54
Nodes (6): buildHomePageSchema(), buildIndexablePageSchemas(), buildLocalBusinessSchema(), buildWebsiteSchema(), IndexablePage, siteOrigin()

### Community 57 - "install-ci.sh"
Cohesion: 0.40
Nodes (4): NPM_CONFIG_FETCH_RETRIES, NPM_CONFIG_FETCH_TIMEOUT, NPM_CONFIG_MAXSOCKETS, install-ci.sh script

### Community 62 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 64 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

### Community 70 - "ref_node_assert"
Cohesion: 0.28
Nodes (3): initialInput, nextConfig, next

### Community 75 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

## Knowledge Gaps
- **301 isolated node(s):** `Result`, `Props`, `payload`, `DrillingConfiguration`, `decision` (+296 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 388 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `utils.ts`, `Eshan Borewells GEO + AEO: Phase 2 design`, `app/page.tsx`, `combobox.tsx`, `command.tsx`, `field.tsx`, `class-variance-authority`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `form.tsx`, `chart.tsx`, `item.tsx`, `alert-dialog.tsx`, `Button`, `pagination.tsx`, `drawer.tsx`, `lucide-react`, `select.tsx`, `navigation-menu.tsx`, `empty.tsx`, `input-group.tsx`, `message-scroller.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`?**
  _High betweenness centrality (0.219) - this node is a cross-community bridge._
- **Why does `react` connect `utils.ts` to `cn`, `sidebar.tsx`, `quote/schema.ts`, `app/page.tsx`, `package.json`, `combobox.tsx`, `command.tsx`, `quote-pdf.ts`, `field.tsx`, `class-variance-authority`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `form.tsx`, `chart.tsx`, `item.tsx`, `alert-dialog.tsx`, `Button`, `pagination.tsx`, `drawer.tsx`, `lucide-react`, `select.tsx`, `navigation-menu.tsx`, `input-group.tsx`, `message-scroller.tsx`, `bubble.tsx`, `input-otp.tsx`, `tabs.tsx`?**
  _High betweenness centrality (0.196) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `cn`, `sidebar.tsx`, `utils.ts`, `quote/schema.ts`, `app/page.tsx`, `package.json`, `combobox.tsx`, `command.tsx`, `quote-pdf.ts`, `[slug]/page.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `business-config.ts`, `carousel.tsx`, `Button`, `pagination.tsx`, `select.tsx`, `navigation-menu.tsx`, `message-scroller.tsx`, `input-otp.tsx`, `sonner.tsx`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **What connects `Result`, `Props`, `payload` to the rest of the system?**
  _301 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.06352087114337568 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0653061224489796 - nodes in this community are weakly interconnected._