const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');
const fs = require('fs').promises;
require('dotenv').config({ path: '../.env' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Monthly benchmark updates from free sources
const updateFromWordStream = async () => {
  // WordStream publishes quarterly benchmark PDFs
  // Download and manually extract to JSON
  const benchmarks = {
    'automotive': { sem_cpc: 2.46, sem_conv: 0.0396 },
    'home_services': { sem_cpc: 47.53, sem_conv: 0.0445 },
    'legal': { sem_cpc: 86.02, sem_conv: 0.0707 },
    'insurance': { sem_cpc: 18.57, sem_conv: 0.0519 }
  };

  for (const [industry, data] of Object.entries(benchmarks)) {
    await supabase.from('channel_performance').update({
      avg_cpc: data.sem_cpc,
      conversions: data.sem_conv,
      updated_at: new Date()
    }).match({
      industry_id: industry,
      channel_id: 'sem_ppc'
    });
  }
};

const updateFromMetaReports = async () => {
  // Facebook IQ data - manually extracted
  const socialBenchmarks = {
    'automotive': { cpm: 14.65, conv: 0.0223 },
    'retail': { cpm: 8.71, conv: 0.0189 }
  };

  for (const [industry, data] of Object.entries(socialBenchmarks)) {
    await supabase.from('channel_performance').update({
      avg_cpm: data.cpm,
      conversions: data.conv
    }).match({
      industry_id: industry,
      channel_id: 'social_media'
    });
  }
};

async function runUpdates() {
  console.log('Starting benchmark updates...');
  await updateFromWordStream();
  await updateFromMetaReports();
  console.log('Updates complete');
}

runUpdates();
