---
title: "Ciberseguridad financiera en las Américas: apuntes sobre el informe de la OEA"
summary: "Notas de lectura sobre «De la banca al blockchain» (OEA/CICTE, 2026): dónde acierta, en qué difiere de mi tesis sobre amenazas norcoreanas, y nueve acciones para las entidades financieras de la región."
type: "note"
status: "As of Nov 7, 2026 · in Spanish"
date: 2026-11-07
region: ["Argentina", "LatAm"]
services: ["Regulatory coverage", "Threat-informed security programs", "North Korea-linked threats in crypto"]
translation: "oea-bank-to-blockchain-notes"
language: "Spanish"
featured: false
draft: false
---

Recientemente tuve la oportunidad de leer el informe «De la banca al blockchain» (OEA/CICTE, 2026) y considero que tiene aciertos y debilidades. Por una parte, hay amplio consenso, en la industria y entre los reguladores, sobre la necesidad de compartir información y armar una línea base regional, pero en el informe de la OEA el actor estatal es visto como contexto y no como un problema de diseño. Al haber estudiado a profundidad las amenazas persistentes avanzadas (APT) vinculadas a Corea del Norte, me permito expresar mis apuntes sobre el tema.

## Aciertos del informe

El informe acierta en cinco puntos, que coinciden en gran medida con el consenso de la industria financiera y de seguridad de la información.

- **El eslabón humano sigue siendo central.** El informe recuerda que «la tecnología sofisticada no elimina el elemento humano de la ciberseguridad» (p. 67). Mi tesis llega a lo mismo: ofertas laborales falsas y malware a medida superan las defensas a nivel de protocolo.
- **Cripto y banca ya no son mundos separados.** La OEA anticipa que la distinción «será cada vez más difícil de mantener» (p. 68). Mi tesis lo estudia en las rampas: los proveedores de servicios de pago (PSP) y de activos virtuales (PSAV) por donde el dinero entra y sale.
- **Hay vacíos regulatorios que el atacante aprovecha.** La OEA habla de fragmentación entre jurisdicciones (p. 118); mi tesis, del alcance limitado del BCRA sobre las entidades no financieras.
- **El intercambio de información debe ser operativo.** El informe afirma que «debe ser una práctica operativa, no una mera aspiración» (p. 118) y propone CSIRT financieros como nodos de confianza (pp. 73-79). Mi capítulo 7 propone un mecanismo de intercambio de baja latencia entre actores públicos y privados.
- **Los fondos robados dejan rastro.** Los casos argentinos del informe muestran que la cooperación con proveedores de activos virtuales permitió congelar fondos (p. 62). Es la misma lógica de actuar en las rampas.

## Diferencias argumentales y oportunidades de mejora

Las diferencias no están en los datos, sino en la unidad de análisis y en lo que se le pide hacer a las organizaciones. Enumero a continuación cuatro diferencias clave:

### 1. La unidad de análisis es la persona, no el adversario

El informe lo declara: «desvía deliberadamente la conversación de los modelos abstractos de amenazas y la centra en el impacto en el mundo real» (p. 14), con foco en «proteger a las personas y su dinero» (p. 13). Es una decisión coherente para el fraude minorista. Pero choca con su propio capítulo del FMI, que trata el riesgo cibernético como riesgo sistémico (p. 91).

Un actor estatal con una meta de recaudación no se describe por sus víctimas individuales. Se describe por su método, su ventana de lavado y sus puntos de salida.

### 2. El actor estatal aparece a medias y sin distinguir motivaciones

En la sección cripto (5.1) no hay atribución alguna (p. 67). En la 5.2 el actor es «un actor estatal de Asia Oriental» (la RPDC figura solo en el título) y el análisis cubre un único vector: los falsos trabajadores informáticos (p. 69).

En la 6.2 la edición en español atribuye unos USD 2.020 millones robados en 2025 a «actores vinculados al este de Asia, que se han posicionado previamente en redes de infraestructura crítica» (p. 81). La edición oficial en inglés lo redacta mejor: atribuye la cifra a actores vinculados a Estados de Asia Oriental y habla de actores patrocinados por Estados distintos para el posicionamiento previo en infraestructura crítica. Aun así, ambos grupos van en una sola oración con dos notas al pie: un informe de Chainalysis sobre el robo de criptomonedas de Corea del Norte y el aviso AA24-038A de CISA (sobre actores de la República Popular China). Son dos actores con objetivos distintos: uno busca ingresos, el otro acceso persistente. Actores con motivaciones diferentes requieren respuestas defensivas distintas, y el informe no extrae esa consecuencia.

En mi opinión pesa más el impacto por ataque que la frecuencia. Según Chainalysis, los grupos vinculados a Corea del Norte extrajeron al menos USD 2.020 millones en 2025; según TRM Labs, explican el 76 % de las pérdidas por hackeos cripto hasta abril de 2026. Las cifras varían por fuente y las trato como órdenes de magnitud.

### 3. Falta profundizar sobre la exposición regional

El informe menciona implicancias para América Latina, como la dificultad de atribución y el vínculo con el crimen transnacional (p. 67). Cita casos argentinos reales, pero de esquemas piramidales y troyanos bancarios, no de actores estatales (p. 62).

Mi tesis sostiene que la exposición es estructural, y que nace de la alta adopción cripto y de las rampas (PSP y PSAV) que conectan el sistema bancario tradicional con el mundo cripto y DeFi.

### 4. Las sugerencias a las organizaciones son genéricas

La línea base regional del informe enumera capacidades genéricas: autenticación y prevención del fraude, notificación de incidentes, resiliencia operativa, riesgo de terceros, protección del consumidor y comunicación en crisis (p. 118). Solo la 5.2 baja a controles concretos, y fija en tres a siete años el horizonte para normas comunes de verificación de trabajadores remotos (p. 71).

Mi tesis propone controles mínimos para PSP y PSAV mapeados a las técnicas norcoreanas: autenticación resistente al phishing, verificación de lo que se aprueba en cada transacción y chequeos en la contratación. Y un canal de intercambio de baja latencia, porque los fondos robados se mueven en horas y es ahí donde se puede actuar.

## Argentina cambió, la región cambió, la industria cambió

La pregunta regulatoria ya no es si hay regla, sino si la regla está informada por la amenaza. Los capítulos regulatorios de mi borrador, enfocados puntualmente en el caso argentino, son de febrero de 2025, y desde entonces se sumaron dos normas relevantes.

La CNV aprobó la [RG 1058/2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/322539/20250314), que obliga a los PSAV a adoptar políticas de seguridad de la información, procedimientos de gestión del riesgo de ciberseguridad y una auditoría anual de sistemas. Además, el BCRA incorporó a los PSP como sujetos obligados de los requisitos mínimos de riesgos de tecnología y seguridad de la información mediante la [Com. «A» 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf), del 5 de febrero de 2026.

Ambas son normas de gestión de riesgos centradas en la entidad. Sus textos no prevén controles frente a las técnicas de actores estatales, ni un canal de intercambio entre entidades. Ahí está la mayor brecha en el aspecto regulatorio.

Además, el consejo del informe de elegir plataformas reguladas presupone que regulación significa controles eficaces, y el propio texto admite que el estatus regulatorio «por sí solo no garantiza un programa de cumplimiento eficaz» (p. 61).

## Sugerencias para las entidades financieras de la región

Las nueve acciones van de lo que una entidad puede hacer sola a lo que exige coordinación; la última aplica para reguladores y cámaras. Las acciones 1 a 4 no dependen de terceros.

| # | Acción | Responsable funcional | Plazo |
|---|--------|-----------------------|-------|
| 1 | **Mapear la superficie de exposición.** Inventariar rampas de entrada y salida, flujos de firma y custodia de billeteras, y proveedores de personal remoto. | CISO y Área de Riesgos | 30-60 días |
| 2 | **Autenticación resistente al phishing.** Llaves FIDO2 o passkeys en tesorería, firma de transacciones, repositorios y consolas cloud. Sin SMS como segundo factor en operaciones sensibles. | CISO y TI | 90 días |
| 3 | **Verificar lo que se aprueba, no solo quién aprueba.** Aprobación multiparte, destinos en lista permitida, verificación del contenido de la transacción por un canal independiente, límites y demoras en billeteras calientes. | Tesorería y Seguridad | 90 días |
| 4 | **Verificación continua del personal remoto.** KYC periódico a empleados y contratistas, equipos de la empresa con aplicaciones permitidas, revisión inmediata ante cambios de ubicación, dispositivo o datos de pago, controles presenciales y agencias de personal tratadas como parte de la cadena de riesgo (OEA, pp. 70-71). Capacitación contra ofertas laborales falsas. | RR. HH. y Seguridad | 90-180 días |
| 5 | **Capacidad de retener fondos en horas.** Contactos 24x7 pre-acordados con exchanges y emisores, control de depósitos contra direcciones atribuidas y un procedimiento interno con plazo de decisión. | Cumplimiento/PLA y Seguridad | 90-180 días |
| 6 | **Canal de inteligencia de baja latencia.** Plataforma común (por ejemplo MISP, que cita el informe), reglas de intercambio acordadas de antemano y datos útiles: direcciones, agrupaciones de billeteras, indicadores de reclutamiento falso. Sin centralizar toda la información (OEA, p. 118). | CSIRT financiero, cámaras, BCRA, CNV y UIF | 6-12 meses |
| 7 | **Gobernanza anclada en marcos.** Mapear controles a NIST CSF 2.0, ISO/IEC 27001 y CryptoCurrency Security Standard (CCSS); reportar al directorio; tratar el riesgo de terceros y de concentración como riesgo de junta (OEA, pp. 82 y 94). | Directorio y CISO | 6-12 meses |
| 8 | **Simulacros con escenario estatal.** Compromiso de la infraestructura de firma, lavado rápido y comunicación entre instituciones. El informe recomienda simulacros regionales (p. 83). | CISO y Continuidad | 6-12 meses |
| 9 | **Exigir controles mínimos informados por la amenaza y medir por resultados.** Controles ligados a técnicas y un indicador como el tiempo hasta congelar fondos, no solo el cumplimiento de una lista (OEA: «regular en función de los resultados», p. 118). | BCRA, CNV, UIF y Cámara Argentina de Fintech | 12+ meses |

## Límites de este artículo

- Mi borrador de tesis no documenta ataques atribuidos a Corea del Norte contra entidades argentinas. La exposición que describo es estructural. No obstante, el equipo de investigación de Bitso documentó entre 2025 y 2026 intentos de infiltración con candidatos falsos que se hacían pasar por latinoamericanos, reuniones falsas con malware y suplantación de marca contra empresas y personas del sector cripto, entre ellas un exchange con operación regional. Las fuentes públicas no muestran una selección regional, pero hacen plausible que las entidades de la región sean objetivos (ver las [investigaciones del equipo Quetzal de Bitso](https://quetzal.bitso.com/t/state-sponsored)).
- La atribución de estos ataques no está probada judicialmente y es preliminar en varios casos recientes. El trabajo de investigación realizado se apoya solamente en fuentes abiertas y en la contribución individual de analistas y expertos.
- El informe compila contribuciones de bancos, fintechs y organismos, y su descargo aclara que las opiniones son de los autores y no reflejan necesariamente las de la OEA (página de derechos de autor). Mi crítica apunta al encuadre del conjunto, no a una contribución en particular.
- Hasta mayo de 2026 me desempeñé como PMO Manager del equipo de Seguridad de la información de Bitso, empresa cuyo equipo de investigación firma la sección 5.2 del informe. Además, fui CISO delegado para Argentina de su PSP local (Nvio Pagos Argentina SAU) y de su VASP registrada ante la CNV.

## Fuentes

- OEA/CICTE, *De la banca al blockchain: ciberseguridad para las personas en el ecosistema financiero de las Américas*, 2026 (ISBN 978-0-8270-8265-6). Las páginas citadas son las impresas en la edición en español. Cuando el texto difiere, contrasto con la edición oficial en inglés: OEA/CICTE, *From Bank to Blockchain: Cybersecurity for People in the Financial Ecosystem of the Americas*, 2026 (ISBN 978-0-8270-8258-8).
- Cortés, A., [Cybersecurity Elements of the Argentine Financial System: Managing North Korean Threats in Crypto-Assets](/portfolio/master-thesis-north-korea-crypto-working-draft/), borrador de tesis (UBA), febrero de 2025; capítulos 5.2, 5.3, 7 y 8 actualizados en noviembre de 2026.
- Comisión Nacional de Valores, Resolución General 1058/2025 (12 de marzo de 2025), [Boletín Oficial, 14 de marzo de 2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/322539/20250314).
- Banco Central de la República Argentina, [Comunicación «A» 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf) (5 de febrero de 2026).
- Bitso Quetzal Team (Mauro Eldritch et al.), [investigaciones sobre amenazas patrocinadas por Estados](https://quetzal.bitso.com/t/state-sponsored), Substack, 2024-2026.
- Bitso Quetzal Team, [Interview with the Chollima V](https://quetzal.bitso.com/p/interview-with-the-chollima-v) (noviembre de 2025).
- Bitso Quetzal Team, [North Korea's Safari: Hunting for RATs](https://quetzal.bitso.com/p/north-koreas-safari-hunting-for-rats) (13 de abril de 2026).
- Bitso Quetzal Team, [Interview with the Chollima VIII](https://quetzal.bitso.com/p/interview-with-the-chollima-viii) (19 de mayo de 2026).
