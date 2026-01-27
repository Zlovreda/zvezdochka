// config.js
const SUPABASE_CONFIG = {
    url: 'https://ihydjzxctlguvflswzhg.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoZ2JkYnVpcXpkbXdpbml5eHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NzY5MzUsImV4cCI6MjA4NDU1MjkzNX0.KvpKM7FggBOWNuFR8gmL7cjk64tt6CCgAI-UlkP7ZXU'
};

// Инициализация Supabase
const supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Функция расчета электроэнергии по вашему тарифу
function calculateElectricityCost(previous, current) {
    const consumption = current - previous;
    
    if (consumption <= 0) return { consumption: 0, amount: 0 };
    
    // Ваш сложный тариф:
    // Потери: 763 * 0.36 (предполагаю, что 0.36 - это тариф потерь)
    // До 100 кВтч: 100 * 6.1
    // Свыше 100 кВтч: (consumption-100) * 7.3
    
    const lossTariff = 0.36;
    const tariffUnder100 = 6.1;
    const tariffOver100 = 7.3;
    
    // Рассчитываем потери (если они применяются к всему объему)
    const lossAmount = previous * lossTariff;
    
    // Расчет основного потребления
    let consumptionAmount = 0;
    if (consumption <= 100) {
        consumptionAmount = consumption * tariffUnder100;
    } else {
        consumptionAmount = (100 * tariffUnder100) + ((consumption - 100) * tariffOver100);
    }
    
    const totalAmount = lossAmount + consumptionAmount;
    
    return {
        consumption: consumption,
        lossAmount: lossAmount,
        consumptionAmount: consumptionAmount,
        totalAmount: parseFloat(totalAmount.toFixed(2))
    };
}

// Функция расчета членских взносов
function calculateMembershipFees(plotsCount, acres, tariffs) {
    const plotFee = tariffs.find(t => t.name.includes('зарплата'))?.rate || 939.00;
    const acreFee = tariffs.find(t => t.name.includes('содержание'))?.rate || 8.77;
    
    return (plotsCount * plotFee) + (acres * acreFee);
}

export { supabase, calculateElectricityCost, calculateMembershipFees };
