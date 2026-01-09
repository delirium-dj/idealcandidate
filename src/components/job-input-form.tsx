// src/components/job-input-form.tsx
import { component$, useSignal, useComputed$, useTask$, $ } from '@builder.io/qwik';
import type { QRL } from '@builder.io/qwik';

export interface JobFormData {
  jobTitle: string;
  jobDescription: string;
  company: string;
}

export interface JobInputFormProps {
  onSubmit$?: QRL<(data: JobFormData) => void | Promise<void>>;
}

export const JobInputForm = component$<JobInputFormProps>(({ onSubmit$ }) => {
  // ── Form values ────────────────────────────────────────────────
  const jobTitle = useSignal('');
  const jobDescription = useSignal('');
  const company = useSignal('');

  // ── Errors ─────────────────────────────────────────────────────
  const titleError = useSignal('');
  const descriptionError = useSignal('');
  const companyError = useSignal('');

  // ── Touched state ──────────────────────────────────────────────
  const titleTouched = useSignal(false);
  const descriptionTouched = useSignal(false);
  const companyTouched = useSignal(false);

  // ── Pure validation functions (return boolean, set error as side-effect) ──
  const checkTitle = $(() => {
    const val = jobTitle.value.trim();
    if (val.length === 0) {
      titleError.value = 'Job title is required';
      return false;
    }
    if (val.length < 3) {
      titleError.value = 'Job title is too short (min 3 characters)';
      return false;
    }
    titleError.value = '';
    return true;
  });

  const checkCompany = $(() => {
    const val = company.value.trim();
    if (val.length === 0) {
      companyError.value = 'Company name is required';
      return false;
    }
    if (val.length < 2) {
      companyError.value = 'Company name is too short';
      return false;
    }
    companyError.value = '';
    return true;
  });

  const checkDescription = $(() => {
    const val = jobDescription.value.trim();
    if (val.length === 0) {
      descriptionError.value = 'Job description is required';
      return false;
    }
    if (val.length < 50) {
      descriptionError.value = 'Please provide more details (min 50 characters)';
      return false;
    }
    descriptionError.value = '';
    return true;
  });

  // ── Reactive validation on change & blur ───────────────────────
  useTask$(({ track }) => {
    track(() => jobTitle.value);
    track(() => company.value);
    track(() => jobDescription.value);
    track(() => titleTouched.value);
    track(() => companyTouched.value);
    track(() => descriptionTouched.value);

    // Only validate fields that were touched
    if (titleTouched.value)      checkTitle();
    if (companyTouched.value)    checkCompany();
    if (descriptionTouched.value) checkDescription();
  });

  // ── Pure computed form validity (NO mutations!) ───────────────
  const isFormValid = useComputed$(() => {
    // We can safely read the current error states
    // If error is empty → field is valid
    return (
      titleError.value === '' &&
      companyError.value === '' &&
      descriptionError.value === '' &&
      jobTitle.value.trim().length >= 3 &&
      company.value.trim().length >= 2 &&
      jobDescription.value.trim().length >= 50
    );
  });

  // ── Blur handler ───────────────────────────────────────────────
  const handleBlur = $(async (field: 'title' | 'company' | 'description') => {
    if (field === 'title') {
      titleTouched.value = true;
      await checkTitle();
    }
    if (field === 'company') {
      companyTouched.value = true;
      await checkCompany();
    }
    if (field === 'description') {
      descriptionTouched.value = true;
      await checkDescription();
    }
  });

  return (
  <div class="w-full max-w-2xl mx-auto">
    <form
      preventdefault:submit
      onSubmit$={async () => {
        // Force validation of all fields on submit
        titleTouched.value = true;
        companyTouched.value = true;
        descriptionTouched.value = true;

        await checkTitle();
        await checkCompany();
        await checkDescription();

        if (isFormValid.value && onSubmit$) {
          await onSubmit$({
            jobTitle: jobTitle.value.trim(),
            jobDescription: jobDescription.value.trim(),
            company: company.value.trim(),
          });
        }
      }}
      class="space-y-6"
    >
      {/* 1. JOB TITLE */}
      <div>
        <label
          for="job-title"
          class="block text-sm font-medium text-brand-gray-700 mb-1"
        >
          Job Title <span class="text-red-600">*</span>
        </label>
        <input
          id="job-title"
          type="text"
          value={jobTitle.value}
          onInput$={(ev) => jobTitle.value = (ev.target as HTMLInputElement).value}
          onBlur$={() => handleBlur('title')}
          placeholder="e.g. Senior Frontend Engineer"
          maxLength={100}
          autocomplete="name"
          class={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500
            ${titleError.value && titleTouched.value ? 'border-red-500' : 'border-brand-gray-300'}`}
        />
        {titleError.value && titleTouched.value && (
          <p class="mt-1 text-sm text-red-600">{titleError.value}</p>
        )}
      </div>

      {/* 2. COMPANY */}
      <div>
        <label
          for="company"
          class="block text-sm font-medium text-brand-gray-700 mb-1"
        >
          Company <span class="text-red-600">*</span>
        </label>
        <input
          id="company"
          type="text"
          value={company.value}
          onInput$={(ev) => company.value = (ev.target as HTMLInputElement).value}
          onBlur$={() => handleBlur('company')}
          placeholder="e.g. xAI, Vercel, Stripe"
          maxLength={100}
          autocomplete="organization"
          class={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500
            ${companyError.value && companyTouched.value ? 'border-red-500' : 'border-brand-gray-300'}`}
        />
        {companyError.value && companyTouched.value && (
          <p class="mt-1 text-sm text-red-600">{companyError.value}</p>
        )}
      </div>

      {/* 3. JOB DESCRIPTION */}
      <div>
        <label
          for="job-description"
          class="block text-sm font-medium text-brand-gray-700 mb-1"
        >
          Job Description <span class="text-red-600">*</span>
        </label>
        <textarea
          id="job-description"
          value={jobDescription.value}
          onInput$={(ev) => jobDescription.value = (ev.target as HTMLTextAreaElement).value}
          onBlur$={() => handleBlur('description')}
          rows={8}
          placeholder="Paste the full job description here..."
          autocomplete="off"
          class={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 resize-vertical font-mono text-sm
            ${descriptionError.value && descriptionTouched.value ? 'border-red-500' : 'border-brand-gray-300'}`}
        />
        <div class="mt-1 flex justify-between text-xs">
          <span class={`${descriptionError.value && descriptionTouched.value ? 'text-red-600' : 'text-brand-gray-500'}`}>
            {jobDescription.value.length} characters
          </span>
          <span class="text-brand-gray-500">
            minimum 50 recommended
          </span>
        </div>
        {descriptionError.value && descriptionTouched.value && (
          <p class="mt-1 text-sm text-red-600">{descriptionError.value}</p>
        )}
      </div>

      {/* Submit button */}
      <div class="pt-4">
        <button
          type="submit"
          disabled={!isFormValid.value}
          class={`
            w-full py-3 px-4 rounded-md font-medium transition-colors duration-200
            ${isFormValid.value
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