# BLOQUE 6: El Detective de las Baldosas y el Secreto de las Raíces en ℤ

En los bloques anteriores aprendimos a manejar la máquina de clonar potencias: si cogías un $5$ y lo elevabas al cuadrado ($5^2$), obtenías $25$.

Una **raíz cuadrada** ($\sqrt{a}$) es **la máquina del tiempo puesta marcha atrás**:  
Nos dan el número final ($25$) y nosotros tenemos que hacer de detectives e investigar:  
> **«¿Qué número multiplicado por sí mismo da este valor exacto?»**

Al trabajar en el universo de los **números enteros (ℤ)**, nuestro objetivo es entender las partes de una raíz, cómo se comportan los signos positivos y negativos, qué ocurre cuando una raíz no es exacta dentro de ℤ (raíz entera y resto) y dominar los esquemas visuales paso a paso tanto para raíces cuadradas como para raíces cúbicas.

---

## 1. La Anatomía de una Raíz: ¿Quién es quién?

Antes de operar, debemos ponerle nombre a cada miembro del equipo:

$$\sqrt[n]{a} = b$$

| Elemento | Nombre | Función en la operación |
| :---: | :--- | :--- |
| **n** | **Índice** | Es el número pequeñito que vigila desde la esquina izquierda del tejado. Indica cuántas veces debe multiplicarse el resultado por sí mismo. Si no lleva ningún número escrito, hay un **2 invisible**: es una raíz cuadrada ($\sqrt{a} = \sqrt[2]{a}$). Si lleva un 3, es una raíz cúbica ($\sqrt[3]{a}$). |
| **a** | **Radicando** | Es el número guarecido bajo el tejado (el valor que queremos investigar). |
| **√** | **Signo Radical** | El tejado o la caseta protectora de la raíz. |
| **b** | **Raíz** | El resultado final que descubrimos tras resolver el enigma. |

---

## 2. El Suelo de Baldosas (Cuadrados Perfectos en ℤ)

Imagina una habitación cuadrada con el suelo enlosado con baldosas idénticas:

* Si la habitación tiene en total **25 baldosas**, cada fila de la pared tiene $5$ baldosas, porque $5 \cdot 5 = 25$. Por eso: $\sqrt{25} = 5$.
* Si tiene **64 baldosas**, cada fila mide $8$, porque $8 \cdot 8 = 64$. Por eso: $\sqrt{64} = 8$.
* Si tiene **144 baldosas**, cada fila mide $12$, porque $12 \cdot 12 = 144$. Por eso: $\sqrt{144} = 12$.

### Tabla de Cuadrados que Conviene Reconocer a Simple Vista

| Base | Cuadrado ($n^2$) | Raíz Cuadrada Exacta |
| :---: | :---: | :---: |
| 1 | $1^2 = 1$ | $\sqrt{1} = 1$ |
| 2 | $2^2 = 4$ | $\sqrt{4} = 2$ |
| 3 | $3^2 = 9$ | $\sqrt{9} = 3$ |
| 4 | $4^2 = 16$ | $\sqrt{16} = 4$ |
| 5 | $5^2 = 25$ | $\sqrt{25} = 5$ |
| 6 | $6^2 = 36$ | $\sqrt{36} = 6$ |
| 7 | $7^2 = 49$ | $\sqrt{49} = 7$ |
| 8 | $8^2 = 64$ | $\sqrt{64} = 8$ |
| 9 | $9^2 = 81$ | $\sqrt{81} = 9$ |
| 10 | $10^2 = 100$ | $\sqrt{100} = 10$ |
| 11 | $11^2 = 121$ | $\sqrt{121} = 11$ |
| 12 | $12^2 = 144$ | $\sqrt{144} = 12$ |
| 13 | $13^2 = 169$ | $\sqrt{169} = 13$ |
| 14 | $14^2 = 196$ | $\sqrt{196} = 14$ |
| 15 | $15^2 = 225$ | $\sqrt{225} = 15$ |
| 20 | $20^2 = 400$ | $\sqrt{400} = 20$ |

---

## 3. El Secreto de los Signos en ℤ: Las Dos Soluciones y los Prohibidos

### A) El Secreto de las Dos Soluciones Opuestas (±)
En los números naturales solo pensamos en positivo, pero en los **números enteros (ℤ)** ocurre algo fundamental:  
¿Qué número multiplicado por sí mismo da $25$?
* Con positivo: $(+5) \cdot (+5) = +25$
* Con negativo: $(-5) \cdot (-5) = +25$ *(menos por menos da más)*

Por tanto, en ℤ, todo número positivo tiene **dos raíces cuadradas opuestas**:
$$\sqrt{25} = \pm 5 \quad (+5 \text{ y } -5)$$

*(Nota práctica: salvo que el enunciado te pida explícitamente las dos soluciones en ℤ, en el cálculo escolar se suele tomar la raíz principal positiva)*.

---

### B) ¿Por qué $\sqrt{-16}$ NO existe en los números reales?
Buscamos un número que multiplicado por sí mismo dé un resultado negativo:
* ¿Será $+4$? No, porque $(+4) \cdot (+4) = +16$.
* ¿Será $-4$? Tampoco, porque $(-4) \cdot (-4) = +16$ (negativo por negativo da positivo).

> **Conclusión fundamental:**  
> Cualquier número elevado al cuadrado da siempre un resultado positivo o cero.  
> **No existe ningún número real que al elevarse al cuadrado dé negativo.**  
> Por tanto: **$\sqrt{-16}$ NO TIENE SOLUCIÓN REAL**.

---

### C) ¿Por qué la raíz CÚBICA $\sqrt[3]{-8}$ SÍ existe?
En una raíz cúbica, el índice es $3$ (impar). Recuerda el baile de parejas:
$$(-2) \cdot (-2) \cdot (-2) = (+4) \cdot (-2) = -8$$
Como el exponente $3$ es impar, el signo menos solitario sobrevive. Por tanto:
$$\sqrt[3]{-8} = -2$$

### Los Cubos Perfectos Clásicos

| Base | Cubo ($n^3$) | Raíz Cúbica Positiva | Raíz Cúbica Negativa |
| :---: | :---: | :---: | :---: |
| 1 | $1^3 = 1$ | $\sqrt[3]{1} = 1$ | $\sqrt[3]{-1} = -1$ |
| 2 | $2^3 = 8$ | $\sqrt[3]{8} = 2$ | $\sqrt[3]{-8} = -2$ |
| 3 | $3^3 = 27$ | $\sqrt[3]{27} = 3$ | $\sqrt[3]{-27} = -3$ |
| 4 | $4^3 = 64$ | $\sqrt[3]{64} = 4$ | $\sqrt[3]{-64} = -4$ |
| 5 | $5^3 = 125$ | $\sqrt[3]{125} = 5$ | $\sqrt[3]{-125} = -5$ |
| 10 | $10^3 = 1000$ | $\sqrt[3]{1000} = 10$ | $\sqrt[3]{-1000} = -10$ |

> **Regla de oro de los signos para raíces:**  
> Índice **PAR** ($\sqrt{a}$, $\sqrt[4]{a}$) de número negativo $\to$ **NO EXISTE en ℝ**.  
> Índice **IMPAR** ($\sqrt[3]{a}$, $\sqrt[5]{a}$) de número negativo $\to$ **SÍ EXISTE y conserva el signo del radicando**.

---

## 4. Raíz Entera y Resto por Tanteo (El Enfoque Estricto en ℤ)

¿Qué ocurre si te piden calcular $\sqrt{46}$?  
Ningún número entero al cuadrado da exactamente $46$. La habitación no es un cuadrado perfecto: si montamos el cuadrado más grande posible, **nos sobrarán baldosas sueltas**.

Buscamos entre qué dos cuadrados perfectos consecutivos queda atrapado el número:

### Ejemplo: Resolver $\sqrt{46}$
Calculemos los cuadrados vecinos:
$$6^2 = 36$$
$$7^2 = 49 \quad (\text{se pasa de } 46)$$

El número $46$ queda atrapado entre ambos:
$$36 < 46 < 49 \implies 6^2 < 46 < 7^2$$

* **Raíz entera ($r$):** El cuadrado más grande que cabe sin pasarse es **$6$**.
* **Resto:** Cantidad de baldosas que sobran:
$$\text{Resto} = 46 - 6^2 = 46 - 36 = \mathbf{10}$$

### Fórmula Obligatoria de Comprobación:
$$\text{Radicando} = \text{Raíz}^2 + \text{Resto}$$
$$46 = 6^2 + 10 = 36 + 10 = 46$$

### La Ley del Resto Máximo:
El resto nunca puede ser igual o mayor que el siguiente nivel:
$$\text{Resto Máximo} = 2 \cdot \text{Raíz}$$
Para $\sqrt{46}$, la raíz es $6$. El resto máximo permitido es $2 \cdot 6 = 12$.  
Como nuestro resto es $10$, y $10 \le 12$, el cálculo es plenamente correcto.

---

## 5. Esquemas Visuales de Pizarra: Cómo Resolver Raíces

### MÉTODO 1: El Algoritmo Tradicional de la Caja (Ejemplo Maestro: $\sqrt{592}$)

<pre style="background: #0f172a; color: #38bdf8; padding: 1.25rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.95rem; line-height: 1.45; overflow-x: auto;">
    √ 5 . 92   │  2 4            ◄── [Piso 1: Resultado de la Raíz]
     -4        ├───────────────
     ───       │  44 x 4 = 176   ◄── [Piso 2: Doble auxiliar y hueco]
      1   92   │
     -1   76   │
     ───────   │
          16   │                 ◄── [Resto Entero]
</pre>

#### Guía visual paso a paso de la caja:
1. **Separar en parejas (de derecha a izquierda):** $592 \to 5\ .\ 92$.
2. **Raíz del primer grupo:** Buscamos el cuadrado que cabe en $5$: es $2$ (porque $2^2 = 4$). Ponemos el **2** arriba. Restamos $5 - 4 = \mathbf{1}$.
3. **Bajar la pareja y doblar:** Bajamos el $92$ al lado del $1 \to \mathbf{192}$. En la línea auxiliar ponemos el **doble de la raíz** ($2 \cdot 2 = \mathbf{4}$).
4. **Probar el número en el hueco ($4\square \cdot \square$):**  
   $43 \cdot 3 = 129$  
   $44 \cdot 4 = 176$  
   $45 \cdot 5 = 225$ *(se pasa)*.  
   El número ganador es el **4**: lo subimos a la raíz (ya tenemos **24**).
5. **Resta final:** Restamos $192 - 176 = \mathbf{16}$.

**Resultado:** Raíz entera = **24** y Resto = **16**.  
**Comprobación:** $24^2 + 16 = 576 + 16 = 592$.

---

### MÉTODO 2: Por Descomposición Factorial (Para Cuadrados Perfectos)

Para números exactos como $\sqrt{144}$:
1. **Descomponer en primos con la raya vertical:** $144 = 2^4 \cdot 3^2$.
2. **Introducir las potencias bajo el radical:** $\sqrt{144} = \sqrt{2^4 \cdot 3^2}$.
3. **Dividir cada exponente entre 2 (las parejas salen fuera):** $2^{4 : 2} \cdot 3^{2 : 2} = 2^2 \cdot 3^1$.
4. **Multiplicar el resultado exterior:** $4 \cdot 3 = \mathbf{12}$.

---

## 6. Misiones de Entrenamiento (Bloque 6)

### Misión 1: Cuadrados Perfectos, Decimales y Signos en ℤ
Calcula el valor de cada expresión (o razona si no tiene solución real):

| Caso | Expresión | Tu Respuesta |
| :---: | :---: | :---: |
| **Caso a** | $\sqrt{64}$ | |
| **Caso b** | $\sqrt{-49}$ | |
| **Caso c** | $\sqrt[3]{-27}$ | |
| **Caso d** | $\sqrt[3]{+64}$ | |
| **Caso e** | $\sqrt{0{,}25}$ | |
| **Caso f** | $\sqrt{2{,}25}$ | |
| **Caso g** | $\sqrt{0{,}0009}$ | |

---

### Misión 2: Raíz Entera y Resto por Tanteo en ℤ
Calcula entre qué cuadrados perfectos se sitúa cada número, halla su raíz entera y resto, y escribe la fórmula de comprobación ($\text{Radicando} = \text{Raíz}^2 + \text{Resto}$):

| Caso | Radicando | Cuadrados que lo encierran | Raíz Entera | Resto |
| :---: | :---: | :--- | :---: | :---: |
| **Caso a** | $\sqrt{46}$ | $6^2 < 46 < 7^2$ | | |
| **Caso b** | $\sqrt{70}$ | | | |
| **Caso c** | $\sqrt{230}$ | | | |
| **Caso d** | $\sqrt{400}$ | | | |

---

### Misión 3: El Algoritmo Tradicional de la Caja
Calcula mediante el esquema tradicional de la caja la raíz entera y el resto de cada número:
* **Caso a:** $\sqrt{234} = \dots$
* **Caso b:** $\sqrt{592} = \dots$
* **Caso c:** $\sqrt{3502} = \dots$
* **Caso d:** $\sqrt{4096} = \dots$
* **Caso e:** $\sqrt{7923} = \dots$

---

## 7. Solucionario Guiado con Comprobación (Autocorrección)

### Soluciones Misión 1:

| Caso | Expresión | Solución | Justificación Didáctica |
| :---: | :---: | :---: | :--- |
| **Caso a** | $\sqrt{64}$ | **8** | $8 \cdot 8 = 64$ (en ℤ también admite $-8$). |
| **Caso b** | $\sqrt{-49}$ | **No existe en ℝ** | Ningún número real al cuadrado da negativo. |
| **Caso c** | $\sqrt[3]{-27}$ | **-3** | $(-3) \cdot (-3) \cdot (-3) = -27$. Índice impar conserva el signo. |
| **Caso d** | $\sqrt[3]{+64}$ | **+4** | $4 \cdot 4 \cdot 4 = 64$. |
| **Caso e** | $\sqrt{0{,}25}$ | **0,5** | $\sqrt{25}=5$; 2 decimales se dividen entre 2 $\to$ 1 decimal. |
| **Caso f** | $\sqrt{2{,}25}$ | **1,5** | $\sqrt{225}=15$; 2 decimales pasan a 1 decimal. |
| **Caso g** | $\sqrt{0{,}0009}$ | **0,03** | $\sqrt{9}=3$; 4 decimales se dividen entre 2 $\to$ 2 decimales. |

---

### Soluciones Misión 2:

| Caso | Radicando | Cuadrados que lo encierran | Raíz Entera | Resto | Fórmula de Comprobación |
| :---: | :---: | :--- | :---: | :---: | :--- |
| **Caso a** | $\sqrt{46}$ | $6^2 = 36 < 46 < 49 = 7^2$ | **6** | **10** | $46 = 6^2 + 10 = 36 + 10 = 46$ |
| **Caso b** | $\sqrt{70}$ | $8^2 = 64 < 70 < 81 = 9^2$ | **8** | **6** | $70 = 8^2 + 6 = 64 + 6 = 70$ |
| **Caso c** | $\sqrt{230}$ | $15^2 = 225 < 230 < 256 = 16^2$ | **15** | **5** | $230 = 15^2 + 5 = 225 + 5 = 230$ |
| **Caso d** | $\sqrt{400}$ | Cuadrado exacto: $20^2 = 400$ | **20** | **0** | $400 = 20^2 + 0 = 400$ |

---

### Soluciones Misión 3: Esquemas de Pizarra de la Caja

#### Caso a: $\sqrt{234}$
<pre style="background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.9rem; line-height: 1.4; overflow-x: auto;">
    √ 2 . 34   │  1 5
     -1        ├───────────────
     ───       │  25 x 5 = 125
      1   34   │
     -1   25   │
     ───────   │
           9   │  ◄── Resto
</pre>
* **Raíz entera:** **15** | **Resto:** **9**
* **Comprobación:** $15^2 + 9 = 225 + 9 = 234$

---

#### Caso b: $\sqrt{592}$
<pre style="background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.9rem; line-height: 1.4; overflow-x: auto;">
    √ 5 . 92   │  2 4
     -4        ├───────────────
     ───       │  44 x 4 = 176
      1   92   │
     -1   76   │
     ───────   │
          16   │  ◄── Resto
</pre>
* **Raíz entera:** **24** | **Resto:** **16**
* **Comprobación:** $24^2 + 16 = 576 + 16 = 592$

---

#### Caso c: $\sqrt{3502}$
<pre style="background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.9rem; line-height: 1.4; overflow-x: auto;">
    √ 35 . 02  │  5 9
     -25       ├───────────────
     ────      │ 109 x 9 = 981
      10   02  │
      -9   81  │
      ───────  │
           21  │  ◄── Resto
</pre>
* **Raíz entera:** **59** | **Resto:** **21**
* **Comprobación:** $59^2 + 21 = 3481 + 21 = 3502$

---

#### Caso d: $\sqrt{4096}$ (Cuadrado Perfecto)
<pre style="background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.9rem; line-height: 1.4; overflow-x: auto;">
    √ 40 . 96  │  6 4
     -36       ├───────────────
     ────      │ 124 x 4 = 496
       4   96  │
      -4   96  │
      ───────  │
            0  │  ◄── Resto (Exacta)
</pre>
* **Raíz entera:** **64** | **Resto:** **0** *(Exacta)*
* **Comprobación:** $64^2 + 0 = 4096$

---

#### Caso e: $\sqrt{7923}$
<pre style="background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.9rem; line-height: 1.4; overflow-x: auto;">
    √ 79 . 23  │  8 9
     -64       ├───────────────
     ────      │ 169 x 9 = 1521
      15   23  │
     -15   21  │
     ────────  │
            2  │  ◄── Resto
</pre>
* **Raíz entera:** **89** | **Resto:** **2**
* **Comprobación:** $89^2 + 2 = 7921 + 2 = 7923$
