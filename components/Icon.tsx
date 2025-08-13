type IconName = "book" | "roadmap" | "search" | "star" | "sun" | "moon" | "globe" | "user" | "mail" | "github" | "bolt" | "fire" | "menu" | "close" | "download";

export default function Icon({ name, className="" }: { name: IconName; className?: string }) {
  const p = (d: string) => <path d={d} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>;
  switch (name) {
    case "book": return <svg className={className} viewBox="0 0 24 24">{p("M4 6a2 2 0 0 1 2-2h12v16H6a2 2 0 0 1-2-2V6z")} {p("M6 6h12")} </svg>;
    case "roadmap": return <svg className={className} viewBox="0 0 24 24">{p("M4 6h6l2 4h8")} {p("M4 18h8l2-4h6")} </svg>;
    case "search": return <svg className={className} viewBox="0 0 24 24">{p("M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z")} {p("M20 20l-3.5-3.5")} </svg>;
    case "star": return <svg className={className} viewBox="0 0 24 24">{p("M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.1L12 17l-5.5 3 1-6.1L3 9.6l6.2-.9L12 3z")} </svg>;
    case "sun": return <svg className={className} viewBox="0 0 24 24">{p("M12 4v2 M12 18v2 M4 12h2 M18 12h2 M5.6 5.6l1.4 1.4 M16.9 16.9l1.4 1.4 M5.6 18.4l1.4-1.4 M16.9 7.1l1.4-1.4")} {p("M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z")} </svg>;
    case "moon": return <svg className={className} viewBox="0 0 24 24">{p("M20 12.5A8.5 8.5 0 1 1 11.5 4 6.5 6.5 0 0 0 20 12.5z")} </svg>;
    case "globe": return <svg className={className} viewBox="0 0 24 24">{p("M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18z")} {p("M3 12h18 M12 3c3 3.5 3 14.5 0 18")} </svg>;
    case "user": return <svg className={className} viewBox="0 0 24 24">{p("M12 13a5 5 0 1 0-5-5 5 5 0 0 0 5 5z")} {p("M4 21a8 8 0 0 1 16 0")} </svg>;
    case "mail": return <svg className={className} viewBox="0 0 24 24">{p("M4 6h16v12H4z")} {p("M4 8l8 6 8-6")} </svg>;
    case "github": return <svg className={className} viewBox="0 0 24 24">{p("M9 19c-6 2 0-4-4-6 0-2 1-3 1-3 0-2 2-3 2-3 2 0 3 2 3 2 2-1 4 0 4 0 0 0 2 1 2 3 0 0 1 1 1 3-4 2 2 8-4 6")} </svg>;
    case "bolt": return <svg className={className} viewBox="0 0 24 24">{p("M13 3L4 14h7l-1 7 9-11h-7l1-7z")} </svg>;
    case "fire": return <svg className={className} viewBox="0 0 24 24">{p("M12 3s-2 2-2 5a4 4 0 0 0 8 0c0-3-2-5-2-5 0 8-8 6-8 12a6 6 0 0 0 12 0c0-6-8-8-8-12z")} </svg>;
    case "menu": return <svg className={className} viewBox="0 0 24 24">{p("M4 6h16 M4 12h16 M4 18h16")} </svg>;
    case "close": return <svg className={className} viewBox="0 0 24 24">{p("M6 6l12 12 M6 18L18 6")} </svg>;
    case "download": return <svg className={className} viewBox="0 0 24 24">{p("M12 3v12")} {p("M8 11l4 4 4-4")} {p("M4 21h16")} </svg>;
    default: return null;
  }
}
