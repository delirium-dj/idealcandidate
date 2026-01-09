// src/components/job-input-form.tsx
import { component$, useSignal } from '@builder.io/qwik';
import type { QRL } from '@builder.io/qwik';

/**
 * Props that the JobInputForm component accepts
 */
interface JobInputFormProps {
  // We'll use this callback later when user clicks "Generate"
  onSubmit$?: QRL<(data: JobFormData) => void | Promise<void>>;
}

/**
 * Type representing the data our form collects
 */
export interface JobFormData {
  jobTitle: string;
  jobDescription: string;
  company: string;
}

/**
 * Main form component for collecting job information
 */
export const JobInputForm = component$<JobInputFormProps>(({ onSubmit$ }) => {
  // Reactive state - Qwik signals - each field has its own signal
  const jobTitle = useSignal('');
  const jobDescription = useSignal('');
  const company = useSignal('');

  // Simple validation flags (we'll improve them in Step 4)
  const isFormValid = 
    jobTitle.value.trim().length > 0 &&
    jobDescription.value.trim().length >= 30 &&
    company.value.trim().length > 0;

  return (
    <div class="w-full max-w-2xl mx-auto">
      <form 
        preventdefault:submit
        onSubmit$={async (event, element) => {
          // We will call the callback when we implement submission
          if (onSubmit$ && isFormValid) {
            await onSubmit$({
              jobTitle: jobTitle.value.trim(),
              jobDescription: jobDescription.value.trim(),
              company: company.value.trim(),
            });
          }
        }}
        class="space-y-6"
      >
        {/* JOB TITLE */}
        <div>
          <label 
            for="job-title" 
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Title <span class="text-red-500">*</span>
          </label>
          <input
            id="job-title"
            type="text"
            value={jobTitle.value}
            onInput$={(ev) => {
              jobTitle.value = (ev.target as HTMLInputElement).value;
            }}
            placeholder="e.g. Senior Frontend Engineer"
            required
            maxLength={100}
            class="w-full px-4 py-2 border border-brand-gray-300 rounded-md shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
          />
        </div>

        {/* COMPANY */}
        <div>
          <label 
            for="company" 
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Company <span class="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            value={company.value}
            onInput$={(ev) => {
              company.value = (ev.target as HTMLInputElement).value;
            }}
            placeholder="e.g. xAI, Vercel, Stripe"
            required
            maxLength={100}
            class="w-full px-4 py-2 border border-brand-gray-300 rounded-md shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
          />
        </div>

        {/* JOB DESCRIPTION - Textarea */}
        <div>
          <label 
            for="job-description" 
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Description <span class="text-red-500">*</span>
          </label>
          <textarea
            id="job-description"
            value={jobDescription.value}
            onInput$={(ev) => {
              jobDescription.value = (ev.target as HTMLTextAreaElement).value;
            }}
            rows={8}
            placeholder="Paste the full job description here..."
            required
            class="w-full px-4 py-2 border border-brand-gray-300 rounded-md shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 
                   resize-vertical font-mono text-sm"
          />
          <p class="mt-1 text-xs text-gray-500">
            {jobDescription.value.length} characters • minimum ~30 recommended
          </p>
        </div>

        {/* Submit button - disabled until form looks reasonable */}
        <div class="pt-4">
          <button
            type="submit"
            disabled={!isFormValid}
            class={`
              w-full py-3 px-4 rounded-md font-medium 
              transition-colors duration-200
              ${isFormValid 
                ? 'bg-brand-blue-500 hover:bg-brand-blue-600 active:bg-brand-blue-700 text-white' 
                : 'bg-brand-gray-300 text-brand-gray-500 cursor-not-allowed border border-brand-gray-400'}
            `}
          >
            Generate Ideal Candidate
          </button>
        </div>
      </form>
    </div>
  );
});