// config.js
const SUPABASE_CONFIG = {
    url: 'https://ihydjzxctlguvflswzhg.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloeWRqenhjdGxndXZmbHN3emhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NzY5MzUsImV4cCI6MjA4NDU1MjkzNX0.KvpKM7FggBOWNuFR8gmL7cjk64tt6CCgAI-UlkP7ZXU'
};

// Тарифы по умолчанию
const DEFAULT_TARIFFS = {
    electricity: {
        rateUpTo100: 6.10,
        rateOver100: 7.30,
        lossRate: 3.60
    },
    membership: {
        perPlot: 939.00,
        perSotka: 8.77,
        targetFee1: 0.00,
        targetFee2: 0.00
    }
};