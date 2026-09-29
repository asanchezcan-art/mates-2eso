# 🏭 BLOQUE 5: La Fábrica de LEGO y el Gran Despiece de Potencias

A los 12 años, ver en el examen una fracción llena de números grandes como $18^3$, $12^4$, $20^2$, $10^3$ y exponentes negativos parece un laberinto imposible. Pero hay un secreto que lo transforma en un juego de niños: **los números grandes no existen; solo son figuras montadas con piezas pequeñas de LEGO**.

Para resolver cualquier fracción de potencias por difícil que parezca, en nuestra fábrica seguimos siempre **4 estaciones de trabajo ordenadas**.

---

## Estación 1: La Máquina de la Raya Vertical (La Aduana de LEGO)

En nuestra fábrica de potencias **está terminantemente prohibido pasar montado**. Antes de tocar ningún exponente, cada número compuesto tiene que pasar por **la máquina desmontadora de la raya vertical** para separarlo en sus piezas elementales: los números primos ($2, 3, 5, 7, 11\dots$).

### Las 3 Reglas de la Aduana:
1. **La columna de la derecha es VIP:** *¡Únicamente se permiten números primos ($2, 3, 5, 7\dots$)*! Jamás se divide entre $4, 6, 8, 9$ ni $10$.
2. **El orden de prueba en fila:** Exprimimos primero el **$2$** mientras el número sea par. Cuando ya no se pueda dividir entre $2$, probamos con el **$3$**, luego con el **$5$**, etc.
3. **El empaquetado final:** Contamos cuántas piezas repetidas hay en la columna derecha y las agrupamos con su exponente.

---

### Esquema visual de la máquina: Desmontando el 12

```text
  12 | 2   ← ¿12 es par? Sí. Dividimos entre 2 (12 : 2 = 6).
   6 | 2   ← ¿6 es par? Sí. Volvemos a dividir entre 2 (6 : 2 = 3).
   3 | 3   ← Al 3 ya no le cabe el 2. Pasamos al siguiente primo: 3 (3 : 3 = 1).
   1 |     ← ¡Llegamos al 1! La figura ha quedado totalmente desarmada.
```

**Fórmula mágica del 12:**  
Hay dos piezas de $2$ y una pieza de $3$:
$$12 = \mathbf{2^2 \cdot 3}$$

---

### Otros despieces clásicos que caen en el examen:

* **Desmontando el 18:**
  ```text
    18 | 2   (18 : 2 = 9)
     9 | 3   (al 9 no le cabe el 2; pasamos al siguiente primo: 3 -> 9 : 3 = 3)
     3 | 3   (3 : 3 = 1)
     1 | 
  ```
  $$18 = \mathbf{2 \cdot 3^2}$$

* **Desmontando el 20:**
  ```text
    20 | 2   (20 : 2 = 10)
    10 | 2   (10 : 2 = 5)
     5 | 5   (al 5 no le cabe ni el 2 ni el 3; pasamos al 5 -> 5 : 5 = 1)
     1 | 
  ```
  $$20 = \mathbf{2^2 \cdot 5}$$

* **Desmontando el 15 y el 10:**
  * $15 = \mathbf{3 \cdot 5}$
  * $10 = \mathbf{2 \cdot 5}$

---

## Estación 2: El Reparto de Mochilas (Potencia de un Producto)

Una vez que cada número compuesto está desarmado en piezas de LEGO, le colocamos su exponente exterior entre paréntesis como una **mochila de energía**:

$$(18)^3 \longrightarrow (2 \cdot 3^2)^3$$

El exponente de fuera ($3$) es un **multiplicador de energía**: entra en la mochila y multiplica a los exponentes de cada pieza que está dentro (recuerda que el $2$ tiene un $1$ invisible):
* Al $2^1$: $1 \cdot 3 = 3 \longrightarrow \mathbf{2^3}$
* Al $3^2$: $2 \cdot 3 = 6 \longrightarrow \mathbf{3^6}$

$$(18)^3 = (2 \cdot 3^2)^3 = \mathbf{2^3 \cdot 3^6}$$

Otro ejemplo rápido:
$$(12)^4 = (2^2 \cdot 3)^4 = 2^{2 \cdot 4} \cdot 3^{1 \cdot 4} = \mathbf{2^8 \cdot 3^4}$$

¡Mochilas abiertas y todas las piezas primas desfilando en fila!

---

## Estación 3: La Trampilla del Ascensor (Exponentes Negativos)

Si en la fracción aparece alguna pieza enfadada con exponente negativo, no intentes hacer cuentas raras: **activa la trampilla del ascensor**:

$$\frac{3^{-2} \cdot 5^4}{2^{-3}}$$

* Si una potencia está en el numerador (piso de arriba) con exponente negativo, **cae por la trampilla al denominador (abajo)** y su exponente se vuelve positivo y sonriente.
* Si una potencia está en el denominador (abajo) con exponente negativo, **sube al ático (arriba)** y su exponente se vuelve positivo.

$$\frac{3^{-2} \cdot 5^4}{2^{-3}} \longrightarrow \mathbf{\frac{2^3 \cdot 5^4}{3^2}}$$

¡Todos los exponentes quedan limpios y positivos!

---

## Estación 4: La Batalla del Recreo (¿Quién sobrevive?)

Cuando el piso de arriba (numerador) y el piso de abajo (denominador) tienen solo piezas de las mismas familias ($2, 3, 5\dots$), agrupamos primero los soldados del mismo bando (sumando exponentes si están en el mismo piso) y luego llega el momento de los **duelos directos entre arriba y abajo**.

Para cada familia de números primos, nos hacemos una sola pregunta:  
> **«¿Dónde hay más soldados y por cuántos ganan?»**

### Caso A: Ganan los de arriba
$$\frac{3^7}{3^4}$$
* Arriba hay $7$ soldados y abajo hay $4$.
* Se enfrentan en duelo y se anulan $4$ contra $4$ ($7 - 4 = 3$).
* ¿Dónde quedaron los supervivientes? **Arriba**.
* Resultado: $\mathbf{3^3}$.

### Caso B: Ganan los de abajo
$$\frac{5^2}{5^6}$$
* Arriba hay $2$ soldados y abajo hay $6$.
* Se anulan $2$ contra $2$ ($6 - 2 = 4$).
* ¿Dónde quedaron los supervivientes? **Abajo**.
* Resultado: $\mathbf{\frac{1}{5^4}}$ *(o escrito en una sola línea si el enunciado lo pide: $5^{-4}$)*.

---

## 🚀 El Gran Ejemplo Maestro de Examen (Paso a Paso)

Vamos a resolver juntos un ejercicio real idéntico a los del examen:
$$\text{Simplifica: } \frac{12^3 \cdot 15^2}{18^2 \cdot 10^3}$$

### Paso 1: Aduana de la raya vertical (Desmontar cada base)
* $12 = 2^2 \cdot 3$
* $15 = 3 \cdot 5$
* $18 = 2 \cdot 3^2$
* $10 = 2 \cdot 5$

### Paso 2: Sustituir y meter en mochilas con sus exponentes
$$\frac{(2^2 \cdot 3)^3 \cdot (3 \cdot 5)^2}{(2 \cdot 3^2)^2 \cdot (2 \cdot 5)^3}$$

### Paso 3: Abrir las mochilas multiplicando los exponentes
* Arriba:
  * $(2^2 \cdot 3)^3 = 2^{2 \cdot 3} \cdot 3^{1 \cdot 3} = 2^6 \cdot 3^3$
  * $(3 \cdot 5)^2 = 3^2 \cdot 5^2$
* Abajo:
  * $(2 \cdot 3^2)^2 = 2^2 \cdot 3^{2 \cdot 2} = 2^2 \cdot 3^4$
  * $(2 \cdot 5)^3 = 2^3 \cdot 5^3$

Reescribimos la fracción:
$$\frac{2^6 \cdot 3^3 \cdot 3^2 \cdot 5^2}{2^2 \cdot 3^4 \cdot 2^3 \cdot 5^3}$$

### Paso 4: Juntar las piezas de la misma familia en cada piso (Sumar exponentes)
* **Arriba:**
  * Familia del $2$: $2^6$
  * Familia del $3$: $3^3 \cdot 3^2 = 3^{3+2} = 3^5$
  * Familia del $5$: $5^2$
  * Numerador total: $\mathbf{2^6 \cdot 3^5 \cdot 5^2}$
* **Abajo:**
  * Familia del $2$: $2^2 \cdot 2^3 = 2^{2+3} = 2^5$
  * Familia del $3$: $3^4$
  * Familia del $5$: $5^3$
  * Denominador total: $\mathbf{2^5 \cdot 3^4 \cdot 5^3}$

Nos queda la fracción simplificada por bandos:
$$\frac{2^6 \cdot 3^5 \cdot 5^2}{2^5 \cdot 3^4 \cdot 5^3}$$

### Paso 5: La Batalla del Recreo (¿Quién sobrevive?)
* **Familia del 2:** Arriba hay $6$ y abajo hay $5$ $\longrightarrow$ Ganan los de arriba por $1$ ($6 - 5 = 1$) $\longrightarrow \mathbf{2^1}$ (arriba).
* **Familia del 3:** Arriba hay $5$ y abajo hay $4$ $\longrightarrow$ Ganan los de arriba por $1$ ($5 - 4 = 1$) $\longrightarrow \mathbf{3^1}$ (arriba).
* **Familia del 5:** Arriba hay $2$ y abajo hay $3$ $\longrightarrow$ Ganan los de abajo por $1$ ($3 - 2 = 1$) $\longrightarrow \mathbf{5^1}$ (abajo).

Resultado final impecable:
$$\mathbf{\frac{2 \cdot 3}{5} = \frac{6}{5}}$$

---

## 🕵️ El Caso del Detective: Ecuaciones con Potencias

En la página 10 de las fotocopias cae una igualdad donde se esconde una letra desconocida en el exponente:
$$(2^5 \cdot 2^a)^2 = 2^{16}$$

Para resolverlo como un auténtico detective:
1. **Paso 1: Opera el lado izquierdo con los superpoderes normales:**
   * Dentro del paréntesis se suman los exponentes: $2^{5 + a}$
   * Con el turbocompresor de fuera se multiplica: $2^{(5 + a) \cdot 2} = \mathbf{2^{10 + 2a}}$
2. **Paso 2: La regla de los gemelos idénticos:**
   $$2^{10 + 2a} = 2^{16}$$
   Si las bases de abajo son gemelos idénticos (un $2$ a cada lado), **sus cabezas (los exponentes) tienen que ser exactamente iguales**:
   $$10 + 2a = 16$$
3. **Paso 3: Descubre el número secreto:**
   * ¿Cuánto le falta a $10$ para llegar a $16$? Faltan $6$.
   * Si $2a = 6$, entonces $\mathbf{a = 3}$.

---

## 🎯 Tu Misión de Entrenamiento (Bloque 5)

### Misión 1: La máquina de despiece de LEGO
Descompón en tu cuaderno usando la raya vertical y escribe su fórmula mágica en potencias:
* **a)** $36$
* **b)** $60$
* **c)** $72$

### Misión 2: Simplifica la gran fracción
Sigue los 4 pasos (despiece con raya vertical, reparto de mochilas, agrupar y combate de supervivientes):
$$\frac{18^2 \cdot 20^2}{12^3 \cdot 25}$$

### Misión 3: Resuelve el misterio del exponente
Calcula el valor de la incógnita $a$:
$$\frac{5^a \cdot (5^3)^2}{5^4} = 5^6$$

---

## 🔑 Soluciones explicadas para comprobar (¡Autocorrección!)

* **Misión 1:**
  * **a)** $36 = \mathbf{2^2 \cdot 3^2}$ (divides entre $2$, $2$, $3$, $3$).
  * **b)** $60 = \mathbf{2^2 \cdot 3 \cdot 5}$ (divides entre $2$, $2$, $3$, $5$).
  * **c)** $72 = \mathbf{2^3 \cdot 3^2}$ (divides entre $2$, $2$, $2$, $3$, $3$).

* **Misión 2:**
  * Despiece: $18 = 2 \cdot 3^2$, $20 = 2^2 \cdot 5$, $12 = 2^2 \cdot 3$, $25 = 5^2$.
  * Mochilas: $\frac{(2 \cdot 3^2)^2 \cdot (2^2 \cdot 5)^2}{(2^2 \cdot 3)^3 \cdot 5^2} = \frac{2^2 \cdot 3^4 \cdot 2^4 \cdot 5^2}{2^6 \cdot 3^3 \cdot 5^2}$.
  * Agrupamos: $\frac{2^6 \cdot 3^4 \cdot 5^2}{2^6 \cdot 3^3 \cdot 5^2}$.
  * Duelos: Los $2^6$ se anulan completamente. Los $5^2$ se anulan completamente. En los $3$, ganan los de arriba por $1$ ($4 - 3 = 1$).
  * Resultado final: $\mathbf{3}$.

* **Misión 3:**
  * Numerador: $5^a \cdot 5^6 = 5^{a + 6}$.
  * División: $\frac{5^{a + 6}}{5^4} = 5^{a + 6 - 4} = 5^{a + 2}$.
  * Igualdad: $5^{a + 2} = 5^6 \implies a + 2 = 6 \implies \mathbf{a = 4}$.