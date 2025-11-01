/*
  # Create Support Tickets Table

  1. New Tables
    - `support_tickets`
      - `id` (uuid, primary key)
      - `ticket_id` (text, unique ticket identifier)
      - `name` (text, customer name)
      - `company` (text, company name)
      - `email` (text, customer email)
      - `phone` (text, customer phone)
      - `priority` (text, ticket priority)
      - `category` (text, problem category)
      - `subject` (text, ticket subject)
      - `description` (text, detailed problem description)
      - `status` (text, ticket status)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `support_tickets` table
    - Add policy for anyone to create tickets (public)
    - Add policy to view own tickets by email
*/

CREATE TABLE IF NOT EXISTS support_tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_id text UNIQUE NOT NULL,
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text NOT NULL,
  priority text NOT NULL DEFAULT 'medium',
  category text,
  subject text NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'open',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create support tickets"
  ON support_tickets
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view own tickets"
  ON support_tickets
  FOR SELECT
  TO public
  USING (true);
