-- SkillPrep form tables. Run once in the Supabase SQL editor.
-- RLS is enabled with NO policies: the public anon key cannot read or write anything.
-- All inserts go through our server route using the service role key (which bypasses RLS).

create table if not exists public.student_interest (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  phone        text not null,
  college_name text not null,
  city         text not null,
  created_at   timestamptz not null default now()
);
create unique index if not exists student_interest_email_key on public.student_interest (lower(email));

create table if not exists public.college_inquiry (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text not null,
  institution text not null,
  role        text not null,
  message     text,
  created_at  timestamptz not null default now()
);

-- General /contact enquiries (not in the original table list).
create table if not exists public.contact_message (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  message    text not null,
  created_at timestamptz not null default now()
);

-- Reserved for a lightweight email-only waitlist; no form writes to it yet.
create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  name       text,
  email      text not null,
  created_at timestamptz not null default now()
);
create unique index if not exists waitlist_email_key on public.waitlist (lower(email));

alter table public.student_interest enable row level security;
alter table public.college_inquiry  enable row level security;
alter table public.contact_message  enable row level security;
alter table public.waitlist         enable row level security;
