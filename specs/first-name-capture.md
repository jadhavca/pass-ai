# First Name + Year Group Capture

## Problem
We only collect email and exam type. This limits segmentation, personalisation, and follow-up communication quality.

## Goal
Capture first name and year group at signup without reducing conversion rate.

## User Story
As a parent or student, I want to quickly join the waitlist while optionally providing my first name and year group so that communication feels personalised.

## Functional Requirements
- Add "First Name" field above email input
- Add "Year Group" dropdown (Year 4–6 for 11+, Year 9–11 for GCSE)
- Store first_name and year_group in Supabase
- Update confirmation email to use first name if available
- Backwards compatible with existing rows

## Non-Functional Requirements
- No increase in page load time
- Form submission time < 500ms
- No console errors
- Graceful handling if name not provided

## API Changes
- Extend /api/waitlist to accept:
  - first_name (string, optional)
  - year_group (string, optional)

## Data Changes
- Add columns to Supabase:
  - first_name text
  - year_group text

## Acceptance Criteria
- [ ] Fields visible and styled correctly
- [ ] Supabase stores new data
- [ ] Email uses first name when present
- [ ] Old signups unaffected
- [ ] Works locally and on Vercel

## Definition of Done
- Code merged
- Tested locally
- Verified in Supabase
- Deployed successfully
- No console errors