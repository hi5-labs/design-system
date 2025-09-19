# Hi5 Labs Design System

A comprehensive React design system built with TypeScript, Tailwind CSS, and Radix UI primitives.

## Installation

```bash
npm install @hi5-labs/design-system
```

## Usage

### Import Components

```tsx
import { Button, Card, Input } from '@hi5-labs/design-system'

function App() {
  return (
    <div>
      <Card>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </Card>
    </div>
  )
}
```

### Import Styles

```tsx
import '@hi5-labs/design-system/dist/index.css'
```

### Import Utilities

```tsx
import { cn } from '@hi5-labs/design-system'
```

## Components

### Form Components
- Button
- Input
- Select
- Textarea
- Checkbox
- RadioGroup
- Switch
- Label
- FieldGroup

### Layout Components
- Card
- Separator
- Collapsible
- ContentSection
- HeaderSection
- Sidebar
- Sheet

### Data Display
- Avatar
- Table
- Progress
- Badge
- Alert
- Tooltip
- Skeleton

### Navigation
- Breadcrumb
- DropdownMenu
- Sidebar
- Sheet

### Overlay
- Dialog
- Collapsible

### Typography
- Heading
- Text

### Brand
- Logo

### Widgets
- ScoreWidget
- ScoreWidgetMini

## Utilities

- `cn()` - Class name utility function
- `useMobile()` - Mobile detection hook
- Analytics hooks for tracking

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run in development mode
npm run dev

# Run tests
npm test
```

## License

MIT