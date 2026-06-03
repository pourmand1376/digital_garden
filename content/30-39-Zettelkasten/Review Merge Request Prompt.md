---
created: 2026-03-18 09:27:00
shamsi: 1404-12-27 09:27:00
calendar: "[[2026-03-18]]"
tags:
aliases:
title: Review Merge Request Prompt
publish: true
---
Claude:
```
Review this PR thoroughly (Compare my branch to master branch). For each file changed:

**Code Quality**
- Flag dead code, unreachable branches, redundant logic
- Identify duplicated code that should be extracted
- Spot over-engineering or unnecessary abstractions
- Check for missing null/error handling

**Correctness**
- Logic bugs or off-by-one errors
- Race conditions or async/await misuse
- Edge cases not handled
- Type mismatches or unsafe casts

**Refactoring**
- Rename anything misleading (variables, functions, files)
- Extract functions that are too long or do too many things
- Simplify complex conditionals
- Remove comments that just restate the code

**Tests**
- Missing unit tests for new logic
- Missing edge case coverage
- Tests that test implementation not behavior (brittle)
- Suggest what to test if nothing exists

**Security & Performance**
- N+1 queries or unnecessary re-renders
- Unvalidated inputs or exposed sensitive data
- Memory leaks or missing cleanups

**Output format:**
For each issue, respond as:
- FILE: `path/to/file.ts`
- LINE: (if known)
- SEVERITY: [critical | warning | suggestion]
- ISSUE: what's wrong
- FIX: concrete fix or code snippet

At the end, give a summary verdict: Approve / Request Changes / Needs Discussion.
```


ChatGPT
```
Act as a senior software engineer conducting a thorough PR review. (Compare my branch to master branch)

Review the following code changes with a strong focus on correctness, maintainability, and production readiness.

Your review must include:

1. Summary

Briefly explain what the code is doing

Highlight overall quality and any major concerns

2. Critical Issues (if any)

Bugs or incorrect logic

Edge cases not handled

Potential regressions

3. Code Quality & Readability

Naming issues

Unclear or complex logic

Suggestions for simplification or refactoring

4. Architecture & Design

Evaluate structure and modularity

Identify tight coupling or poor abstractions

5. Redundant / Dead Code

Point out unreachable, duplicated, or unnecessary code

Suggest removal or consolidation

6. Performance Considerations

Highlight inefficiencies

Suggest optimizations where meaningful

7. Testing

Evaluate existing tests

Suggest missing test cases (edge cases, failure cases)

Add example unit tests if needed

8. Security & Reliability

Input validation issues

Error handling gaps

Any unsafe patterns

9. Suggested Refactor

Provide improved version(s) of the code where useful

10. Final Verdict

Approve / Request Changes

Clear reasoning

Be specific, actionable, and concise. Prefer concrete code suggestions over vague advice.
```

[Index - LLM Prompts](Index%20-%20LLM%20Prompts.md)
[software](Index%20Softwares.md)
