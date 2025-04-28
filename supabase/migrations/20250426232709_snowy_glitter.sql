/*
  # Festival Database Schema

  1. Tables
    - artists: Stores artist information
    - schedule: Stores festival schedule/lineup
    - merchandise: Stores festival merchandise

  2. Security
    - Enable RLS on all tables
    - Public read access policies
*/

-- Check if tables don't exist before creating
DO $$ 
BEGIN

-- Create artists table if it doesn't exist
IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'artists') THEN
  CREATE TABLE artists (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    genre text NOT NULL, 
    image_url text NOT NULL,
    social_links jsonb DEFAULT '{}',
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS
  ALTER TABLE artists ENABLE ROW LEVEL SECURITY;

  -- Create policy
  CREATE POLICY "Allow public read access on artists" ON artists
    FOR SELECT TO public USING (true);
END IF;

-- Create schedule table if it doesn't exist
IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'schedule') THEN
  CREATE TABLE schedule (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    day integer NOT NULL,
    time text NOT NULL,
    artist_id uuid REFERENCES artists(id),
    stage text NOT NULL,
    description text NOT NULL,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS
  ALTER TABLE schedule ENABLE ROW LEVEL SECURITY;

  -- Create policy
  CREATE POLICY "Allow public read access on schedule" ON schedule
    FOR SELECT TO public USING (true);
END IF;

-- Create merchandise table if it doesn't exist
IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'merchandise') THEN
  CREATE TABLE merchandise (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    price decimal NOT NULL,
    description text NOT NULL,
    image_url text NOT NULL,
    icon_name text NOT NULL,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS
  ALTER TABLE merchandise ENABLE ROW LEVEL SECURITY;

  -- Create policy
  CREATE POLICY "Allow public read access on merchandise" ON merchandise
    FOR SELECT TO public USING (true);
END IF;

END $$;