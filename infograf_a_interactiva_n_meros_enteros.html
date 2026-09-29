<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bloque 1: El Rascacielos Infinito de los Enteros (ℤ)</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --card-border: #334155;
      --primary: #06b6d4;
      --pos: #10b981;
      --neg: #ef4444;
      --zero: #f59e0b;
      --text: #f8fafc;
      --muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { background-color: var(--bg); color: var(--text); line-height: 1.6; padding: 1.5rem; max-width: 950px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--card-border); }
    .badge { display: inline-block; background: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.4); color: var(--primary); font-size: 0.85rem; font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; }
    h1 { font-size: 2.1rem; font-weight: 800; margin-bottom: 0.5rem; }
    p.sub { color: var(--muted); font-size: 1.05rem; }
    .section-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.75rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3); }
    h2 { font-size: 1.35rem; margin-bottom: 1rem; color: var(--primary); display: flex; align-items: center; gap: 0.5rem; }

    /* 1. ASCENSOR */
    .elevator-container { display: grid; grid-template-columns: 160px 1fr; gap: 1.5rem; align-items: center; }
    .shaft { background: #0b1120; border-radius: 0.75rem; padding: 0.5rem; border: 2px dashed #475569; display: flex; flex-direction: column; gap: 0.35rem; }
    .floor-btn { padding: 0.5rem; text-align: center; font-weight: 700; border-radius: 0.4rem; font-size: 0.9rem; cursor: pointer; border: none; color: inherit; width: 100%; transition: transform 0.15s; }
    .floor-btn:hover { transform: scale(1.02); }
    .f-pos { background: rgba(16, 185, 129, 0.2); color: #34d399; }
    .f-zero { background: rgba(245, 158, 11, 0.25); color: #fbbf24; border: 1px solid #f59e0b; }
    .f-neg { background: rgba(239, 68, 68, 0.2); color: #f87171; }
    .floor-btn.active { outline: 3px solid #38bdf8; font-weight: 900; transform: scale(1.05); }
    .display-panel { background: #0b1120; border: 1px solid var(--card-border); border-radius: 0.75rem; padding: 1.5rem; }
    .status-pill { font-size: 0.8rem; text-transform: uppercase; font-weight: 800; letter-spacing: 0.05em; padding: 0.25rem 0.6rem; border-radius: 0.25rem; display: inline-block; margin-bottom: 0.75rem; }
    .big-value { font-size: 3.5rem; font-weight: 900; line-height: 1; margin-bottom: 0.75rem; }
    .meta-box { background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); border-radius: 0.5rem; padding: 0.75rem; margin-top: 1rem; font-size: 0.9rem; }

    /* 2. TERMÓMETRO */
    .thermo-box { display: flex; align-items: center; justify-content: center; gap: 2rem; background: #0b1120; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--card-border); flex-wrap: wrap; }
    .thermo-slider { -webkit-appearance: none; appearance: none; width: 220px; height: 10px; border-radius: 5px; background: linear-gradient(to right, #3b82f6, #f59e0b, #ef4444); outline: none; }
    .thermo-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #ffffff; cursor: pointer; border: 2px solid #0f172a; }
    .temp-readout { font-size: 2.5rem; font-weight: 900; min-width: 120px; text-align: center; }

    /* 3. COMPARADOR */
    .compare-wrapper { display: flex; align-items: center; justify-content: center; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap; }
    .num-select { background: #0b1120; border: 1px solid var(--card-border); color: #fff; padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 1.2rem; font-weight: 700; outline: none; }
    .croc-box { font-size: 2.2rem; font-weight: 900; padding: 0.5rem 1.25rem; background: #0b1120; border-radius: 0.5rem; border: 2px solid var(--primary); min-width: 70px; text-align: center; }
    .rule-callout { background: rgba(6, 182, 212, 0.1); border-left: 4px solid var(--primary); padding: 0.75rem 1rem; border-radius: 0 0.5rem 0.5rem 0; font-size: 0.95rem; }

    /* 4. SUPERPODERES */
    .powers-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
    .power-card { background: #0b1120; border: 1px solid var(--card-border); border-radius: 0.75rem; padding: 1.25rem; text-align: center; }
    .power-res { font-size: 1.7rem; font-weight: 800; margin: 0.6rem 0; color: #38bdf8; font-family: monospace; }

    /* 5. DESAFÍO NINJA */
    .quiz-box { background: #0b1120; border-radius: 0.75rem; padding: 1.25rem; border: 1px solid var(--card-border); }
    .quiz-options { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1rem; }
    .quiz-btn { background: #1e293b; border: 1px solid var(--card-border); color: #f8fafc; padding: 0.75rem; border-radius: 0.5rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 1rem; }
    .quiz-btn:hover { background: #334155; }
    .quiz-feedback { margin-top: 0.75rem; font-weight: 700; font-size: 0.95rem; min-height: 1.4rem; }

    .nav-footer { text-align: center; margin-top: 2rem; }
    .back-btn { display: inline-flex; align-items: center; justify-content: center; background: #334155; color: #fff; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; }
    .back-btn:hover { background: #475569; }

    @media (max-width: 650px) {
      .elevator-container, .powers-grid, .quiz-options { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <header>
    <div class="badge">Laboratorio Táctil • Bloque 1</div>
    <h1>El Rascacielos Infinito de los Enteros (ℤ)</h1>
    <p class="sub">Metáforas visuales, leyes de ordenación y superpoderes de los números con signo.</p>
  </header>

  <!-- SECCIÓN 1: EL ASCENSOR -->
  <section class="section-card">
    <h2>🏢 1. El Ascensor de Cristal</h2>
    <p style="color:var(--muted); margin-bottom: 1rem;">Selecciona una planta para observar su altura respecto a la calle:</p>
    <div class="elevator-container">
      <div class="shaft">
        <button class="floor-btn f-pos" onclick="moverAscensor(3)">+3 Ático</button>
        <button class="floor-btn f-pos" onclick="moverAscensor(2)">+2 Viviendas</button>
        <button class="floor-btn f-pos" onclick="moverAscensor(1)">+1 Oficinas</button>
        <button class="floor-btn f-zero active" onclick="moverAscensor(0)">0 Calle</button>
        <button class="floor-btn f-neg" onclick="moverAscensor(-1)">-1 Parking 1</button>
        <button class="floor-btn f-neg" onclick="moverAscensor(-2)">-2 Parking 2</button>
        <button class="floor-btn f-neg" onclick="moverAscensor(-3)">-3 Calderas</button>
      </div>
      <div class="display-panel">
        <span id="tagPiso" class="status-pill" style="background:#f59e0b; color:#000;">Nivel Neutral</span>
        <div id="numPiso" class="big-value" style="color:#fbbf24;">0</div>
        <p id="descPiso">La calle es la frontera neutral. Ni sube ni baja, no tiene signo positivo ni negativo.</p>
        <div class="meta-box" id="analogiaPiso">
          📍 <strong>Ejemplo real:</strong> Nivel del mar (0 m) o saldo exacto sin deudas ni ahorros.
        </div>
      </div>
    </div>
  </section>

  <!-- SECCIÓN 2: EL TERMÓMETRO AMBIENTAL -->
  <section class="section-card">
    <h2>🌡️ 2. El Termómetro y el Congelador</h2>
    <p style="color:var(--muted); margin-bottom: 1rem;">Desliza la barra para ver la transición entre grados sobre cero y temperaturas de congelación:</p>
    <div class="thermo-box">
      <input type="range" id="tempSlider" min="-15" max="35" value="0" class="thermo-slider" oninput="cambiarTemp(this.value)">
      <div id="tempVal" class="temp-readout" style="color:#fbbf24;">0°C</div>
      <div id="tempDesc" style="flex:1; min-width:200px; font-size:0.95rem;">
        Punto de congelación del agua. 0 no es frío ni calor extremo, es el punto frontera.
      </div>
    </div>
  </section>

  <!-- SECCIÓN 3: COMPARADOR (COCODRILO) -->
  <section class="section-card">
    <h2>🐊 3. La Ley de la Altura y el Cocodrilo Comilón</h2>
    <p style="color:var(--muted);">El cocodrilo abre sus fauces hacia el número situado en el piso más alto.</p>
    <div class="compare-wrapper">
      <select id="pisoA" class="num-select" onchange="comparar()">
        <option value="3">+3</option>
        <option value="2">+2</option>
        <option value="1">+1</option>
        <option value="0">0</option>
        <option value="-1">-1</option>
        <option value="-2" selected>-2</option>
        <option value="-3">-3</option>
      </select>
      <div id="simboloComp" class="croc-box">&gt;</div>
      <select id="pisoB" class="num-select" onchange="comparar()">
        <option value="3">+3</option>
        <option value="2">+2</option>
        <option value="1">+1</option>
        <option value="0">0</option>
        <option value="-1">-1</option>
        <option value="-2">-2</option>
        <option value="-3" selected>-3</option>
      </select>
    </div>
    <div id="razonComp" class="rule-callout">
      El sótano <strong>-2</strong> está más arriba (más cerca de la luz) que el sótano <strong>-3</strong>. Por eso: <strong>-2 &gt; -3</strong>.
    </div>
  </section>

  <!-- SECCIÓN 4: SUPERPODERES -->
  <section class="section-card">
    <h2>⚡ 4. Los Dos Superpoderes Matemáticos</h2>
    <p style="color:var(--muted); margin-bottom: 1rem;">Escribe cualquier valor entero para activar el cuentapasos y el espejo:</p>
    <div style="text-align:center; margin-bottom:1.25rem;">
      <label style="font-weight:700; margin-right:0.5rem;">Introduce un número:</label>
      <input type="number" id="superInput" value="-14" style="background:#0b1120; border:1px solid var(--card-border); color:#fff; padding:0.5rem 1rem; border-radius:0.5rem; font-size:1.1rem; width:110px; text-align:center;" oninput="actualizarPoderes()">
    </div>
    <div class="powers-grid">
      <div class="power-card">
        <h3>🧺 Valor Absoluto: |a|</h3>
        <p style="font-size:0.85rem; color:var(--muted);">Mide la distancia física hasta el cero:</p>
        <div id="resAbs" class="power-res">|-14| = 14</div>
        <p style="font-size:0.8rem; color:#94a3b8;">Nunca da negativo; cuenta plantas de separación.</p>
      </div>
      <div class="power-card">
        <h3>🪞 Opuesto: op(a)</h3>
        <p style="font-size:0.85rem; color:var(--muted);">El reflejo simétrico al otro lado de la calle:</p>
        <div id="resOp" class="power-res">op(-14) = +14</div>
        <p style="font-size:0.8rem; color:#94a3b8;">Invierte el signo del número.</p>
      </div>
    </div>
  </section>

  <!-- SECCIÓN 5: DESAFÍO NINJA -->
  <section class="section-card">
    <h2>🎯 5. Mini-Desafío Rápido</h2>
    <div class="quiz-box">
      <p id="preguntaTexto" style="font-size:1.05rem; font-weight:700;">¿Cuál de las siguientes relaciones es VERDADERA?</p>
      <div class="quiz-options">
        <button class="quiz-btn" onclick="responder(0)">-8 &gt; -2</button>
        <button class="quiz-btn" onclick="responder(1)">-5 &gt; 0</button>
        <button class="quiz-btn" onclick="responder(2)">|-7| = -7</button>
        <button class="quiz-btn" onclick="responder(3)">-1 &gt; -10</button>
      </div>
      <div id="feedbackQuiz" class="quiz-feedback"></div>
    </div>
  </section>

  <div class="nav-footer">
    <a href="index.html" class="back-btn">← Volver al Centro de Mando</a>
  </div>

  <script>
    function moverAscensor(piso) {
      document.querySelectorAll('.floor-btn').forEach(b => b.classList.remove('active'));
      const botones = Array.from(document.querySelectorAll('.floor-btn'));
      const indices = { 3:0, 2:1, 1:2, 0:3, '-1':4, '-2':5, '-3':6 };
      if (botones[indices[piso]]) botones[indices[piso]].classList.add('active');

      const tag = document.getElementById('tagPiso');
      const num = document.getElementById('numPiso');
      const desc = document.getElementById('descPiso');
      const extra = document.getElementById('analogiaPiso');

      if (piso > 0) {
        tag.textContent = "Entero Positivo (ℤ⁺)";
        tag.style.background = "#10b981";
        tag.style.color = "#000";
        num.textContent = "+" + piso;
        num.style.color = "#34d399";
        desc.textContent = "Planta iluminada sobre la acera. Representa altura, saldo en cuenta o temperaturas cálidas.";
        extra.innerHTML = `📍 <strong>Ejemplo real:</strong> Estás a +${piso * 3} metros de altura sobre el suelo.`;
      } else if (piso < 0) {
        tag.textContent = "Entero Negativo (ℤ⁻)";
        tag.style.background = "#ef4444";
        tag.style.color = "#fff";
        num.textContent = piso;
        num.style.color = "#f87171";
        desc.textContent = "Sótano subterráneo. Cuanto mayor es el número negativo, más hondo y bajo se encuentra.";
        extra.innerHTML = `📍 <strong>Ejemplo real:</strong> Hay que descender ${Math.abs(piso)} plantas bajo tierra.`;
      } else {
        tag.textContent = "Nivel Neutral";
        tag.style.background = "#f59e0b";
        tag.style.color = "#000";
        num.textContent = "0";
        num.style.color = "#fbbf24";
        desc.textContent = "La calle es la frontera neutral. Ni sube ni baja, no tiene signo positivo ni negativo.";
        extra.innerHTML = `📍 <strong>Ejemplo real:</strong> Nivel del mar (0 m) o saldo exacto sin deudas ni ahorros.`;
      }
    }

    function cambiarTemp(val) {
      const t = parseInt(val, 10);
      const visor = document.getElementById('tempVal');
      const desc = document.getElementById('tempDesc');

      if (t > 0) {
        visor.textContent = "+" + t + "°C";
        visor.style.color = t > 25 ? "#ef4444" : "#10b981";
        desc.innerHTML = `Temperatura cálida o veraniega. Por encima de cero los grados son enteros positivos (+${t}).`;
      } else if (t < 0) {
        visor.textContent = t + "°C";
        visor.style.color = "#38bdf8";
        desc.innerHTML = `Temperatura de congelador bajo cero. El frío aumenta a medida que el número negativo se aleja del cero (${t}).`;
      } else {
        visor.textContent = "0°C";
        visor.style.color = "#fbbf24";
        desc.innerHTML = "Punto de congelación del agua. 0 no es frío ni calor extremo, es el punto frontera.";
      }
    }

    function comparar() {
      const a = parseInt(document.getElementById('pisoA').value, 10);
      const b = parseInt(document.getElementById('pisoB').value, 10);
      const visor = document.getElementById('simboloComp');
      const nota = document.getElementById('razonComp');

      const cadA = a > 0 ? "+" + a : a;
      const cadB = b > 0 ? "+" + b : b;

      if (a > b) {
        visor.textContent = ">";
        visor.style.borderColor = "#10b981";
        nota.innerHTML = `El piso <strong>${cadA}</strong> está <strong>más alto</strong> que <strong>${cadB}</strong>. Por tanto: <strong>${cadA} &gt; ${cadB}</strong>.`;
      } else if (a < b) {
        visor.textContent = "<";
        visor.style.borderColor = "#ef4444";
        nota.innerHTML = `El piso <strong>${cadA}</strong> está <strong>más bajo</strong> que <strong>${cadB}</strong>. Por tanto: <strong>${cadA} &lt; ${cadB}</strong>.`;
      } else {
        visor.textContent = "=";
        visor.style.borderColor = "#f59e0b";
        nota.innerHTML = `Ambos números señalan la <strong>misma planta</strong>: <strong>${cadA} = ${cadB}</strong>.`;
      }
    }

    function actualizarPoderes() {
      const entrada = parseInt(document.getElementById('superInput').value, 10);
      if (isNaN(entrada)) return;

      const valorAbs = Math.abs(entrada);
      const opuesto = -entrada;

      const cadOrig = entrada > 0 ? "+" + entrada : entrada;
      const cadOp = opuesto > 0 ? "+" + opuesto : opuesto;

      document.getElementById('resAbs').textContent = `|${cadOrig}| = ${valorAbs}`;
      document.getElementById('resOp').textContent = `op(${cadOrig}) = ${cadOp}`;
    }

    function responder(indice) {
      const feed = document.getElementById('feedbackQuiz');
      if (indice === 3) {
        feed.style.color = "#34d399";
        feed.textContent = "¡Exacto! El sótano -1 está mucho más cerca de la calle que el sótano -10 (-1 > -10).";
      } else if (indice === 0) {
        feed.style.color = "#f87171";
        feed.textContent = "Incorrecto: el sótano -8 está más hondo que -2, luego -8 < -2.";
      } else if (indice === 1) {
        feed.style.color = "#f87171";
        feed.textContent = "Incorrecto: cualquier sótano bajo cero es menor que la calle (0).";
      } else {
        feed.style.color = "#f87171";
        feed.textContent = "Incorrecto: el valor absoluto mide distancia y NUNCA puede dar un número negativo.";
      }
    }

    actualizarPoderes();
  </script>
</body>
</html>
