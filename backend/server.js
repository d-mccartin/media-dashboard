const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.get('/api/dashboard-data', async (req, res) => {
  try {
    const [industries, audiences, channels, performance, usage] = await Promise.all([
      supabase.from('industries').select('*'),
      supabase.from('audiences').select('*'),
      supabase.from('media_channels').select('*'),
      supabase.from('channel_performance').select('*'),
      supabase.from('audience_media_usage').select('*')
    ]);

    res.json({
      industries: industries.data || [],
      audiences: audiences.data || [],
      channels: channels.data || [],
      performance: performance.data || [],
      usage: usage.data || []
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
