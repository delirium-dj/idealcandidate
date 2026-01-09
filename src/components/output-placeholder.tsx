// src/components/output-placeholder.tsx
import { component$ } from '@builder.io/qwik';

/**
 * Placeholder / skeleton for where resume + analysis will be shown
 * Currently shows nice empty cards with titles
 */
export const OutputPlaceholder = component$(() => {
  return (
    <div class="w-full space-y-8">
      {/* Resume Card */}
      <div class="bg-white rounded-lg shadow-card border border-brand-gray-200 overflow-hidden">
        <div class="bg-brand-blue-50 px-6 py-4 border-b border-brand-gray-200">
          <h2 class="text-xl font-semibold text-brand-gray-800">
            Generated Ideal Candidate Resume
          </h2>
          <p class="text-sm text-brand-gray-600 mt-1">
            Formatted professional resume of the imaginary perfect-fit candidate
          </p>
        </div>
        
        <div class="p-6 space-y-6 text-brand-gray-700">
          {/* Placeholder content */}
          <div class="space-y-2">
            <div class="h-8 w-3/4 bg-brand-gray-100 rounded"></div>
            <div class="h-4 w-1/2 bg-brand-gray-100 rounded"></div>
          </div>
          
          <div class="space-y-4">
            <div class="h-5 w-48 bg-brand-gray-200 rounded"></div>
            <div class="space-y-3">
              <div class="h-4 w-full bg-brand-gray-100 rounded"></div>
              <div class="h-4 w-5/6 bg-brand-gray-100 rounded"></div>
              <div class="h-4 w-4/6 bg-brand-gray-100 rounded"></div>
            </div>
          </div>
          
          <div class="pt-4">
            <div class="h-5 w-32 bg-brand-gray-200 rounded mb-3"></div>
            <div class="grid grid-cols-2 gap-3">
              <div class="h-10 bg-brand-gray-100 rounded"></div>
              <div class="h-10 bg-brand-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Card */}
      <div class="bg-white rounded-lg shadow-card border border-brand-gray-200 overflow-hidden">
        <div class="bg-brand-blue-50 px-6 py-4 border-b border-brand-gray-200">
          <h2 class="text-xl font-semibold text-brand-gray-800">
            Why This Candidate Is an Excellent Fit
          </h2>
          <p class="text-sm text-brand-gray-600 mt-1">
            Detailed reasoning why this profile matches the job and company
          </p>
        </div>
        
        <div class="p-6 space-y-4">
          <div class="space-y-3">
            <div class="h-4 w-full bg-brand-gray-100 rounded"></div>
            <div class="h-4 w-11/12 bg-brand-gray-100 rounded"></div>
            <div class="h-4 w-10/12 bg-brand-gray-100 rounded"></div>
            <div class="h-4 w-9/12 bg-brand-gray-100 rounded"></div>
          </div>
          
          <div class="pt-4 space-y-3">
            <div class="h-5 w-40 bg-brand-gray-200 rounded"></div>
            <ul class="space-y-2 pl-6">
              <li class="h-4 w-5/6 bg-brand-gray-100 rounded"></li>
              <li class="h-4 w-full bg-brand-gray-100 rounded"></li>
              <li class="h-4 w-4/6 bg-brand-gray-100 rounded"></li>
              <li class="h-4 w-11/12 bg-brand-gray-100 rounded"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});