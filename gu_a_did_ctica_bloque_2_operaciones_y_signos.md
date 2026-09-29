# BLOQUE 2: Suma y Resta de Números Enteros (ℤ)

Sumar y restar con números negativos ya no consiste en "añadir o quitar manzanas", sino en librar una **batalla campal entre dos ejércitos**: los guerreros luminosos (positivos) y los soldados de las sombras (negativos), o en calcular si subes o bajas pisos en el rascacielos.

Para dominar este bloque solo necesitas dos leyes de combate y saber cómo desactivar el escudo de los paréntesis cuando dos signos chocan.

---

## 1. Anatomía del Combate: ¿Mismo Bando o Bandos Rivales?

| Situación | Comportamiento | Acción Matemática | Regla del Signo Final | Ejemplo Intuitivo |
| :--- | :--- | :--- | :--- | :--- |
| **Mismo Signo** (+ con +, - con -) | Son aliados del mismo ejército. | **SUMAR** sus valores absolutos. | Se **mantiene el signo común**. | -3 - 5 = **-8** (Acumulas dos deudas). |
| **Distinto Signo** (+ con -, - con +) | Son enemigos enfrentados. | **RESTAR** el menor al mayor. | Gana el **signo del bando más fuerte**. | -9 + 4 = **-5** (Los negativos ganan por 5). |

---

## 2. La Regla del Choque de Signos (Destruir Paréntesis)

Cuando dos signos quedan pegados separados únicamente por un paréntesis, se fusionan en un único operador antes de combatir:

| Expresión con Paréntesis | Mnemotecnia Rápida | Signo Resultante | Transformación Limpia |
| :--- | :--- | :--- | :--- |
| **+ (+a)** | Amigo de mi amigo = Mi amigo | **+** | 6 + (+4) = 6 + 4 = **10** |
| **+ (-a)** | Amigo de mi enemigo = Mi enemigo | **-** | 8 + (-3) = 8 - 3 = **5** |
| **- (+a)** | Enemigo de mi amigo = Mi enemigo | **-** | 5 - (+2) = 5 - 2 = **3** |
| **- (-a)** | Enemigo de mi enemigo = Mi amigo | **+** | 4 - (-7) = 4 + 7 = **11** |

> **Regla de Oro:** Dos signos iguales seguidos dan **POSITIVO**; dos signos diferentes seguidos dan **NEGATIVO**.

---

## 3. Estrategia Ninja para Expresiones Largas

Cuando te encuentres con una cadena de sumas y restas como:
> *-8 + 5 - (-4) + (-7) - 2*

### El Protocolo de Agrupación (Paso a Paso)

| Paso | Acción Concreta | Ejemplo en Acción |
| :--- | :--- | :--- |
| **Paso 1** | Destruir todos los paréntesis con la regla de choque. | -8 + 5 + 4 - 7 - 2 |
| **Paso 2** | Agrupar todos los positivos en un bando y sumarlos. | (+5 + 4) = **+9** |
| **Paso 3** | Agrupar todos los negativos en otro bando y sumarlos. | (-8 - 7 - 2) = **-17** |
| **Paso 4** | Resolver el combate final entre los dos totales. | +9 - 17 = **-8** |

---

## 4. Alerta Trampa de Examen: El Menos Delante de un Corchete

> **Trampa común:** El signo menos delante de un paréntesis o corchete no solo afecta al primer número: **cambia de signo a TODOS los elementos que estén encerrados dentro**.

* **Incorrecto:** -(4 - 9) $\to$ -4 - 9 (¡Error mortal!)
* **Correcto (Opción A):** Resolver el interior primero: -(4 - 9) = -(-5) = **+5**
* **Correcto (Opción B):** Cambiar todos los signos: -(4 - 9) = -4 + 9 = **+5**

---

## 5. Esquema de Pizarra: La Recta de Batalla

<pre style="background: #0f172a; color: #38bdf8; padding: 1.25rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.95rem; line-height: 1.45; overflow-x: auto;">
                ◄─── RETROCEDER (Restar)      AVANZAR (Sumar) ───►
─────────────────┬─────────┬─────────┬─────────┼─────────┬─────────┬─────────┬─────────────────
                -3        -2        -1         0        +1        +2        +3

  REGLA DE COMBATE DIRECTO:
  • Sumar un positivo (+): avanza hacia la derecha.
  • Sumar un negativo (-): retrocede hacia la izquierda.
  • Restar un negativo (- -): dar media vuelta y retroceder = ¡Avanza hacia la derecha!
</pre>

---

## 6. Misiones de Entrenamiento (Ejercicios Prácticos)

### Misión 1: Choques de Signos y Operaciones Básicas
Calcula el resultado simplificando primero los paréntesis:
* Caso a: (+7) + (-12) = ___
* Caso b: (-8) - (-15) = ___
* Caso c: (-9) - (+6) = ___
* Caso d: 14 + (-20) = ___
* Caso e: -11 - (-11) = ___

### Misión 2: Cadenas de Operaciones (Método Ninja)
Agrupa positivos por un lado, negativos por otro y resuelve el combate final:
* Caso a: -5 + 8 - 12 + 6 - 3 = ___
* Caso b: 14 - (-6) + (-9) - 15 = ___
* Caso c: -20 + (-4) - (-10) - (+7) = ___

### Misión 3: Desafío de Paréntesis Anidados
Resuelve respetando las prioridades de corchetes y cambios de signo:
* Caso a: 15 - [8 - (3 - 7)] = ___
* Caso b: -4 + [(-6 + 2) - (-5 - 1)] = ___

---

## 7. Solucionario Guiado con Comprobación (Autocorrección)

### Soluciones Misión 1:

| Caso | Transformación | Solución | Justificación Didáctica |
| :--- | :--- | :--- | :--- |
| **Caso a** | 7 - 12 | **-5** | Distinto signo: 12 - 7 = 5. Vence el bando negativo (-). |
| **Caso b** | -8 + 15 | **+7** | Menos con menos da más: 15 - 8 = 7. Vence el positivo (+). |
| **Caso c** | -9 - 6 | **-15** | Mismo signo: se juntan las deudas (9 + 6 = 15) conservando el (-). |
| **Caso d** | 14 - 20 | **-6** | Distinto signo: 20 - 14 = 6. Gana el negativo (-). |
| **Caso e** | -11 + 11 | **0** | Elementos opuestos idénticos: se anulan por completo. |

### Soluciones Misión 2:

* **Caso a:** -5 + 8 - 12 + 6 - 3
  * Positivos: +8 + 6 = **+14**
  * Negativos: -5 - 12 - 3 = **-20**
  * Combate final: +14 - 20 = **-6**

* **Caso b:** 14 - (-6) + (-9) - 15
  * Destruir paréntesis: 14 + 6 - 9 - 15
  * Positivos: 14 + 6 = **+20**
  * Negativos: -9 - 15 = **-24**
  * Combate final: +20 - 24 = **-4**

* **Caso c:** -20 + (-4) - (-10) - (+7)
  * Destruir paréntesis: -20 - 4 + 10 - 7
  * Positivos: **+10**
  * Negativos: -20 - 4 - 7 = **-31**
  * Combate final: +10 - 31 = **-21**

### Soluciones Misión 3:

* **Caso a:** 15 - [8 - (3 - 7)]
  * Paréntesis interior: 3 - 7 = -4
  * Queda dentro del corchete: 8 - (-4) = 8 + 4 = 12
  * Operación final: 15 - 12 = **3**

* **Caso b:** -4 + [(-6 + 2) - (-5 - 1)]
  * Paréntesis interiores: (-6 + 2) = -4  y  (-5 - 1) = -6
  * Corchete: -4 - (-6) = -4 + 6 = +2
  * Operación final: -4 + 2 = **-2**
