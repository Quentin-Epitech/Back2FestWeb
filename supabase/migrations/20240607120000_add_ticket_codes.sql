-- Table ticket_codes
CREATE TABLE IF NOT EXISTS ticket_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_item_id uuid REFERENCES order_items(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  code text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- RLS
ALTER TABLE ticket_codes ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own ticket codes"
  ON ticket_codes
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own ticket codes"
  ON ticket_codes
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid()); 