import React from "react";
import SectionSubHeader from "../SectionSubHeader";
import SectionDesc from "../SectionDesc";
import CopyHeader from "../CopyHeader";

const AI = () => {
  return (
    <div className="mb-10">
      <SectionSubHeader anchor="ai">AI</SectionSubHeader>
      <SectionDesc>
        Sarnova team best practices for developing with AI
      </SectionDesc>
      <ul className="list-disc ps-8 space-y-1 mb-4">
        <li>
          <p className="mb-1">Different AI Modes</p>
          <ul className="list-disc ps-8 space-y-1">
            <li>
              <p>
                <strong>Plan:</strong> Ask AI to develop a detailed plan that you can customize
              </p>
            </li>
            <li>
              <p><strong>Ask:</strong> Ask AI a specific question and get an answer</p>
            </li>
            <li>
              <p>
                <strong>Agent:</strong> Instruct AI to complete a task (ie. fix a bug, add a
                feature, etc.)
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            Different AI models specialize in different areas. For example, some
            models are better at writing code (Claude Sonnet), while others are better at
            ideation (ChatGPT) or copywriting (Jasper).
          </p>
        </li>
        <li>
          <p>
            Prompts should be written in a clear, concise, and specific manner,
            with a defined goal in mind.
          </p>
        </li>
        <li>
          <p>
            Your prompts are broken down into tokens for the AI model to read. The more tokens you use, the
            more it costs.
          </p>
        </li>
        <li>
          <p>
            The &ldquo;context window&rdquo; acts like the AI model&apos;s
            working memory. It is constrained to the current conversation and
            any files you have provided.
          </p>
        </li>
        <li>
          <p>
            Start a new conversation when you start working on a new task or
            issue. This will help with efficiently utilizing your tokens and
            help prevent hallucinations.
          </p>
        </li>
        <li>
          <p>
            You can add Guidelines and Rules for your AI to follow but be
            careful not to be too restrictive.
          </p>
        </li>
      </ul>

      <CopyHeader className="md:text-center">Example:  AI Coding Rules</CopyHeader>
      <div className="rounded-md border border-gray-300 bg-amber-50 p-4 md:w-3/4 lg:w-1/2 md:mx-auto">
        <p className="mb-4"># AI Coding Instructions</p>
        <p className="mb-4">
            This project is an eCommerce web application that allows users to purchase products. The application is built using Next.js, Tailwind CSS, TypeScript and Node.js, and it uses Miscrosoft SQL Server as the database.
            </p>
        <p className="mb-4">## Coding Standards</p>
        <p className="mb-2">- Use `camelCase` for variable and function names.</p>
        <p className="mb-2">- Use `PascalCase` for component names.</p>
        <p className="mb-2">- All variables must be declared with `const` or `let`.</p>
        <p className="mb-2">- Use `const` for constants and `let` for variables that will be reassigned.</p>
        <p className="mb-2">- Include comments for all functions.</p>
        <p className="mb-2">- Use arrow functions for callbacks.</p>
        <p className="mb-2">- Use async/await for asynchronous code.</p>
        <p className="mb-2">- Use destructuring for objects and arrays.</p>
        <p className="mb-2">- Use template literals for strings that contain variables.</p>
        <p className="mb-2">- Use the latest JavaScript features (ES6+) where possible.</p>
        <p className="mb-2">- Use single quotes for strings.</p>
        <p className="mb-2">- Use 4 spaces for indentation.</p>
        <p className="mb-2">- Use semicolons at the end of statements.</p>
        <p className="mb-2">- Use a linter to check for errors and enforce coding standards.</p>
        <p className="mb-2">- Use a formatter to format the code.</p>
        <p className="mb-2">- Use the Kibo Commerce documentation for reference: https://docs.kibocommerce.com/help</p>
        <p className="mb-2">- Use the Kibo API documentation for reference: https://api-docs.kibocommerce.com/reference/getting-started-with-your-api</p>
      </div>
    </div>
  );
};

export default AI;
