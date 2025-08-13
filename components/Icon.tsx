type IconName = "globe" | "sun" | "moon" | "menu" | "download";
export default function Icon({ name, className="" }:{ name:IconName; className?:string }){
  const P = (d:string)=> <path d={d} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>;
  switch(name){
    case "globe": return <svg className={className} viewBox="0 0 24 24">{P("M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18z")}{P("M3 12h18 M12 3c3 3.5 3 14.5 0 18")}</svg>;
    case "sun": return <svg className={className} viewBox="0 0 24 24">{P("M12 4v2 M12 18v2 M4 12h2 M18 12h2 M5.6 5.6l1.4 1.4 M16.9 16.9l1.4 1.4 M5.6 18.4l1.4-1.4 M16.9 7.1l1.4-1.4")}{P("M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z")}</svg>;
    case "moon": return <svg className={className} viewBox="0 0 24 24">{P("M20 12.5A8.5 8.5 0 1 1 11.5 4 6.5 6.5 0 0 0 20 12.5z")}</svg>;
    case "menu": return <svg className={className} viewBox="0 0 24 24">{P("M4 6h16 M4 12h16 M4 18h16")}</svg>;
    case "download": return <svg className={className} viewBox="0 0 24 24">{P("M12 3v12")}{P("M8 11l4 4 4-4")}{P("M4 21h16")}</svg>;
    default: return null;
  }
}
