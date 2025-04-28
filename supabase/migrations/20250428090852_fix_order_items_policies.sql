-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own order items" ON order_items;
DROP POLICY IF EXISTS "Users can insert their own order items" ON order_items;

-- Create new policies
CREATE POLICY "Enable read access for authenticated users" ON order_items
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Enable insert access for authenticated users" ON order_items
  FOR INSERT TO authenticated
  WITH CHECK (true);

-- Verify merchandise table exists and has data
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM merchandise LIMIT 1) THEN
    INSERT INTO merchandise (name, price, description, image_url, icon_name) VALUES
      ('T-shirt Back2Fest', 29.99, 'T-shirt officiel Back2Fest', '/images/merch/tshirt.jpg', 'shirt'),
      ('Casquette Back2Fest', 19.99, 'Casquette officielle Back2Fest', '/images/merch/cap.jpg', 'hat'),
      ('Poster Back2Fest', 9.99, 'Poster officiel Back2Fest', '/images/merch/poster.jpg', 'image')
    ON CONFLICT DO NOTHING;
  END IF;
END $$; 