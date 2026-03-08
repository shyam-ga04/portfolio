function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container flex min-h-screen items-center justify-center">
        <section className="w-full max-w-xl rounded-lg border bg-card p-8 shadow-sm">
          <p className="mb-2 text-sm text-muted-foreground">Setup Complete</p>
          <h1 className="text-2xl font-semibold tracking-tight">
            CRA + shadcn theme baseline is ready
          </h1>
          <p className="mt-3 text-muted-foreground">
            You can now add shadcn components with:
            <code className="ml-2 rounded bg-muted px-2 py-1 text-sm">
              npx shadcn@latest add button
            </code>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
