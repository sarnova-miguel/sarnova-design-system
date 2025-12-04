import React from 'react'
import SectionSubHeader from '../SectionSubHeader'
import SectionDesc from '../SectionDesc'
import { Trophy } from 'lucide-react';

const BestPractices = () => {
  return (
    <div className='mb-10'>
        <SectionSubHeader anchor='best-practices' className='flex items-center gap-2'><Trophy size={32} /> Best Practices</SectionSubHeader>
        <SectionDesc>Sarnova team naming conventions, best practices, and coding standards</SectionDesc>
        <ul className="list-disc ps-8 space-y-1">
          <li>
            <p>Use <span className="code">`camelCase`</span> for variable and function names.</p>
          </li>
          <li>
            <p>Use <span className="code">`kebab-case`</span> for class names.</p>
          </li>
          <li>
            <p>Use <span className="code">`PascalCase`</span> for component names.</p>
          </li>
          <li>
            <p>Use the latest JavaScript features (ES6+) where possible.</p>
          </li>
          <li>
            <p>Use async/await for asynchronous code.</p>
          </li>
          <li>
            <p>Use (2 or 4)? spaces for indentation.</p>
          </li>
          <li>
            <p>Styling ...</p>
          </li>
          <li>
            <p>Hooks ...</p>
          </li>
          <li>
            <p>API routes ...</p>
          </li>
        </ul>
    </div>
  )
}

export default BestPractices