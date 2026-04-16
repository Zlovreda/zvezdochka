<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ЭнергоУчет - Вход</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .login-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
            <div class="col-md-6 col-lg-4">
                <div class="login-card p-4 p-md-5">
                    <div class="text-center mb-4">
                        <h2 class="logo mb-2">ЭнергоУчет</h2>
                        <p class="text-muted">СНТ "Звёздочка"</p>
                    </div>
                    <form id="loginForm">
                        <div class="mb-3">
                            <label class="form-label">Логин</label>
                            <input type="text" id="username" class="form-control" required>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Пароль</label>
                            <input type="password" id="password" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">
                            <i class="bi bi-box-arrow-in-right me-2"></i>Войти
                        </button>
                        <div id="errorMsg" class="alert alert-danger mt-3 d-none"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
    <script>
        const SUPABASE_URL = 'https://ihydjzxctlguvflswzhg.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloeWRqenhjdGxndXZmbHN3emhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NzY5MzUsImV4cCI6MjA4NDU1MjkzNX0.KvpKM7FggBOWNuFR8gmL7cjk64tt6CCgAI-UlkP7ZXU';
        const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const { data: user, error } = await supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .eq('password', password)
                .single();

            if (error || !user) {
                document.getElementById('errorMsg').classList.remove('d-none');
                document.getElementById('errorMsg').innerText = 'Неверный логин или пароль';
                return;
            }

            localStorage.setItem('currentUser', JSON.stringify(user));
            if (user.role === 'admin') window.location.href = 'admin.html';
            else window.location.href = 'user.html';
        });
    </script>
</body>
</html>
