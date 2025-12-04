import React from 'react'
import SectionSubHeader from "@/components/SectionSubHeader";
import Link from 'next/link';
import SectionDesc from '../SectionDesc';

const TechStackDocs = () => {
  return (
    <div className='mb-10'>
        <SectionSubHeader anchor="docs">Tech Stack Docs</SectionSubHeader>
        <SectionDesc>
            Quick links to the documentation for the tech stack used at Sarnova.
        </SectionDesc>
        <ul className='list-disc ps-8 space-y-1'>
            <li>
                <Link href={"https://pnpm.io/installation"} target='_blank' rel='noopener noreferrer' className='link-hover'>pnpm v10.16.0</Link>
            </li>
            <li>
                <Link href={"https://nextjs.org/docs/15/app/getting-started"} target='_blank' rel='noopener noreferrer' className='link-hover'>Next.js v15.x</Link>
            </li>
            <li>
                <Link href={"https://react.dev/learn"} target='_blank' rel='noopener noreferrer' className='link-hover'>React v19.x</Link>
            </li>
            <li>
                <Link href={"https://www.typescriptlang.org/docs/"} target='_blank' rel='noopener noreferrer' className='link-hover'>TypeScript v5.8</Link>
            </li>
            <li>
                Tailwind CSS <Link href={"https://v3.tailwindcss.com/docs/installation"} target='_blank' rel='noopener noreferrer' className='link-hover'>v3</Link> or <Link href={"https://tailwindcss.com/docs/installation/using-vite"} target='_blank' rel='noopener noreferrer' className='link-hover'>v4</Link> ?
            </li>
            <li>
                <Link href={"https://ui.shadcn.com/docs"} target='_blank' rel='noopener noreferrer' className='link-hover'>shadcn UI</Link>
            </li>
            <li>
                <Link href={"https://aries-ui.com/docs"} target='_blank' rel='noopener noreferrer' className='link-hover'>Aries UI Components</Link>
            </li>
            <li>
                <Link href={"https://lucide.dev/icons/"} target='_blank' rel='noopener noreferrer' className='link-hover'>Lucide Icons</Link>
            </li>
            <li>
                <Link href={"https://nodejs.org/docs/latest/api/"} target='_blank' rel='noopener noreferrer' className='link-hover'>Node.js</Link>
            </li>
            <li>
                <Link href={"https://jestjs.io/docs/getting-started"} target='_blank' rel='noopener noreferrer' className='link-hover'>Jest v30</Link>
            </li>
            <li>
                <Link href={"https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver17"} target='_blank' rel='noopener noreferrer' className='link-hover'>Microsoft SQL Server</Link>
            </li>
            <li>
                <Link href={"https://api.akeneo.com/api-reference.html"} target='_blank' rel='noopener noreferrer' className='link-hover'>Akeneo API docs</Link>
            </li>
            <li>
                <Link href={"https://docs.kibocommerce.com/help"} target='_blank' rel='noopener noreferrer' className='link-hover'>Kibo Guides</Link>
            </li>
            <li>
                <Link href={"https://api-docs.kibocommerce.com/reference/getting-started-with-your-api"} target='_blank' rel='noopener noreferrer' className='link-hover'>Kibo API docs</Link>
            </li>
        </ul>
    </div>
  )
}

export default TechStackDocs