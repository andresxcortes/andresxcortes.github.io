---
title: "Estándares PCI SSC e IA: hacia un framework de seguridad para entornos de pago"
summary: "Un framework de seis dominios construido sobre los documentos de PCI SSC sobre IA, con el control mínimo y la evidencia que un evaluador puede auditar en cada uno."
type: "note"
status: "As of Nov 7, 2026 · in Spanish"
date: 2026-11-07
region: ["LatAm"]
services: ["Regulatory coverage", "AI security"]
language: "Spanish"
featured: false
draft: false
---

Recientemente revisé los principios de PCI SSC sobre el uso de IA en entornos de pago y considero que son la base correcta para pensar la seguridad de estos sistemas. Sin embargo, son una guía y no requisitos que un evaluador pueda auditar. Por eso me permito proponer un framework de seis dominios construido sobre PCI SSC, que incorpora de otras fuentes solo lo necesario para llevarlo a la práctica: qué limita el estándar, cómo se controla y qué evidencia se le presenta al evaluador.

## La base: lo que establece PCI SSC

La autoridad de este artículo es PCI SSC, y de ella se desprenden tres documentos. El primero es el blog de Andrew Jamieson, [AI Principles: Securing the Use of AI in Payment Environments](https://blog.pcisecuritystandards.org/ai-principles-securing-the-use-of-ai-in-payment-environments) (11 de septiembre de 2025), que ordena los principios en cuatro grupos: lo que una IA **debe ser**, lo que **no debería ser**, lo que **debería ser** y lo que **puede ser**. Su punto de partida es que la IA no exime del cumplimiento, ya que debe desplegarse y administrarse según los requisitos aplicables de PCI SSC. A partir de ahí limita qué se le puede confiar (secretos de alto impacto, acciones que implican aceptar responsabilidad formal, la creación y el despliegue de software sin supervisión humana) y qué debería cumplir (registrar sus acciones con un humano responsable, validarse antes y durante el despliegue, poder apagarse y operar con credenciales propias y acotadas). El propio PCI SSC aclara que es una guía y no una lista exhaustiva, y que prevé actualizarla.

El segundo es la guía *Integrating Artificial Intelligence in PCI Assessments* (versión 1.0, marzo de 2025). Regula el uso de IA por parte de los evaluadores y no de las entidades evaluadas, pero deja una lógica aplicable a ambos: la IA es una herramienta y no un evaluador, la responsabilidad es humana, el uso se declara al cliente y se documenta, y los resultados se validan de forma independiente. Para la entidad que usa su propia IA para monitorear el cumplimiento, la guía es explícita: el evaluador no puede basarse en la evaluación que esa IA haga de la evidencia y debe realizar por su cuenta el muestreo y las entrevistas (sección 4.1).

El tercero es el suplemento informativo *Security Considerations for AI Systems* (versión 1.0, septiembre de 2026), el más extenso de los tres y el que más se acerca a lo que busca este artículo. Aclara desde el inicio que es una guía y que no reemplaza ningún requisito de PCI SSC (p. 1). Para el alcance, trata a la IA como cualquier otra tecnología: un sistema de IA que recibe datos de cuenta, o que tiene conectividad sin restricciones con sistemas que los procesan, forma parte del entorno de datos del titular, y el que se conecta al CDE o afecta su seguridad también está en alcance de PCI DSS (p. 15). Para limitarla, propone la «mínima agencia» y evitar que un mismo sistema reúna acceso a datos sensibles, exposición a contenido no confiable y comunicación externa, combinación a la que llama «tríada letal» (*lethal trifecta*); si una tarea requiere las tres, se reparte entre agentes distintos (pp. 4 y 11). Admite pasar de aprobar cada acción a supervisar el conjunto (*human-over-the-loop*) bajo ciertas condiciones, pero no cuando el agente accede a datos de titular en claro (pp. 8-9 y 23). Por último, no cubre el uso de IA para realizar pagos (p. 1), un límite que conviene tener presente más adelante.

## Aportes complementarios

Los documentos de PCI SSC fijan los límites y, en el caso del suplemento, buena parte de los controles, pero dejan fuera el uso de IA para ejecutar pagos y no bajan a la operación diaria. Para eso recurro a dos fuentes complementarias, a las que reconozco un aporte y no una autoridad comparable. La primera es el playbook de CrowdStrike (white paper, © 2026), que aporta una mirada operativa: no se puede proteger lo que no se ve, y un sistema de IA se defiende pensando cómo lo atacaría un adversario, con pruebas de equipo rojo y monitoreo continuo. No menciona PCI. La segunda es un artículo de [dev.to](https://dev.to/l_x_1/pci-dss-compliance-for-ai-agents-making-autonomous-payments-58bh) (L_X_1, PolicyLayer, publicado un 5 de enero sin año visible), que baja estas ideas a un caso de agentes que pagan, que es justo el caso que el suplemento de PCI SSC deja fuera: tokeniza para que el dato de tarjeta no llegue al agente y propone un mapeo con los requisitos 1, 7, 10 y 12 de PCI DSS. Ambas son de proveedores con interés comercial, y el mapeo de la segunda es del autor y no es oficial.

Por eso las uso para dar forma operativa a los controles y no para fijar qué se exige. Cuando una de ellas se aparta de PCI SSC, prevalece PCI SSC.

## Síntesis

Bajo ese criterio, las fuentes aportan tres ideas que sostienen el framework. La primera es que la responsabilidad sigue siendo humana y debe quedar registrada, que es lo que establece PCI SSC y refuerza el playbook al pedir trazabilidad de datos, configuración, prompts y salidas. La segunda es que conviene reducir lo que la IA puede tocar antes de intentar monitorearla: PCI SSC limita el acceso (con mínima agencia y sin reunir en un mismo sistema datos sensibles, contenido no confiable y comunicación externa) y propone tokens, y dev.to muestra cómo aplicarlo a agentes que pagan. La tercera es que la evidencia debe poder reproducirse por un tercero y no depender de lo que informe la propia IA, que es el criterio de la guía de evaluaciones.

Al cruzar las fuentes aparecían además tres tensiones, y el suplemento de PCI SSC permite resolver las tres con su propio criterio. La primera es qué se registra: el playbook pide capturar prompts, mientras que dev.to recomienda no registrar nunca datos completos de tarjeta, y como un prompt puede contener datos de cuenta, el log terminaría almacenándolos. El suplemento pide registrar con el detalle suficiente para investigar y atribuir las acciones de la IA, pero evitando almacenar datos sensibles como los de cuenta, que deben enmascararse o tokenizarse antes de llegar al log (pp. 4, 16 y 18). La segunda es la autonomía de respuesta: el playbook defiende responder «a la velocidad de la máquina», y PCI SSC admite acciones autónomas, pero con un humano responsable, con posibilidad de aislar la IA y de revertir lo que hizo, y con registros de esas acciones que no se puedan borrar (pp. 4, 8-9 y 16). La tercera es quién valida: según la guía de evaluaciones, la evidencia de una IA propia no basta por sí sola, y el suplemento coincide al pedir que los controles de salida de datos (DLP) sean independientes de la IA que vigilan (p. 10) y que la validación incluya pruebas adversarias y no solo funcionales (p. 6).

Ni siquiera el suplemento de PCI SSC, que aclara que no agrega ni sustituye requisitos (p. 1), ofrece un conjunto de criterios que una entidad de pago pueda implementar y un evaluador pueda auditar. Ese es el vacío que intenta cubrir la propuesta.

## Propuesta: un framework de seis dominios

De PCI SSC, el framework toma los límites; de PCI DSS, el requisito al que se asocia cada control; y del playbook y del artículo de dev.to, la forma de operarlo. Cada dominio termina en evidencia que un evaluador pueda muestrear, no en un resumen generado por la propia IA.

| Dominio | Principio de PCI SSC | Requisito de PCI DSS | Control mínimo | Evidencia para el evaluador |
|:--|:--|:--|:--|:--|
| **1. Alcance e inventario** | La IA se despliega y administra según los requisitos de PCI SSC aplicables | 1.2.4, 12.5.1, 12.5.2 y 12.8 (suplemento, pp. 15 y 18) | Inventario de modelos, agentes e IA integrada en SaaS que tocan datos de cuenta o el entorno de datos; clasificación por nivel de riesgo (playbook, pp. 6-8); AI-BOM por sistema y registro de los almacenes de datos que la IA genera, como logs, transcripciones y contexto (suplemento, pp. 7 y 18) | Inventario validado y diagrama de flujos de datos con IA |
| **2. Identidad y autoridad** | Credenciales limitadas por caso de uso; un humano responsable; sin autonomía para operaciones que requieren aceptar una responsabilidad formal | 7 y 8 (8.4.2: suplemento, p. 17) | Credencial propia y revocable por agente; topes por transacción y por día; aprobación humana nominal para toda acción de autoridad; credenciales atadas al dispositivo y con vigencia limitada, porque una IA no puede implementar el MFA (suplemento, p. 17) | Lista de credenciales por agente; registro de aprobadores |
| **3. Datos de cuenta y secretos** | Acceso a datos de cuenta solo si están protegidos; sin secretos de alto impacto; sin generar valores aleatorios o secretos con IA | 3 (3.3.1: suplemento, p. 15) | Tokenización o PAN de un solo uso; claves y credenciales ajenas fuera del contexto del modelo; generador aleatorio validado; ningún dato de autenticación sensible (SAD), ni siquiera cifrado, y ningún bloque PIN (suplemento, p. 16) | Revisión de prompts y contexto de producción; configuración de tokenización |
| **4. Aislamiento y entradas/salidas** | Protegida contra entradas maliciosas y salidas mal formadas; aislada de otros usuarios y otras IA | 1 y 6 | Segmentación de los componentes que ejecutan pagos; filtrado de entradas y salidas; desarrollo, prueba y producción separados (playbook, p. 10); DLP en la salida, independiente de la IA que vigila; si una tarea reúne datos sensibles, contenido no confiable y comunicación externa, repartirla entre agentes distintos (suplemento, pp. 10-11 y 16) | Reglas de red; resultados de pruebas de inyección |
| **5. Registro, detección y respuesta** | Acciones y prompts registrados; humano responsable; apagado fácil; acciones autónomas solo si fallan de forma segura | 10 y 12.10 (12.10: suplemento, p. 18) | Telemetría de IA integrada al SIEM (playbook, p. 12); detección de inyección y de uso inseguro de herramientas; reversión de lo que la IA haya hecho, con registros que no se puedan borrar (suplemento, p. 4); apagado probado; datos de cuenta enmascarados antes de registrar | Logs con ID de token y tarjeta enmascarada; acta de un simulacro de apagado; plan de respuesta a incidentes con escenarios de falla de la IA (suplemento, p. 18) |
| **6. Validación continua y gobierno** | Validada antes y durante el despliegue; tratada como un posible «insider» malicioso | 11 y 12 | Pruebas de equipo rojo sobre el modelo con MITRE ATLAS y OWASP Top 10 para LLM (playbook, p. 14); revalidación ante cambios de modelo, revisión al menos trimestral y versiones del modelo fijadas cuando el proveedor lo permita (suplemento, p. 18); política documentada de uso de IA | Informes de prueba; política aprobada; arquitectura informada al evaluador |

Los requisitos que la tabla atribuye al suplemento (1.2.4, 3.3.1, 8.4.2, 12.5.1, 12.5.2, 12.8 y 12.10) son los que ese documento cita. Los requisitos 1, 7, 10 y 12 provienen del mapeo de dev.to, que es del autor y no es oficial. Los demás (6 y 11) son propios. Conviene validar todo con un evaluador calificado antes de usarlo en una evaluación.

Las tres tensiones se resuelven de la siguiente manera. En cuanto a qué se registra, se capturan prompts y respuestas, pero los datos de cuenta se tokenizan o se enmascaran antes de llegar al log. En cuanto a la autonomía, la IA puede contener (aislar, limitar, bloquear) con un alcance acotado y reversible, pero toda acción de autoridad requiere un aprobador humano identificado. En cuanto a quién valida, la evidencia consiste en muestras que el evaluador puede reproducir, y no en valoraciones que la IA hace de sí misma.

## Acciones para entidades de pago

Son seis pasos, en este orden. Los primeros cinco no dependen de terceros; el sexto requiere la participación de un evaluador.

1. **Inventariar todo sistema de IA que acceda a datos de cuenta**, incluidos los que llegan integrados en herramientas SaaS (dominio 1).
2. **Asignar a cada agente una credencial propia, un tope de operación y un responsable identificado** (dominio 2).
3. **Retirar del contexto del modelo los PAN, las claves y los secretos**, y tokenizar lo que la IA necesite ver (dominio 3).
4. **Definir qué se registra y enmascarar los datos de cuenta antes de que lleguen al log** (dominio 5).
5. **Probar el apagado y la inyección de prompts antes de pasar a producción y después de cada cambio de modelo** (dominios 4, 5 y 6).
6. **Presentar la arquitectura de IA al evaluador** y acordar con él el mapeo de requisitos antes de la evaluación (dominio 6).

En Argentina, los proveedores de servicios de pago alcanzados por la [Com. «A» 8398 del BCRA](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf) (5 de febrero de 2026) pueden tomar este esquema como insumo para su adecuación a los requisitos mínimos de riesgos de tecnología y seguridad de la información. Este artículo no pretende cubrir la pregunta de si esa comunicación trata el uso de IA.

## Límites de este artículo

- Ninguna de las fuentes de PCI SSC exige este framework. Los principios y el suplemento son guías que no modifican requisitos, y la guía de evaluaciones regula al evaluador, no a la entidad.
- Dos de las cinco fuentes son de proveedores con interés comercial (CrowdStrike y PolicyLayer). Sus ejemplos, como los cientos de agentes no contabilizados que describe el playbook en dos evaluaciones (p. 6) o los topes de USD 1.000 por transacción de dev.to, se citan como ilustración sin verificación independiente.
- El mapeo a PCI DSS combina requisitos que cita el suplemento de PCI SSC (1.2.4, 3.3.1, 8.4.2, 12.5.1, 12.5.2, 12.8 y 12.10), requisitos tomados de dev.to (1, 7, 10 y 12) y dos propios (6 y 11). No trabajé con el texto de PCI DSS en este borrador, por lo que habría que validarlo contra el estándar y con un evaluador calificado.
- El artículo de dev.to muestra la fecha «5 de enero» sin año; su versión original está en policylayer.com.
- El suplemento de PCI SSC no cubre el uso de IA para realizar pagos (p. 1). Lo que el framework dice sobre agentes que pagan se apoya, por lo tanto, en los principios del blog y en el artículo de dev.to, y no en el suplemento.

## Fuentes

- Jamieson, A. (PCI SSC), [AI Principles: Securing the Use of AI in Payment Environments](https://blog.pcisecuritystandards.org/ai-principles-securing-the-use-of-ai-in-payment-environments), 11 de septiembre de 2025.
- PCI Security Standards Council, *Integrating Artificial Intelligence in PCI Assessments: Guidelines*, versión 1.0, marzo de 2025.
- PCI Security Standards Council, *Security Considerations for AI Systems*, Information Supplement, versión 1.0, septiembre de 2026. Las páginas citadas son las impresas.
- CrowdStrike, *Protección de los sistemas de IA: un playbook para líderes de seguridad*, white paper, © 2026. Las páginas citadas son las impresas.
- L_X_1 (PolicyLayer), [PCI DSS Compliance for AI Agents: Making Autonomous Payments](https://dev.to/l_x_1/pci-dss-compliance-for-ai-agents-making-autonomous-payments-58bh), dev.to.
- Banco Central de la República Argentina, [Comunicación «A» 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf) (5 de febrero de 2026).
