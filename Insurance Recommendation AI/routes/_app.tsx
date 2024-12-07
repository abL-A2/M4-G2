import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Insurance Recommendation AI</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-full bg-gradient-to-b from-slate-700 to-slate-900">
        <Component />
      </body>
    </html>
  );
}
