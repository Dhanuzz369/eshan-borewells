import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"Eshan Borewells | Borewell Drilling & Water Solutions in Bengaluru",description:"Borewell drilling, water detection and practical borewell solutions for homes, apartments, farms, commercial and industrial sites across Bengaluru.",alternates:{canonical:"/"},openGraph:{title:"Eshan Borewells | Borewell Drilling in Bengaluru",description:"Borewell drilling and water solutions across Bengaluru and surrounding areas.",type:"website"},twitter:{card:"summary_large_image"},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-IN"><body>{children}</body></html>}
