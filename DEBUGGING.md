# 🔍 **SENTINEL DEBUGGING GUIDE**

**Comprehensive debugging tools for development and testing**

## **🚀 Quick Start**

### **1. Run Tests**
```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug
```

### **2. Generate Debug Report**
```bash
npm run debug:report
```

### **3. Start Interactive Debugging**
```bash
npm run debug:start
```

---

## **🧪 Playwright Testing**

### **Test Structure**
```
tests/
├── navigation.spec.ts    # Navigation system tests
├── hero.spec.ts         # Hero section tests
└── [component].spec.ts  # Additional component tests
```

### **Running Specific Tests**
```bash
# Run only navigation tests
npx playwright test navigation.spec.ts

# Run tests matching a pattern
npx playwright test --grep "navigation"

# Run tests in specific browser
npx playwright test --project=chromium
```

### **Test Commands**
```bash
# Run tests and generate report
npm test

# View test report
npm run test:report

# Run tests with UI for debugging
npm run test:ui
```

---

## **🔍 Browser Console Debugging**

### **Auto-Loaded Debugger**
The debugger automatically loads in development mode and provides these console commands:

```javascript
// Toggle visual debugging
sentinelDebug.toggleOutline()      // Red outlines on all elements
sentinelDebug.toggleGrid()         // Debug grid overlay
sentinelDebug.toggleBreakpoints()  // Show current breakpoint

// Component inspection
sentinelDebug.inspectComponent('navigation')
sentinelDebug.inspectComponent('hero')
sentinelDebug.inspectComponent('features')

// Performance and accessibility
sentinelDebug.performance()
sentinelDebug.accessibility()

// Enable/disable all debug features
sentinelDebug.enableAll()
sentinelDebug.disableAll()
```

### **Visual Debugging Features**
- **Element Outlines**: Red borders around all elements
- **Debug Grid**: 20px grid overlay for layout debugging
- **Breakpoint Indicator**: Shows current responsive breakpoint
- **Component Inspector**: Detailed component analysis

---

## **📱 Responsive Testing**

### **Built-in Viewports**
Playwright automatically tests on multiple devices:

- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: Pixel 5 (Android), iPhone 12 (iOS)

### **Manual Viewport Testing**
```javascript
// In browser console
// Test mobile
window.resizeTo(375, 667)

// Test tablet
window.resizeTo(768, 1024)

// Test desktop
window.resizeTo(1920, 1080)
```

---

## **⚡ Performance Debugging**

### **Performance Metrics**
```javascript
sentinelDebug.performance()
```

Monitors:
- **FCP**: First Contentful Paint
- **LCP**: Largest Contentful Paint  
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift
- **Resource loading times**
- **Console errors**

### **Lighthouse Integration**
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run Lighthouse audit
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

---

## **♿ Accessibility Debugging**

### **Accessibility Checks**
```javascript
sentinelDebug.accessibility()
```

Checks:
- **Heading hierarchy** (H1, H2, H3...)
- **Image alt text**
- **Button text content**
- **ARIA labels**
- **Color contrast** (basic)

### **Advanced Accessibility Testing**
```bash
# Install axe-core for advanced testing
npm install -D axe-core

# Run axe-core tests in Playwright
# See tests/accessibility.spec.ts for examples
```

---

## **🎨 Visual Debugging**

### **CSS Debug Classes**
Add these classes to `<body>` for visual debugging:

```html
<body class="debug-outline debug-grid debug-breakpoints">
```

- **`.debug-outline`**: Red borders on all elements
- **`.debug-grid`**: 20px grid overlay
- **`.debug-breakpoints`**: Current breakpoint indicator

### **Component Highlighting**
```javascript
// Highlight specific components
document.querySelector('nav').style.outline = '3px solid blue'
document.querySelector('section').style.outline = '3px solid green'
```

---

## **📊 Debug Reports**

### **Generate Report**
```bash
npm run debug:report
```

### **Report Contents**
- **Timestamp**: When report was generated
- **Debug Mode**: Current debugging state
- **Log Level**: Current logging level
- **Components**: Available for debugging
- **Checks**: Available debugging checks
- **Recommendations**: Debugging best practices

---

## **🔧 Advanced Debugging**

### **Custom Debug Styles**
```css
/* Add to globals.css for custom debugging */
.debug-custom * {
  background: rgba(255, 0, 255, 0.1) !important;
}

.debug-layout * {
  border: 1px dashed blue !important;
}
```

### **Component-Specific Debugging**
```javascript
// Debug navigation component
sentinelDebug.inspectComponent('navigation')

// Debug hero section
sentinelDebug.inspectComponent('hero')

// Debug features section
sentinelDebug.inspectComponent('features')
```

---

## **🚨 Troubleshooting**

### **Common Issues**

#### **Tests Not Running**
```bash
# Install Playwright browsers
npx playwright install

# Check Playwright config
npx playwright test --config=playwright.config.ts
```

#### **Debugger Not Loading**
```javascript
// Check if debugger is available
console.log(window.sentinelDebug)

// Manually initialize
import { browserDebugger } from './src/utils/debug'
```

#### **Visual Debug Styles Not Working**
```css
/* Ensure debug styles are loaded */
.debug-outline * {
  outline: 1px solid red !important;
}
```

### **Debug Mode Environment Variables**
```bash
# Enable debug mode
DEBUG=true npm run dev

# Set log level
LOG_LEVEL=debug npm run dev

# Run with debug logging
DEBUG=true LOG_LEVEL=debug npm run dev
```

---

## **📚 Debugging Best Practices**

### **1. Start with Visual Debugging**
- Enable outlines and grid first
- Check breakpoint indicators
- Verify component positioning

### **2. Use Component Inspector**
- Inspect specific components
- Check for missing elements
- Verify proper styling

### **3. Test Responsiveness**
- Test on multiple viewports
- Check mobile menu functionality
- Verify touch interactions

### **4. Monitor Performance**
- Check loading times
- Monitor resource usage
- Look for console errors

### **5. Verify Accessibility**
- Check heading hierarchy
- Verify alt text on images
- Test keyboard navigation

---

## **🎯 Debugging Workflow**

### **Development Workflow**
1. **Start development server**: `npm run dev`
2. **Open browser console**: Check for debugger loading
3. **Enable visual debugging**: `sentinelDebug.enableAll()`
4. **Inspect components**: Use component inspector
5. **Test responsiveness**: Resize browser window
6. **Check performance**: Run performance checks
7. **Verify accessibility**: Run accessibility checks

### **Testing Workflow**
1. **Run tests**: `npm test`
2. **View results**: Check test output
3. **Debug failures**: Use `npm run test:debug`
4. **Generate report**: `npm run test:report`
5. **Fix issues**: Address test failures
6. **Re-run tests**: Verify fixes work

---

## **🔗 Additional Resources**

- **Playwright Documentation**: https://playwright.dev/
- **Testing Best Practices**: https://playwright.dev/docs/best-practices
- **Debugging Guide**: https://playwright.dev/docs/debug
- **Visual Testing**: https://playwright.dev/docs/screenshots

---

**Happy Debugging! 🚀🔍**
