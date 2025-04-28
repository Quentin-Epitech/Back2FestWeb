/*
  # Create merchandise table

  1. New Table
    - `merchandise`
      - `id` (uuid, primary key)
      - `name` (text)
      - `price` (numeric)
      - `description` (text)
      - `image_url` (text)
      - `icon_name` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on table
    - Add policies for public read access
*/

-- Create merchandise table
CREATE TABLE IF NOT EXISTS merchandise (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE merchandise ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Merchandise is viewable by everyone" 
  ON merchandise
  FOR SELECT 
  TO public
  USING (true);

-- Insert initial merchandise data
INSERT INTO merchandise (name, price, description, image_url, icon_name) VALUES
  ('T-shirt Rapocalypse', 29.99, 'T-shirt officiel du festival avec le logo exclusif', '/images/merch/tshirt.jpg', 'shirt'),
  ('Casquette Rapocalypse', 24.99, 'Casquette brodée avec le logo du festival', '/images/merch/cap.jpg', 'cap'),
  ('Hoodie Rapocalypse', 59.99, 'Hoodie confortable avec le design exclusif du festival', '/images/merch/hoodie.jpg', 'hoodie'),
  ('Sac à dos Rapocalypse', 39.99, 'Sac à dos pratique avec le logo du festival', '/images/merch/backpack.jpg', 'backpack'),
  ('Bracelet Rapocalypse', 9.99, 'Bracelet en silicone avec le logo du festival', '/images/merch/bracelet.jpg', 'bracelet')
ON CONFLICT DO NOTHING; 