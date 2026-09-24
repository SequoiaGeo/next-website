'use client';
export default function PrintResource(){return <button type="button" className="btn btn-secondary mt-5 print:hidden" onClick={()=>window.print()}>Print or save worksheet as PDF</button>}
