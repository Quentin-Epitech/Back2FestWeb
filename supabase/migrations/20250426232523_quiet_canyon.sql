/*
  # Create artists table for festival performers

  1. New Tables
    - `artists`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `genre` (text, not null)
      - `image_url` (text, not null)
      - `social_links` (jsonb, not null) - Stores Instagram, Facebook, Twitter links
      - `created_at` (timestamptz, default: now())

  2. Security
    - Enable RLS on `artists` table
    - Add policy for public read access
    - Add policy for authenticated users to manage artists
*/

CREATE TABLE IF NOT EXISTS artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  genre text NOT NULL,
  image_url text NOT NULL,
  social_links jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;

-- Allow public read access to artists
CREATE POLICY "Artists are viewable by everyone" 
  ON artists
  FOR SELECT 
  TO public
  USING (true);

-- Allow authenticated users to manage artists
CREATE POLICY "Authenticated users can manage artists" 
  ON artists
  USING (auth.role() = 'authenticated');