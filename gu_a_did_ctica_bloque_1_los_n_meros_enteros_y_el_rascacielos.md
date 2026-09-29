# BLOQUE 1: El Rascacielos Infinito de los Números Enteros ($\mathbb{Z}$)

Los números naturales ($1, 2, 3, 4\dots$) servían para contar ovejas, cromos o lápices, pero el mundo real necesita expresar cosas que están por debajo de cero: plantas de sótano, deudas en la panadería o temperaturas bajo cero en invierno.

Para resolver esto nació el universo de los **números enteros ($\mathbb{Z}$)**. Imagina un **rascacielos infinito** con ascensor de cristal: sube hacia el cielo luminoso, se detiene a nivel de calle y baja a las profundidades de la tierra.

---

## 1. Anatomía y Concepto Clave: ¿Quién es quién en el Rascacielos?

| Zona del Rascacielos | Símbolo Matemático | Ejemplos Cotidianos | Significado Intuitivo |
| :--- | :---: | :--- | :--- |
| **Los Pisos Luminosos** | Enteros Positivos ($\mathbb{Z}^+$) | $+1, +2, +3, +10\dots$ | Pisos altos, dinero en el bolsillo, grados de calor sobre cero. |
| **La Calle (Frontera)** | Cero Neutral ($0$) | $0$ | La acera de entrada. Ni sube ni baja, no tiene signo ($+$ ni $-$). |
| **Los Sótanos Oscuros** | Enteros Negativos ($\mathbb{Z}^-$) | $-1, -2, -3, -10\dots$ | Aparcamientos bajo tierra, deudas a pagar, grados bajo cero. |

---

## 2. La Ley Principal: El Ascensor y la Regla del Cocodrilo

### La Ley de la Altura
> **«Cuanto más arriba esté un número en el rascacielos, mayor es su valor.»**

* En los pisos luminosos es evidente: el piso $+8$ está más alto que el $+3$, por tanto $+8 > +3$.
* Entre la calle y el sótano: la calle ($0$) está más alta que cualquier sótano, por tanto $0 > -5$.
* **La gran trampa de los sótanos:** El sótano $-2$ está **más alto** (más cerca del sol) que el sótano $-8$. Por tanto:
$$-2 > -8$$

### La Mnemotecnia del Cocodrilo Comilón ($>$ y $<$)
El cocodrilo tiene un apetito insaciable y **siempre abre sus fauces hacia el número situado en el piso más alto**:
* Si pones a competir $-3$ y $+4$: el cocodrilo abre la boca hacia el $+4$ $\to -3 < +4$.
* Si pones a competir $-1$ y $-9$: el cocodrilo abre la boca hacia el $-1$ $\to -1 > -9$.

---

## 3. Los Dos Superpoderes: El Cuentapasos y el Espejo

| Superpoder | Notación | Metáfora Visual | Acción Concreta | Regla de Oro |
| :--- | :---: | :--- | :--- | :--- |
| **Valor Absoluto** | $|a|$ | **La Lavadora / Cuentapasos** | Mide cuántos pisos de distancia hay hasta la calle ($0$). Lava el signo menos. | **NUNCA** puede dar negativo. Siempre da positivo o cero ($|-7| = 7$). |
| **Opuesto** | $\text{op}(a)$ | **El Espejo Mágico** | Refleja el número exactamente a la misma distancia al otro lado del cero. | Cambia la camiseta: si es positiva la hace negativa, y viceversa ($\text{op}(-6) = +6$). |

---

## 4. Alerta Trampa de Examen: Ordenar Letras con Operaciones

En los exámenes de 2º de ESO es clásico el ejercicio con letras trampa:
> *«Ordena de menor a mayor: $A = -11 - 6$, $B = \text{op}(+13)$, $C = |-9|$, $D = -4 + 7$»*

### El Camino Erróneo vs. El Camino Ninja

| Trampa Común (Error del 90%) | El Protocolo Ninja (Paso a Paso) |
| :--- | :--- |
| Intentar comparar las letras a ojo directamente con los números que aparecen escritos dentro, liándose con los signos interiores. | **Paso 1:** Calcular en sucio el valor numérico limpio de cada letra.<br>**Paso 2:** Situar cada resultado en la torre del ascensor.<br>**Paso 3:** Escribir la cadena ordenada usando el símbolo $<$ (menor a mayor). |

---

## 5. Esquema Visual de Pizarra: La Torre del Ascensor

```text
  [ Cielos ]
      ▲
     +5 | ☀️ Ático (+5)
     +4 |
     +3 | D = -4 + 7 = +3  -------------------------> [Pisos Altos]
     +2 |
     +1 |
  ======+============================================ [Calle / Nivel 0]
      0 | Entrada Neutral (Sin signo)
  ======+============================================
     -1 |
     -2 |
     -3 |
        | ...
     -9 | (Distancia hasta el 0 = 9 pasos -> |-9| = 9)
        | ...
    -13 | B = op(+13) = -13 ------------------------> [Sótano Intermedio]
        | ...
    -17 | A = -11 - 6 = -17 ------------------------> [Sótano Más Profundo]
      ▼
  [ Profundo ]
```

---

## 6. Misión de Entrenamiento (Bloque 1)

### Misión 1: La Máquina del Valor Absoluto y el Espejo
Calcula el valor numérico de cada casilla:

| Caso | Expresión | Tu Respuesta |
| :--- | :--- | :--- |
| Caso a | $|-14|$ | |
| Caso b | $|+23|$ | |
| Caso c | $\text{op}(-18)$ | |
| Caso d | $\text{op}(+31)$ | |
| Caso e | $\text{op}(|-8|)$ | |

---

### Misión 2: El Duelo del Cocodrilo
Coloca el símbolo correcto ($>$ o $<$) entre cada pareja de pisos:

| Caso | Pareja de Números | Símbolo ($>$ o $<$) |
| :--- | :--- | :---: |
| Caso a | $-6$  ___  $-15$ | |
| Caso b | $-9$  ___  $0$ | |
| Caso c | $+4$  ___  $-20$ | |
| Caso d | $\text{op}(+5)$  ___  $|-3|$ | |

---

### Misión 3: El Caso de las Letras Misteriosas
Resuelve las operaciones de cada letra y ordénalas de menor a mayor ($<$) utilizando sus letras originales:
* $A = -15 + 8$
* $B = \text{op}(-10)$
* $C = |-12|$
* $D = -3 - 9$

---

## 7. Solucionario Guiado con Comprobación (Autocorrección)

### Soluciones Misión 1:

| Caso | Expresión | Solución | Justificación Didáctica |
| :--- | :--- | :---: | :--- |
| Caso a | $|-14|$ | **$14$** | La lavadora elimina el signo: la distancia al cero son 14 pisos. |
| Caso b | $|+23|$ | **$23$** | Si ya es positivo, sale exactamente igual (distancia = 23). |
| Caso c | $\text{op}(-18)$ | **$+18$** | El espejo invierte la camiseta de negativo a positivo. |
| Caso d | $\text{op}(+31)$ | **$-31$** | El espejo invierte la camiseta de positivo a negativo. |
| Caso e | $\text{op}(|-8|)$ | **$-8$** | Primero actúa la lavadora: $|-8| = 8$. Luego el opuesto: $\text{op}(8) = -8$. |

---

### Soluciones Misión 2:

| Caso | Pareja | Solución | Justificación Didáctica |
| :--- | :--- | :---: | :--- |
| Caso a | $-6$ vs $-15$ | **$-6 > -15$** | El sótano $-6$ está más cerca de la calle que el sótano $-15$. |
| Caso b | $-9$ vs $0$ | **$-9 < 0$** | El nivel cero (calle) siempre está por encima de cualquier sótano. |
| Caso c | $+4$ vs $-20$ | **$+4 > -20$** | Cualquier número positivo supera a cualquier negativo. |
| Caso d | $\text{op}(+5)$ vs $|-3|$ | **$-5 < 3$** | $\text{op}(+5) = -5$ y $|-3| = 3$. Como $3$ es positivo, la boca abre hacia el $3$. |

---

### Soluciones Misión 3:

| Letra | Operación Desarrollada | Valor Numérico | Posición en el Ascensor |
| :---: | :--- | :---: | :--- |
| **$A$** | Tienes $8$€ y debes $15$€ $\to 8 - 15$ | **$-7$** | Sótano medio |
| **$B$** | Espejo del $-10$ $\to \text{op}(-10)$ | **$+10$** | Piso alto luminoso |
| **$C$** | Lavadora de distancia $\to |-12|$ | **$+12$** | El piso más alto de todos |
| **$D$** | Debes $3$€ y gastas otros $9$€ $\to -3 - 9$ | **$-12$** | El sótano más hondo de todos |

**Cadena final ordenada de menor a mayor:**
$$\mathbf{D < A < B < C} \quad (-12 < -7 < +10 < +12)$$