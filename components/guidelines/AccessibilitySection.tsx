import React from "react";
import Link from "next/link";
import SectionSubHeader from "../SectionSubHeader";
import SectionDesc from "../SectionDesc";
import CopyHeader from "../CopyHeader";
import {
  BookA,
  HeartPulse,
  Accessibility,
  Eye,
  Ear,
  Brain,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartHandshake } from 'lucide-react';

const AccessibilitySection = () => {
  return (
    <div className="mb-10">
      <SectionSubHeader anchor="accessibility" className='flex items-center gap-2'><HeartHandshake size={32} /> Accessibility</SectionSubHeader>
      <SectionDesc>
        Accessibility is everyone&apos;s responsibility. Sarnova firmly believes
        that web and software experiences should be accessible for everyone.
      </SectionDesc>
      <SectionDesc>
        We&apos;re here to create apps where nobody has to have a confusing,
        unpleasant, or exclusionary experience. Unfortunately, everyone will
        experience a disability at some point in their lives. Whether
        that&apos;s living with a permanent disability, a temporary injury, or a
        situational impairment (for example, working in a bright and noisy
        environment).
      </SectionDesc>
      <SectionDesc>
        Thanks to assistive technology, the web has made the world more
        accessible to people with disabilities. But the world still has a long
        way to go before everyone gets an equal experience when they use the
        internet &mdash; and that&apos;s where you come in.
      </SectionDesc>
      <CopyHeader>What we design for</CopyHeader>
      <p>
        We design for people, not compliance. That means considering the needs
        of people with disabilities throughout every part of the design and
        development process.
      </p>
      <p className="mb-2">When coding apps, consider:</p>
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
        <Card className="sm:max-w-60 flex flex-col">
          <CardHeader>
            <CardTitle>
              <p className="text-center text-lg font-bold mb-4">
                Visual disabilities
              </p>
            </CardTitle>
            <Eye className="mx-auto" size={64} />
          </CardHeader>
          <CardContent>
            <p>
              Include people who are blind or low vision by providing good
              alternative text and semantic HTML. Don&apos;t rely on color or
              shape to convey meaning, and use accessible color contrast.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:max-w-60 flex flex-col">
          <CardHeader>
            <CardTitle>
              <p className="text-center text-lg font-bold mb-4">
                Hearing disabilities
              </p>
            </CardTitle>
            <Ear className="mx-auto" size={64} />
          </CardHeader>
          <CardContent>
            <p>
              Include people who are Deaf, have full loss of hearing, or
              difficulty processing auditory information by providing
              information in non-auditory formats.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:max-w-60 flex flex-col">
          <CardHeader>
            <CardTitle>
              <p className="text-center text-lg font-bold mb-4">
                Limited mobility
              </p>
            </CardTitle>
            <Accessibility className="mx-auto" size={64} />
          </CardHeader>
          <CardContent>
            <p>
              Include people who have difficulty using a mouse by supporting
              keyboard navigation, large selectable targets, and correct
              semantic HTML for speech recognition software.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:max-w-60 flex flex-col">
          <CardHeader>
            <CardTitle>
              <p className="text-center text-lg font-bold mb-4">
                Cognitive disabilities
              </p>
            </CardTitle>
            <Brain className="mx-auto" size={64} />
          </CardHeader>
          <CardContent>
            <p>
              Include people who have memory loss, cognitive overload,
              difficulty reading or writing, and trauma/mood disorders by using
              wording and design that is clear and easy to navigate.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:max-w-60 flex flex-col">
          <CardHeader>
            <CardTitle>
              <p className="text-center text-lg font-bold mb-4">
                Multiple disabilities
              </p>
            </CardTitle>
            <HeartPulse className="mx-auto" size={64} />
          </CardHeader>
          <CardContent>
            <p>
              Some people have multiple disabilities, so don&apos;t solve for
              one disability in isolation.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:max-w-60 flex flex-col">
          <CardHeader>
            <CardTitle>
              <p className="text-center text-lg font-bold mb-4">
                Inclusive language
              </p>
            </CardTitle>
            <BookA className="mx-auto" size={64} />
          </CardHeader>
          <CardContent>
            <p>
              Use wording that can be localized into other languages, and ensure
              that it is inclusive of gender, race, age and ethnicity.
            </p>
          </CardContent>
        </Card>
      </div>

      <CopyHeader>Accessibility Resources</CopyHeader>
      <ul className="list-disc ps-8 space-y-1">
        <li>
          <Link href={"https://www.w3.org/WAI/"} className="link-hover">
            World Wide Web Consortium Web Accessibility Initiative (WAI)
          </Link>
        </li>
        <li>
          <Link href={"https://www.w3.org/TR/WCAG21/"} className="link-hover">
            WCAG 2.1
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.w3.org/TR/wai-aria-1.1/"}
            className="link-hover"
          >
            ARIA 1.1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccessibilitySection;
