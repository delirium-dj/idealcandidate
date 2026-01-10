# The AI Development Guide (Rules I'll Follow)

I'll adhere to these rules in every response:

- Stick to the PRD: All code must align with PRD v2.0 (e.g., exact resume format, creative analysis, color scheme). No extras like auth or exports.
- Small Steps Only: Each step delivers 1-3 files' worth of code (e.g., one component). No full app dumps.
- Explain Before Code: Start with a brief explanation of what the step does, why it's next, and how it fits the PRD.
- Provide Code Snippets: Use markdown code blocks with file paths (e.g., src/components/InputForm.tsx). Include installation commands if needed.
- Checkpoint at End: End with: "Step X complete. Feedback? Ready for Step Y?" Wait for your response.
- Handle Feedback: If you say "Change X," I'll revise in the next message without advancing.
- Tools if Needed: If a step requires testing (e.g., code execution), I'll use available tools like code_execution only with your approval.
- No Assumptions: If unclear (e.g., API choice), I'll ask: "Confirm: Use OpenAI or Grok API?"
- Version Control Mindset: Suggest commits or file structures for easy tracking.
- Stop if Off-Track: If you say "Pause" or "Reset," I'll halt and recap.

## Detailed Step-by-Step Plan

Here's the granular breakdown. Each step builds on the previous, with estimated effort (low/medium).

### 1. Project Initialization

- Create QwikJS project with TypeScript.
- Install Tailwind CSS v3.
- Set up basic file structure (e.g., src/routes/index.tsx as main page).
  Effort: Low. Output: Setup commands and initial files.

### 2. Build Input Form Component

- Create a Qwik component for the form (fields: title, description, company).
- Use signals for state.
- No submission yet.
  Effort: Low.

### 3. Apply Basic Styling

- Configure Tailwind with PRD colors (white/gray/blue).
- Style the form minimally (e.g., inputs, button).
  Effort: Low.

### 4. Add Form Validation

- Implement simple required checks.
- Show error messages.
  Effort: Low.

### 5. Set Up Output Sections

- Create components for Resume and Analysis displays (placeholders initially).
- Layout: Two panes (side-by-side on desktop).
  Effort: Medium.

### 6. Handle Form Submission

- Add loading state.
- Prep for API call (no AI yet—mock data).
  Effort: Medium.

### 7. Choose and Integrate AI API

- Confirm API (e.g., OpenAI).
- Set up server$ endpoint for secure calls.
  Effort: Medium. (Ask for API key handling if needed.)

### 8. Implement Resume Generation Prompt

- Craft and test the resume prompt per PRD.
- Parse response into formatted sections.
  Effort: Medium.

### 9. Implement Analysis Generation Prompt

- Similar to above: Prompt, parse, display.
- Ensure creative framing.
  Effort: Medium.

### 10. Error Handling and Polish

- Add API error messages.
- Basic responsiveness.
  Effort: Low.

### 11. Testing and Iteration

- End-to-end test with sample inputs.
- Use code_execution tool if needed for verification.
  Effort: Medium.

### 12. Deployment Prep

- Build and deploy to Vercel/Netlify.
  Effort: Low.

## Next Actions

- Approve/Modify: Does this plan and guide look good? Any changes (e.g., add a step for mock data)?
- Start: If yes, say "Start with Step 1" or similar, and I'll provide the exact commands/code for initialization.
