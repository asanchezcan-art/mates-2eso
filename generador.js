// ============================================================================
// generador.js - MOTOR PROCEDURAL DE RETOS MATEMÁTICOS PARA 2º DE ESO
// ============================================================================

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndNoZero(min, max) {
  let n = 0;
  while (n === 0) n = rnd(min, max);
  return n;
}

const GeneradorMates = {
  // BLOQUE 1: Recta, valor absoluto, opuestos y ordenación
  bloque1: () => {
    const tipos = ['abs', 'op', 'orden', 'duelo_letras'];
    const tipo = tipos[rnd(0, tipos.length - 1)];

    if (tipo === 'abs') {
      const n = rndNoZero(-25, 25);
      return {
        enunciado: `Calcula el valor numérico exacto: |${n}|`,
        solucion: `${Math.abs(n)}`,
        explicacion: `La lavadora del valor absoluto siempre devuelve un valor positivo o cero: mide la distancia al 0.`
      };
    } else if (tipo === 'op') {
      const n = rndNoZero(-30, 30);
      const signoStr = n > 0 ? `+${n}` : `${n}`;
      return {
        enunciado: `Averigua el opuesto: op(${signoStr})`,
        solucion: `${-n > 0 ? '+' : ''}${-n}`,
        explicacion: `El espejo mágico del opuesto invierte el signo: cambia la camiseta del número.`
      };
    } else if (tipo === 'orden') {
      const n1 = rnd(-20, 20);
      let n2 = rnd(-20, 20);
      while (n1 === n2) n2 = rnd(-20, 20);
      const mayor = n1 > n2;
      return {
        enunciado: `Completa con el signo correcto (> o <): ${n1} ___ ${n2}`,
        solucion: `${n1} ${mayor ? '>' : '<'} ${n2}`,
        explicacion: `En el rascacielos de los enteros, el piso situado más arriba siempre tiene un valor mayor.`
      };
    } else {
      const a = rnd(-12, 6);
      const b = rnd(-18, 12);
      const valA = -a;
      const valB = Math.abs(b);
      return {
        enunciado: `Determina cuál es menor: A = op(${a > 0 ? '+' : ''}${a}) o B = |${b}|`,
        solucion: `${valA < valB ? 'A < B' : 'B < A'} (A = ${valA > 0 ? '+' : ''}${valA}, B = ${valB})`,
        explicacion: `Calculamos primero en limpio: A = ${valA} y B = ${valB}. Luego comparamos su altura en el ascensor.`
      };
    }
  },

  // BLOQUE 2: Suma y resta de enteros
  bloque2: () => {
    const tipos = ['basico', 'cadena3'];
    const tipo = tipos[rnd(0, 1)];

    if (tipo === 'basico') {
      const n1 = rndNoZero(-15, 15);
      const n2 = rndNoZero(-15, 15);
      const op = Math.random() > 0.5 ? '+' : '-';
      const cadN2 = n2 < 0 ? `(${n2})` : `(+${n2})`;
      const res = op === '+' ? (n1 + n2) : (n1 - n2);

      return {
        enunciado: `Calcula eliminando paréntesis: ${n1} ${op} ${cadN2}`,
        solucion: `${res > 0 ? '+' : ''}${res}`,
        explicacion: `Simplificamos el choque de signos y resolvemos el combate de batallones.`
      };
    } else {
      const a = rnd(-10, 10);
      const b = rndNoZero(-10, 10);
      const c = rndNoZero(-10, 10);
      const cadB = b < 0 ? `- (${Math.abs(b)})` : `+ (${b})`;
      const cadC = c < 0 ? `+ (${c})` : `- (+${c})`;
      const res = a + b - c;
      return {
        enunciado: `Resuelve agrupando por bandos: ${a} ${cadB} ${cadC}`,
        solucion: `${res > 0 ? '+' : ''}${res}`,
        explicacion: `Destruimos los paréntesis con la regla de choque, sumamos positivos y negativos por separado y libramos el combate final.`
      };
    }
  },

  // BLOQUE 3: Jerarquía militar y superglú
  bloque3: () => {
    const tipos = ['superglu', 'corchete'];
    const tipo = tipos[rnd(0, 1)];

    if (tipo === 'superglu') {
      const a = rnd(12, 35);
      const b = rnd(2, 6);
      const c = rnd(2, 7);
      const res = a - (b * c);
      return {
        enunciado: `Calcula respetando la cadena de mando: ${a} - ${b} · ${c}`,
        solucion: `${res}`,
        explicacion: `¡Alerta de superglú! Primero multiplicamos: ${b} · ${c} = ${b * c}. Luego restamos: ${a} - ${b * c} = ${res}.`
      };
    } else {
      const a = rnd(2, 4);
      const b = rnd(1, 5);
      const c = rnd(6, 12);
      const interior = b + 3;
      const corch = c - interior;
      const res = a * corch;
      return {
        enunciado: `Desarma la muñeca rusa paso a paso: ${a} · [${c} - (${b} + 3)]`,
        solucion: `${res}`,
        explicacion: `1º Paréntesis redondo: (${b} + 3) = ${interior}. 2º Corchete: [${c} - ${interior}] = ${corch}. 3º Multiplicación exterior: ${a} · (${corch}) = ${res}.`
      };
    }
  },

  // BLOQUE 4: Potencias
  bloque4: () => {
    const tipos = ['signo', 'fusion', 'duelo', 'casco', 'negativo'];
    const tipo = tipos[rnd(0, tipos.length - 1)];

    if (tipo === 'signo') {
      const base = rnd(-5, -2);
      const exp = rnd(2, 5);
      const res = Math.pow(base, exp);
      return {
        enunciado: `Calcula el valor numérico: (${base})^${exp}`,
        solucion: `${res > 0 ? '+' : ''}${res}`,
        explicacion: `Base negativa con exponente ${exp % 2 === 0 ? 'PAR: todos tienen pareja ➔ POSITIVO (+)' : 'IMPAR: sobra un menos solitario ➔ NEGATIVO (-)'}.`
      };
    } else if (tipo === 'fusion') {
      const b = rnd(2, 7);
      const e1 = rnd(2, 5);
      const e2 = rnd(2, 4);
      return {
        enunciado: `Reduce a una única potencia (superpoder de la fusión): ${b}^${e1} · ${b}^${e2}`,
        solucion: `${b}^${e1 + e2}`,
        explicacion: `Al multiplicar potencias de la misma base se suman los exponentes: ${e1} + ${e2} = ${e1 + e2}.`
      };
    } else if (tipo === 'duelo') {
      const b = rnd(2, 7);
      const e1 = rnd(5, 9);
      const e2 = rnd(2, 4);
      return {
        enunciado: `Reduce a una única potencia (duelo láser): ${b}^${e1} : ${b}^${e2}`,
        solucion: `${b}^${e1 - e2}`,
        explicacion: `Al dividir potencias de la misma base se restan los exponentes: ${e1} - ${e2} = ${e1 - e2}.`
      };
    } else if (tipo === 'casco') {
      const b = rnd(2, 6);
      return {
        enunciado: `Duelo de examen: ¿Cuánto vale -${b}^2 y cuánto vale (-${b})^2?`,
        solucion: `-${b}^2 = -${b * b}  y  (-${b})^2 = +${b * b}`,
        explicacion: `Sin casco (paréntesis), el signo menos queda fuera y no se clona. Con casco, el menos entra en la fiesta.`
      };
    } else {
      const b = rnd(2, 5);
      const e = rnd(2, 3);
      return {
        enunciado: `Aplica el hechizo de hacer el pino (exponente negativo): ${b}^(-${e})`,
        solucion: `1 / ${b}^${e} = 1 / ${Math.pow(b, e)}`,
        explicacion: `El número cae al denominador de una fracción para transformar su exponente en positivo.`
      };
    }
  },

  // BLOQUE 5: Despiece de LEGO y fracciones de potencias
  bloque5: () => {
    const tipos = ['despiece', 'detective'];
    const tipo = tipos[rnd(0, 1)];

    if (tipo === 'despiece') {
      const lista = [12, 18, 20, 24, 28, 36, 40, 45, 50, 60, 72, 90];
      const n = lista[rnd(0, lista.length - 1)];

      let temp = n;
      let d = 2;
      const f = {};
      while (temp > 1) {
        if (temp % d === 0) {
          f[d] = (f[d] || 0) + 1;
          temp /= d;
        } else {
          d = (d === 2) ? 3 : d + 2;
        }
      }
      const formula = Object.keys(f).map(k => f[k] > 1 ? `${k}^${f[k]}` : `${k}`).join(' · ');

      return {
        enunciado: `Descompón en factores primos usando la máquina de la raya: ${n}`,
        solucion: `${n} = ${formula}`,
        explicacion: `Columna derecha VIP: dividimos sucesivamente solo entre números primos ordenados.`
      };
    } else {
      const aVal = rnd(2, 5);
      const c = rnd(2, 4);
      const totalExp = (c * 2) + aVal;
      return {
        enunciado: `El caso del detective: halla el valor de 'a' en: 2^a · 2^${c * 2} = 2^${totalExp}`,
        solucion: `a = ${aVal}`,
        explicacion: `Bases gemelas idénticas: sumamos exponentes a + ${c * 2} = ${totalExp} ➔ a = ${totalExp} - ${c * 2} = ${aVal}.`
      };
    }
  },

  // BLOQUE 6: Raíces en Z
  bloque6: () => {
    const tipos = ['exacta', 'entera_resto', 'cubica_neg', 'no_real', 'decimal'];
    const tipo = tipos[rnd(0, tipos.length - 1)];

    if (tipo === 'exacta') {
      const base = rnd(4, 15);
      const rad = base * base;
      return {
        enunciado: `Calcula la raíz cuadrada exacta en ℤ: √${rad}`,
        solucion: `${base} (en ℤ también admite ±${base})`,
        explicacion: `Porque (+${base})² = ${rad} y (-${base})² = ${rad}.`
      };
    } else if (tipo === 'entera_resto') {
      const base = rnd(5, 11);
      const resto = rnd(1, base);
      const rad = (base * base) + resto;
      return {
        enunciado: `Halla la raíz entera y el resto por tanteo de: √${rad}`,
        solucion: `Raíz = ${base}, Resto = ${resto} (Comprobación: ${rad} = ${base}² + ${resto})`,
        explicacion: `El cuadrado perfecto que cabe sin pasarse es ${base}² = ${base * base}. Sobran ${resto} baldosas.`
      };
    } else if (tipo === 'cubica_neg') {
      const bases = [1, 2, 3, 4, 5, 10];
      const b = bases[rnd(0, bases.length - 1)];
      const rad = -(b * b * b);
      return {
        enunciado: `Calcula la raíz cúbica: ³√(${rad})`,
        solucion: `-${b}`,
        explicacion: `Índice impar (3): el signo menos sobrevive porque (-${b}) · (-${b}) · (-${b}) = ${rad}.`
      };
    } else if (tipo === 'no_real') {
      const r = rnd(2, 9);
      const rad = -(r * r);
      return {
        enunciado: `Razona si tiene solución en ℝ: √(${rad})`,
        solucion: `NO TIENE SOLUCIÓN en ℝ`,
        explicacion: `Ningún número real elevado al cuadrado da negativo. Las raíces de índice par de radicando negativo son imposibles en ℝ.`
      };
    } else {
      const bases = [2, 3, 4, 5, 6, 7, 8, 9, 12, 15];
      const b = bases[rnd(0, bases.length - 1)];
      const cuadrado = (b * b) / 100;
      const cadCuad = cuadrado.toFixed(2).replace('.', ',');
      const cadRes = (b / 10).toFixed(1).replace('.', ',');
      return {
        enunciado: `Cálculo mental rápido de decimales: √${cadCuad}`,
        solucion: `${cadRes}`,
        explicacion: `Ignoramos la coma: √${b * b} = ${b}. La raíz cuadrada divide entre dos los 2 decimales ➔ 1 decimal.`
      };
    }
  }
};

function generarBateria(tipo) {
  const lista = [];
  if (typeof tipo === 'number') {
    const fn = GeneradorMates[`bloque${tipo}`];
    for (let i = 0; i < 10; i++) {
      lista.push({ ...fn(), numBloque: tipo });
    }
  } else if (tipo === 'global') {
    for (let b = 1; b <= 6; b++) {
      const fn = GeneradorMates[`bloque${b}`];
      for (let i = 0; i < 5; i++) {
        lista.push({ ...fn(), numBloque: b });
      }
    }
  }
  return lista;
}

let bateriaActualTipo = null;
let mostrandoSoluciones = false;

function abrirModalBateria(tipo) {
  bateriaActualTipo = tipo;
  mostrandoSoluciones = false;

  const modal = document.getElementById('modalBateria');
  if (!modal) return;
  modal.classList.remove('hidden');

  const titulo = tipo === 'global'
    ? '🏆 Gran Simulacro Global de Examen (30 Retos • Bloques 1 al 6)'
    : `🎯 Batería de Entrenamiento: Bloque ${tipo} (10 Retos)`;

  const sub = tipo === 'global'
    ? '5 ejercicios procedurales de cada uno de los 6 bloques temáticos'
    : '10 retos aleatorios generados al vuelo con soluciones pedagógicas';

  document.getElementById('bateriaTitulo').innerText = titulo;
  document.getElementById('bateriaSub').innerText = sub;

  const ejercicios = generarBateria(tipo);
  renderizarBateria(ejercicios);
}

function cerrarModalBateria() {
  const modal = document.getElementById('modalBateria');
  if (modal) modal.classList.add('hidden');
}

function regenerarBateriaActual() {
  if (bateriaActualTipo !== null) {
    mostrandoSoluciones = false;
    document.getElementById('btnToggleSol').innerText = '👁️ Mostrar Solucionario Guiado';
    const ejercicios = generarBateria(bateriaActualTipo);
    renderizarBateria(ejercicios);
  }
}

function renderizarBateria(ejercicios) {
  const cont = document.getElementById('bateriaContenedor');
  cont.innerHTML = '';

  ejercicios.forEach((ej, idx) => {
    const card = document.createElement('div');
    card.className = "p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 text-left";
    card.innerHTML = `
      <div class="flex items-center justify-between text-xs font-sans text-slate-400 border-b border-slate-800 pb-1.5">
        <span class="font-bold text-cyan-400">Reto ${idx + 1} • Bloque ${ej.numBloque}</span>
        <span class="font-mono text-slate-500">Mates 2º ESO</span>
      </div>
      <div class="text-white text-base font-bold font-mono py-1">${ej.enunciado}</div>
      <div class="solucion-item hidden mt-2 pt-2 border-t border-dashed border-slate-800 text-xs font-mono">
        <span class="text-emerald-400 font-bold block mb-0.5">➔ Solución: ${ej.solucion}</span>
        <span class="text-slate-400 font-sans block text-[11px] leading-snug">${ej.explicacion}</span>
      </div>
    `;
    cont.appendChild(card);
  });
}

function toggleSoluciones() {
  mostrandoSoluciones = !mostrandoSoluciones;
  const soluciones = document.querySelectorAll('.solucion-item');
  soluciones.forEach(s => {
    if (mostrandoSoluciones) s.classList.remove('hidden');
    else s.classList.add('hidden');
  });

  const btn = document.getElementById('btnToggleSol');
  btn.innerText = mostrandoSoluciones 
    ? '🙈 Ocultar Solucionario' 
    : '👁️ Mostrar Solucionario Guiado';
}
