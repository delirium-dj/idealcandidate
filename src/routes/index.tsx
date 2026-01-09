// src/routes/index.tsx
import { component$ } from '@builder.io/qwik';
import { JobInputForm } from '~/components/job-input-form';
import { OutputPlaceholder } from '~/components/output-placeholder';

export default component$(() => {
  return (
    <div class="min-h-screen bg-brand-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10">
          <h1 class="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">
            Ideal Candidate Generator
          </h1>
          <p class="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Describe the job → get an imaginary (but very strong) ideal candidate profile
          </p>
        </div>

        {/* Responsive layout: stack on mobile, side-by-side on md+ */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left column - Input */}
          <div class="lg:order-1">
            <div class="bg-white rounded-lg shadow-card p-6 md:p-8 border border-brand-gray-200">
              <h2 class="text-2xl font-semibold text-brand-gray-800 mb-6">
                Describe the Position
              </h2>
              <JobInputForm />
            </div>
          </div>

          {/* Right column - Output (placeholder for now) */}
          <div class="lg:order-2">
            <OutputPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
});