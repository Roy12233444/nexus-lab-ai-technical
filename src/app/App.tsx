function App() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
            Nexus LAB AI
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            AI Systems Innovation Company
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Researching, engineering, and validating durable intelligent-system capabilities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Foundation
            </span>

            <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Research
            </span>

            <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Engineering
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
