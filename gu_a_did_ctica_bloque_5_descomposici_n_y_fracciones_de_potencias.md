# BLOQUE 5: La Fábrica de LEGO y el Gran Despiece de Potencias

A los 12 años, ver en el examen una fracción llena de números grandes como $18^3$, $12^4$, $20^2$, $10^3$ y exponentes negativos parece un laberinto imposible. Pero hay un secreto que lo transforma en un juego de niños: **los números grandes no existen; solo son figuras montadas con piezas elementales de LEGO**.

Para resolver cualquier fracción de potencias por difícil que parezca, en nuestra fábrica seguimos siempre **4 estaciones de trabajo ordenadas**.

---

## 1. Anatomía y Concepto Clave: El Protocolo de las 4 Estaciones

| Estación | Nombre Operativo | Acción Concreta | Regla de Oro |
| :---: | :--- | :--- | :--- |
| **1ª** | **La Aduana de la Raya** | Descomponer números compuestos en primos. | Columna derecha VIP: solo primos (2, 3, 5, 7...). |
| **2ª** | **Reparto de Mochilas** | Aplicar el exponente exterior a cada factor: $(a \cdot b)^n$. | Se multiplican los exponentes interiores por el exterior. |
| **3ª** | **Trampilla del Ascensor** | Eliminar exponentes negativos: $a^{-n}$. | Si está arriba baja; si está abajo sube (con exponente positivo). |
| **4ª** | **Batalla del Recreo** | Enfrentar potencias de la misma base: arriba vs. abajo. | Se restan exponentes y los supervivientes quedan donde había más. |

---

## 2. La Máquina de la Raya Vertical (La Aduana de LEGO)

En nuestra fábrica de potencias **está terminantemente prohibido pasar montado**. Antes de tocar ningún exponente, cada número compuesto tiene que pasar por **la máquina de la raya vertical** para separarlo en sus piezas elementales: los números primos ($2, 3, 5, 7, 11\dots$).

### Las 3 Reglas de la Aduana:
1. **La columna de la derecha es VIP:** *¡Únicamente se permiten números primos ($2, 3, 5, 7\dots$)*! Jamás se divide entre 4, 6, 8, 9 ni 10.
2. **El orden de prueba en fila:** Exprimimos primero el **2** mientras el número sea par. Cuando ya no sea divisible entre 2, probamos con el **3**, luego con el **5**, etc.
3. **El empaquetado final:** Contamos cuántas piezas repetidas hay en la columna derecha y las agrupamos con su exponente ($2^a \cdot 3^b \dots$).

---

## 3. Alerta Trampa de Examen: Reparto de Mochilas y Trampilla del Ascensor

### Trampa 1: El Exponente Olvidado en la Mochila
Al abrir una mochila como $(2 \cdot 3^2)^3$, el exponente exterior debe multiplicar a **TODOS** los factores:
* El $2$ lleva un 1 invisible: $2^{1 \cdot 3} = \mathbf{2^3}$.
* El $3^2$ multiplica su exponente: $3^{2 \cdot 3} = \mathbf{3^6}$.
* **Resultado limpio:** $(18)^3 = (2 \cdot 3^2)^3 = \mathbf{2^3 \cdot 3^6}$.

### Trampa 2: Los Exponentes Negativos
No hagas cálculos con signos negativos en el exponente. Activa de inmediato la **trampilla del ascensor**:
$$\frac{3^{-2} \cdot 5^4}{2^{-3}} \longrightarrow \mathbf{\frac{2^3 \cdot 5^4}{3^2}}$$
* La potencia con exponente negativo del numerador baja al denominador con exponente positivo.
* La potencia con exponente negativo del denominador sube al numerador con exponente positivo.

---

## 4. El Gran Ejemplo Maestro de Examen (Paso a Paso)

Vamos a resolver juntos un ejercicio clásico:
$$\text{Simplifica: } \frac{12^3 \cdot 15^2}{18^2 \cdot 10^3}$$

### Paso 1: Despiece de cada base en la aduana
* $12 = 2^2 \cdot 3$
* $15 = 3 \cdot 5$
* $18 = 2 \cdot 3^2$
* $10 = 2 \cdot 5$

### Paso 2: Meter en mochilas y abrir multiplicando exponentes
$$\frac{(2^2 \cdot 3)^3 \cdot (3 \cdot 5)^2}{(2 \cdot 3^2)^2 \cdot (2 \cdot 5)^3} = \frac{2^6 \cdot 3^3 \cdot 3^2 \cdot 5^2}{2^2 \cdot 3^4 \cdot 2^3 \cdot 5^3}$$

### Paso 3: Agrupar por familias en cada piso (Sumar exponentes)
* **Arriba:** $2^6 \cdot 3^{3+2} \cdot 5^2 = \mathbf{2^6 \cdot 3^5 \cdot 5^2}$
* **Abajo:** $2^{2+3} \cdot 3^4 \cdot 5^3 = \mathbf{2^5 \cdot 3^4 \cdot 5^3}$

### Paso 4: La Batalla del Recreo (¿Quién sobrevive?)
$$\frac{2^6 \cdot 3^5 \cdot 5^2}{2^5 \cdot 3^4 \cdot 5^3}$$
* **Familia del 2:** $6$ arriba y $5$ abajo $\longrightarrow$ Gana arriba por 1 $\longrightarrow \mathbf{2^1}$ (arriba).
* **Familia del 3:** $5$ arriba y $4$ abajo $\longrightarrow$ Gana arriba por 1 $\longrightarrow \mathbf{3^1}$ (arriba).
* **Familia del 5:** $2$ arriba y $3$ abajo $\longrightarrow$ Gana abajo por 1 $\longrightarrow \mathbf{5^1}$ (abajo).

$$\text{Resultado Final: } \mathbf{\frac{2 \cdot 3}{5} = \frac{6}{5}}$$

---

## 5. Esquemas Visuales de Pizarra: Máquina de Despiece y Caso del Detective

<pre style="background: #0f172a; color: #38bdf8; padding: 1.25rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.95rem; line-height: 1.45; overflow-x: auto;">
  DESPIECE DEL 12:          DESPIECE DEL 18:          DESPIECE DEL 20:
    12 │ 2                    18 │ 2                    20 │ 2
     6 │ 2                     9 │ 3                    10 │ 2
     3 │ 3                     3 │ 3                     5 │ 5
     1 │                       1 │                       1 │
  ══════════════            ══════════════            ══════════════
  12 = 2² · 3               18 = 2 · 3²               20 = 2² · 5

  EL CASO DEL DETECTIVE: IGUALDAD DE BASES GEMELAS
    ( 2⁵ · 2ᵃ )² = 2¹⁶
    ( 2⁵⁺ᵃ )²    = 2¹⁶  ──►  2¹⁰⁺²ᵃ = 2¹⁶
    ¡Bases iguales! Sus exponentes son gemelos: 10 + 2a = 16 ──► 2a = 6 ──► a = 3
</pre>

---

## 6. Misiones de Entrenamiento (Bloque 5)

### Misión 1: La Máquina de Despiece de LEGO
Descompón mediante la raya vertical y escribe su fórmula mágica en potencias:
* **Caso a:** 36 = _____
* **Caso b:** 60 = _____
* **Caso c:** 72 = _____

### Misión 2: Simplificación de la Gran Fracción
Aplica las 4 estaciones (despiece, mochilas, agrupar y combate de supervivientes):
$$\frac{18^2 \cdot 20^2}{12^3 \cdot 25} = \dots$$

### Misión 3: El Enigma del Exponente Oculto
Averigua el valor exacto de la incógnita $a$:
$$\frac{5^a \cdot (5^3)^2}{5^4} = 5^6 \implies a = \dots$$

---

## 7. Solucionario Guiado con Comprobación (Autocorrección)

### Soluciones Misión 1:

| Número | Descomposición en Factores Primos | Fórmula Mágica Empaquetada |
| :---: | :--- | :---: |
| **36** | $36 : 2 = 18;\; 18 : 2 = 9;\; 9 : 3 = 3;\; 3 : 3 = 1$ | **$2^2 \cdot 3^2$** |
| **60** | $60 : 2 = 30;\; 30 : 2 = 15;\; 15 : 3 = 5;\; 5 : 5 = 1$ | **$2^2 \cdot 3 \cdot 5$** |
| **72** | $72 : 2 = 36;\; 36 : 2 = 18;\; 18 : 2 = 9;\; 9 : 3 = 3;\; 3 : 3 = 1$ | **$2^3 \cdot 3^2$** |

---

### Soluciones Misión 2:

* **Paso 1 (Despiece de bases):**
  * $18 = 2 \cdot 3^2$
  * $20 = 2^2 \cdot 5$
  * $12 = 2^2 \cdot 3$
  * $25 = 5^2$
* **Paso 2 (Reparto de mochilas):**
  $$\frac{(2 \cdot 3^2)^2 \cdot (2^2 \cdot 5)^2}{(2^2 \cdot 3)^3 \cdot 5^2} = \frac{2^2 \cdot 3^4 \cdot 2^4 \cdot 5^2}{2^6 \cdot 3^3 \cdot 5^2}$$
* **Paso 3 (Agrupar por familias):**
  $$\frac{2^{2+4} \cdot 3^4 \cdot 5^2}{2^6 \cdot 3^3 \cdot 5^2} = \frac{2^6 \cdot 3^4 \cdot 5^2}{2^6 \cdot 3^3 \cdot 5^2}$$
* **Paso 4 (Combate de supervivientes):**
  * Familia del 2: $2^6$ arriba y $2^6$ abajo se anulan completamente ($2^{6-6} = 2^0 = 1$).
  * Familia del 5: $5^2$ arriba y $5^2$ abajo se anulan completamente.
  * Familia del 3: $4$ arriba y $3$ abajo $\to$ gana arriba por 1 ($4 - 3 = 1$).
* **Resultado Final:** **$\mathbf{3}$**

---

### Soluciones Misión 3:

* **Paso 1 (Operar el numerador):**
  $$5^a \cdot (5^3)^2 = 5^a \cdot 5^{3 \cdot 2} = 5^a \cdot 5^6 = 5^{a+6}$$
* **Paso 2 (Operar la división del primer miembro):**
  $$\frac{5^{a+6}}{5^4} = 5^{(a+6) - 4} = 5^{a+2}$$
* **Paso 3 (Igualdad de exponentes gemelos):**
  $$5^{a+2} = 5^6 \implies a + 2 = 6 \implies a = 6 - 2 \implies \mathbf{a = 4}$$
