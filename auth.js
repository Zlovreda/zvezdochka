// Файл auth.js - содержит ключи для подключения к Supabase
// ВНИМАНИЕ: Этот файл не должен попадать в публичный репозиторий!
// Добавьте его в .gitignore

const SUPABASE_URL = 'https://ваш-проект.supabase.co'; // Замените на ваш URL
const SUPABASE_ANON_KEY = 'ваш-anon-key'; // Замените на ваш ключ

// Инициализация Supabase клиента
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);