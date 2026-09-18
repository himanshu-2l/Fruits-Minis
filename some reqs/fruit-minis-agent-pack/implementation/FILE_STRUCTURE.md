# Suggested Code Structure

app/
  layout.tsx
  page.tsx
  globals.css
components/
  layout/
  sections/
  ui/
content/
  site.ts
lib/
  motion.ts
public/
  images/

Keep section components isolated. Keep factual business content in `content/site.ts`. Do not hard-code the same copy or pricing in multiple components.
