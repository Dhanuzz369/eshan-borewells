# Graph Report - eshan-borewells  (2026-09-30)

## Corpus Check
- 110 files · ~407,951 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .example 1)

## Summary
- 802 nodes · 1521 edges · 65 communities (48 shown, 17 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e719b45e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- connector-preview-session.mjs
- page.tsx
- sidebar.tsx
- class-variance-authority
- pnpm-install.mjs
- cn
- combobox.tsx
- package.json
- form.tsx
- dependencies
- devDependencies
- connector-context.ts
- compilerOptions
- components.json
- menubar.tsx
- context-menu.tsx
- dropdown-menu.tsx
- Eshan Borewells website
- Button
- chart.tsx
- sites-env.sh
- field.tsx
- attachment.tsx
- drawer.tsx
- item.tsx
- sheet.tsx
- react
- select.tsx
- navigation-menu.tsx
- utils.ts
- route.ts
- input-group.tsx
- bubble.tsx
- card.tsx
- empty.tsx
- popover.tsx
- install-pnpm.sh
- tabs.tsx
- lucide-react
- scripts
- accordion.tsx
- resizable.tsx
- alert.tsx
- install-ci.sh
- leads/route.ts
- marker.tsx
- hover-card.tsx
- sonner.tsx
- eslint.config.mjs
- cloudflare-env.d.ts
- scroll-area.tsx
- overrides
- drizzle-kit
- engines
- postcss.config.mjs
- build-verified.sh
- connector-preview.d.ts
- ConnectorBinding
- ConnectorContent
- ConnectorContext
- ConnectorFailureStatus
- ConnectorResult
- Json

## God Nodes (most connected - your core abstractions)
1. `cn()` - 327 edges
2. `react` - 58 edges
3. `radix-ui` - 38 edges
4. `lucide-react` - 30 edges
5. `Button()` - 26 edges
6. `compilerOptions` - 17 edges
7. `class-variance-authority` - 17 edges
8. `Eshan Borewells website` - 11 edges
9. `Separator()` - 10 edges
10. `LeadForm()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Optional Dispatch-Owned ChatGPT Sign-In` --references--> `getChatGPTUser()`  [INFERRED]
  README.md → app/chatgpt-auth.ts
- `Checkbox()` --calls--> `cn()`  [EXTRACTED]
  components/ui/checkbox.tsx → lib/utils.ts
- `CommandGroup()` --calls--> `cn()`  [EXTRACTED]
  components/ui/command.tsx → lib/utils.ts
- `CommandInput()` --calls--> `cn()`  [EXTRACTED]
  components/ui/command.tsx → lib/utils.ts
- `CommandItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/command.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (65 total, 17 thin omitted)

### Community 0 - "connector-preview-session.mjs"
Cohesion: 0.06
Nodes (33): json-rpc-2.0, raw-body, zod, active, binding, close(), descriptor, directory (+25 more)

### Community 1 - "page.tsx"
Cohesion: 0.11
Nodes (24): BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, WHATSAPP_NUMBER, EnquiryPopup(), EnquiryPopupProps, LeadDetails, LeadForm() (+16 more)

### Community 2 - "sidebar.tsx"
Cohesion: 0.08
Nodes (31): SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction(), SidebarGroupContent(), SidebarGroupLabel() (+23 more)

### Community 3 - "class-variance-authority"
Cohesion: 0.39
Nodes (6): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority

### Community 4 - "pnpm-install.mjs"
Cohesion: 0.11
Nodes (16): readExecutionProfile(), NpmCacheProgress, runNpmInstall(), CACHE_SEEDS, holdInstallLocks(), InstallProgress, main(), openLock() (+8 more)

### Community 5 - "cn"
Cohesion: 0.09
Nodes (32): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), BreadcrumbEllipsis(), BreadcrumbItem() (+24 more)

### Community 6 - "combobox.tsx"
Cohesion: 0.12
Nodes (18): ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput(), ComboboxItem() (+10 more)

### Community 7 - "package.json"
Cohesion: 0.08
Nodes (25): name, private, type, version, @cloudflare/vite-plugin, @cloudflare/workers-types, clsx, cmdk (+17 more)

### Community 8 - "form.tsx"
Cohesion: 0.17
Nodes (13): FieldLabel(), FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue (+5 more)

### Community 9 - "dependencies"
Cohesion: 0.08
Nodes (25): dependencies, @base-ui/react, class-variance-authority, clsx, cmdk, date-fns, drizzle-orm, embla-carousel-react (+17 more)

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

### Community 17 - "Eshan Borewells website"
Cohesion: 0.07
Nodes (28): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath() (+20 more)

### Community 18 - "Button"
Cohesion: 0.05
Nodes (45): ConnectorError(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+37 more)

### Community 19 - "chart.tsx"
Cohesion: 0.20
Nodes (13): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+5 more)

### Community 20 - "sites-env.sh"
Cohesion: 0.14
Nodes (13): HOME, MINIFLARE_REGISTRY_PATH, npm_config_audit, npm_config_cache, npm_config_fund, npm_config_update_notifier, sites-env.sh script, SITES_ENV_READY (+5 more)

### Community 21 - "field.tsx"
Cohesion: 0.15
Nodes (14): ButtonGroupSeparator(), Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLegend(), FieldSeparator() (+6 more)

### Community 22 - "attachment.tsx"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 23 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle(), vaul

### Community 24 - "item.tsx"
Cohesion: 0.20
Nodes (11): Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup(), ItemHeader(), ItemMedia() (+3 more)

### Community 25 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 26 - "react"
Cohesion: 0.12
Nodes (8): Badge(), badgeVariants, Checkbox(), Progress(), Slider(), Switch(), radix-ui, react

### Community 27 - "select.tsx"
Cohesion: 0.22
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 28 - "navigation-menu.tsx"
Cohesion: 0.24
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 29 - "utils.ts"
Cohesion: 0.28
Nodes (5): ButtonGroup(), ButtonGroupText(), buttonGroupVariants, RadioGroup(), RadioGroupItem()

### Community 30 - "route.ts"
Cohesion: 0.33
Nodes (6): getDb(), GET(), POST(), toRouteErrorMessage(), notes, drizzle-orm

### Community 31 - "input-group.tsx"
Cohesion: 0.39
Nodes (5): InputGroupInput(), InputGroupText(), InputGroupTextarea(), Input(), Textarea()

### Community 32 - "bubble.tsx"
Cohesion: 0.38
Nodes (6): Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 33 - "card.tsx"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

### Community 34 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 35 - "popover.tsx"
Cohesion: 0.25
Nodes (4): PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 36 - "install-pnpm.sh"
Cohesion: 0.39
Nodes (7): acquire_shared_lock(), can_write_directory(), release_shared_lock(), report_store(), install-pnpm.sh script, XDG_CACHE_HOME, XDG_DATA_HOME

### Community 37 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 38 - "lucide-react"
Cohesion: 0.10
Nodes (21): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+13 more)

### Community 39 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, graph:update, lint, start

### Community 40 - "accordion.tsx"
Cohesion: 0.40
Nodes (3): AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 41 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): ResizableHandle(), ResizablePanelGroup(), react-resizable-panels

### Community 42 - "alert.tsx"
Cohesion: 0.50
Nodes (4): Alert(), AlertDescription(), AlertTitle(), alertVariants

### Community 43 - "install-ci.sh"
Cohesion: 0.40
Nodes (4): NPM_CONFIG_FETCH_RETRIES, NPM_CONFIG_FETCH_TIMEOUT, NPM_CONFIG_MAXSOCKETS, install-ci.sh script

### Community 45 - "marker.tsx"
Cohesion: 0.50
Nodes (4): Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 48 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): eslintConfig, eslint, eslint-config-next

### Community 51 - "overrides"
Cohesion: 0.67
Nodes (3): sharp, overrides, miniflare

### Community 57 - "connector-preview.d.ts"
Cohesion: 0.50
Nodes (3): Cloudflare, Env, virtual:sites-connector-preview

## Knowledge Gaps
- **209 isolated node(s):** `Deployment and enquiries`, `Token-free codebase updates`, `Prerequisites`, `Sites Lifecycle`, `Included Shape` (+204 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 282 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `class-variance-authority`, `combobox.tsx`, `form.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `Button`, `chart.tsx`, `field.tsx`, `attachment.tsx`, `drawer.tsx`, `item.tsx`, `sheet.tsx`, `react`, `select.tsx`, `navigation-menu.tsx`, `utils.ts`, `input-group.tsx`, `bubble.tsx`, `card.tsx`, `empty.tsx`, `popover.tsx`, `tabs.tsx`, `lucide-react`, `accordion.tsx`, `resizable.tsx`, `alert.tsx`, `marker.tsx`, `hover-card.tsx`, `scroll-area.tsx`?**
  _High betweenness centrality (0.276) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `page.tsx`, `sidebar.tsx`, `class-variance-authority`, `cn`, `combobox.tsx`, `package.json`, `form.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `Button`, `chart.tsx`, `field.tsx`, `attachment.tsx`, `drawer.tsx`, `item.tsx`, `sheet.tsx`, `select.tsx`, `navigation-menu.tsx`, `utils.ts`, `input-group.tsx`, `bubble.tsx`, `card.tsx`, `popover.tsx`, `tabs.tsx`, `lucide-react`, `accordion.tsx`, `alert.tsx`, `marker.tsx`, `hover-card.tsx`, `scroll-area.tsx`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Why does `json-rpc-2.0` connect `connector-preview-session.mjs` to `package.json`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **What connects `Deployment and enquiries`, `Token-free codebase updates`, `Prerequisites` to the rest of the system?**
  _209 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `connector-preview-session.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.0613107822410148 - nodes in this community are weakly interconnected._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10752688172043011 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08403361344537816 - nodes in this community are weakly interconnected._