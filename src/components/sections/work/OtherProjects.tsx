"use client";

export function OtherProjects() {
  return (
    <section className="py-20 border-t border-border-subtle">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
              Other Projects
            </h2>
            <p className="text-foreground/60 mb-8">
              I&apos;ve worked on dozens of other projects ranging from small
              MVPs to large-scale enterprise applications.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center justify-between py-4 border-b border-border-subtle">
                <span className="font-bold">Governance Protocol UI</span>
                <span className="text-foreground/40 text-sm">Web3 / React</span>
              </li>
              <li className="flex items-center justify-between py-4 border-b border-border-subtle">
                <span className="font-bold">E-commerce Headless Frontend</span>
                <span className="text-foreground/40 text-sm">
                  Next.js / Shopify
                </span>
              </li>
              <li className="flex items-center justify-between py-4 border-b border-border-subtle">
                <span className="font-bold">Crypto Wallet Extension</span>
                <span className="text-foreground/40 text-sm">
                  Web3 / TypeScript
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-foreground/5 rounded-2xl p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
              Want to see more?
            </h2>
            <p className="text-foreground/60 mb-8">
              Some of my work is under NDA or for private enterprise clients. I
              can share more details during a private consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
