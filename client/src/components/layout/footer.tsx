export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arjun Marimuthu Senthil Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
