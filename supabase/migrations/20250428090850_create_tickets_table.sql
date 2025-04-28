/*
  # Create tickets table

  1. New Table
    - `tickets`
      - `id` (uuid, primary key)
      - `name` (text)
      - `price` (numeric)
      - `features` (jsonb)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on table
    - Add policies for public read access
*/

-- Create tickets table
CREATE TABLE IF NOT EXISTS tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Tickets are viewable by everyone" 
  ON tickets
  FOR SELECT 
  TO public
  USING (true);

-- Insert initial ticket data
INSERT INTO tickets (name, price, features) VALUES
  ('Pass 1 Jour', 49, '["Accès à toutes les scènes", "Programme détaillé", "Goodies exclusifs", "Accès aux zones de restauration", "Toilettes VIP"]'::jsonb),
  ('Pass 3 Jours', 129, '["Accès à toutes les scènes", "Programme détaillé", "Goodies exclusifs", "Accès aux zones de restauration", "Toilettes VIP", "Zone de repos dédiée", "Rencontres avec les artistes"]'::jsonb),
  ('Pass VIP', 299, '["Accès à toutes les scènes", "Programme détaillé", "Goodies exclusifs", "Accès aux zones de restauration", "Toilettes VIP", "Zone de repos dédiée", "Rencontres avec les artistes", "Accès backstage", "Buffet VIP", "Service de conciergerie"]'::jsonb)
ON CONFLICT DO NOTHING; 