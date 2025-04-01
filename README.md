<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Pagamento Pix</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 300px;
        }
        .pix-key {
            font-size: 18px;
            margin: 10px 0;
            padding: 10px;
            background: #e0e0e0;
            border-radius: 5px;
            cursor: pointer;
            user-select: none;
        }
        .status {
            margin-top: 15px;
            padding: 10px;
            border-radius: 5px;
            font-weight: bold;
        }
        .waiting {
            background-color: orange;
            color: black;
        }
        .failed {
            background-color: red;
            color: white;
        }
        .pix-image {
            width: 100px;
            margin-bottom: 10px;
        }
        .copy-label {
            font-size: 16px;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .click-message {
            font-size: 14px;
            color: green;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://artpoin.com/wp-content/uploads/2023/09/artpoin-logo-pix.png" alt="Pix Logo" class="pix-image">
        <h2>Pagamento via Pix</h2>
        <div class="copy-label">Copiar chave!</div>
        <div class="click-message">Clique acima da chave para copiar</div>
        <div class="pix-key" onclick="copyPixKey()">Chave Pix: fb2c2053-1065-49a1-888e-65d0e70d13b5</div>
        <p id="copy-message" style="color: green; display: none;">Copiado!</p>
        <div id="status" class="status waiting">Aguardando pagamento...</div>
        <p id="timer">15:00</p>
    </div>
    
    <script>
        let timeLeft = 900;
        let statusDiv = document.getElementById("status");
        let timerElement = document.getElementById("timer");

        function startTimer() {
            let timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    statusDiv.classList.remove("waiting");
                    statusDiv.classList.add("failed");
                    statusDiv.innerHTML = "Pagamento não efetuado!";
                    timerElement.style.display = "none";
                } else {
                    timeLeft--;
                    let minutes = Math.floor(timeLeft / 60);
                    let seconds = timeLeft % 60;
                    timerElement.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }
            }, 1000);
        }

        function copyPixKey() {
            navigator.clipboard.writeText("fb2c2053-1065-49a1-888e-65d0e70d13b5");
            let message = document.getElementById("copy-message");
            message.style.display = "block";
            setTimeout(() => message.style.display = "none", 2000);
        }
        
        startTimer();
    </script>
</body>
</html>
