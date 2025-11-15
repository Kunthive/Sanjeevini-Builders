# Loading Animation - Component Architecture

## 🏗️ Component Structure

```
LoadingScreen Component
│
├── AnimatePresence (Framer Motion wrapper)
│   └── motion.div (Main container - full screen)
│       │
│       ├── Blueprint Grid Background
│       │   └── Subtle grid pattern (2% opacity)
│       │
│       ├── Corner Accents (4x decorative borders)
│       │   ├── Top Left
│       │   ├── Top Right
│       │   ├── Bottom Left
│       │   └── Bottom Right
│       │
│       └── Main Content Container
│           │
│           ├── Crane System (256px × 192px)
│           │   │
│           │   ├── Crane Base
│           │   │   └── motion.div (opacity fade in)
│           │   │
│           │   ├── Crane Tower
│           │   │   └── motion.div (height animation)
│           │   │
│           │   ├── Crane Arm
│           │   │   └── motion.div (scaleX animation)
│           │   │
│           │   ├── Counter Weight
│           │   │   ├── Arm (motion.div - scaleX)
│           │   │   └── Block (motion.div - opacity)
│           │   │
│           │   └── Hook & Load System
│           │       ├── Cable (motion.div - dynamic height)
│           │       ├── Hook (motion.div - follows cable)
│           │       └── Building Block
│           │           ├── Main block (motion.div - rotation + y position)
│           │           ├── Border detail
│           │           ├── Cross lines (texture)
│           │           └── Brick pattern overlay
│           │
│           ├── Company Branding
│           │   └── motion.div (fadeIn + slideUp)
│           │       ├── h1: "Sanjeevini Builders"
│           │       └── p: "Building Excellence"
│           │
│           ├── Foundation System (320px wide)
│           │   │
│           │   ├── Foundation Bars Container
│           │   │   └── motion.div (opacity fade)
│           │   │       │
│           │   │       ├── Bar 0 (motion.div - height growth)
│           │   │       │   ├── Background layer
│           │   │       │   ├── Gradient fill layer
│           │   │       │   └── Brick pattern overlay
│           │   │       │
│           │   │       ├── Bar 1 (delay: 50ms)
│           │   │       ├── Bar 2 (delay: 100ms)
│           │   │       ├── Bar 3 (delay: 150ms)
│           │   │       └── Bar 4 (delay: 200ms)
│           │   │
│           │   ├── Progress Information
│           │   │   ├── Status Message (motion.span)
│           │   │   │   └── Dynamic text based on progress
│           │   │   └── Percentage Counter (motion.span)
│           │   │       └── Scale pulse on update
│           │   │
│           │   └── Ground Line
│           │       └── motion.div (scaleX animation)
│           │
│           └── Animated Dots Indicator
│               └── motion.div (opacity fade)
│                   ├── Dot 1 (pulse animation - delay 0ms)
│                   ├── Dot 2 (pulse animation - delay 200ms)
│                   └── Dot 3 (pulse animation - delay 400ms)
│
└── Exit Animation (opacity + scale)
```

---

## 🎬 Animation Timeline Tree

```
Component Mount (0ms)
│
├─ Background Elements (0-500ms)
│  ├─ Blueprint Grid fade in (0ms, duration: 300ms)
│  └─ Corner Accents fade in (500ms, duration: 300ms)
│
├─ Crane Assembly (0-1200ms)
│  ├─ Base appears (0ms, duration: 500ms)
│  ├─ Tower grows (200ms, duration: 800ms)
│  ├─ Arm extends (600ms, duration: 600ms)
│  └─ Counter weight (600ms, duration: 500ms)
│
├─ Branding (400ms)
│  └─ Company name fade + slide (400ms, duration: 600ms)
│
├─ Foundation System (800ms-2500ms)
│  ├─ Container fade in (800ms)
│  ├─ Bar 0 builds (800ms+, continuous)
│  ├─ Bar 1 builds (850ms+, continuous)
│  ├─ Bar 2 builds (900ms+, continuous)
│  ├─ Bar 3 builds (950ms+, continuous)
│  ├─ Bar 4 builds (1000ms+, continuous)
│  └─ Ground line extends (600ms, duration: 800ms)
│
├─ Hook & Load System (1000ms-2500ms)
│  ├─ Cable descends (1000ms+, continuous)
│  ├─ Block appears (1000ms)
│  ├─ Block swings (1000ms+, infinite loop)
│  └─ Block lifts (1000ms-2500ms, continuous)
│
├─ Progress System (1000ms-2500ms)
│  ├─ Counter starts (1000ms)
│  ├─ Percentage updates (every 30ms)
│  ├─ Messages change (thresholds: 30%, 60%, 90%)
│  └─ Number pulse (on each update)
│
├─ Dots Indicator (1200ms-2500ms)
│  ├─ Dot 1 pulse (1200ms+, infinite)
│  ├─ Dot 2 pulse (1400ms+, infinite)
│  └─ Dot 3 pulse (1600ms+, infinite)
│
└─ Exit Animation (2500ms)
   ├─ Entire screen fade out (2500ms, duration: 600ms)
   ├─ Slight scale up (2500ms, duration: 600ms)
   └─ Component unmount (3100ms)
```

---

## 🔄 State Management Flow

```
┌─────────────────────────────────────────────────┐
│                Initial State                    │
│  isLoading: true                                │
│  progress: 0                                    │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│           useEffect #1: Progress                │
│  setInterval(() => {                            │
│    progress++                                   │
│  }, 30ms)                                       │
└───────────────────┬─────────────────────────────┘
                    │
                    ├─→ progress < 30%  → "Laying Foundation..."
                    ├─→ progress < 60%  → "Building Structure..."
                    ├─→ progress < 90%  → "Finishing Touches..."
                    └─→ progress >= 90% → "Almost Ready..."
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│         useEffect #2: Completion                │
│  setTimeout(() => {                             │
│    setIsLoading(false)                          │
│  }, 2500ms)                                     │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│            isLoading: false                     │
│  → AnimatePresence triggers exit                │
│  → Fade out animation (600ms)                   │
│  → Component unmounts                           │
│  → Main content visible                         │
└─────────────────────────────────────────────────┘
```

---

## 📦 Props & Configuration

```typescript
// Current Implementation (No props)
<LoadingScreen />

// Potential Extended Version
interface LoadingScreenProps {
  duration?: number                // Default: 2500
  showGrid?: boolean              // Default: true
  showDots?: boolean              // Default: true
  showCornerAccents?: boolean     // Default: true
  messages?: {
    [key: number]: string
  }
  onComplete?: () => void         // Callback when done
  skipAfter?: number              // Allow skip after ms
}
```

---

## 🎨 Style Architecture

```
Component Styles
│
├── Tailwind Utility Classes
│   ├── Layout: fixed, inset-0, flex, items-center, justify-center
│   ├── Sizing: w-64, h-48, w-80, h-12
│   ├── Spacing: gap-8, gap-3, gap-2, p-4, mb-2
│   ├── Colors: bg-primary, text-accent, bg-secondary
│   └── Typography: text-4xl, text-2xl, text-sm, font-bold
│
├── CSS Variables (from globals.css)
│   ├── --primary → Deep Slate
│   ├── --secondary → Green
│   ├── --accent → Warm Sand
│   ├── --muted-foreground → Gray
│   └── --background → Off White / Dark
│
├── Inline Styles
│   ├── Blueprint grid (backgroundImage)
│   ├── Brick patterns (backgroundImage)
│   └── Dynamic positioning (transform)
│
└── Framer Motion Styles
    ├── opacity: 0 → 1 (fades)
    ├── height: 0 → Xpx (grows)
    ├── scaleX: 0 → 1 (expands)
    ├── y: 0 → Xpx (moves)
    └── rotate: 0 → ±2deg (swings)
```

---

## 🔌 Dependencies Graph

```
loading-screen.tsx
│
├── React
│   ├── useEffect (2 instances)
│   └── useState (2 instances)
│
├── Framer Motion
│   ├── motion (component wrapper)
│   └── AnimatePresence (mount/unmount handler)
│
└── Tailwind CSS
    ├── Utility classes (40+ used)
    └── CSS variables (5+ colors)

Total Bundle Impact:
├── Component: ~4KB
├── Framer Motion: ~40KB (shared)
└── Total: ~44KB (minified)
```

---

## 🎯 Render Cycle

```
1. Component Mounts
   ↓
2. Initial Render (progress: 0, isLoading: true)
   ↓
3. useEffect #1 runs
   └─→ setInterval starts (progress++)
   ↓
4. useEffect #2 runs
   └─→ setTimeout starts (2500ms)
   ↓
5. Re-renders on each progress update (~83 times)
   ├─→ Progress bar updates
   ├─→ Foundation bars grow
   ├─→ Crane lifts block
   └─→ Counter displays new value
   ↓
6. Timeout completes (2500ms)
   └─→ setIsLoading(false)
   ↓
7. AnimatePresence detects exit
   └─→ Triggers exit animation (600ms)
   ↓
8. Component Unmounts
   ├─→ Cleanup intervals
   ├─→ Cleanup timeouts
   └─→ Memory released
   ↓
9. Main content remains visible
```

---

## 🧩 Component Composition Pattern

```typescript
const LoadingScreen = () => {
  // 1. State Management
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  // 2. Side Effects
  useEffect(() => {
    // Progress interval
    // Cleanup function
  }, [])

  useEffect(() => {
    // Completion timer
    // Cleanup function
  }, [])

  // 3. Conditional Render
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div {...exitAnimation}>
          {/* Background Layer */}
          <BackgroundGrid />
          
          {/* Main Content */}
          <div className="content-wrapper">
            {/* Crane System */}
            <CraneAssembly progress={progress} />
            
            {/* Branding */}
            <CompanyBranding />
            
            {/* Foundation System */}
            <FoundationBars progress={progress} />
            
            {/* Indicators */}
            <LoadingIndicators progress={progress} />
          </div>
          
          {/* Decorative Layer */}
          <CornerAccents />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

---

## 🎪 Animation Orchestration

```
Master Timeline Controller
│
├── Phase 1: Introduction (0-500ms)
│   ├── Grid fades in
│   ├── Base appears
│   └── Accents reveal
│
├── Phase 2: Assembly (500-1200ms)
│   ├── Tower builds
│   ├── Arm extends
│   ├── Branding shows
│   └── Weight appears
│
├── Phase 3: Progress (1000-2500ms)
│   ├── Foundation builds
│   ├── Block lifts
│   ├── Counter increments
│   └── Messages update
│
└── Phase 4: Completion (2500-3100ms)
    ├── Progress reaches 100%
    ├── Exit animation triggers
    └── Component unmounts
```

---

## 🔬 Performance Optimization Layers

```
Optimization Strategy
│
├── Layer 1: Animation Properties
│   ├── ✅ transform (GPU-accelerated)
│   ├── ✅ opacity (GPU-accelerated)
│   └── ❌ Avoid: width, height, top, left (CPU)
│
├── Layer 2: Rendering
│   ├── Will-change hints (implicit via motion)
│   ├── Requestanimationframe timing
│   └── Debounced state updates
│
├── Layer 3: Memory Management
│   ├── Cleanup intervals on unmount
│   ├── Cleanup timeouts on unmount
│   └── Remove event listeners
│
└── Layer 4: Bundle Size
    ├── Tree-shaking (ES modules)
    ├── Code splitting (lazy load)
    └── Minification (production build)
```

---

## 🧪 Testing Hierarchy

```
Testing Pyramid
│
├── Visual Regression Tests
│   ├── Crane position at T=0.5s
│   ├── Foundation height at T=1.5s
│   ├── Progress counter at T=2.0s
│   └── Exit state at T=2.5s
│
├── Integration Tests
│   ├── Full animation cycle
│   ├── State transitions
│   ├── Cleanup verification
│   └── Re-mount behavior
│
├── Unit Tests
│   ├── Progress calculation
│   ├── Message selection logic
│   ├── Timer management
│   └── Prop handling
│
└── Performance Tests
    ├── Frame rate monitoring
    ├── Memory leak detection
    ├── Bundle size limits
    └── Load time benchmarks
```

---

## 🎨 Design Token Hierarchy

```
Design System
│
├── Colors
│   ├── primary (Deep Slate)
│   ├── secondary (Green)
│   ├── accent (Warm Sand)
│   ├── muted (Gray)
│   └── background (Off White)
│
├── Spacing
│   ├── gap-8 (32px) - Major sections
│   ├── gap-3 (12px) - Bar spacing
│   ├── gap-2 (8px) - Dot spacing
│   └── p-4 (16px) - Internal padding
│
├── Typography
│   ├── text-4xl (2.25rem) - Heading
│   ├── text-2xl (1.5rem) - Percentage
│   ├── text-sm (0.875rem) - Messages
│   └── font-bold - Emphasis
│
├── Sizing
│   ├── w-64 (256px) - Crane width
│   ├── w-80 (320px) - Foundation width
│   ├── h-48 (192px) - Crane height
│   └── h-12 (48px) - Bar container
│
└── Motion
    ├── duration-300 (0.3s) - Quick
    ├── duration-600 (0.6s) - Medium
    ├── duration-800 (0.8s) - Slow
    └── ease-out - Timing function
```

---

## 🔗 Data Flow

```
User Action (Page Load)
        │
        ▼
Component Mounts
        │
        ├─→ isLoading = true
        └─→ progress = 0
        │
        ▼
Timer #1 Starts (Progress)
        │
        └─→ Every 30ms: progress += 2
                │
                ├─→ Update crane position
                ├─→ Update foundation height
                ├─→ Update counter display
                └─→ Trigger re-render
        │
        ▼
Timer #2 Starts (Completion)
        │
        └─→ After 2500ms: isLoading = false
                │
                └─→ Trigger exit animation
                        │
                        └─→ Unmount component
                                │
                                └─→ Show main content
```

---

## 🎯 Critical Path

```
Page Load → Component Mount → Animation Start
    │            │                 │
    │            │                 └─→ Visual feedback begins
    │            └─→ Timers initialized
    └─→ Bundle loaded

Must be < 100ms from load to first paint
```

---

**This architecture ensures smooth, performant, and maintainable animation code.**
