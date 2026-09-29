# BLOQUE 4: El Laboratorio de las Potencias y el Baile de Parejas

Las potencias suelen asustar porque hacen crecer los números a gran velocidad. Sin embargo, no son más que una **máquina de clonación multiplicativa**: en vez de escribir sumas interminables, empaquetamos multiplicaciones repetidas.

## 1. Anatomía y Concepto Clave: ¿Quién es quién en la Potencia?

$$
\text{Base}^{\text{Exponente}} = b^n
$$

| 

| **Elemento** | **Nombre Didáctico** | **Función en la Máquina** | **Ejemplo en 24** | 
| $b$ | **La Base (El Personaje)** | Es el número que entra en la cabina y va a ser clonado. | $2$ | 
| $n$ | **El Exponente (El Marcador)** | Indica cuántas copias exactas salen para multiplicarse entre sí. | $4 \implies 2 \cdot 2 \cdot 2 \cdot 2 = \mathbf{16}$ | 

> ⚠️ **La trampa mortal del 90%:** Multiplicar la base por el exponente ($2 \cdot 4 = 8$). **¡TOTALMENTE PROHIBIDO!** Una potencia jamás es una multiplicación simple.

## 2. La Ley del Baile de Parejas: ¿Positivo o Negativo?

Cuando la base es un número negativo con paréntesis, los signos menos entran en la pista de baile:

* Dos signos menos que bailan juntos forman una pareja feliz: $(-) \cdot (-) = \mathbf{+}$.

| **Exponente** | **Metáfora de la Pista de Baile** | **Signo Final** | **Ejemplo Real** | 
| **PAR** ($2, 4, 6, 8, 100\dots$) | Todos los menos encuentran su pareja. Nadie se queda solo ni triste. | **POSITIVO (**$+$**)** | $(-2)^4 = (+4) \cdot (+4) = \mathbf{+16}$  $(-1)^{104} = \mathbf{+1}$ | 
| **IMPAR** ($1, 3, 5, 7, 213\dots$) | Se forman parejas de dos en dos, pero **siempre sobra un signo menos solitario** que amarga la fiesta. | **NEGATIVO (**$-$**)** | $(-2)^3 = (+4) \cdot (-2) = \mathbf{-8}$  $(-1)^{213} = \mathbf{-1}$ | 

## 3. Alerta Trampa de Examen: La Ley del Casco Protector

| **Notación** | **¿Lleva Casco?** | **Qué clona el Exponente** | **Cálculo Real** | **Resultado** | 
| $(-3)^2$ | **SÍ (Con Casco)** | Clona a todo el búnker: signo y número. | $(-3) \cdot (-3)$ | $+9$ | 
| $-3^2$ | **NO (Sin Casco)** | Clona únicamente al $3$. El menos espera fuera. | $-(3 \cdot 3)$ | $-9$ | 

### Los Dos Hechizos Especiales:

* **El Agujero Negro (**$b^0$**):** Cualquier número elevado a cero vale uno: $7^0 = 1$, $(-15)^0 = 1$, $2026^0 = \mathbf{1}$.

* **Hacer el Pino (**$b^{-n}$**):** El exponente negativo cae al sótano de una fracción para volverse positivo: 

  $$
  2^{-3} = \frac{1}{2^3} = \mathbf{\frac{1}{8}} \qquad \frac{1}{5^{-2}} = 5^2 = \mathbf{25}
  $$

## 4. La Mochila Ninja: Los 3 Superpoderes de la Misma Base

Cuando dos potencias tienen la **misma base gemela**, no calcules números gigantes: opera directamente con los exponentes.

| **Superpoder** | **Operación** | **Regla Mnemotécnica** | **Fórmula** | **Ejemplo** | 
| **1. La Fusión** | Multiplicación ($\cdot$) | Los ejércitos se unen: **se suman exponentes**. | $a^n \cdot a^m = a^{n+m}$ | $2^3 \cdot 2^5 = 2^{3+5} = \mathbf{2^8}$ | 
| **2. El Duelo Láser** | División ($:$) | Se eliminan mutuamente: **se restan exponentes**. | $a^n : a^m = a^{n-m}$ | $5^7 : 5^3 = 5^{7-3} = \mathbf{5^4}$ | 
| **3. Turbocompresor** | Potencia de potencia | Doble máquina de clonar: **se multiplican**. | $(a^n)^m = a^{n \cdot m}$ | $(3^2)^4 = 3^{2 \cdot 4} = \mathbf{3^8}$ | 

## 5. Esquema Visual de Pizarra: El Laboratorio de Signos y Cascos

```
               ┌───────────────────────────────┐
               │    ¿LLEVA CASCO PARENTESIS?   │
               └───────────────┬───────────────┘
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
         [ SÍ LLEVA: (-a)ⁿ ]           [ NO LLEVA: -aⁿ ]
                │                             │
        ¿CÓMO ES EL EXPONENTE?          El signo menos queda
        ┌───────┴───────┐               fuera desprotegido.
        ▼               ▼               ───────────────────
      [PAR]          [IMPAR]            SIEMPRE DA NEGATIVO
      (2,4,6...)     (1,3,5...)         Ejemplo:
        │               │               -4² = -(4·4) = -16
        ▼               ▼
     POSITIVO        NEGATIVO
      Ejemplo:        Ejemplo:
    (-2)⁴ = +16     (-2)³ = -8

```

## 6. Misión de Entrenamiento (Bloque 4)

### Misión 1: El Detector de Signos y Cascos

Calcula el valor numérico exacto de cada expresión:

| **Caso** | **Expresión** | **¿Positivo o Negativo?** | **Valor Final** | 
| Caso a | $(-2)^5$ |  |  | 
| Caso b | $(-3)^4$ |  |  | 
| Caso c | $-3^4$ |  |  | 
| Caso d | $(-1)^{400}$ |  |  | 
| Caso e | $(-5)^0$ |  |  | 

### Misión 2: Los Superpoderes de la Misma Base

Reduce a una **única potencia**:

| **Caso** | **Expresión** | **Superpoder Aplicado** | **Potencia Única** | 
| Caso a | $3^4 \cdot 3^2 \cdot 3$ | Fusión (Sumar exponentes) |  | 
| Caso b | $7^9 : 7^4$ | Duelo Láser (Restar exponentes) |  | 
| Caso c | $(2^3)^5$ | Turbocompresor (Multiplicar) |  | 
| Caso d | $\frac{(5^2)^4 \cdot 5^3}{5^6}$ | Combinado |  | 

### Misión 3: El Hechizo de los Exponentes Negativos

Reescribe con exponente positivo y calcula el valor si es posible:

* **Caso a:** $4^{-2}$

* **Caso b:** $\frac{1}{3^{-3}}$

* **Caso c:** $\frac{2^{-4} \cdot 2^7}{2^2}$

## 7. Solucionario Guiado con Comprobación (Autocorrección)

### Soluciones Misión 1:

| **Caso** | **Expresión** | **Signo** | **Justificación Didáctica** | **Valor** | 
| Caso a | $(-2)^5$ | $-$ | Exponente $5$ es impar $\to$ sobra un signo menos solitario. | $-32$ | 
| Caso b | $(-3)^4$ | $+$ | Lleva casco y exponente $4$ es par $\to$ parejas completas. | $+81$ | 
| Caso c | $-3^4$ | $-$ | No lleva casco. El menos no se clona: $-(3\cdot 3\cdot 3\cdot 3)$. | $-81$ | 
| Caso d | $(-1)^{400}$ | $+$ | El $400$ es par $\to$ todos tienen pareja. $1$ multiplicado por sí mismo da $1$. | $+1$ | 
| Caso e | $(-5)^0$ | $+$ | Hechizo del agujero negro: cualquier número no nulo elevado a $0$ es $1$. | $+1$ | 

### Soluciones Misión 2:

| **Caso** | **Expresión** | **Desarrollo Paso a Paso** | **Potencia Única** | 
| Caso a | $3^4 \cdot 3^2 \cdot 3^1$ | Se suman los exponentes: $4 + 2 + 1 = 7$ *(el último tiene un* $1$ *invisible)*. | $3^7$ | 
| Caso b | $7^9 : 7^4$ | Se restan los exponentes: $9 - 4 = 5$. | $7^5$ | 
| Caso c | $(2^3)^5$ | Turbocompresor: se multiplican $3 \cdot 5 = 15$. | $2^{15}$ | 
| Caso d | $\frac{(5^2)^4 \cdot 5^3}{5^6}$ | Arriba: $5^{2 \cdot 4} \cdot 5^3 = 5^8 \cdot 5^3 = 5^{11}$. División: $5^{11 - 6} = 5^5$. | $5^5$ | 

### Soluciones Misión 3:

* **Caso a:**
  

  $$
  4^{-2} = \frac{1}{4^2} = \mathbf{\frac{1}{16}}
  $$

* **Caso b:**
  

  $$
  \frac{1}{3^{-3}} = 3^3 = \mathbf{27}
  $$

* **Caso c:**
  

  $$
  \frac{2^{-4} \cdot 2^7}{2^2} = \frac{2^{-4 + 7}}{2^2} = \frac{2^3}{2^2} = 2^{3 - 2} = \mathbf{2^1 = 2}
  $$