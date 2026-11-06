---
title: "Cybersecurity Elements of the Argentine Financial System: Managing North Korean Threats in Crypto-Assets"
title_es: "Elementos de Ciberseguridad del Sistema Financiero Argentino: Gestión de Amenazas de Corea del Norte en Criptoactivos"
type: "research"
authors: ["Andrés Cortés"]
status: "Master's thesis · working draft (Feb 2025; chapters 5.2, 5.3, 7 and 8 updated Nov 2026)"
language: "Spanish"
date: 2025-02-01
featured: false
reader: true
draft: false
summary: "Working draft of my master's thesis (UBA, MSc in Cyber Defence and Cybersecurity): how North Korea-linked threat actors target crypto and DeFi, and what the Argentine financial system needs to defend against them."
---

> **Working draft, not the final thesis.** Content, figures and conclusions will change. The base text is dated February 2025; chapters 5.2, 5.3, 7 and 8 were drafted and updated in November 2026, so they cite incidents up to April 2026. The text is in Spanish.
>
> Download: [Word (.docx)](/downloads/cortes-tfm-working-draft.docx) · [PDF](/downloads/cortes-tfm-working-draft.pdf)

**Master's thesis, Universidad de Buenos Aires (Facultad de Ciencias Económicas), MSc in Cyber Defence and Cybersecurity.** The draft analyzes the Argentine financial system and its crypto on-ramps (PSPs and VASPs), the technical foundations of DeFi, publicly attributed attacks by North Korea-linked groups from 2022 to 2026, the strategic logic behind them, and a set of policy recommendations for Argentina.

**In brief (English).** The draft asks how exposed the Argentine financial system is to North Korea-linked threat actors in crypto and DeFi, and what it needs to defend itself. Its main points:

- **Impact over volume.** North Korea-linked groups are not the most frequent attackers but extract the most value per attack: at least USD 2.02 billion in 2025 according to Chainalysis, and 76% of crypto-hack losses through April 2026 according to TRM Labs. Figures vary by source and are treated as orders of magnitude.
- **The human link and the on-ramps.** Fake job offers, tailored malware and rapid laundering through bridges, mixers and OTC desks show that protocol-level defenses are not enough. Exchanges, PSPs and VASPs are where stolen funds can exit, and where defenders can act within hours.
- **Argentina's exposure is structural.** The draft documents no attacks attributed to North Korea against Argentine entities. The exposure comes from the country's high crypto adoption and its on-ramps.
- **Recommendations.** A financial-sector cybersecurity framework (NIST CSF 2.0, ISO/IEC 27001, CCSS), minimum controls for PSPs and VASPs mapped to North Korean techniques (phishing-resistant authentication, transaction-approval verification, insider-hiring checks), and a low-latency threat-sharing mechanism between public and private actors.
- **Limits.** Attribution is not judicially proven and is preliminary in several recent cases; the work relies on open sources only.

## Contenido

- [RESUMEN DEL PROYECTO](#resumen-del-proyecto)
- [INTRODUCCIÓN](#introducción)
- [JUSTIFICACIÓN](#justificación)
- [PLANTEAMIENTO DEL TEMA/PROBLEMÁTICA](#planteamiento-del-temaproblemática)
- [1. SISTEMA FINANCIERO ARGENTINO. PROVEEDORAS DE SERVICIOS DE PAGO. CRITICALIDAD Y REGULACIÓN DE SEGURIDAD DE LA INFORMACIÓN](#1-sistema-financiero-argentino-proveedoras-de-servicios-de-pago-criticalidad-y-regulación-de-seguridad-de-la-información)
- [2. CUESTIONES TÉCNICAS DE BLOCKCHAIN, SMART CONTRACTS Y FINANZAS DESCENTRALIZADAS](#2-cuestiones-técnicas-de-blockchain-smart-contracts-y-finanzas-descentralizadas)
- [3. EXPOSICIÓN A CRIPTOACTIVOS Y FINANZAS DESCENTRALIZADAS EN ARGENTINA](#3-exposición-a-criptoactivos-y-finanzas-descentralizadas-en-argentina)
- [4. VULNERABILIDADES Y ROBOS EN BLOCKCHAIN, CRIPTO Y FINANZAS DESCENTRALIZADAS](#4-vulnerabilidades-y-robos-en-blockchain-cripto-y-finanzas-descentralizadas)
- [5. ATAQUES DE COREA DEL NORTE AL ECOSISTEMA DEFI Y CIBERESTRATEGIA DE LA RDPC](#5-ataques-de-corea-del-norte-al-ecosistema-defi-y-ciberestrategia-de-la-rdpc)
- [6. TRASFONDO HISTÓRICO DEL RÉGIMEN NORCOREANO](#6-trasfondo-histórico-del-régimen-norcoreano)
- [7. RECOMENDACIONES PARA LA FORMULACIÓN DE POLÍTICAS Y ESTRATEGIAS DE CIBERDEFENSA Y CIBERSEGURIDAD](#7-recomendaciones-para-la-formulación-de-políticas-y-estrategias-de-ciberdefensa-y-ciberseguridad)
- [8. CONCLUSIONES](#8-conclusiones)

---

## RESUMEN DEL PROYECTO

El objetivo del presente trabajo de investigación es realizar aportes al estado actual de la ciberdefensa y la ciberseguridad de la industria financiera en Argentina en sus sectores bancario y no bancario, para prevenir y responder a la emergencia de amenazas persistentes avanzadas (**APT o *advanced persistent threats***) provenientes de la República Popular Democrática de Corea y su potencial de ataque y disrupción hacia el ecosistema financiero a través de ataques al sistema financiero basado en criptoactivos en general y especialmente al sistema DeFi (de **Finanzas Descentralizadas** que utiliza tecnología **blockchain**) y que interactúa con el sistema bancario tradicional.

Para llegar a desarrollar este análisis, esta tesis analiza el sistema financiero argentino, su estructura, regulación y los puntos de contacto con el sistema DeFi; describe la escena actual de ataques a proyectos DeFi y hace énfasis en aquellos ataques atribuidos a APTs patrocinadas por el régimen norcoreano. Dichos ataques están estrechamente vinculados con la ciberestrategia de la República Popular Democrática de Corea y su trasfondo histórico.

## INTRODUCCIÓN

El sistema financiero argentino es parte de la infraestructura crítica nacional. A través de la evolución de las tecnologías bancarias y de pagos, el sistema ha integrado entidades no financieras, algunas de ellas vinculadas a la industria de criptoactivos y el espacio de finanzas descentralizadas en la blockchain.

Esta realidad se repite alrededor del mundo, y además de tratarse de una necesaria evolución técnica de los servicios financieros, implica una integración y normalización *de facto* de los criptoactivos y refleja el crecimiento del sector nacional de servicios tecnológicos, que se ha convertido en las dos últimas décadas en un clúster económico cada vez más importante para la economía nacional.

Sin embargo, a la par de la normalización y adopción del uso de criptomonedas y otras descentralizadas, los riesgos asociados al robo de criptoactivos, su uso para facilitar el lavado de dinero y la financiación de actividades ilícitas se han venido multiplicando durante los últimos años. Dentro de dichas amenazas destacan las provenientes de actores con patrocinio estatal, por ser fácilmente atribuibles y por su combinación única de incentivos económicos e ideológicos para afectar la infraestructura financiera de otras naciones.

Esta tesis busca realizar un necesario análisis que combine la perspectiva nacional con el saber técnico ya desarrollado en otras latitudes. De esta forma, mi deseo es aportar los insumos necesarios para la formulación de políticas públicas integrales para la defensa de la infraestructura y la vida económica nacional.

## JUSTIFICACIÓN

La industria de criptoactivos y las finanzas descentralizadas (DeFi) constituyen un campo de desarrollo relativamente reciente que a pesar de su enorme crecimiento en términos de adopción y madurez de productos financieros ofrecidos, apenas comienza a ser estudiada desde la academia.

Las criptomonedas han sido asociadas desde el sector financiero tradicional a problemáticas relacionadas con el lavado de activos, el ransomware, y la evasión de sanciones internacionales. Sin embargo, a medida que la tecnología blockchain y el ecosistema DeFi han madurado (2020-2024), se ha hecho evidente que también existen riesgos y vulnerabilidades más profundas y estructurales que van más allá de estos problemas conocidos. La naturaleza descentralizada de las finanzas DeFi introduce nuevos desafíos en términos de seguridad y regulación, los cuales requieren una investigación más profunda y análisis especializado para comprender mejor sus riesgos y cómo explotarlos.

El ecosistema DeFi no solo representa una extensión de los servicios financieros tradicionales —como *yield farming* (préstamo de criptoactivos a cambio de recibir intereses); contratos de futuros y derivados— sino que también ofrece innovaciones disruptivas que buscan escapar del control de la banca centralizada y la supervisión estatal. Estas innovaciones a menudo responden a una desconfianza generalizada en las instituciones tradicionales o a corrientes ideológicas como el criptoanarquismo, lo que, a su vez, da lugar a proyectos que intentan establecer alternativas a los sistemas de pago centralizados o incluso soluciones para problemas socioeconómicos, como los esquemas de ingreso básico universal. Esta interacción entre conceptos financieros tradicionales y nuevos paradigmas tecnológicos crea un campo fértil para la explotación de vulnerabilidades.

Al iniciar la redacción de este trabajo, en el año 2021, DeFi manejaba activos por valor de más de 100.000 millones de dólares, con un volumen de transacciones entonces comparable al de grandes instituciones financieras, como VISA o JP Morgan Chase.

Hoy, en septiembre de 2024, se habla de un valor superior a los 65 mil millones de dólares, (*billions* para los angloparlantes) y las transacciones son difíciles de cuantificar.

Este crecimiento exponencial ha puesto de relieve la necesidad de que actores estatales y no estatales, incluyendo entidades reguladoras, el sector financiero tradicional y los operadores del mundo cripto, desarrollen una comprensión más clara de los riesgos inherentes. La posibilidad de ataques cibernéticos en cualquier etapa del ciclo financiero, la explotación de vulnerabilidades en contratos inteligentes, o incluso el mal uso de estas tecnologías por parte de actores ilícitos para facilitar el lavado de activos o financiar el terrorismo, son preocupaciones que no pueden ser ignoradas. A esto se suman los riesgos de fraude y estafas a gran escala, que aprovechan la creciente cobertura mediática y la explosión de nuevos proyectos en el ámbito DeFi.

Durante los últimos cuatro años, los ataques de actores maliciosos relacionados con estados nacionales han hecho parte importante de las consideraciones de seguridad informática de muchos proyectos de finanzas descentralizadas. De todo el universo de actores patrocinados por estados, llama la atención por la cantidad y relevancia de ataques que varios estén relacionados con la República Popular Democrática de Corea.

Tan solo el grupo Lazarus, organización de élite de hackers de Corea del Norte y la punta de lanza de la estrategia de ataques cibernéticos de su gobierno, ha obtenido más de mil millones de dólares en distintos ataques a espacios cripto y web3 entre los años 2020 y 2024. Esta cifra es solamente el monto que se ha hecho público por parte de las organizaciones atacadas, por lo que el botín podría ser mucho mayor.

El espacio cripto y de finanzas descentralizadas tiene vasos comunicantes con el sistema financiero tradicional (conocidos como *rampas* en el argot de la industria). De esta forma los usuarios de cripto pueden utilizar el dinero del ciberespacio para efectuar transacciones en la economía real. Esta compuerta estaba ya presente en el sistema financiero argentino a través de las entidades PSP (prestadoras de servicios de pago), y la habilitación de un Registro de Proveedores de Servicios de Activos Virtuales (PSAV) ante la Comisión Nacional de Valores profundiza dicho camino. Es importante entonces estudiar y comprender las motivaciones de actores estatales como los relacionados a Corea del Norte e incluir los elementos aquí expuestos en las consideraciones para formular cualquier política pública que tenga como objetivo la defensa de las capacidades del sistema financiero y la infraestructura crítica nacional en Argentina y otros países de la región.

## PLANTEAMIENTO DEL TEMA/PROBLEMÁTICA

Para realizar una primera aproximación al objeto de estudio, vamos a comenzar por enumerar las siguientes premisas para posteriormente formular nuestro interrogante.

1.  Los sistemas de información del sector **bancario y financiero** son considerados infraestructura crítica para la Nación.

2.  El sector financiero nacional, bajo la supervisión del BCRA, está compuesto por **entidades financieras** y **entidades no financieras** (incluyendo Proveedoras de Servicios de Pago), que interactúan entre sí.

3.  Usuarios y entidades argentinas efectúan operaciones de ahorro e inversión en **criptomonedas** y utilizan servicios financieros conectados a infraestructuras de **finanzas descentralizadas** (*DeFi*).

4.  Existen servicios de compra y venta de **criptomonedas** (*crypto exchange*) que ofrecen servicios financieros conectados a infraestructuras de **finanzas descentralizadas** (*DeFi*), y que hacen parte del sector financiero nacional como **entidades no financieras**, inscritas en el Registro de Proveedoras de Servicios de Pago y en el Registro de Proveedores de Servicios de Activos Virtuales de la CNV.

5.  La economía de cripto activos, y especialmente los servicios financieros conectados a infraestructuras de **finanzas descentralizadas** (*DeFi*) no son actualmente regulados en ninguna jurisdicción nacional, y son actualmente un espacio en pleno desarrollo y crecimiento de operaciones, transacciones y mercado.

6.  La economía de cripto activos, y especialmente los servicios financieros conectados a infraestructuras de **finanzas descentralizadas** (*DeFi*) es actualmente un objetivo de distintos **actores malintencionados**, algunos vinculados a **estados nacionales** (*state sponsored threat actors*), que buscan aprovecharse de vulnerabilidades de seguridad para realizar **robo de criptoactivos** o para ganar el **control de infraestructuras de finanzas descentralizadas** con fines criminales.

7.  Corea del Norte es el estado nacional más implicado en el uso de **actores malintencionados** para realizar acciones criminales con especial y comprobado interés en llevar a cabo ataques a infraestructuras de **finanzas descentralizadas** (*DeFi*) que parecen ir más allá de simples **motivaciones económicas** y acuden eventualmente a finalidades **ideológicas**.

8.  Actualmente en la Argentina las **políticas públicas** de estrategia en ciberseguridad específicas para el sector **financiero** son producidas por el BCRA y su alcance sobre el sector no **financiero** es limitado. Por esto, no se ha evaluado el **grado de disrupción** que podría ocasionar la acción **criminal de actores malintencionados** sobre servicios financieros conectados a infraestructuras de **finanzas descentralizadas** (*DeFi*) que a su vez:

    - contienen fondos de personas y entidades argentinas (*premisa 3*)

    - interactúan con el resto del sector financiero nacional (*premisa 4*)

    - no se encuentran reguladas a nivel internacional a pesar de su creciente relevancia económica (*premisa 5*)

    - son crecientemente atacados por actores relacionados con Corea del Norte (*premisa 7*).

A partir de las ocho premisas anteriormente expuestas, podemos desarrollar el interrogante de esta tesis, que es el siguiente:

> ***¿Cuál es la exposición potencial del sistema financiero argentino a eventuales ataques de actores maliciosos relacionados con el gobierno norcoreano, y qué herramientas necesita para mejorar su postura de ciberdefensa?***

Esta pregunta busca identificar cómo se vincula el sistema financiero argentino con el espacio DeFi, y cómo estos pueden ser blanco de ataques. Otras preguntas relacionadas con este interrogante son:

1.  ***¿Cuál es la regulación existente para ciberseguridad del sistema financiero en Argentina, y cómo considera el uso de criptoactivos e infraestructuras DeFi?***

2.  ***¿Cuál es la extensión del uso de criptoactivos e infraestructuras DeFi en Argentina, y qué superficie de exposición a potenciales ataques implica?***

3.  ***Qué vulnerabilidades en infraestructuras DeFi han sido explotadas para robar cripto activos por parte de actores maliciosos patrocinados por estados? ¿Cómo lo han hecho?***

4.  ***¿Qué motivaciones, estrategias y técnicas utilizan los atacantes relacionados con Corea del Norte para vulnerar plataformas basadas en criptoactivos y smart contracts, y cuáles son sus objetivos?***

5.  ***¿Cómo se podrían desarrollar estrategias efectivas de ciberdefensa para proteger el sector bancario y financiero argentino de amenazas persistentes avanzadas, y en general atacantes patrocinados por estados?***

## 1. SISTEMA FINANCIERO ARGENTINO. PROVEEDORAS DE SERVICIOS DE PAGO. CRITICALIDAD Y REGULACIÓN DE SEGURIDAD DE LA INFORMACIÓN

### 1.1 Contexto Histórico del Sistema Financiero Argentino. Del Banco de Buenos Aires a la Fundación del BCRA

La historia del sistema financiero argentino es posterior a la historia de la banca nacional. Las primeras instituciones financieras datan de la fundación misma de la República: El Banco de Buenos Aires (actualmente Banco Provincia de Buenos Aires) fue fundado en 1822 con el objetivo de financiar el desarrollo económico y comercial del país. Es además el primer banco de Hispanoamérica[^1]. En paralelo, el desarrollo de la banca privada en Argentina tiene sus antecedentes en el Banco de Londres y América del Sud, que fue fundado en 1862 como una sucursal del London and River Plate Bank. A lo largo del siglo XIX, el desarrollo del sistema bancario estuvo marcado por las necesidades de la economía agroexportadora y por la presencia de capitales británicos que financiaron sectores relevantes como los frigoríficos, los ferrocarriles y los telégrafos[^2].

Inglaterra fue proveedora de servicios financieros a la Argentina en una primera etapa (hasta 1880, aproximadamente). Luego, la economía de los frigoríficos y la exportación de la carne hicieron que los capitales británicos tuvieran interés en tener mayor presencia en empresas argentinas, y la financiación de dichas empresas implicó un mayor desarrollo del sistema financiero privado asociado a las casas comerciales y bancos ingleses[^3]. Esta etapa, coincidente con los desequilibrios económicos de las provincias y con los conflictos políticos relacionados con las tensiones del crecimiento de la joven república, también implicó la casi desaparición de la incipiente banca pública.

Los bancos privados crecieron durante la década de 1880 respaldados por elementos de las principales colectividades migratorias (Italia, España y Francia) y competían con los bancos públicos existentes (Hipotecario, Nacional y de la Provincia, además de los pequeños bancos provinciales de Santa Fe y Córdoba) Este era el sistema financiero presente al momento de estallar una crisis con pánico bancario en 1890 y 1891, que ocasionaría el cierre del Banco Nacional y del Banco de la Provincia de Buenos Aires, con la pérdida de disponibilidad de los depósitos. Es que para entonces los bancos provinciales tenían la capacidad de emitir papel moneda, supuestamente convertible mediante un mecanismo de Caja de Conversión. La convertibilidad de los depósitos fue suspendida como producto de la crisis, y solamente sería restablecida a comienzos del siglo XX[^4].

Ya a comienzos del siglo XX, los bancos que habían sobrevivido a las crisis del sistema se encontraban fortalecidos. Bancos públicos y privados, asociados a las pujantes comunidades de inmigrantes, a la banca transnacional inglesa y a las provincias, protagonizaron una expansión asociada a los buenos términos del comercio internacional y a la puesta en producción de nuevas regiones de frontera que se unían al circuito comercial agroexportador argentino. Esta expansión duró hasta la crisis que marcó los años 1912 a 1914 y que terminaría en la Primera Guerra Mundial, y durante la que fue reemplazado el rol clave que tenía el Banco de la Provincia de Buenos Aires por el actual Banco de la Nación, fundado en 1891[^5].

El diagnóstico de la clase política nacional sobre el sistema financiero era de que el sistema financiero nacional sufría de una anarquía total y una dependencia del mecanismo de conversión de papel moneda por metálico, que tenía grandes falencias que agravaban las ocasionales crisis económicas que se presentaban en la época. Así, y en sintonía con lo que ocurría en otros países de la región, se llegó a la conclusión de que se necesitaba contar con un banco central con el monopolio de emisión de billetes, que actuaría como agente financiero del estado, custodio de las reservas en efectivo de los bancos comerciales, prestamista de última instancia, compensador de saldos entre los bancos e instrumento de la política monetaria adoptada por el estado nacional. Sucesivos proyectos de ley se presentaron buscando la creación de un banco central (1899; 1901; 1910; 1914 y 1917). Por distintas razones más propias de los vaivenes políticos que del orden técnico dichas propuestas no prosperaron. Fue necesario enfrentar los efectos internacionales de la crisis resultado del *crac* de 1929 para cambiar la política monetaria y fiscal en respuesta a la profunda recesión, y en 1931 el gobierno Uriburu presentó un nuevo proyecto de creación de un Banco Central. Dicho proyecto fue nuevamente rechazado por el escepticismo reinante en la capacidad de los economistas nacionales de emprender dicha tarea, y en 1932 se solicitó al Banco de Inglaterra colaboración técnica y la emisión de un informe (Informe Niemeyer) que resultaría siendo la hoja de ruta en lo técnico para el Banco Central de la República Argentina (BCRA) que finalmente fue fundado en 1935 con Ernesto Bosch como presidente y la gerencia general del economista Raúl Prebisch[^6].

### 1.2 Evolución del Sistema Financiero Argentino y Servicios de Pago

Prebisch fue el gerente del BCRA hasta 1943 y mantuvo un esquema de control de cambios para la realización de políticas anticíclicas. En 1946, el gobierno Farrell emite un decreto de nacionalización del Banco Central y de todo el sistema bancario argentino, con lo que el BCRA pasa a cumplir un rol de política de promoción del desarrollo económico nacional, dando créditos a bajas tasas para orientar el crédito hacia las actividades productivas[^7]. Dicha orientación de política pública se mantuvo con cierta alternancia de acuerdo a los ciclos políticos y las cuestiones macroeconómicas hasta el golpe cívico-militar de 1976. No obstante, en 1957 una reforma del sistema financiero le dio al BCRA mayor grado de autonomía, pero continuando en su rol de seguir las directrices del gobierno nacional en materia de política monetaria.

Recién con la Ley de Entidades Financieras del gobierno de facto, aprobada en 1977 aparece la taxonomía del sistema financiero que conocemos hoy. La carta orgánica del BCRA no fue modificada, pero las medidas de la reforma al sistema bancario y financiero implican entre otras la unificación de encajes, la liberación de tasas de interés, la separación de los bancos comerciales y cajas de crédito, lo que eliminaría las sociedades de crédito para consumo. La cantidad de bancos comerciales y compañías financieras crece como resultado de la reforma en un 78%, pero la liberalización sin rumbo desembocará en la crisis de 1980, forzando a nuevas intervenciones en el sistema financiero (sin reformas de fondo) durante la década de 1980[^8]. Finalmente en 1993 se sancionaría un nuevo sistema legal para las entidades financieras, y en 1994 el BCRA permitiría abrir nuevas entidades financieras o sucursales de entidades ya existentes, eliminando además cualquier discriminación entre banca nacional y extranjera.

Posteriormente a esta reforma, el número de entidades financieras autorizadas disminuiría en un 20% aproximadamente, por fusiones y ventas de algunas entidades. En los años 90 la tendencia sería de concentración y consolidación del sistema financiero con la desaparición de bancos menores, y a partir de 1998 diversos shocks internos causaron crisis económicas con pérdida de solvencia y confianza en la capacidad de pago de las obligaciones del estado, ocasionando una espiral que terminaría en la crisis de liquidez de finales del 2001.

Una Ley de Emergencia Económica reversó la convertibilidad peso-dólar de la década anterior estableciendo un tipo de cambio flotante y modificó la carta orgánica del BCRA para inyectar liquidez en el sistema. El sistema financiero argentino soportó sin mayores dificultades la crisis de las hipotecas *subprime* en 2008 y está relativamente saneado hasta la fecha.

A partir del año 1997 el BCRA implementó la Clave Bancaria Uniforme (CBU) para facilitar las transferencias entre instituciones financieras[^9]. En 2016 a dicha disposición se sumó la implementación del Alias CBU[^10], que permite la asociación de un alias alfanumérico al CBU y al número de cuenta, profundizando en la interoperabilidad del sistema.

Desde el año 2011 existe una iniciativa de “Transferencias 3.0” para la acreditación instantánea de transferencias electrónicas. Desde el año 2020 el BCRA permite los pagos electrónicos con transferencia, y hasta la fecha continúa persiguiendo la interoperabilidad del sistema de pagos con QR en el mercado argentino[^11].

Desde el año 2018 el BCRA implementó la Clave Virtual Uniforme (CVU) para facilitar la interoperabilidad entre usuarios de Proveedores de Servicios de Pagos (PSP) y del sistema financiero. De forma subsecuente, se implementó el Alias CVU, que cumple una función análoga al ya implementado para la Clave Bancaria Uniforme.

### 1.3 Marco Regulatorio. Criticidad de la Infraestructura. Fintech, PSP, PSAV

El marco regulatorio del sistema financiero está definido por la Ley 21526/77 (Ley de Entidades Financieras[^12]) y la Carta Orgánica del BCRA[^13]. De forma adicional, hay leyes que regulan el mercado de capitales y a las entidades aseguradoras, mientras que la UIF está regulada por la ley de Encubrimiento y Lavado de Activos de Origen delictivo y la Ley de Financiamiento del Terrorismo. Además de las leyes sobre prevención de lavado y financiamiento del terrorismo, Argentina es signataria de distintas convenciones y tratados que obligan a las instituciones nacionales a actuar contra la corrupción, el crimen trasnacional, la financiación del terrorismo y el tráfico de sustancias ilícitas, lo que impone distintas obligaciones y prácticas de vigilancia, supervisión y control.

Todas las acciones de integración del sistema de 2016 hasta la fecha prueban que la apuesta del BCRA es por la interoperabilidad del sistema nacional de pagos, y que iguala técnicamente las funcionalidades para todos los usuarios del sistema. A partir del 2020 el BCRA regula efectivamente la actividad de los denominados “Proveedores de Servicios de Pago que Ofrecen Cuentas de Pago”, para englobar aquellas personas jurídicas que no son entidades financieras y cumplen con al menos una función dentro de un esquema de pago minorista en el sistema global de pagos[^14]. Para tal fin, el BCRA puso a disposición un Registro de Proveedores de Servicios de Pago[^15], en el que encontramos a la totalidad de los servicios *fintech* que ofrecen cuentas de pago con CVU en la Argentina.

Este esquema regulatorio, descrito en un texto ordenado en sus características técnicas[^16], es el único marco regulatorio que cubre las billeteras digitales interoperables.

De acuerdo a la Resolución 1523/2019, se aprobó una definición de infraestructuras críticas y de infraestructuras críticas de información que incluye dentro de su tercer inciso al sector financiero como infraestructura crítica.

El Poder Ejecutivo Nacional ha publicado ya dos versiones de la Estrategia Nacional de Ciberseguridad de la República Argentina. Dicha Estrategia, en su objetivo número 2, busca “*Promover el desarrollo de estrategias, políticas y medidas de acción para la protección de infraestructuras críticas nacionales, operación y comunicación*”. Además de dicho objetivo, la Estrategia Nacional de Ciberseguridad busca entre otras cosas fortalecer las capacidades de prevención, detección y respuesta y desarrollar un marco normativo.

La Estrategia Nacional no hace previsiones puntuales en lo referente al sector financiero. Por ende, de la regulación actual, apenas tres de las comunicaciones del Banco Central se ocupan de cuestiones de seguridad de la información y son generales para toda la industria financiera. Apenas una se centra en las obligaciones de seguridad de los Prestadores de Servicios de Pago.

A pesar de la declaración de criticidad de la infraestructura bancaria y financiera, es evidente que la seguridad informática ha sido delegada por las entidades reguladoras por completo a las instituciones financieras. Los Lineamientos de Ciberseguridad y Ciber Resiliencia publicados por el BCRA[^17] son apenas un soporte para las organizaciones del sistema financiero, y no existe un *framework* que englobe las definiciones, los procedimientos y la respuesta a incidentes de forma organizada. La regulación de Ciberincidentes del BCRA hace referencia a términos comunes en la industria de la seguridad de la información citando a cuerpos de autoridad como ISACA, NIST o ISO/IEC[^18] dado que la única estandarización nacional existente es la del CERT para respuesta a incidentes[^19], que a su vez reproduce la norma estándar del IETF[^20] sin mayor desarrollo para el contexto.

Existen muchos más factores que deben ser tenidos en cuenta a la hora de promulgar políticas públicas de ciberdefensa y ciberseguridad, de los cuales apenas alcanzaremos a capturar algunos pocos relacionados con criptoactivos y finanzas descentralizadas, con especial foco en aquellas amenazas propiciadas por actores estatales patrocinados por el estado norcoreano.

## 2. CUESTIONES TÉCNICAS DE BLOCKCHAIN, SMART CONTRACTS Y FINANZAS DESCENTRALIZADAS

El ecosistema de criptoactivos y finanzas descentralizadas es un desarrollo práctico relativamente frecuente de una serie de fenómenos que cuentan con mayores antecedentes históricos. El sistema financiero internacional ha permitido el intercambio de bienes por dinero, y de dinero por dinero en varias denominaciones con distintos medios técnicos durante siglos, y solamente se expandió a escala global con la globalización de las últimas décadas del siglo XX. Instituciones que hoy damos por sentadas, y que regulan el comercio internacional y los pagos entre instituciones financieras de distintos países, son relativamente recientes. La tecnología le da a los sistemas de pagos basados en blockchain una ventaja relativa notable, mientras que la promesa de democratización y descentralización es esencial para entender la propuesta de valor de DeFi.

### 2.1 Contexto Histórico del Sistema Financiero: De Bretton Woods al Sistema Financiero Global

Para entender el funcionamiento del sistema financiero global tenemos que entender las instituciones que lo rigen, y el funcionamiento del llamado “sistema mundo”. Para Wallerstein[^21], el sistema-mundo es un grupo de instituciones que ha funcionado eficazmente durante los últimos 500 años en tres arenas separadas: la política, la económica y la sociocultural. Cada una de ellas corresponde a los estados, los mercados y las sociedades civiles, cada una con sus distintas lógicas, pero que responden a un mismo fenómeno global. Entonces, en este sistema, es imposible separar la evolución de las cadenas de mercancías de los procesos de producción capitalistas, y esa evolución de la cadena global de suministros es la misma evolución del sistema global de pagos que entendemos por internacionalización del capital.

Para Robinson[^22], la fase de desarrollo del capitalismo trasnacional en la que se evoluciona de una serie de economías nacionales que podían vincularse entre sí en una relación uno a uno para comerciar y establecer pagos, a un sistema económico global es el nacimiento de un sistema económico global. En este sistema, las economías nacionales y sobre todo los sistemas políticos nacionales poco pueden hacer para mantener el control sobre la totalidad de una cadena de producción, consumo y pagos, configurando de forma efectiva una serie de circuitos de acumulación global. Esta fase se inauguró efectivamente con el abandono del patrón oro en 1973, lo que terminaría con el antiguo sistema global de Bretton Woods e iniciaría la era de la desregulación del capital en la que nos encontramos hoy.

Poco antes de finalizar la Segunda Guerra Mundial, representantes de varias naciones se reunieron para delinear la arquitectura del sistema global al terminar la guerra en un hotel en Bretton Woods, New Hampshire, EEUU. De allí salió un acuerdo firmado por 44 naciones, que estableció las instituciones financieras globales que tenemos hasta hoy: el Fondo Monetario Internacional (FMI) y el Banco Internacional de Reconstrucción y Desarrollo, antecesor del Banco Mundial[^23]. De este acuerdo también salió el uso del dólar estadounidense como moneda por defecto para el comercio internacional, uso que estaba condicionado a las tasas de intercambio entre las monedas de otros países y el dólar, y especialmente entre el dólar y el oro como reserva última de valor.

El sistema Bretton Woods y las instituciones globales, como el FMI, el GATT (*General Agreement on Tariffs and Trade*) o la misma Organización de las Naciones Unidas (ONU) fueron parte clave de la reconstrucción económica de Europa durante la posguerra. A pesar de que la Unión Soviética participó de la conferencia de Bretton Woods, finalmente no firmó el acuerdo y durante la guerra fría el FMI pasó a representar mayoritariamente los intereses de los estadounidenses, quienes tenían la mayor cantidad de oro en sus reservas, y utilizó el sistema para perseguir sus propios objetivos políticos. No obstante, hubo tres factores clave que en los años posteriores terminaron por hacer obsoleto el patrón oro y el sistema dólar, dando curso a una serie de eventos en el sistema financiero global que continúan hasta nuestros días[^24]:

- el desarrollo económico de la Unión Europea (entonces Comunidad Económica Europea) y Japón creó presiones para tener un sistema de monedas flotantes entre sí, más allá de la simple convertibilidad ante el dólar,

- el discutible uso del FMI para los fines de la política internacional estadounidense, contrapuestos a las visiones esperadas por las potencias europeas y los países menos desarrollados,

- los flujos económicos de fines especulativos que buscaban rentabilidad rápida y libre de riesgo en eventos económicos especiales, y que se aprovechaban de las uniones bancarias y la evolución tecnológica de los medios de comunicación.

Todos estos factores encontraron su confluencia con la incapacidad de los estadounidenses de mantener el oro en una tasa fija, y en un momento de inflación monetaria por la emisión estadounidense para mantener su déficit fiscal asociado al gasto público y al esfuerzo de la guerra en Vietnam, el 15 de agosto de 1971 el entonces presidente Richard Nixon implementaría una serie de medidas con el fin de estabilizar la economía estadounidense, incluyendo el fin de la convertibilidad dólar-oro. Esta medida aparentemente doméstica y limitada a la política monetaria estadounidense fue efectivamente el fin del sistema de patrón oro, y pasó a la historia económica reciente como el *Nixon Shock*.[^25]

A pesar del uso ya por entonces de los DEG (Derechos Especiales de Giro) del FMI, lo cierto es que aún cuando Estados Unidos había abandonado en la práctica la conversión dólar-oro, la enorme mayoría del comercio internacional e intercambio monetario continuó siendo denominado en dólares estadounidenses. El *Nixon Shock* coincidió con el surgimiento de la OPEP y la negociación por valores flotantes del petróleo, otro precio clave para la economía global. La década de 1970 fue de estancamiento, inflación y crisis financiera para muchos países, y sembraría la semilla de la crisis de deuda de muchas economías emergentes en la década siguiente. El FMI pasaría a ser una institución financiera global que daría respuesta a las emergencias económicas subsecuentes.

En esta misma época apareció la mensajería SWIFT (Society for Worldwide Interbank Financial Telecommunication)[^26]. SWIFT es un consorcio privado de bancos que se ha convertido en un estándar global utilizado prácticamente por todos los bancos del mundo, al haber sido el sustrato técnico de las operaciones financieras de intercambio de divisas que ocasionaron buena parte de los eventos económicos relatados aquí.

Al finalizar la Guerra Fría, Rusia y los estados sucesores de la Unión Soviética ingresaron en los primeros años de la década de 1990 al concierto económico global. China, por su parte, hace parte desde 2001 de la Organización Mundial del Comercio (OMC)[^27], completando así la arquitectura global de intercambio comercial y financiero actualmente existente.

### 2.2 Criptomonedas y Pagos Digitales. Criptografía y Privacidad. Bitcoin.

A lo largo de la historia, los seres humanos han utilizado distintos bienes como reserva de valor. Para la teoría económica tradicional[^28], se considera que el dinero tiene tres roles fundamentales:

- es *reserva de valor*, porque se espera que mantenga su valor a través del tiempo,

- es *unidad de cuenta*, porque permite fijar precios de bienes y servicios en determinada cantidad,

- es un *medio de cambio*, porque permite intercambiar el dinero por otra cosa en lugar de almacenarse indefinidamente.

El dinero en efectivo se puede entender como un tipo de dinero en especial, que representa un pagaré del estado, o del banco central de un país hacia el consumidor. Al haber abandonado los Estados Unidos el patrón oro en 1971 (ver el ya mencionado *Nixon Shock* en el capítulo anterior), el papel del dinero como pagaré hacia los consumidores desaparece. Este mismo rol de dinero *fiduciario* se había consagrado en el sistema financiero británico a partir de 1931, cuando el Banco de Inglaterra había abandonado el patrón oro. A partir del fin del patrón oro, el rol de los bancos centrales se centró en proteger el valor de la moneda pero ya no frente al oro, sino frente a una canasta de bienes y servicios para un momento determinado, es decir frente a la inflación.

El fin de la posibilidad de convertir el papel moneda en oro ya había generado interrogantes filosóficos en los economistas sobre el papel del dinero, la confianza y el estado. Adam Smith advierte que es el rol del estado el que depreda la moneda -entonces metal- beneficiando el deudor y perjudicando al tenedor de derechos, hablando así de la pérdida de valor del dinero en el tiempo[^29] y advirtiendo que dicha tendencia de la devaluación continuaría perjudicando al conjunto de los agentes económicos. Keynes apunta que la pérdida de valor no era un accidente sino una imposición de los estados y la clase política[^30] y finalmente la escuela austríaca de economía abogaría por sacar la intervención estatal del dinero, asignando a los gobiernos el rol de causantes de la inflación (Von Mises[^31]).

Fuera del factor ideológico y del interrogante sobre la pérdida de valor del dinero por la acción u omisión estatal, los sistemas tradicionales de pago y reconciliación de pagos tenían grandes fallos técnicos. Aún hoy en día, una transferencia entre distintos bancos rara vez se cursa de forma inmediata, dependiendo de complejos sistemas de comunicación, validación y garantías[^32]. Hace treinta años, por ejemplo, la reconciliación de transacciones podría tardar semanas, y la posibilidad de costosos errores humanos siempre estaba presente. A pesar de usar la tecnología disponible para facilitar los servicios financieros desde el siglo XIX, las transferencias de fondos dentro de un mismo país, y aún más al tratarse de transferencias internacionales continuaban siendo lentas y caras. Por ello siempre existió un interés en proporcionar nuevos sistemas y medios de transferencia y pago utilizando medios electrónicos.

El debate de las distintas teorías monetarias sobre la inflación y el rol del estado también alimentó el interés en desarrollar formas alternativas de dinero. En 1983, David Chaum, un criptógrafo y científico estadounidense de la Universidad de California en Berkeley, concibió y publicó un sistema de dinero electrónico que se podría utilizar para pagos electrónicos anonimizados[^33]. Dicho sistema, conocido como *ecash,* apenas vería la luz en la segunda mitad de la década de 1990 por la evolución tecnológica necesaria para su implementación, pero los puntos centrales de la idea de Chaum (automatización, privacidad, no trazabilidad), generaron a su vez amplio interés en la comunidad especializada.

El deseo de privacidad en las transacciones, y los interrogantes con respecto a la identidad y el poder de los gobiernos sobre el individuo fueron una preocupación constante de ciertos activistas a partir de la adopción de internet. El movimiento *cypherpunk*[^34], por ejemplo, y varias formas de activismo digital han protagonizado avances en los usos de la criptografía para realizar transacciones privadas en un sistema abierto[^35].

En 1996 la *National Security Agency* (NSA) elaboró una completa guía sobre criptografía y dinero electrónico[^36], en la que se describe la criptografía asociada y se sugiere un protocolo de envío y recepción de pagos digitales, se propone un esquema de identificación, transferibilidad, divisibilidad y se mencionan inconvenientes potenciales de seguridad asociados a la puesta en marcha del dinero electrónico.

Otras propuestas de criptomonedas que aparecieron durante los años 90 fueron B-Money[^37], de Wei Dai y Bitgold, de Nick Szabo, que fue la primera criptomoneda que se asoció al menos teóricamente con el concepto de *proof of work*, o la resolución criptográfica utilizando poder de cómputo, del problema de los tres generales bizantinos, un experimento mental diseñado para ilustrar el dilema de obtener el consenso en tres partes con un interés común cuando se sospecha que una de ellas podría abusar de la confianza en el sistema.

En 2009 una persona u organización bajo el seudónimo de “Satoshi Nakamoto” publica el *white paper*[^38] de Bitcoin, proponiendo una criptomoneda descentralizada y distribuida en una gran red global.

La introducción del documento menciona las debilidades del modelo basado en confianza para las transacciones del comercio electrónico, y la dicotomía entre costos de transacción y necesidad de confianza. Nakamoto plantea un sistema de pagos electrónicos basado en pruebas criptográficas que permita la realización de transacciones sin la necesidad de un tercero depositario de confianza, utilizando transacciones verificables mediante una marca de tiempo (*timestamp*) para corroborar el orden cronológico de las transacciones.

Este planteamiento, aparentemente sencillo de describir es el fundamento de la *blockchain*:

“*Definimos una moneda electrónica como una cadena de firmas digitales. Cada dueño transfiere la moneda al próximo al firmar digitalmente un hash de la transacción previa y la clave pública del próximo dueño y agregando estos al final de la moneda. Un beneficiario puede verificar las firmas para verificar la cadena de propiedad*”.

La aparición de Bitcoin ha sido uno de los hechos más relevantes del desarrollo tecnológico de nuestro siglo. La rápida adopción de la criptomoneda creó un sinnúmero de oportunidades de negocio; la aparición de firmas de compra y venta de criptomonedas (*crypto exchanges*) llamó la atención de los gobiernos alrededor del mundo y para facilitar el acceso a dichos exchanges y mantener transacciones con cierto grado de legalidad los usuarios han optado por sacrificar su privacidad.

Satoshi Nakamoto ha desaparecido desde el año 2011 de la esfera pública. Su influencia, y la del *white paper* de Bitcoin, perdura entre otras cosas en la aparición de Ethereum.

### 2.3 Aparición de Ethereum, la Blockchain y The DAO

El *white paper* de Ethereum fue publicado en diciembre de 2014 por Vitalik Buterin. Se enfoca en el reconocimiento del valor del desarrollo de Bitcoin no tanto por el aporte sobre el dinero, sino por la tecnología blockchain.

Buterin enumera la posibilidad de representar mediante activos digitales instrumentos financieros, la propiedad de elementos físicos, activos no fungibles y *contratos inteligentes* con la posibilidad de codificar las reglas y mover de forma automática archivos digitales. Este artilugio técnico se puede extender para crear organizaciones descentralizadas autónomas (*DAO*), que son contratos a largo plazo que contienen los activos y las reglas de una organización completa. Ethereum busca hacer posible la creación de contratos que permita que cualquier usuario programe la blockchain para cualquier fin, en un lenguaje de programación completo de Turing[^39]. Describe los casos de uso de la blockchain en los que se intentaron desarrollar distintos proyectos, similares a Bitcoin o sobre el protocolo Bitcoin y sus diversas limitaciones técnicas: falta de conclusión de Turing; indiferencia al valor; falta de estado e indiferencia a la cadena de bloques, y propone como respuesta la construcción de una nueva blockchain con su propio protocolo y que opera a base de “cuentas”.

Ethereum validaba originalmente las transacciones utilizando un mecanismo de consenso de Prueba de Trabajo (*Proof of Work, PoW*), en el que los nodos daban poder computacional para validar el bloque de transacciones a cambio de una recompensa. A partir de 2022 se migró a otro mecanismo de Prueba de Tenencia (*Proof of Stake, PoS*), en el que los nodos que validan transacciones en la blockchain son seleccionados por tener una mayor cantidad de monedas bloqueadas como garantía.[^40]

Para realizar la transferencia de información (y de valor), Ethereum utiliza el “*Gas*” como combustible para pagar los gastos de transacción. El "*gas*" es la unidad que mide la cantidad de trabajo computacional requerido para ejecutar transacciones o contratos inteligentes. Cada acción en Ethereum (como enviar ETH, interactuar con un contrato inteligente, o realizar un intercambio en una aplicación descentralizada) requiere una cierta cantidad de poder de procesamiento, y este consumo de recursos se paga utilizando gas[^41].

El *white paper* de Ethereum también contiene una amplia definición de sus aplicaciones, con desarrollo: sistemas de tokens, derivados financieros y *stablecoins*, sistemas de identidad y reputación, almacenamiento de archivos y las ya mencionadas DAOs.

Por otra parte, la formalización teórica de Ethereum y la blockchain programable se encuentra en el llamado *yellow paper*[^42], publicado por Gavin Wood, cofundador de Ethereum.

Uno de los primeros experimentos construidos sobre Ethereum para aprovechar el potencial de los contratos inteligentes fue The DAO. Una de las primeras organizaciones descentralizadas autónomas, The DAO es un conjunto de contratos inteligentes en la blockchain de Ethereum, y a pesar de no contar con oficinas físicas o gerentes profesionales en el sector financiero, buscaba demostrar que Ethereum podía utilizarse para crear una economía financiera descentralizada.

Para ese momento ya existía una comunidad de colaboradores que participaba de la gobernanza y de distintos proyectos basados en Ethereum, pero el uso de la blockchain para proyectos financieros estaba lejos de la expansión actual. The DAO buscaba captar fondos de interesados en Ethereum para desarrollar distintas iniciativas, con o sin ánimo de lucro. Así, el código de The DAO fue escrito y publicado en Github para su revisión y se recolectaron más de 100 millones de dólares en los dos meses posteriores a su lanzamiento[^43] en mayo de 2016 mediante la compra de tokens DAO, que les otorgaba a los compradores derechos de voto proporcionales para influir en la dirección. Un equipo de curadores voluntarios evaluaba y verificaba los proyectos que se proponían para su financiación.

La atención que atrajo The DAO fue fundamental para el desarrollo económico de Ethereum y de otras propuestas de finanzas basadas en la blockchain. Sin embargo, en junio de 2016 un atacante logró aprovechar una vulnerabilidad en el código de The DAO y consiguió desviar alrededor de 50 millones de dólares de los fondos recaudados. Este ataque a la infraestructura ocasionó un debate intenso entre los participantes de la organización descentralizada alrededor de dos posturas[^44]:

- **Respetar el Contrato Inteligente:** Algunos miembros de la comunidad argumentaron que el ataque era poco ético pero válido porque no violaba las reglas de The DAO tal como estaban codificadas. Argumentaron que el código de The DAO debía ser respetado, y que aunque se pudiera modificar posteriormente al ataque para prevenir nuevos hackeos, cualquier acción tomada para revertir el ataque sería contraria al espíritu de descentralización.

- **Responder al Robo:** Otros miembros de la comunidad argumentaron que el ataque fue un robo y que era necesario tomar medidas para revertirlo. Argumentaron que el código de The DAO era defectuoso y que no era justo que el atacante se beneficiaran de su error.

Finalmente, en julio de 2016 un grupo de usuarios liderados por el *community manager* de The DAO realizaron una “bifurcación dura” de la blockchain de Ethereum (*hard fork*) para mover los fondos robados de vuelta a sus propietarios originales. La blockchain de Ethereum sin modificaciones sigue en uso, y en línea con el nombre de Ethereum Classic.

Este ataque contra la primera empresa de finanzas descentralizadas basada en Ethereum fue un hecho fundacional de la red y dejó muchas lecciones aprendidas sobre la gobernanza y la seguridad. El ataque a The DAO es explorado desde otra arista en el capítulo 4 de la presente tesis.

### 2.4 Smart Contracts y Desarrollos Basados en Ethereum. Escalabilidad, Competencia e Interoperabilidad

Los *smart contracts* son aquellos protocolos transaccionales que permiten automatizar la ejecución de acciones o eventos previamente establecidos de acuerdo a un contrato o acuerdo, que se presupone legalmente vinculante. Como Buterin menciona, su aparición tiene como antecedente un trabajo teórico de Nick Szabo[^45], pero su aplicación se aceleró con la aparición de Ethereum generando un ecosistema totalmente novedoso de contratos inteligentes para partes que no tienen confianza mutua[^46].

La aparición de contratos inteligentes desarrollados en Ethereum sentó las bases para un ecosistema financiero sin intermediarios tradicionales. La transición de la economía y finanzas tradicionales (*tradfi*, en el lenguaje cotidiano del mundo cripto) a una economía digital basada en proyectos desarrollados en la blockchain requiere herramientas como las *stablecoins*, tokens no fluctuantes que conserven un valor idéntico al de las monedas fiduciarias (*fiat* *currency*) emitidas por los estados. Para suplir este caso de uso, en 2017 apareció un proyecto financiero denominado MakerDAO, que introdujo la *stablecoin* DAI[^47]. Esta moneda, respaldada por criptoactivos en lugar de monedas fiduciarias, utiliza contratos inteligentes para mantener su valor estable.

Para el almacenamiento de criptomonedas, a diferencia del modelo de exchanges centralizados que ofrecen direcciones a los usuarios para enviar y recibir tokens, en finanzas descentralizadas se suele utilizar un modelo de auto custodia en el que cada usuario almacena sus propios tokens utilizando una billetera virtual (por ejemplo Metamask) o una billetera física (por ejemplo Ledger).

El crecimiento de Ethereum también acarrea problemas de escalabilidad. A medida que Ethereum creció en popularidad, la cantidad de transacciones y contratos inteligentes en la red aumentó. Esto llevó a una mayor demanda de espacio en los bloques, que tienen un tamaño limitado. Los usuarios empezaron a competir por incluir sus transacciones en los bloques, lo que llevó a un aumento en las tarifas de *gas*, ya que los mineros priorizan las transacciones con tarifas más altas. Además, contratos más sofisticados requieren mayor nivel de complejidad, lo que implica mayor costo de capacidad de cómputo. Esto incrementó paulatinamente el precio general de las transacciones en la red.

Además, hasta el año 2020 Ethereum utilizaba un modelo de subasta para determinar las tarifas de *gas*. Esto creaba incentivos para que los usuarios que ofrecían pagar más tuvieran sus transacciones procesadas primero, ya que los mineros que aportan la capacidad de cómputo de la blockchain preferían recibir mayor cantidad de *gas* (convertible por ETH) por el mismo trabajo. Para corregir esto y mejorar algunos asuntos de performance, en 2021 se hizo una reforma para modificar el sistema de tarifas por transacción en Ethereum reduciendo su suministro.[^48]

En el período 2018-2020 se vio un enorme crecimiento en la cantidad y alcance de proyectos DeFi, gracias a la creciente adopción de la infraestructura de Ethereum.

Las aplicaciones basadas en Ethereum comenzaron a ser fácilmente interconectables mediante innovación técnica y una comunidad que aportaba distintas ideas y recursos. Algunos servicios financieros que aparecieron en este lapso de tiempo fueron:

- **Uniswap**[^49], un *exchange* descentralizado que a diferencia de los sitios de intercambio de criptomonedas tradicionales permite el intercambio directo entre usuarios.

- **Compound**[^50], una plataforma de ahorro y crédito que alcanzó casi 500 millones de dólares en fondos a un día de su lanzamiento.

- **Synthetix**[^51], una plataforma para crear y comerciar tokens secundarios sintéticos, que representan otros activos como materias primas, monedas fiduciarias, acciones o índices.

### 2.5 Operaciones y Conceptos Clave relacionados con DeFi

Las plataformas DeFi aprovecharon la capacidad de los contratos inteligentes para crear mercados automatizados y auto-ejecutables, lo que atrajo a usuarios de todo el mundo que buscaban alternativas más transparentes y accesibles a los servicios financieros tradicionales. En la figura 1 se puede observar un esquema simple de préstamos con colateral respaldados en criptoactivos. Para obtener liquidez en los protocolos y poder dar préstamos, las plataformas comenzaron a ofrecer intereses por depositar tokens. Aparece entonces el concepto de *yield farming*[^52], que rápidamente se hizo popular en los proyectos relacionados con Ethereum. Así, las plataformas comenzaron a ofrecer pagos en forma de tokens de recompensas por la provisión de liquidez necesaria para operaciones de intercambio de tokens y préstamos, entre otras.

<img src="/research/tfm/image3.png" style="width:4.78802in;height:2.68835in" />

*Fig. 1. Funcionamiento de Préstamos respaldados en criptoactivos. (Fuente: Centic)*[^53]

Los *exchange* como Uniswap y los “bancos” como Compound son protocolos automatizados basados en contratos inteligentes. No obstante, la posibilidad de obtener ingresos pasivos mediante tres operaciones básicas (*staking*, *lending*, *liquidity*) fue muy atractiva para los usuarios. Las plataformas DeFi generalmente emiten tokens que ponen a disposición del público para capturar liquidez. En el análisis que se presenta a continuación[^54], se han conservado los nombres de las operaciones en inglés para evitar la ambigüedad, incluyendo una traducción sugerida al español entre paréntesis.

**Operaciones Básicas de Minería de Criptoactivos en DeFi**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Operación</strong></th>
<th><strong>Definición</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><em>Staking</em> (Apostar)</td>
<td><p>Proceso de colocar tokens de un protocolo determinado en un <em>wallet</em> o en una cuenta de un exchange con el fin mismo de aportar liquidez o soportar la red en la que se basa el protocolo. Generalmente el protocolo le paga a los validadores, o el exchange le reconoce un porcentaje de interés a los usuarios que dejan tokens en su balance.</p>
<p>En la migración de <em>Proof of Work</em> a <em>Proof of Stake</em> de la red Ethereum, los nodos debían tener bloques de 32 ETH para poder participar de validación de transacciones a cambio de una recompensa.</p></td>
</tr>
<tr class="even">
<td><em>Yield Farming</em> (Cultivo de rendimientos)</td>
<td><p>Fuente de ingreso pasivo de rendimientos al almacenar tokens de cripto en un <em>pool</em> de liquidez, de una forma análoga al rendimiento que paga una cuenta de ahorros o un depósito a plazo fijo en el sistema financiero tradicional. La plataforma utiliza la liquidez depositada por los usuarios para proveer de préstamos a otros usuarios.</p>
<p>La práctica de <em>yield farming</em> usualmente consiste en la realización de operaciones diarias entre protocolos buscando maximizar los rendimientos por la tenencia de criptoactivos.</p></td>
</tr>
<tr class="odd">
<td><em>Liquidity Mining</em> (Minado de liquidez)</td>
<td><p>El <em>liquidity mining</em> es simplemente un caso especial de <em>yield farming</em> en el que el proveedor de liquidez, por ejemplo un exchange descentralizado o un protocolo, le paga al proveedor de liquidez en un token nativo de dicha plataforma o exchange independientemente del token en el que el proveedor o usuario haya aportado liquidez al <em>pool</em>.</p>
<p>Generalmente el liquidity mining aporta mayores beneficios, pero también depende estrechamente de que el token nativo de la plataforma mantenga su valor comercial.</p></td>
</tr>
</tbody>
</table>

Otro concepto muy importante es el de ***Automated Market Maker*** (AMM). Los *market makers* (literalmente hacedores de mercado) son protocolos automatizados que utilizan fórmulas matemáticas muy sofisticadas[^55] para automatizar el trading entre usuarios. Este es el modelo más popular de uso para soportar exchanges descentralizados, ya que permite prescindir de la intermediación humana entre tenedores de distintos tokens[^56].

Los AMM brindan servicios en simultáneo a varios usuarios, pueden hacer las veces de custodio, regular la liquidez en una plataforma, intercambiar distintos tokens y obtener y mantener cotizaciones de intercambio.

<img src="/research/tfm/image4.png" style="width:6.16667in;height:1.92708in" />

*Fig. 2. Funcionamiento básico de un market maker (Fuente: Ho, et al, op.cit.)*

Para obtener cotizaciones actualizadas entre distintos tokens, los *market makers* realizan consultas a distintos servicios provistos por terceros en la red conocidos como ***oracles*** (**oráculos**).

Los **oráculos** son servicios especializados que actúan como puente entre una blockchain o protocolo y el mundo exterior[^57], proporcionando datos externos críticos para la ejecución de contratos inteligentes, como precios de activos sintéticos; tipos de cambio y cualquier otra información financiera que los contratos inteligentes necesitan para ejecutar sus funciones.

La arquitectura integral de la blockchain evita que un smart contract pueda interactuar con información, sistemas o servicios expuestos por fuera de su blockchain de origen. Por esta razón, cualquier recurso externo a la blockchain se considera en lenguaje técnico “*offchain*” (fuera de la cadena), mientras que los datos contenidos en la blockchain se denominan “*onchain*”. De esta forma, se mantiene la validación de la información mediante consenso en la blockchain y se conserva la integridad de la red, por ejemplo. No obstante, la necesidad de los contratos inteligentes de consumir datos financieros, información del clima o resultados deportivos para un portal de apuestas, por ejemplo, justifican la aparición de oráculos[^58].

Los oráculos pueden clasificarse por su taxonomía como **centralizados**, dependientes de un único servicio disponible para su consulta, o **descentralizados**[^59]. Mientras que un oráculo centralizado es sencillo de implementar y mantener, puede ser un vector de ataque significativo: si un atacante logra manipular la fuente de datos del oráculo o el mecanismo de agregación de precios, puede inducir al contrato a ejecutar operaciones bajo premisas falsas. Esta tensión implícita entre confianza/centralización y descentralización e independencia es conocida en la literatura especializada como “el problema del oráculo”[^60].

Los oráculos también pueden clasificarse como de **entrada** o de **salida** de acuerdo a los flujos de información. Si bien es más común que haya oráculos que traen información del mundo real a la blockchain, también es posible que un oráculo de salida informe de transacciones en la red a un servicio externo[^61].

La manipulación de oráculos ha sido especialmente explotada en ataques que combinan *flash loans* con operaciones en múltiples protocolos DeFi, donde los atacantes primero manipulan el precio en un exchange descentralizado y luego aprovechan que otros protocolos confían en ese precio manipulado a través de sus oráculos para ejecutar operaciones fraudulentas como liquidaciones forzadas o préstamos con colateral sobrevalorado. Este tipo de vulnerabilidad ha resultado en algunas de las pérdidas más significativas en el ecosistema DeFi, ejemplificando cómo la interconexión entre protocolos puede amplificar el impacto de un ataque exitoso.

Otro concepto necesario para explicar dentro de DeFi es el de un ***bridge*** (puente). Los *bridges* son protocolos que permiten la transferencia de tokens, o distintos archivos entre diferentes blockchains para garantizar la interoperabilidad mutua[^62].

Los *bridges* son aplicaciones descentralizadas que solucionan el problema de interoperabilidad entre diferentes blockchains. Estas aplicaciones operan sobre dos o más blockchains, y actúan como un custodio de activos que se depositan en la cadena de origen, disparando un evento en un contrato inteligente, que es validado y dispara otro evento en un contrato inteligente en la cadena de destino. A su vez, un validador del *bridge* en la cadena de destino genera un evento de depósito y uno de transferencia subsecuente en la blockchain de destino, lo que libera efectivamente los fondos y emite representaciones equivalentes en la cadena de destino.

<img src="/research/tfm/image1.png" style="width:6.26772in;height:1.58333in" />

*Fig. 3. Flujo de una transferencia de tokens entre blockchains. Fuente: Augusto, et al. op. cit.*

Se puede pensar en el rol de los *bridges* como elementos análogos al sistema de transferencias y *clearing* en la banca tradicional. Los *bridges* deben superar desafíos técnicos como implementaciones disímiles y no documentadas correctamente en distintas blockchains, especificaciones no actualizadas, vulnerabilidades no conocidas y el costo técnico de transaccionar en simultáneo en distintos protocolos.

Generalmente los *bridges* dependen de conexiones con oráculos para verificar la validez de transacciones en distintas blockchain (*cross-chain*); confirmar la disponibilidad y el estado de los activos en custodia en ambas cadenas, y garantizar la paridad de valor entre activos originales y representados. De acuerdo a su taxonomía, los *bridges* pueden ser **custodiales/centralizados** si mantienen el control de un grupo definido de validadores en una red, o **no custodiales/descentralizados** si se alojan en la blockchain y realizan la validación mediante pruebas criptográficas.

### 2.6 Algunas conclusiones sobre la evolución de DeFi

La popularización de Ethereum en el ciclo de crecimiento 2015-2020 atrajo más jugadores al ecosistema. Como se ha observado, la taxonomía actual de la Web3 se caracteriza por la coexistencia de múltiples blockchains que se conectan entre sí a través de aplicaciones puente que permiten transferir datos (y tokens, por consiguiente) entre ellas. Las blockchains alternativas a Ethereum más expandidas actualmente son:

- **Solana**[^63], plataforma lanzada en 2020 como alternativa a Ethereum que utiliza Prueba de Tenencia como mecanismo de validación.

- **Polkadot**[^64], plataforma lanzada en 2020 entre otros por Gavin Wood, cofundador de Ethereum y que está diseñada para intercambiar mensajes entre diferentes blockchains de forma descentralizada.

- **BNB Chain**[^65], plataforma creada por Binance con foco en la escalabilidad y bajo costo, compatible con Ethereum y que utiliza su propio mecanismo de consenso combinando Prueba de Tenencia y Prueba de Trabajo.

Los conceptos anteriormente explorados (***automated market makers***, **oráculos** y ***bridges***) son centrales a la arquitectura actual de las finanzas descentralizadas ya que son críticos para la solución de los desafíos técnicos necesarios para garantizar liquidez e interoperabilidad a sus usuarios. Dicha interoperabilidad es una característica clave de su uso para garantizar servicios financieros, y ha permitido que la industria DeFi se haya convertido en un actor consolidado del panorama financiero mundial.

Esta realidad a su vez abre la puerta a nuevos desafíos de ciberseguridad para usuarios, firmas y gobiernos, y a nuevos debates sobre gobernanza, seguridad y responsabilidad, más aún cuando la comprensión por parte de las instituciones, los gobiernos y buena parte del público en general no se encuentra a la altura del desafío que implica la existencia de avances tecnológicos capaces de superar el estado actual de la tecnología utilizada por el sistema financiero tradicional. Si los organismos reguladores no tienen noción del funcionamiento de los mecanismos aquí descritos, será muy difícil que puedan siquiera considerar entenderlos, mucho menos regularlos o brindar un marco normativo para que convivan con la arquitectura de los servicios financieros tradicionales prestados en la Argentina y la región, aun cuando los servicios facilitados por DeFi ya se encuentren plenamente operativos y al alcance de cualquier usuario.

## 3. EXPOSICIÓN A CRIPTOACTIVOS Y FINANZAS DESCENTRALIZADAS EN ARGENTINA

El desarrollo de la industria de criptoactivos en Argentina abarca ya más de una década. Hay cuatro tipos de negocios principales derivados de la existencia de los criptoactivos a nivel global, y aunque no es posible realizar un análisis minucioso de la evolución de cada uno de estos negocios por no hallarse sujeto a fronteras nacionales ni hacer parte de las estadísticas oficiales, es importante entender cómo las personas físicas y jurídicas han obtenido rédito económico y han logrado posicionar al país como líder regional en adopción y desarrollo del sector.

### 3.1 Taxonomía básica de la industria de criptoactivos en la Argentina

Al analizar la industria de criptoactivos es importante tener en cuenta que algunos de los valores implícitos desde su nacimiento son la **anonimización de operaciones**, razón por la que se acudió inicialmente a la criptografía como mecanismo de cifrado; el **rechazo filosófico a las formas de control estatal** que ya ha sido expuesto en el capítulo anterior y el **desarrollo comunitario de proyectos** en el ciberespacio que permite que distintos participantes realicen tareas de ingeniería, operaciones financieras, gestión del producto y expandan la comunidad de manera global, sin importar las fronteras nacionales ni el lugar físico en el que se encuentren. Dicho esto, es difícil determinar a ciencia cierta dónde se encuentran las huellas de la industria de criptoactivos en cualquier país por no hallarse delimitada y no estar incluida en su totalidad su economía en las estadísticas económicas de cualquier nación, pudiendo hacer parte de las cifras de la economía sumergida[^66]. Los cuatro tipos de negocios relacionados con la industria de cripto activos presentes en Argentina son:

- **Minado de criptoactivos**

- **Sitios de compra y venta de criptoactivos (*exchange*)**

- **Operaciones de arbitraje con criptoactivos**

- **Desarrollo de soluciones y exportación de servicios de tecnología**

A continuación explicaremos brevemente el desarrollo de cada uno de dichos sectores.

**Minado de criptoactivos**

El minado de criptoactivos es el proceso mediante el cual se valida y se registra la información de las transacciones en una blockchain. Esta actividad es fundamental en las redes que utilizan un mecanismo de consenso basado en Prueba de Trabajo (*PoW, Proof of Work*), como Bitcoin y algunas otras criptomonedas.

Durante los primeros años de existencia de Bitcoin, era posible realizar minado de criptoactivos con equipos de cómputo disponibles de forma doméstica. Al ir creciendo la red y agregándole bloques, fue necesario contar con cada vez más capacidad de cómputo para resolver los *hash* y agregar bloques.

Actualmente se utiliza hardware especializado para minería de criptoactivos (normalmente ASICs o GPUs) con el fin de realizar validación de problemas matemáticos[^67].

El minado hoy por hoy implica altos costos iniciales por la adquisición de equipos y un consumo significativo de energía eléctrica. Sin embargo, los mineros obtienen ganancias de dos maneras: a través de recompensas por bloque, es decir, la cantidad de criptomonedas emitidas al resolver un bloque y por las comisiones por transacción que pagan los usuarios para que sus transacciones sean incluidas en el bloque.

Con los incentivos mencionados, en Argentina existen hoy empresas constituidas dedicadas al minado, como **BitPatagonia** o **Bitfarms** o empresas que venden insumos para minería de activos como **South American Miners**, por poner algunos ejemplos.

**Sitios de compra y venta de criptoactivos (*exchanges*) centralizados**

Los sitios de compra y venta de criptoactivos más utilizados en Argentina en los últimos años fueron Binance, Lemon, Ripio, Belo, Buenbit y Bitso[^68]. Los exchanges de cripto activos ganan dinero con las comisiones por retiro de activos y por el *spread* entre los precios de compra y de venta.

**Operaciones de arbitraje con criptoactivos**

De la misma forma que los exchanges de criptoactivos obtienen ganancia, personas y entidades pueden aprovechar oportunidades de arbitraje haciendo una diferencia en compra y venta de cripto activos. Las operaciones de arbitraje tuvieron una explosión asociada al lanzamiento de operaciones de *yearn finance* en los años 2020 y 2021 de forma conexa con el boom de las finanzas descentralizadas en aquellos años.

**Desarrollo de soluciones y exportación de servicios de tecnología**

Paralelo al crecimiento de DeFi, hubo una expansión de negocios relacionados con la *tokenización* de activos tales como *commodities*, propiedades inmobiliarias o acciones. También aparecieron varias empresas encargadas de crear servicios de entretenimiento virtuales asociadas a la web3, en el denominado *metaverso*. Algunas de estas empresas son **Agrotoken**, con una propuesta destinada a utilizar la soja, el trigo y el maíz como garantía para obtener préstamos mediante el uso de tokens en representación de los bienes; **Decentraland**, desarrolladora de realidad virtual que permite crear aplicaciones en web 3; **RootStock Labs**, desarrolladora de smart contracts sobre la blockchain de Bitcoin, **OpenZeppelin**, empresa enfocada en la provisión de soluciones de seguridad para el desarrollo de smart contracts, entre otras. Algunas de estas empresas continúan sus negocios localizados en Argentina mientras que otras tienen alcance global, haciendo difícil trazar la huella de sus negocios en un solo país.

Además de las empresas, hay una cantidad indeterminada de argentinos y residentes en el país que desarrollan software exportando servicios al exterior. Esta población utiliza soluciones basadas en cripto de forma asidua para responder a sus necesidades financieras sin la necesidad de optar por la banca formal evitando también la tributación en el esquema local.

### 3.2 Contexto de los exchanges de criptoactivos en la Argentina

En el primer capítulo definimos a los Prestadores de Servicios de Pago (PSP) como todas aquellas entidades financieras no bancarias, que pueden capturar pagos del público y que proveen Clave Virtual Unificada (CVU), presentando características de interoperabilidad con la Clave Bancaria Unificada (CBU) de los bancos tradicionales.

Varias de dichas entidades no bancarias funcionan de hecho como filiales de sitios de compra y venta de criptomonedas, que ofrecen servicios financieros expuestos a finanzas descentralizadas (DeFi). Dichas entidades están inscriptas en el ya mencionado Registro de Proveedores de Servicios de Pago[^69], en el que encontramos registros de entidades relacionadas con prácticamente todos los *exchange* de compra y venta de criptoactivos que operan en la Argentina.

**<u>Cronología de Lanzamientos y adquisiciones de exchanges de cripto activos en Argentina</u>**

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Año</strong></th>
<th><strong>Hito</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>2013</td>
<td><ul>
<li>Lanzamiento de <strong>Ripio</strong></li>
</ul></td>
</tr>
<tr class="even">
<td>2014</td>
<td><ul>
<li><p>Lanzamiento de <strong>Unisend</strong></p></li>
<li><p>Lanzamiento de <strong>SatoshiTango</strong></p></li>
<li><p>Lanzamiento de <strong>ArgenBTC</strong></p></li>
</ul></td>
</tr>
<tr class="odd">
<td>2015</td>
<td><ul>
<li>Adquisición de <strong>Unisend</strong> por parte de <strong>Ripio</strong></li>
</ul></td>
</tr>
<tr class="even">
<td>2017</td>
<td><ul>
<li><p>Lanzamiento de <strong>Fiwind</strong></p></li>
<li><p>Lanzamiento de <strong>Buenbit</strong></p></li>
<li><p>Lanzamiento de <strong>LetsBit</strong></p></li>
<li><p>Lanzamiento de <strong>SeSocio</strong></p></li>
</ul></td>
</tr>
<tr class="odd">
<td>2020</td>
<td><ul>
<li><p>Binance comienza a operar formalmente en Argentina</p></li>
<li><p>Lanzamiento de <strong>Belo</strong></p></li>
<li><p>Lanzamiento de <strong>Lemon</strong></p></li>
</ul></td>
</tr>
<tr class="even">
<td>2021</td>
<td><ul>
<li><p><strong>Bitso</strong> comienza a operar formalmente en Argentina</p></li>
<li><p>Lanzamiento de <strong>Decrypto</strong></p></li>
</ul></td>
</tr>
<tr class="odd">
<td>2022</td>
<td><ul>
<li>Adquisición de <strong>SeSocio por Blockchain.com</strong></li>
</ul></td>
</tr>
<tr class="even">
<td>2023</td>
<td><ul>
<li>Lanzamiento de <strong>Belo</strong>, exchange</li>
</ul></td>
</tr>
<tr class="odd">
<td>2024</td>
<td><ul>
<li><strong>OKX</strong> comienza a operar formalmente en Argentina</li>
</ul></td>
</tr>
</tbody>
</table>

**Tabla 1.** Línea de tiempo de exchanges de cripto activos en Argentina

Otra entidad que nuclea a los negocios relacionados con el mundo cripto en particular, y fintech en general en Argentina es la Cámara Argentina de Fintech[^70], organización que agremia a múltiples entidades que entran en la definición del BCRA de Proveedores de Servicios de Pago.

Los exchanges de criptoactivos que han sido objetos del análisis aquí presentado son conocidos en la industria como **exchanges centralizados** (CEX), y son diferentes de los exchanges **descentralizados** (DEX) propios de las plataformas DeFi[^71].

Para este análisis utilizamos de forma indiferente exchanges centralizados locales, como Ripio, Lemon o Buenbit, y exchanges internacionales que tienen operación en Argentina como Binance, OKX o Bybit. Las características analizadas dan visibilidad a la regulación local, mientras que a su vez mantienen la dependencia de la interconexión con la infraestructura bancaria nacional (rampas).

Algunas de sus características principales se detallan a continuación.

**Tabla de Características de Exchanges Centralizados (CEX)**

| **Aspecto**     | **Implementación**            | **Implicaciones locales**                                   |
|:----------------|:------------------------------|:------------------------------------------------------------|
| Custodia        | Custodial (control de fondos) | Sujeto a regulaciones bancarias y cambiarias del BCRA       |
| KYC/AML         | Obligatorio                   | Comparte información con la UIF, AFIP y reguladores locales |
| Operativa       | *Order book* centralizado     | Brinda mayor liquidez para pares ARS/cripto                 |
| Infraestructura | Servidores centralizados      | Vulnerable a restricciones gubernamentales                  |

En comparación, los exchanges **descentralizados** no están basados en organizaciones monolíticas sino en protocolos en la blockchain. No están directamente sujetos al control de una entidad reguladora territorial, con lo que operan en una zona gris, y operan de forma independiente e inconexa de la infraestructura bancaria argentina (o de cualquier país).

**Tabla de Características de Exchanges Descentralizados (DEX)**

| **Aspecto**     | **Implementación**                              | **Implicaciones locales**                                |
|:----------------|:------------------------------------------------|:---------------------------------------------------------|
| Custodia        | Custodial (control de fondos)                   | No sujeto a regulaciones bancarias y cambiarias del BCRA |
| KYC/AML         | No necesariamente requerido                     | No brinda información al regulador local                 |
| Operativa       | *Automated Market Maker*, *order book* on-chain | Menor liquidez para pares ARS/cripto                     |
| Infraestructura | Contratos inteligentes                          | Resistente a restricciones gubernamentales               |

Algunos ejemplos de protocolos DEX relevantes son Uniswap, Pancakeswap o SushiSwap. Los DEX no están sujetos a aspectos regulatorios argentinos, pero tienen como desventaja la necesidad de acudir a un CEX para realizar un pase entre pesos argentinos (ARS) y cualquier token cripto.

Existe una participación importante de personas y entidades argentinas en el escenario DeFi global. Este hecho es visible en la cantidad de seminarios, convenciones y reuniones de distintos tipos que han tenido lugar en Buenos Aires durante los últimos años. Aquellos desarrollos que tengan lugar en el espacio virtual, por parte de entidades que estén registradas en otras jurisdicciones, seguramente tendrán en la blockchain activos pertenecientes a personas físicas o jurídicas relacionadas con Argentina, invisibles para las entidades regulatorias, que están disponibles para sus usuarios mediante modelos de auto-custodia o a través de exchanges descentralizados.

### 3.3 Regulaciones Aplicables a los Exchanges en la Actualidad

Las entidades relacionadas al negocio cripto generalmente tienen una estructura legal de sociedad anónima (S.A.) o sociedad de responsabilidad limitada (S.R.L.). La Unidad de Información Financiera (UIF) adoptó una resolución en el año 2014[^72] definiendo las monedas virtuales como “*toda representación digital de valor que puede ser objeto de comercio digital y cuyas funciones son la de constituir un medio de intercambio , y/o una unidad de cuenta, y/o una reserva de valor, pero que no tienen curso legal, ni se emiten, ni se encuentran garantizadas por ningún país o jurisdicción*”. Esta primera regulación alusiva al espacio de cripto activos no regula pero sí hace eco de las recomendaciones del Grupo de Acción Financiera Internacional (GAFI) en materia de prevención de lavado de activos y financiación del terrorismo (PLAFT).

**Tabla de Normas Aplicables a la Seguridad de la Información de Exchanges en Argentina**

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 87%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Norma</strong></th>
<th><strong>Asunto</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Com. “A” 6375/2017<a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></td>
<td><p>“Expansión de entidades financieras” y</p>
<p>“Requisitos mínimos de gestión, implementación y control de los riesgos relacionados</p>
<p>con tecnología informática, sistemas de información y recursos asociados para las entidades financieras”.</p></td>
</tr>
<tr class="even">
<td>Com. “A” 6603/2018</td>
<td><p>Expansión de entidades financieras. Lineamientos para la gestión de riesgos en las entidades financieras. Servicios complementarios de la actividad financiera y actividades</p>
<p>permitidas. Adecuaciones.</p></td>
</tr>
<tr class="odd">
<td>Com. “A” 7783/2023</td>
<td><p>“Requisitos mínimos para la gestión y control de</p>
<p>los riesgos de tecnología y seguridad de la información”. Adecuaciones. “Requisitos mínimos para la gestión y control de los riesgos de tecnología y seguridad de la información asociados a los</p>
<p>servicios financieros digitales.” Reglamentación.</p></td>
</tr>
</tbody>
</table>
<aside id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p><a href="https://www.bcra.gob.ar/Pdfs/comytexord/A6375.pdf"><u>Com. “A” 6375/2017</u></a>. BCRA<a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</aside>

**Tabla 2.** Marco Regulatorio Relacionado con Seguridad de la Información

A partir de marzo del 2024, la Comisión Nacional de Valores habilitó el Registro de Proveedores de Servicios de Activos Virtuales (PSAV)[^73], específicamente para identificar a personas humanas y jurídicas que proveen en el país servicios relativos a criptoactivos. Para esto, se reformó la ley de Prevanción de Lavado de Activos y Financiación del Terrorismo[^74].

Esta situación profundiza aún más la integración entre criptoactivos y el sistema financiero tradicional en Argentina, ya que de hecho habilita la operación de personas jurídicas identificadas en el extranjero a ofrecer servicios relacionados con criptoactivos aún por fuera de las regulaciones propias de las circulares del BCRA. La CNV cuenta con una Política de Seguridad de la Información, pero hasta la fecha no ha emitido recomendaciones ni reglamentado requerimientos mínimos de seguridad de la información para los Proveedores de Servicios de Activos Virtuales.

Varios de los exchange cripto que operan en el país, inscritos como PSP y/o como PSAV facilitan a sus usuarios la adquisición de tokens de proyectos financieros relacionados a plataformas descentralizadas (DeFi). Es así como es posible adquirir tokens de distintos protocolos a través de los exchanges de cripto activos más utilizados del país:

**Tabla de Registro de CEX en Argentina**

| **Exchange** | **Registro PSAV/PSP**                                        | **Oferta de productos**             |
|:-------------|:-------------------------------------------------------------|:------------------------------------|
| Binance      | Binance Services Latinoamerica S.A. de C.V.                  | Web3 Wallet[^75]                    |
| Lemon        | The Place S.A. de C.V.                                       | Web3 Wallet[^76]                    |
| Ripio        | Moonbird SRL                                                 | Web3 Wallet[^77]                    |
| Fiwind       | Fiwind LLC                                                   | Ninguna                             |
| Buenbit      | Oware SAS                                                    | DAI, ETH, POL, AVAX, ADA, etc.      |
| Bitso        | Nvio Pagos Argentina SAU / The Badger Technology Company Ltd | Web3 Wallet[^78]                    |
| Belo         | Belo Argentina S.A.                                          | DAI, ETH, POL, AVAX, ADA, SOL, etc. |
| SatoshiTango | Fintech S.A.                                                 | DAI, ETH.                           |
| Decrypto     | SG Financial Technology S.A.                                 | DAI, ETH.                           |

**Tabla 3.** *Exchanges* con operaciones en Argentina y exposición a DeFi.

Al explicar las diferencias entre exchanges centralizados y descentralizados en esta tesis se hizo énfasis en los aspectos regulatorios y operativos. A pesar de la aparente contraposición de casos de uso entre CEX y DEX, en realidad su uso es complementario.

El diagrama a continuación muestra la interacción entre finanzas tradicionales (*TradFi* en la jerga cripto) y finanzas descentralizadas, o DeFi. En el supuesto en el que un usuario quiere invertir dinero *fiat*, de curso legal, emitido por los estados, para participar de alguna de las opciones de colocación de activos para obtener beneficios que se han detallado anteriormente (ver 2.5, Operaciones y Conceptos Clave relacionados con DeFi), va a necesitar depositar su dinero o transferirlo desde un banco tradicional en un exchange centralizado, ya que son las únicas entidades habilitadas para recibir fondos *fiat* y realizar un intercambio de dinero de curso legal por tokens cripto.

Los exchanges centralizados (CEX) realizarán a continuación una revisión de los antecedentes del usuario (*Know Your Customer* o KYC) para prevenir el uso de criptoactivos como facilitador del lavado de activos (*Anti-Money Laundering* o AML). Estas operaciones se encuentran reguladas por organismos nacionales en casi todas las jurisdicciones.

Un CEX habilitará entonces a un usuario plenamente identificado a transaccionar pares de dinero de curso legal (*fiat*) contra tokens cripto, y podrá a su vez transferir los tokens desde una dirección asignada a este usuario, provista por el exchange centralizado, a otra dirección cripto fuera del exchange, que podría estar vinculada a una billetera web3 o a un protocolo de finanzas descentralizadas (un DEX).

<img src="/research/tfm/image6.png" style="width:6.26772in;height:2.41667in" />

*Fig. 1. Diagrama de interacción TradFi - DeFi. Elaboración propia.*

A partir de este punto los fondos representados en tokens pasan a estar completamente fuera del campo de visión de las entidades regulatorias. No obstante, el uso del “dinero de internet” en la economía real necesariamente implica recorrer el camino a la inversa: al no existir una pasarela de pagos entre los DEX y el sistema financiero tradicional, habrá que volver a pasar por un CEX para retirar los fondos a un banco tradicional. Así, los usuarios tendrían dos opciones:

- Realizar transacciones de intercambio de bienes y servicios contra tokens depositados en la blockchain, en protocolos DeFi, entre pares y de forma no regulada ni respaldada

- Someterse a revisiones de KYC y mantener una cuenta en un exchange centralizado para operar como interfaz entre el mundo cripto y su cuenta bancaria tradicional.

Mientras la mayoría de las transacciones de la economía real sigan siendo intercambios de bienes y servicios denominados en dinero de curso legal, será necesario para la enorme mayoría de los usuarios realizar este pase.

### 3.4 Conclusiones y observaciones sobre el uso actual de criptoactivos y Finanzas Descentralizadas en Argentina

De esta forma, vemos que a la fecha hay tres conclusiones importantes en lo referente a criptoactivos en general y proyectos financieros DeFi en particular y su regulación en la Argentina:

- Distintos *exchanges* y entidades fintech se encuentran registrados como PSP o PSAV, haciendo parte del sistema financiero no bancario en Argentina que se encuentra interconectado.

- Las regulaciones de seguridad actualmente existentes no alcanzan siquiera a comprender la cantidad y complejidad de casos posibles que se pueden presentar en la blockchain y finanzas descentralizadas, que describiremos en el siguiente capítulo.

- Es posible suponer que la interacción e interdependencia entre entidades bancarias y no bancarias en el sistema financiero continuará en aumento, y que las pasarelas de pagos proporcionadas por los *exchange* hacia el sistema financiero tradicional serán clave para el uso en la economía real de fondos existentes actualmente en la blockchain.

El uso de criptoactivos en Argentina se encuentra en una zona gris, y los usuarios de servicios financieros asociados a DeFi continúan en aumento. Esta realidad expondrá a cada vez más personas y entidades argentinas a ser blanco potencial de ataques para actores delictivos, que son objeto de estudio de esta tesis.

## 4. VULNERABILIDADES Y ROBOS EN BLOCKCHAIN, CRIPTO Y FINANZAS DESCENTRALIZADAS

A pesar de que hay innumerables factores potenciales de ataques o de aprovechamiento de vulnerabilidades en la blockchain que pueden ser capitalizados para atacar redes, protocolos, organizaciones o exchanges de cripto, debemos empezar por el contexto en el que los mismos se enmarcan.

Una de los primeros hechos de ataque a estructuras en la blockchain y definitivamente uno que tuvo consecuencias históricas fue el robo a the DAO (*decentralized autonomous organization*), Organización Autónoma Descentralizada, una de las primeras organizaciones que tuvo como objetivo la financiación de proyectos basados en Ethereum. Este hecho, ya explicado en el segundo capítulo, fue definitivamente un hecho clave en el desarrollo de Ethereum, pues ocasionó el *hard fork* o bifurcación de la red de Ethereum, que hasta ese momento se consideraba monolítica, fue un punto de inflexión en la seguridad de la blockchain y demostró que los errores en la elaboración de *smart contracts* pueden ser fatales. Cualquier percepción que hubiera hasta ese momento de que las blockchain no eran susceptibles de ataques se derrumbó allí[^79].

### 4.1 El Primer Gran Robo: The DAO

Antes del robo a The DAO, ya algunas vulnerabilidades habían sido detectadas y solucionadas durante ciclos de pruebas. No obstante, la ejecución del ataque y la subsiguiente propuesta del creador de la red, Vitalik Buterin, de proponer congelar los fondos robados mediante una bifurcación suave (*soft fork*) para dejarlos aislados, y evaluar opciones para su recuperación, abrieron una serie de debates sobre la naturaleza misma de la blockchain y los contratos inteligentes. El atacante escribió un mensaje proponiendo recompensar a los mineros participantes de la red que no participaran del *soft fork* a cambio de una recompensa[^80],

Luego de la propuesta del *soft fork* comenzó un debate con respecto a la neutralidad de la red, y la implicación de que la Ethereum Foundation se hubiera involucrado en el proyecto de The DAO y ahora quisiera retornar los fondos implicaba que la red no era neutral. No obstante, el riesgo de no recuperar los fondos hubiera sido potencialmente catastrófico para la supervivencia de Ethereum como proyecto y hubiera tenido serias consecuencias legales para las partes involucradas: los aportantes de los fondos que habían sido recaudados en The DAO; los exchanges que tenían tokens the DAO; la fundación Ethereum, que había recibido la exposición pública de la colecta, los mineros-validadores e inclusive el mismo atacante. Dicho esto, la historia indica que la opción del *hard fork* que se adelantó, o bifurcación ruda de la red de Ethereum ocasionó la división entre Ethereum Classic (la versión anterior de la red, sin bifurcación que fue preservada por un grupo de participantes) y Ethereum a secas, que continuaría su camino libre del pecado original de haber permitido la pérdida de aproximadamente 60 millones de dólares en Ether y haber sepultado las posibilidades de otras organizaciones de utilizar la tecnología blockchain para fines financieros[^81].

El caso de The DAO representa un punto de inflexión en la evolución de las acciones maliciosas en la blockchain, no solo por la magnitud del ataque, sino porque demostró cómo una única vulnerabilidad en un smart contract podía comprometer todo un ecosistema. Este incidente marcó el inicio de una nueva era donde los atacantes comenzaron a explotar no solo vulnerabilidades técnicas, sino también las características fundamentales de los sistemas DeFi, como la complejidad entre protocolos y la naturaleza automatizada de los smart contracts.

La lección de The DAO también evidenció cómo los objetivos de los atacantes pueden trascender el beneficio económico inmediato: el impacto del ataque en la gobernanza de Ethereum y su subsecuente fork demostró cómo estas acciones pueden tener ramificaciones políticas y filosóficas que afectan a toda la comunidad blockchain.

### 4.2 Clasificación de Acciones Maliciosas en Criptoactivos y DeFi

Es importante separar el **fin u objetivo** del ataque informático del **medio o tipo** de ataque perpetrado para conseguir el objetivo. Si bien se asume que generalmente los fines de un ataque a un protocolo DeFi son de tipo económico, y que un ataque busca hacerse con el control de fondos representados en tokens, es probable que los fines del ataque sean de más largo aliento, como en el caso de los ataques que buscan hacerse con el control de la gobernanza de una plataforma; o que sea un ataque de manipulación de mercado; o simplemente un tipo de sabotaje de proyectos determinados.

Para poder hacer un resumen de **propósitos u objetivos** de un ataque se definirá metodológicamente qué se considera un ataque en términos de la blockchain, y puntualmente hablando de finanzas descentralizadas.

Es posible acudir aquí a la definición del NIST de ataque informático[^82]: *“Any kind of malicious activity that attempts to collect, disrupt, deny, degrade, or destroy information system resources or the information itself.*”

Además, es posible ampliar la definición sumando aquellas acciones que no consisten en sí mismas en un ataque por no constituir técnicamente un ataque contra la confidencialidad, integridad o disponibilidad de la red, pero sí pueden constituir un delito informático en una o varias jurisdicciones estatales.

**Tabla de Clasificación de Acciones Maliciosas en el Contexto de Criptoactivos**

<table>
<colgroup>
<col style="width: 9%" />
<col style="width: 90%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Acción maliciosa</strong></th>
<th><strong>Definición</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Exploit</td>
<td>Aprovechamiento de vulnerabilidades en el código de los contratos inteligentes (<em>smart contracts</em>) o de las plataformas como exchanges o portales de conexión entre distintas blockchains.</td>
</tr>
<tr class="even">
<td>Phishing</td>
<td>Lograr que los usuarios revelen sus claves privadas o detalles de login de plataformas o billeteras con el fin de controlar los activos localizados en ellas, frecuentemente a través de medios digitales.</td>
</tr>
<tr class="odd">
<td>Ingeniería Social</td>
<td>Lograr que los usuarios revelen información comprometedora o de acceso a plataformas o billeteras; encontrar información sensible sobre plataformas; lograr que usuarios realicen transacciones sobre premisas fraudulentas, a través de medios digitales, análogos o físicos.</td>
</tr>
<tr class="even">
<td>Rug Pull</td>
<td>Estafa en la que los desarrolladores o administradores de un proyecto DeFi eliminan la liquidez de su plataforma, licuando efectivamente el valor de los tokens en poder de los usuarios que han adquirido dichos tokens previamente con el fin de financiar un proyecto que presumen legítimo.</td>
</tr>
<tr class="odd">
<td>Ataque de gobernanza</td>
<td>Acción de manipular el rumbo o de obtener el control forzoso de una plataforma o protocolo DeFi a través de la adquisición, por medios legítimos o no, de la mitad más uno, o del 51% de los tokens en proyectos o plataformas cuya gobernanza está relacionada a la prueba de tenencia de dichos tokens.</td>
</tr>
<tr class="even">
<td>Ransomware</td>
<td><p>Malware que cifra datos o bloquea sistemas hasta que se realice un pago en criptomonedas. En el contexto DeFi/cripto puede incluir:</p>
<ol type="A">
<li><p>Ataques a exchanges para exigir rescates</p></li>
<li><p>Bloqueo de smart contracts mediante vulnerabilidades</p></li>
<li><p>Amenazas de exposición de vulnerabilidades críticas</p></li>
</ol></td>
</tr>
<tr class="odd">
<td>Crypto-jacking</td>
<td>Uso no autorizado de recursos computacionales para minar criptomonedas o validar transacciones, frecuentemente combinado con amenazas de ransomware</td>
</tr>
<tr class="even">
<td>Ransomware-as-a-Service (RaaS)</td>
<td>Provisión de infraestructura de ransomware a terceros usando pagos y liquidaciones a través de DeFi para ocultar el origen de los fondos</td>
</tr>
</tbody>
</table>

**Tabla 4.** *Acciones maliciosas en DeFi*

**Tabla de Clasificación de Técnicas Maliciosas en el Contexto de Criptoactivos**

| Técnica                                   | Tipo de Acción        | Definición                                                                                                                                                                                                                                                                     |
|:------------------------------------------|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ataques de préstamo rápido (*flash loan*) | Exploit               | Uso de un ataque contra un préstamo que se toma en forma fraudulenta, sin garantía y se reembolsa en un único bloque de transacciones, manipulando los precios de mercado o explotando vulnerabilidades en pools de liquidez u otros sistemas de crédito que exigen colateral. |
| Manipulación de oráculos de precios       | Exploit               | Manipulación de un *oráculo*, o sistema de adquisición de datos de fuentes externas (por ejemplo, cotización de otros tokens o commodities) alimentando el oráculo con información falsa para aumentar o reducir el precio en un intercambio obteniendo una ventaja ilegítima. |
| Ataque a *bugs* en contratos inteligentes | Exploit               | Búsqueda de errores no explotados en contratos inteligentes distinta de los anteriormente explicados que permita que bajo determinadas condiciones, la ejecución de ciertas acciones derive en consecuencias beneficiosas para el atacante.                                    |
| Ataques de *re-entrance* (re-entrada)     | Exploit               | Ingresar más de una vez en una función de un contrato inteligente antes de completar la ejecución inicial del mismo, forzando un *loop* y permitiendo hacerse con el control de fondos mediante la generación de un error inesperado.                                          |
| *Rug Pull*                                | Estafa                | Drenaje de la liquidez de la plataforma para realizar una estafa, generalmente por participantes de un proyecto en fase de capitalización.                                                                                                                                     |
| Ataques de Gobernanza                     | Estafa/Exploit        | Obtención del control de una plataforma o protocolo a través de la adquisición, por medios legítimos o no, de la mitad más uno, o del 51% de los tokens en proyectos o plataformas cuya gobernanza está relacionada a la prueba de tenencia de dichos tokens.                  |
| Phishing                                  | Estafa                | Obtención de claves privadas o detalles de login de usuarios de plataformas o billeteras con el fin de controlar los activos localizados en ellas, frecuentemente a través de medios digitales.                                                                                |
| Ataque de doble extorsión                 | Ransomware / Exploit  | Combinación de cifrado de datos con amenaza de publicación de información sensible, exigiendo pagos en criptomonedas.                                                                                                                                                          |
| Secuestro de carteras                     | Ransomware / Phishing | Bloqueo de acceso a carteras cripto mediante malware hasta el pago de un rescate.                                                                                                                                                                                              |
| Ataque a infraestructura crítica          | Ransomware            | Bloqueo de sistemas críticos de exchanges o protocolos DeFi exigiendo pagos en criptomonedas.                                                                                                                                                                                  |

### 4.3 Vulnerabilidades relacionadas con Smart Contracts y DeFi

Los *smart contracts* o contratos inteligentes son programas especializados almacenados en una blockchain que se utilizan para automatizar la ejecución de un acuerdo entre partes, buscando eliminar la necesidad de intermediarios. Los contratos inteligentes suelen ser escritos en lenguajes de programación como Solidity, Viper o Rust, por su compatibilidad con un elevado número de blockchain existentes[^83]. La necesidad de trabajo humano implica que el proceso de escribir el código de los contratos inteligentes acarrea necesariamente la posibilidad de cometer errores o exponer vulnerabilidades por distintas razones[^84]:

- errores en la lógica de negocio (*logic errors*)

- fallos en la estructura de la blockchain, no imputables al código del contrato en sí

- errores o prácticas no optimizadas en la escritura del código, que pueden permitir un error aritmético del tipo *overflow*[^85] o *underflow*

- factores externos en la implementación del contrato inteligente

Es posible entonces realizar una clasificación de las distintas vulnerabilidades relacionadas con el diseño de la siguiente forma[^86] (se han mantenido los nombres de las vulnerabilidades en idioma inglés para evitar la ambigüedad de la traducción, incluyéndose una traducción propuesta en cada caso):

**Tabla de Clasificación de Vulnerabilidades de Diseño en Smart Contracts**

| Vulnerabilidad                                                            | Descripción                                                                                                         | Impacto Potencial                                     | Ejemplo de explotación         |
|:--------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-------------------------------|
| *Reentrancy* (Re-entrada)                                                 | Permite a un contrato malicioso volver a llamar al contrato original antes de que la primera ejecución se complete. | Drenaje de fondos mediante llamados recursivos        | The DAO Hack (2016)[^87]       |
| *Integer Overflow / Underflow* (Sobreflujo o flujo inferior de un entero) | Ocurre cuando las operaciones aritméticas exceden los límites máximos o mínimos del tipo de dato.                   | Manipulación de saldos y cálculos críticos            | Beauty Chain Token (2018)[^88] |
| *Access Control* (Control de Accesos)                                     | Falta de verificaciones adecuadas para funciones críticas.                                                          | Control no autorizado sobre funciones administrativas | Poly Network Hack (2021)[^89]  |
| *Logic Errors* (Errores de lógica)                                        | Errores en la lógica de negocio del contrato.                                                                       | Comportamiento inesperado que puede ser explotado     | Cream Finance (2021)[^90]      |

En estos casos, los atacantes realizaron explotaciones del código para obtener una ventaja y poder obtener un botín de manera fraudulenta. El caso de The DAO ya fue analizado en páginas anteriores. En el caso de Beauty Chain (BEC), la introducción de un error *overflow* permitió crear tokens sin respaldo para fugarlos posteriormente, en un movimiento que fue detectado y detenido parcialmente por los desarrolladores del protocolo.

Para relacionar las técnicas y acciones maliciosas ya presentadas con la explotación de vulnerabilidades propias de contratos inteligentes en finanzas descentralizadas se presenta a continuación otra tabla que describe cada tipo de acción con un ataque relacionado, un vector de ataque y un camino posible de mitigación fruto del análisis posterior a cada ataque presentado.

**Tabla de Vulnerabilidades Específicas en DeFi**

| Tipo                      | Descripción                                                                                | Vector de ataque                             | Mitigación                                                         |
|:--------------------------|:-------------------------------------------------------------------------------------------|:---------------------------------------------|:-------------------------------------------------------------------|
| Manipulación de Precio    | Explotación de oráculos o pools de liquidez para manipular precios de activos              | Flash Loans + AMM (*automated market maker*) | Uso de oráculos múltiples y TWAPs (*time-weighted average prices*) |
| *Flash Loan Attack*       | Préstamos sin colateral explotados para manipular mercados.                                | Arbitraje malicioso, manipulación de precios | Límites de préstamo y verificaciones múltiples                     |
| *Sandwich Attack*         | Manipulación de transacciones ubicando órdenes antes y después de la transacción objetivo. | Front-running + Back-running                 | Protección contra MEV                                              |
| *Insufficient Validation* | Falta de verificación en parámetros de entrada o estados del sistema.                      | Manipulación de parámetros                   | Validaciones exhaustivas                                           |

Comúnmente los ataques exitosos utilizan una o más técnicas o vectores de ataque para explotar en distintos momentos del ataque una o más vulnerabilidades presentadas en una combinación de contrato, protocolo y transacción (o transacciones). Es posible que distintos modelos de auditoría de contratos inteligentes arrojen distintas vulnerabilidades validadas, aún para el mismo contrato, pues realizan una aproximación estadística sobre millones de casos y variables posibles, lo que dificulta la tarea de securitizar los contratos inteligentes[^91].

Finalmente, para permitir la operación de contratos que vinculan más de un protocolo DeFi se necesita crear y mantener toda una infraestructura de puentes que permitan la interoperabilidad entre diferentes protocolos, o incluso entre distintas blockchain. Es importante incluir en este análisis de vulnerabilidades aquellas relacionadas con los requerimientos de interoperabilidad para la ejecución de contratos entre protocolos DeFi.

**Tabla de Vulnerabilidades de Interoperabilidad en DeFi**

| Componente            | Riesgo                                                 | Impacto                                | Caso de Estudio        |
|:----------------------|:-------------------------------------------------------|:---------------------------------------|:-----------------------|
| *Cross-chain bridges* | Explotación de vulnerabilidades en contratos de puente | Pérdida de fondos en tránsito          | Ronin Bridge Hack[^92] |
| *Composability*       | Interacciones inesperadas entre protocolos             | Explotación de dependencias            | Harvest Finance[^93]   |
| *Oracle Dependencies* | Manipulación de feeds de datos                         | Ejecución de liquidaciones incorrectas | Compound[^94]          |

Como se ha expuesto anteriormente a lo largo de esta tesis, los ataques elaborados suelen combinar técnicas, vectores y acciones[^95] para aprovechar vulnerabilidades sobre contratos inteligentes.

<img src="/research/tfm/image9.png" style="width:6.26772in;height:2.01389in" />

*Fig. 2. Framework propuesto de amenazas de seguridad en DeFi (Oosthoek, op. cit)*

### 4.4 Análisis de Ejecución de Ataques sobre Vulnerabilidades en DeFi

#### 4.4.1 Flash Loan como vector de apalancamiento: bZx (2020)

En el año 2018, una plataforma DeFi llamada Marble Protocol lanzó un producto financiero conocido como *flash loan*, una función que permitía comprar activos utilizando apalancamiento de un pool de liquidez sin necesidad de dejar tokens en garantía (colateral) sino pagando un costo de transacción al momento de pagar el préstamo por el apalancamiento. A pesar de que en finanzas tradicionales dicha transacción no tenga mayor sentido, en DeFi se puede hacer en instantes, y de no ejecutarse correctamente el contrato la reversión del mismo es automática. Esta introducción fue estandarizada en la red Ethereum a partir del año 2020[^96].

Una combinación de *flash loan attack* (préstamo flash) y una manipulación de precio para obtener un préstamo presentando como garantía un colateral inexistente, y evitar el chequeo automatizado de un evento de liquidación del préstamo que dispararía el congelamiento de los fondos del colateral, fue utilizado en marzo del 2020 para atacar el protocolo bZx, una plataforma de préstamo para la creación de aplicaciones descentralizadas. creando una oportunidad de arbitraje que fue aprovechada por el atacante en una transacción simultánea que derivó en la pérdida de 620.000 dólares para bZx[^97].

<img src="/research/tfm/image7.png" style="width:4.42188in;height:1.78491in" />

*Fig.3. Ataque al protocolo bZx (Haouari et al, op. cit.)*

El hecho de que se pueda utilizar un colateral depositado en un protocolo para solicitar un préstamo en otro protocolo implica la existencia de una dependencia en la interfaz de al menos dos oráculos que informan precios[^98], y dicho ataque implicó la revisión de la dependencia entre los oráculos para prevenir nuevos ataques similares.

#### 4.4.2 Fallas de arquitectura de negocio: Harvest Finance (2020)

También en 2020, un ataque de manipulación del precio de stablecoins (USDC y USDT) en Curve, un protocolo de intercambio de stablecoins que mantiene *pools* de liquidez entre varias monedas, permitió en una transacción simultánea[^99] obtener una diferencia de 619.408 USDC en reiteradas ocasiones contra el protocolo de manejo de fondos Harvest, jugando con el precio flotante de ambas monedas de valor atado al dólar. Así, en diecisiete transacciones a lo largo de siete minutos, el atacante obtuvo aproximadamente 33.8 millones de dólares de Harvest[^100].

<img src="/research/tfm/image5.png" style="width:5.04688in;height:2.04558in" />

*Fig. 4. Ataque de manipulación de precios a Harvest (Chen et al, op. cit).*

En este caso, los vectores empleados fueron nuevamente un ***flash loan*** en Curve y Uniswap; la **manipulación del oráculo de precios** para informar una paridad incorrecta entre USDC / USDT y ganar ventaja de la diferencia de precio (**arbitraje malicioso**).

Cada uno de estos vectores a su vez fue utilizado[^101] para explotar serias vulnerabilidades de la arquitectura de negocio del protocolo:

- la dependencia de un único oráculo para traer los precios, sin un chequeo secundario en caso de movimientos abruptos

- la falta de validación cruzada de precios

- la ausencia de límites en operaciones en un mismo registro

Además, falló cualquier mecanismo de verificación de *slippage* (deslizamiento de precios, en el que el precio obtenido en la ejecución de un trade es diferente al precio ofertado); y se permitió efectuar varias veces la misma transacción.

El atacante combinó múltiples pools de liquidez y demostró un profundo conocimiento técnico tanto de la infraestructura de Harvest como de la lógica de negocio subyacente, lo que le permitió aprovechar la diferencia del arbitraje entre distintos protocolos. Este ataque nunca fue atribuido oficialmente a algún actor específico, ya que a diferencia de ataques atribuidos a APTs estatales el atacante no utilizó ningún *mixer* para el lavado de los fondos resultantes del ataque ni se observaron patrones claros de comportamiento. En un momento, el atacante dejó algunos mensajes y retornó alrededor de 2,5 millones de dólares en fondos.

#### 4.4.3 Ataque de Reentrada: CREAM Finance

En octubre de 2021 un atacante utilizó vectores y acciones ya conocidas (*flash loan*, manipulación de oráculos para alterar los precios) sumando además la explotación de una función específica de este protocolo para ejecutar un ataque de **reentrada**, lo que le permitió explotar los cálculos de colateral y manipular los valores de préstamo. Al final del ataque consistente en dos transacciones en un mismo bloque con un timing muy preciso, el atacante había obtenido 130 millones de dólares y ocasionado la caída del token CREAM, nativo del protocolo.

En la figura 4, líneas abajo, es posible ver la secuencia del ataque al protocolo CREAM Finance. Este ataque tampoco pudo ser atribuido oficialmente a un actor específico. El atacante utilizó múltiples vectores[^102] que se han venido sumando en cada caso analizado, combinándolos con el uso de la función de reentrancy y terminó sacando los fondos de CREAM por varios exchanges descentralizados. Los errores observados en el diseño fueron una lógica insegura en los contratos inteligentes; una ausencia grave de límites operativos por transacción y falta de pruebas de reentrada.

<img src="/research/tfm/image8.png" style="width:4.78646in;height:3.55406in" />

*Fig. 5. Secuencia del ataque de Cream. Fuente: Peckshield*[^103]

El atacante pudo realizar efectivamente el lavado de los activos robados haciendo uso de una técnica conocida como *bridge hopping*[^104] (hacer circular los tokens entre blockchains hasta hacer que se pierda el rastro de la transacción anterior. Se especula que pudo ser un grupo criminal organizado que dividió responsabilidades y coordinó las acciones, con algo de conocimiento interno de las herramientas de prevención del protocolo[^105].

A diferencia del ataque de Harvest, el atacante no mostró una “firma” técnica atribuible, no dejó mensajes ni retornó parte alguna del dinero.

### 4.5 Algunas conclusiones

En los ataques analizados, se observa la reiteración de algunos errores críticos de arquitectura de los protocolos como:

- Uso de un único oráculo de precios

- Ausencia de límites en operaciones críticas

- Falta de validaciones cruzadas (cross-check) al informar precios

- Interconexión y permisos excesivos entre protocolos, sin validar accesos en los puntos de interfaz o bridges

La repetición de técnicas de ataque muestra que a pesar de tener casos de uso legítimos, las técnicas de acceso se constituyen en sí mismas en un factor debilitante de los protocolos y organizaciones descentralizadas. Los ataques crecientemente sofisticados demuestran que los atacantes son más, están más preparados y tienen mayores recursos a disposición para mover fondos, realizar operaciones de apalancamiento, aprovechar múltiples exchanges descentralizados (DEX) y aprovechar la lógica vulnerable de contratos inteligentes, lo que requiere una cantidad importante de tiempo dedicado al análisis previo[^106].

Aunque las lecciones aprendidas de los casos seleccionados, y de una multitud de hackeos adicionales continúan siendo procesadas por la industria, sí se ha llegado a un consenso en cuanto a la necesidad de mejorar el diseño de los protocolos y plataformas[^107]; mantener estándares mínimos de validación, monitoreo y defensa en profundidad, y realizar mejores análisis posteriores a la detección de incidentes. La atribución de dichos ataques presenta problemáticas graves, y es justamente el punto a través del cual es posible hacer una diferencia con el siguiente conjunto de elementos: aquellos ataques que pueden ser atribuibles a amenazas persistentes avanzadas relacionadas con gobiernos.

## 5. ATAQUES DE COREA DEL NORTE AL ECOSISTEMA DEFI Y CIBERESTRATEGIA DE LA RDPC

En los ataques expuestos en el capítulo anterior no se había logrado establecer una atribución entre un atacante o grupo de atacantes y las acciones anteriormente referenciadas: BZx (en 2020, no confundir con los ataques posteriores contra la misma plataforma), Harvest Finance y CREAM.

En este capítulo se realiza un análisis del panorama de amenazas en DeFi con un enfoque de detección de patrones de comportamiento relacionados a las amenazas persistentes avanzadas (*APT: Advanced Persistent Threat* en adelante), y su relación con el desarrollo de la estrategia del gobierno de la República Democrática Popular de Corea para el espacio cibernético.

Dada la enorme extensión y variedad de las acciones, vectores y técnicas asociadas a las APT norcoreanas, en este capítulo se hace foco principalmente en aquellas que utilizan tres: **ransomware; malware de actor** y **uso de phishing** para la obtención de credenciales de acceso o autenticación.

<span class="mark">De la misma forma, en la descripción de la solución propuesta para abordar la problemática objeto de estudio de la presente tesis, se hace foco en prevenir, manejar y responder a dichas técnicas por considerarse las más explotadas, más peligrosas y al mismo tiempo mejor documentadas en cuanto a su relación con la industria cripto y los protocolos DeFi.</span>

### 5.1 Antecedentes: Acciones de APTs relacionadas a la RDPC en el universo cripto

La aparición de los criptoactivos facilitó la realización de operaciones de financiamiento para el régimen norcoreano en un contexto de sanciones por parte del Consejo de Seguridad de la Organización de las Naciones Unidas y de restricciones del sistema financiero tradicional. Las sanciones a Corea del Norte se deben en gran medida a la aparición del programa de armas nucleares de dicho país, que desde la lógica del régimen es un objetivo crítico necesario para la supervivencia del país como una entidad independiente, primero, y para el cumplimiento histórico de su misión de unificar las dos Coreas separadas desde la guerra de 1950 a 1953.

Es así como los criptoactivos dan una serie de beneficios operacionales frente a otras formas de dinero o activos transables, gracias a los cuales pasan a ser utilizados por el régimen como un pilar para sus operaciones durante la década de 2010.

**Tabla de Beneficios Operacionales del Uso de Criptoactivos para Corea del Norte**

| **Aspecto**       | **Ventaja Estratégica**                                                                     |
|:------------------|:--------------------------------------------------------------------------------------------|
| Anonimato         | Impide la atribución y trazabilidad de movimientos de dinero                                |
| Liquidez          | Permite una rápida conversión a dinero fiduciario (fiat) en cualquier exchange centralizado |
| Accesibilidad     | Permite operar de forma global, en cualquier momento                                        |
| Descentralización | Permite evadir los controles contra Corea del Norte                                         |
| Irreversibilidad  | Permite evadir cualquier forma de bloqueo transaccional                                     |

Teniendo en cuenta los beneficios ya enunciados, durante la segunda década del siglo XXI el régimen norcoreano planificó la transición de sus empresas criminales hacia el espacio cibernético, invirtiendo tiempo y recursos críticos en la preparación de organizaciones criminales patrocinadas por el estado. Como veremos a continuación, dichas organizaciones criminales a su vez responden a la formulación de la estrategia misma de la nación, por lo que a diferencia de otros actores criminales del ciberespacio no responden a factores meramente económicos ni trabajan para el mejor postor, sino que comprende su accionar delictivo como una misión crítica para la supervivencia misma de la nación.

### 5.2 Ataques en DeFi atribuidos a la RDPC

Los ataques a protocolos, puentes y custodios cripto atribuidos a actores de la RDPC se distinguen de los analizados en el capítulo 4 en tres aspectos: existe atribución (aunque sea de fuentes gubernamentales o de firmas privadas, y por lo tanto no independiente ni judicialmente probada), el monto es de otro orden de magnitud y el patrón de comportamiento se repite de un caso a otro. Esta sección ordena los hechos conocidos (5.2.1), los asocia con las tres técnicas priorizadas en este capítulo (5.2.2), describe el patrón de lavado posterior al robo (5.2.3) y extrae las implicaciones para el ecosistema argentino (5.2.4).

#### 5.2.1 Cronología de incidentes relevantes

La siguiente tabla reúne los incidentes más relevantes entre 2022 y 2026. Se incluye tanto infraestructura DeFi propiamente dicha (puentes, protocolos) como custodios centralizados (exchanges), porque el patrón de ataque se repite y porque ambos comparten rampas con el sistema financiero tradicional.

| Incidente                         | Fecha        | Monto aproximado                                      | Atribución                                                                                                                                        | Vector reportado                                                                                                                                                                                                                                                          |
|-----------------------------------|--------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ronin Bridge (Axie Infinity)      | Abril 2022   | USD 600 millones (las fuentes varían entre 540 y 625) | Atribuido a Lazarus Group por autoridades de EE.UU., según la prensa especializada[^108]                                                          | Falsa oferta de empleo enviada por LinkedIn a un empleado, que derivó en el compromiso de claves de validadores del puente[^109]                                                                                                                                          |
| Harmony Horizon Bridge            | Junio 2022   | USD 100 millones                                      | Lazarus Group y APT38, según el FBI y CISA; asociado a la campaña “TraderTraitor”[^110]                                                           | Compromiso de claves del puente; lavado parcial vía Railgun                                                                                                                                                                                                               |
| DMM Bitcoin (exchange, Japón)     | Mayo 2024    | USD 308 millones (4.502,9 BTC)                        | FBI, DC3 y la Policía Nacional de Japón; actividad “TraderTraitor”[^111]                                                                          | Falso reclutador en LinkedIn contactó a un empleado de Ginco (proveedor de software de billeteras) y le entregó un script malicioso de Python presentado como “prueba previa a la contratación”; luego se usaron cookies de sesión robadas para manipular una transacción |
| Bybit (exchange)                  | Febrero 2025 | USD 1.400 a 1.500 millones (401.000 ETH)              | Lazarus / TraderTraitor, según firmas de análisis blockchain[^112]                                                                                | Manipulación del proceso de aprobación de una transferencia rutinaria desde la billetera fría: el último firmante autorizó una transacción cuyo destino real estaba ocultado por código                                                                                   |
| Drift Protocol (Solana)           | Abril 2026   | USD 280 a 285 millones                                | Actores norcoreanos, según el propio equipo de Drift en su informe de incidente; TRM Labs lo describe como operación de varios meses[^113] [^114] | Operación de inteligencia sostenida durante unos seis meses, con manipulación dirigida de mecanismos del protocolo y no un simple robo de clave privada                                                                                                                   |
| KelpDAO (puente rsETH, LayerZero) | Abril 2026   | Aprox. USD 292 millones (116.500 rsETH)               | Atribución preliminar a TraderTraitor por parte de LayerZero[^115]                                                                                | Ataque dirigido a conseguir un quórum de proveedores RPC usados por la red de verificadores (DVN) de LayerZero                                                                                                                                                            |

*Tabla 5.2. Incidentes en DeFi y custodia cripto atribuidos a actores de la RDPC (2022-2026). Elaboración propia con base en las fuentes citadas. Las atribuciones de los casos de 2026 son preliminares y los montos varían según la fuente.*

A nivel agregado, las estimaciones disponibles coinciden en la tendencia aunque difieren en los números:

- Chainalysis estima que en 2025 los actores norcoreanos robaron al menos USD 2.020 millones de un total global superior a USD 3.400 millones, un 51% más que los USD 1.300 millones de 2024, y calcula un acumulado histórico no inferior a USD 6.750 millones[^116].
- El Multilateral Sanctions Monitoring Team (MSMT), grupo de once estados creado en octubre de 2024 e independiente de Naciones Unidas, calculó robos por al menos USD 1.650 millones entre enero y septiembre de 2025 (de los cuales USD 1.400 millones corresponden a Bybit), además de unos USD 1.200 millones en 2024[^117].
- TRM Labs informó que los grupos norcoreanos concentraron el 76% de las pérdidas por hackeos cripto de 2026 hasta abril. Se trata de una proporción del valor robado y no de la cantidad de ataques: Drift y KelpDAO juntos suman unos USD 577 millones y apenas cerca del 3% de los incidentes del período[^118].

La conclusión metodológica es relevante para el resto de la tesis: la RDPC no es el actor que más ataques realiza, sino el que más valor extrae por ataque. Su estrategia es de alto impacto y baja frecuencia, con pocos objetivos cuidadosamente elegidos, en los que concentra tiempo, ingeniería social e inteligencia previa.

#### 5.2.2 Relación con las tres técnicas priorizadas

**Phishing y obtención de credenciales.** Es el vector inicial más documentado. En Ronin y en DMM Bitcoin el primer paso fue una falsa oferta laboral dirigida a una persona con acceso privilegiado, dentro de la modalidad conocida como *Operation Dream Job*, que usa LinkedIn y WhatsApp para entregar código malicioso a empleados de empresas cripto y tecnológicas[^119]. En Bybit el engaño se dirigió al circuito de aprobación de transacciones. La lección común es que el protocolo, el contrato inteligente o el esquema de multifirma pueden ser técnicamente sólidos y aun así caer, porque el eslabón atacado es la persona que tiene la autoridad de firmar.

**Malware de actor.** Se trata de código desarrollado y mantenido por el propio grupo, adaptado al objetivo y a su sistema operativo, y no de kits comerciales. Las campañas asociadas a TraderTraitor y Dream Job emplean familias como BURNBOOK, MISTPEN y BADCALL[^120]. En el caso de Bybit, el investigador Hudson Rock vinculó una máquina infectada con *infostealer* a infraestructura asociada con el exchange; es un dato aportado por un tercero y no confirmado por las autoridades[^121]. En todos los casos el malware cumple la misma función: llegar a las máquinas de desarrolladores, administradores y firmantes, que son los equipos que conectan el mundo corporativo con las claves que mueven los fondos.

**Ransomware.** Es la técnica menos documentada en el ámbito DeFi, pero no está ausente del repertorio de la RDPC. CISA, el FBI y el Departamento del Tesoro de Estados Unidos advirtieron en julio de 2022 sobre el uso del ransomware *Maui* por actores patrocinados por el estado norcoreano contra el sector de salud, con el fin de financiar sus operaciones[^122]. Para el sistema financiero argentino esto implica que un incidente de ransomware sobre un PSP o un PSAV debe evaluarse siempre con la hipótesis de un actor estatal, porque la monetización en criptoactivos de un rescate es operativamente idéntica al lavado de un robo.

**Un cuarto vector: infiltración laboral.** Aunque excede las tres técnicas priorizadas, el esquema de trabajadores de tecnologías de la información norcoreanos (*IT workers*) es indispensable para comprender la amenaza. El MSMT documenta el envío de estos trabajadores al menos a ocho países, con ocultamiento de nacionalidad para ganar contratos, y su doble función de generar ingresos y de otorgar acceso a empresas de software y de Web3[^123]. Chainalysis señala que su expansión se vincula con el acceso a exchanges y a proyectos Web3[^124]. Algunos analistas sostienen que estos agentes llevan años integrados en equipos de desarrollo de numerosos protocolos DeFi; esta afirmación fue difundida en abril de 2026 a raíz del caso Drift y no cuenta aún con confirmación independiente, por lo que aquí se presenta como hipótesis de trabajo[^125].

#### 5.2.3 Patrón de lavado de fondos

El robo es sólo la primera etapa. Para convertir el botín en recursos utilizables, los actores norcoreanos recorren un circuito reiterado, que Chainalysis describe en tres oleadas a lo largo de unos 45 días[^126]:

1.  **Días 0 a 5:** dispersión de los fondos en protocolos DeFi y servicios de mezcla (*mixers*). En Harmony, por ejemplo, se canalizaron unos USD 60 millones en ETH por Railgun, y el FBI informó que parte de los fondos fue congelada en coordinación con proveedores de servicios de activos virtuales[^127].
2.  **Días 6 a 10:** movimiento hacia exchanges, mezcladores de segundo nivel y puentes entre cadenas (*bridge hopping*).
3.  **Días 20 a 45:** conversión final a dinero fiduciario u otros activos mediante operadores OTC y servicios chinos de transferencia y garantía de fondos, entre ellos mercados especializados como Huione.

En el caso de Bybit, TRM Labs informó que unos USD 160 millones fueron canalizados por vías ilícitas en sólo dos días y que más de USD 40 millones fueron congelados en el primer día[^128]. La ventana de actuación es entonces de horas y no de semanas, y la capacidad de congelar fondos depende de que los proveedores de servicios de activos virtuales que reciben los fondos estén identificados, cooperen y cuenten con canales de alerta rápida. Este punto es el eslabón que conecta directamente la amenaza con las recomendaciones del capítulo 7.

#### 5.2.4 Implicaciones para el ecosistema argentino

Del análisis anterior surgen cuatro implicaciones para el sistema financiero argentino, que serán retomadas en el capítulo 7:

- **Las rampas son el punto de salida.** Como se expuso en el capítulo 3, el pasaje entre DeFi y el sistema financiero tradicional ocurre a través de exchanges centralizados y de PSP. Los exchanges internacionales con operación en Argentina (entre ellos Bybit, víctima del mayor robo de la serie) y los locales son, por diseño, destinos potenciales de fondos en lavado, aun cuando no sean víctimas directas.
- **El eslabón humano es el objetivo.** El sector tecnológico argentino exporta servicios de software y desarrollo de proyectos cripto, y concentra el perfil profesional (desarrolladores, administradores, firmantes) que los actores de la RDPC buscan engañar con falsas ofertas laborales. Las empresas argentinas también pueden ser contratantes de trabajadores TI encubiertos.
- **El contagio es sistémico.** El caso KelpDAO ilustra que un ataque a un único componente de interoperabilidad puede propagarse a protocolos de préstamo de gran tamaño: según Lookonchain, el valor bloqueado en Aave cayó unos USD 8.450 millones en dos días y el del conjunto del sector DeFi más de USD 13.000 millones[^129]. Un PSP o PSAV argentino con exposición a esos activos recibiría ese choque sin haber sido atacado.
- **El tiempo de respuesta es corto.** Si el lavado se concentra en los primeros días, un sector que no cuenta con canales de alerta ni con capacidad de análisis blockchain llega tarde.

### 5.3 Ciberestrategia de la RDPC

La RDPC no publica ninguna doctrina oficial en materia cibernética. Sin embargo, el análisis de los hechos documentados en 5.2, de los antecedentes del capítulo 6 y de los trabajos de inteligencia de amenazas permite reconstruir con razonable consistencia la lógica estratégica que organiza su conducta en el ciberespacio, tal como lo hace la literatura especializada con otras doctrinas no declaradas[^130].

#### 5.3.1 Estructura institucional

Distintos analistas han reconstruido el organigrama de la Oficina General de Reconocimiento (*Reconnaissance General Bureau*, RGB), de la que depende el *Bureau 121*, su unidad primaria de operaciones cibernéticas[^131] [^132]. Dentro de esa estructura operan colectivos que la industria de seguridad rastrea con nombres distintos: *Lazarus Group*, *APT38* (orientado a lo financiero) y *TraderTraitor*, también conocido como Jade Sleet, UNC4899 o Slow Pisces, especializado en el sector cripto[^133]. Conviene advertir que estos nombres no designan organizaciones separadas con fronteras nítidas sino etiquetas de clasificación de actividad; distintas firmas y gobiernos las superponen, y la atribución final depende de evidencias técnicas, de inteligencia y de cooperación con proveedores privados.

La literatura describe a estos grupos como la punta de lanza de la estrategia militar asimétrica del régimen frente a Estados Unidos y Corea del Sur, desde fines de los años 2000[^134]. A diferencia de los grupos criminales convencionales, no responden al mejor postor, y su personal y recursos son parte de una política de estado que, como se expuso en el capítulo 6, se remonta a 1982.

#### 5.3.2 Objetivos estratégicos

A partir de la evidencia reunida pueden identificarse al menos cuatro objetivos que se refuerzan entre sí:

| Objetivo                                               | Descripción                                                                                                                   | Evidencia                                                                                                         |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Financiamiento del régimen y de sus programas de armas | Obtener divisas en un contexto de sanciones, para sostener el programa de misiles balísticos y de armas de destrucción masiva | El MSMT afirma que los fondos se destinan al desarrollo de armas de destrucción masiva y misiles balísticos[^135] |
| Evasión de sanciones                                   | Pagar bienes y servicios fuera del sistema financiero regulado                                                                | El MSMT documenta el uso de stablecoins para adquirir equipamiento militar y materias primas como cobre[^136]     |
| Acceso persistente                                     | Instalar presencia duradera en empresas, equipos de desarrollo y proyectos, que permita ataques futuros                       | Esquemas de *IT workers*; operaciones prolongadas como la de Drift, descrita como de unos seis meses[^137]        |
| Continuación de la guerra asimétrica                   | Aplicar al quinto dominio la lógica de hostilidades no explícitas contra Occidente, desarrollada en el capítulo 6             | Reconstrucción histórica de la doctrina Juche y militar; antecedentes del programa de formación de *hackers*      |

*Tabla 5.3. Objetivos de la ciberestrategia de la RDPC. Elaboración propia.*

Estos objetivos retoman lo planteado en 5.1: los criptoactivos otorgan anonimato relativo, liquidez, accesibilidad, descentralización e irreversibilidad, y eso los convierte en el instrumento natural para una economía sometida a sanciones. La ideología Juche, con su énfasis en la autosuficiencia, ofrece además un marco de legitimidad interna para la actividad: obtener del exterior por medios ofensivos los recursos que la economía propia no genera.

#### 5.3.3 Evolución del modus operandi

Las fuentes consultadas permiten reconstruir una progresión en la elección de objetivos y de herramientas:

1.  **Etapa previa:** operaciones de espionaje, sabotaje y robo contra instituciones y empresas, en línea con su doctrina asimétrica, atribuidas a estos grupos desde fines de los años 2000[^138].
2.  **Desde 2017:** expansión hacia la industria de criptoactivos, que se convierte en un objetivo prioritario[^139].
3.  **2021:** ataques contra *altcoins* basadas en ERC-20 y contra proyectos DeFi, complementados con el robo de información personal para superar los filtros KYC de los exchanges y poder convertir los fondos a dinero de curso legal.
4.  **2022:** ataques a puentes entre cadenas (Ronin, Harmony), puntos donde se concentran grandes cantidades de fondos con esquemas de validación reducidos.
5.  **2024 y 2025:** ataques a la infraestructura de custodia de los exchanges (DMM Bitcoin, Bybit), con ingeniería social cuidadosamente preparada.
6.  **2026:** operaciones de inteligencia prolongadas sobre protocolos (Drift) y ataques a componentes de interoperabilidad (KelpDAO), que reflejan un salto de sofisticación: el objetivo no es explotar una línea de código sino la cadena de confianza entre personas, proveedores y sistemas.

El patrón es consistente: los actores se desplazan hacia donde se concentran los fondos y donde la defensa es más débil, y ajustan sus herramientas a cada nuevo entorno. Esto es coherente con la hipótesis de que sus ataques responden a una estrategia estatal de largo plazo y no a oportunidades aisladas.

#### 5.3.4 Síntesis y límites del análisis

La ciberestrategia de la RDPC puede resumirse en una apuesta de alto rendimiento y bajo costo: un conjunto reducido de equipos especializados, un patrón de ingeniería social reiterado, la infiltración de la cadena de suministro humana y un sistema de lavado transnacional que utiliza infraestructura de terceros. Su principal fortaleza es la persistencia; su principal debilidad es la dependencia de las rampas para convertir los fondos, lo que justifica poner el foco defensivo en los puntos de contacto con el sistema financiero (capítulo 7).

Dos advertencias de método cierran esta sección. Primero, la atribución a la RDPC proviene de organismos gubernamentales, de un grupo multilateral de monitoreo y de firmas privadas de inteligencia, y en varios casos recientes es preliminar. Segundo, las cifras divergen entre fuentes por diferencias de metodología, de fecha de corte y de valuación de los activos robados; en consecuencia, los montos se presentan aquí como órdenes de magnitud y no como datos exactos.

<!-- -->

## 6. TRASFONDO HISTÓRICO DEL RÉGIMEN NORCOREANO

Es imposible entender la existencia de la RDPC sin tener en cuenta algunos rasgos fundacionales de su sociedad, cultura, estructura política y cosmovisión. La RDPC nace en 1948 como un estado de partido único centralizado dirigido por Kim Il-Sung. Este estado aparece a su vez en el momento en el que los polos ideológicos dominantes al final de la Segunda Guerra Mundial delimitaban sus esferas de influencia y encontraban sus fronteras, áreas de cooperación, áreas vedadas y áreas de conflicto.

### 6.1 Historia Milenaria de Corea. Dinastías

Además de entender el estado norcoreano como un tipo de estado de origen marxista-leninista, hay que tener en cuenta que las particularidades de su desarrollo material y social justificaron para Kim Il-Sung la creación de una nueva doctrina ideológica conocida como **Juche** (주체사상).

A su vez, Corea como nación tiene una tradición histórica, cultural, política y militar milenaria en la que se observan dos características centrales que abarcan varios siglos[^140]:

- El **control político centralizado y dinástico** que abarca varias generaciones del estado, sus rentas y esfera política y judicial por parte de dinastías familiares a partir de la unificación de Corea por la dinastía Silla (신라) durante el período de los Tres Reinos(688-935). Este mismo control dinástico se replicará por las dinastías Goryeo (고려) y Joseon (조선), que abarcan del 918 al 1392, y del 1392 al 1897 respectivamente.

- La relación de **relativo aislamiento y lucha contra las invasiones de potencias regionales vecinas** a lo largo de todo el período histórico mencionado; a lo largo de prácticamente toda nuestra era, Corea ha sido invadida por los chinos, manchúes (siendo un reino independiente) y japoneses. Este hecho de ser un país relativamente menor en tamaño, recursos y poderío militar rodeado de potencias mayores creó un ser nacional reivindicativo de sus tradiciones e instituciones que luchó durante siglos para mantener su independencia.

#### 6.1.1 Potencias y Protectorado

A lo largo de buena parte de su historia Corea funcionaba de facto como un protectorado chino. En 1897 Corea intenta modernizarse cuando el rey Goyong (고종) proclama el denominado Gran Imperio Coreano (대한제국) y emprende una serie de reformas del ejército, la economía y relaciones internacionales, pero posteriormente a la guerra Ruso-Japonesa Corea pasa a estar bajo ocupación militar japonesa y en 1910 pasa a ser formalmente anexo por Japón.

La expansión imperialista japonesa tuvo un gran papel en las causas y desarrollo de la Segunda Guerra Mundial en el teatro del Pacífico, y la relación del pueblo coreano con la ocupación militar japonesa no fue buena. Al término del conflicto bélico, la parte sur de la península de Corea fue ocupada por el ejército estadounidense mientras que el norte fue controlado por los soviéticos. La Conferencia de Moscú (1945) fue el escenario en el que las potencias acordaron mantener un protectorado conjunto sobre la península de Corea durante un lapso de cinco años, algo similar a lo que los Aliados hicieron con los territorios alemanes en el teatro europeo.

### 6.2 La partición de la Península de Corea y la Guerra de Corea

No obstante, el delicado balance y el protectorado conjunto llegaron a su fin en medio de tensiones en el año 1948 con el establecimiento de dos gobiernos: la República Democrática Popular de Corea (RDPC), en el norte del país bajo el liderazgo de Kim Il Sung, y la República de Corea (ROC) en el sur bajo el liderazgo de Syngman Ree. Ambos gobiernos reclamaron para sí la legitimidad del control por sobre toda Corea, manteniendo una situación de reyerta controlada hasta la invasión por parte del Ejército Popular de la RDPC, el 25 de Junio de 1950[^141].

La invasión de la RDPC fue denunciada y respondida por parte del Consejo de Seguridad de las Naciones Unidas, y las fuerzas de la ONU permitirían a la ROC no perder el conflicto luego de dos meses de invasión. El conflicto se revertiría rápidamente al lograr las fuerzas occidentales cortar las líneas de suministro de las fuerzas invasoras e invadir el territorio de la RDPC, llegando hasta la frontera china. La participación de fuerzas armadas chinas a partir de este punto ocasionó un nuevo equilibrio de fuerzas, revirtiendo nuevamente la invasión de las fuerzas de la ONU otra vez al sur del denominado paralelo 38, que en adelante sería la frontera de las dos naciones. La guerra llegaba en la primavera de 1951 a un estancamiento táctico en el que ninguna de las dos facciones beligerantes podía derrotar a la otra facción, y podía repeler la invasión de la otra facción con el respaldo armado de alguna de las dos superpotencias.

A esta fase de estancamiento le sucedería la firma de un armisticio para cesar las hostilidades en julio de 1953. El armisticio implicó largas negociaciones para llegar a un acuerdo de paz definitivo, acuerdo que hasta el momento no ha sido firmado por ninguna de las dos naciones resultantes de la partición de la península de Corea.

También se estableció una zona no militarizada de cuatro kilómetros de ancho, dos a cada lado de la frontera oficial. Del costado norte, la frontera es custodiada de forma permanente por parte del ejército de la RDPC. Del lado sur, la administración militar de la frontera fue delegada al ejército estadounidense, situación que persiste hasta la fecha.

### 6.3 Consecuencias políticas de la Guerra de Corea

La ROC en el sur fue gobernada por el entonces presidente Syngman Rhee hasta 1960, entablando profundos lazos comerciales, políticos y militares (y según algunos autores un grado de dependencia[^142]de los Estados Unidos).

La relación de la ROC con los Estados Unidos se cristalizó a través de la firma de un Tratado de Defensa Mutua (1953) que continúa en vigor y que convirtió a la nación en receptor neto de aproximadamente el 8% del comercio bilateral y de la ayuda directa estadounidense a nivel mundial[^143].

Durante toda la Guerra Fría (1948-1991) las fuerzas militares estadounidenses mantuvieron el control estratégico y operacional del territorio de la ROC, sin que este hecho tuviera de forma alguna un correlato en las cualidades democráticas del estado surcoreano que continuó siendo gobernado mediante un régimen de características autoritarias, primero por Rhee y luego de un interregno con cuatro presidentes por el general Park Chung-hee, quien gobernaría hasta 1979 cuando fue asesinado por miembros de su servicio de inteligencia.

La relación estrecha entre la ROC y los Estados Unidos se mantiene hasta la fecha, siendo EEUU un socio estratégico en todos los sentidos de la República de Corea[^144] y manteniendo más de setenta años de presencia militar ininterrumpida a través de un Comando de las Fuerzas Militares estadounidenses en Corea del Sur, que combina [^145]el Octavo Ejército, la Séptima división de la Fuerza Aérea, una Fuerza especial de la Marina estadounidense, un Cuerpo de Marines especial y un Comando de Operaciones Especiales como fuerzas destinadas públicamente al teatro de operaciones de Corea y a la vigilancia estratégica del a zona Asia - Pacífico (además de la presencia militar estadounidense en Japón, Taiwán y en sus propias islas en el océano).

Por otra parte, para la RDPC el final de la guerra implicó el comienzo de una larga y desgastante etapa de reconstrucción de su infraestructura civil, sus campos de cultivo, minas, rutas y fábricas. La producción industrial de la parte norte de la península era de apenas un 40% de lo que se producía antes del conflicto bélico y la producción agraria había disminuido un 24%, de acuerdo con las cifras reportadas por historiadores como Charles Armstrong[^146].

La reconstrucción del espacio productivo de la RDPC fue un esfuerzo descomunal y una preocupación del líder norcoreano Kim Il Sung desde los días anteriores a la firma del armisticio. Kim le envió un reporte al embajador soviético en Pyongyang haciendo un reporte de los daños producidos por la guerra y solicitando ayuda económica y asistencia técnica soviética para rehabilitar la economía de la RDPC. Además, Kim presentó un plan de tres etapas para la reconstrucción del país en la posguerra ante el sexto Pleno del Comité Central del Partido de los Trabajadores de Corea, consistente de tres etapas[^147]:

1.  Un período preparatorio de entre seis y doce meses para analizar y planificar la reconstrucción;

2.  Un plan de tres años (1954-56) para rehacer las capacidades económicas y productivas al nivel de 1950;

3.  Un plan de cinco años para la industrialización general, que sería llevado a cabo recibiendo soporte de países del espacio socialista como la Unión Soviética, China, la República Democrática Alemana, Polonia y Hungría, por ejemplo[^148].

Armstrong señala también que el esfuerzo de la reconstrucción de la RDPC fue un espacio de la pugna por el dominio del movimiento comunista internacional, ya que Corea del Norte podría oscilar entre la esfera de la China maoísta o de la URSS dirigida por Stalin. Dicha pugna, a su vez, condujo al enfriamiento paulatino y total ruptura de las relaciones sino-soviéticas (conocido como *split*) a partir de la muerte de Iosif Stalin[^149].

En paralelo a las tensiones y pugnas propias del desarrollo de la Guerra Fría, Kim había mostrado un claro deseo de reconstruir y desarrollar industrialmente a la RDPC de forma independiente y con un criterio propio, superando los desvíos del colonialismo japonés origen de la industria pesada norcoreana[^150]. Así, su gestión internacional haría un balance estratégico que lo llevaría en noviembre de 1953 a firmar un acuerdo de cooperación tecnológica secreto con Zhou Enlai, premier chino en el momento[^151].

La dependencia de los “países fraternales” marcó las dos primeras fases del plan de reconstrucción de la RDPC. Los países de Europa del Este y la Unión Soviética proveían a la RDPC de equipo industrial, mientras que China proveyó durante años las necesidades básicas como tela, carbón e incluso zapatos. La RDPC logró completar la segunda fase de su plan con un año de anticipación, pero a costa de un enorme esfuerzo y de sacrificar la producción de bienes de consumo para su población.

Esta época de sacrificios de la posguerra trajo dificultades con las masas campesinas que vieron sus propiedades colectivizadas en nombre del socialismo de marca estalinista, originando también enormes debates al interior del Partido de los Trabajadores de Corea. Para mantener el control no solamente del aparato político, sino del país, Kim desató una purga interna remarcando la necesidad de no depender de China o de la Unión Soviética -desautorizando así voces disidentes del partido que se alineaban con una u otra nación socialista- y proponiendo la doctrina **Juche** (주체사상).

### 6.4 Juche y Doctrina Militar Norcoreana

Durante el período 1953-1965 aproximadamente, la mayor parte del comercio internacional de la RDPC fue con los países de la órbita socialista. En el frente interno, en 1957 Kim lanzó un plan quinquenal que tenía como propósito la consolidación de las “bases económicas del socialismo” en la RDPC y solucionar los problemas de escasez de bienes de consumo. Las ayudas internacionales del período anterior fueron disminuyendo paulatinamente y el nuevo plan quinquenal, también fuertemente orientado hacia la producción industrial debería ser financiado mayoritariamente con recursos propios, lo que implicaría un ahorro forzoso de alrededor del 25% del ingreso de la población local[^152]. Para compensar el sobrehumano esfuerzo, Kim llamó un movimiento de masas de tipo estajanovista llamado “Chollima”, en referencia a un caballo alado mitológico de la cultura asiática oriental similar al Pegaso.

De acuerdo al ya citado Armstrong, el Juche se comenzó a utilizar como slogan apenas en 1965 en la diplomacia de la RDPC. En una conferencia en Yakarta, Kim declaró que Corea del Norte buscaba la “*independencia en política, autosuficiencia económica y autodefensa militar*”[^153] y a partir de dicha puesta en escena pública, el eslogan aparecería progresivamente cada vez más en su discurso público, siendo un concepto central y guía de su política estatal en la constitución de 1972 y asociándose con el marxismo-leninismo en la constitución norcoreana de 1992.

La interpretación que podemos hacer de la doctrina Juche a partir de la publicación del tratado de Kim Jong-Il “Sobre La Idea Juche” (1982)[^154] es que además de una doctrina nacional de la ideología, política y cultura nacionales de la RDPC, se va convirtiendo progresivamente con el paso de los años en una doctrina y un sentir nacional casi religioso, que supera progresivamente el materialismo histórico marxista para convertirse en una hibridación de valores e ideas hasta entonces desconocido y único del proceso coreano.

Durante veinte años, aproximadamente (1948-1968), la RDPC sufrió un conflicto armado fratricida y necesitó reconstruir su industria e infraestructura. Recibió solidaridad internacional de otros países de la esfera socialista y logró aumentar su producción industrial sacrificando la calidad de vida de su población, acudiendo al adoctrinamiento ideológico como fuente espiritual de legitimidad y fortalecimiento del ideario nacional. Para fines de los años 60 la RDPC comerciaba cada vez más con naciones de la esfera capitalista, primariamente con Japón.

A partir del declive del proceso de la Revolución Cultural China y de la disminución de tensiones entre la Unión Soviética y Estados Unidos, la RDPC pudo comerciar y firmar contratos con países europeos y con Japón[^155].

No obstante, el advenimiento de la crisis del petróleo por el embargo de la OPEP en 1973 enfrió la economía global y la RDPC entró en default ante empresas y bancos de inversión occidentales en 1975. Ya en 1976, agentes diplomáticos del régimen norcoreano fueron acusados de contrabandear licores, tabaco, bienes industriales e incluso estupefacientes en varios países escandinavos, llegando incluso a ser expulsados de dichos países. De esta forma, el intento de la RDPC de comerciar con normalidad con Occidente llegaría a su fin y el país obtendría el estatus actual de *paria* para las entidades comerciales, gubernamentales y los potenciales inversores.

Para el gobierno norcoreano, la mejora económica gradual del país sirvió también para la reconstrucción de sus fuerzas militares después del armisticio y la partición de la península. Ya en 1962 Kim marcaba los cuatro pilares de la doctrina militar: armar a la totalidad de la población; fortificar todo el país; entrenar a todo el ejército como una fuerza militar de cuadros, lo que supondría que todos los soldados son capaces de establecer y entrenar unidades militares y modernizar el armamento, la doctrina y tácticas militares bajo el principio de la autosuficiencia para la defensa nacional.[^156] De esta época, y con el soporte técnico soviético datan los primeros esfuerzos por dotar a la RDPC de un programa nuclear.

La búsqueda de autonomía del régimen de Kim lo llevaría a comprender que para ser tenido en cuenta en el concierto internacional necesitaría tener acceso a armas nucleares. Podemos aventurarnos a decir que teniendo en cuenta la idiosincrasia Juche y los factores históricos propios de la historia de Corea, para el régimen contar con un programa nuclear es una muy buena forma -quizás la única- de garantizar al menos de forma disuasiva que nunca más una potencia extranjera atacaría e invadiría su patria.

Los esfuerzos del programa de misiles balísticos de Corea del Norte y de su programa nuclear darían sus primeros frutos a finales de los años 80 y principios de los 90, coincidiendo con el fin de la Guerra Fría y del soporte militar soviético. Esta serie de circunstancias llevarían al régimen a replantearse su estrategia militar y optar por la defensa asimétrica, al darse cuenta que difícilmente podrían superar al ejército de la ROC respaldado por los estadounidenses en una conflagración abierta.

En este sentido, la estrategia de Seguridad de la RDPC mantiene en un punto central el desarrollo de un programa armamentístico para la defensa nacional. Para financiar al menos en parte el demandante presupuesto de defensa, la RDPC ha acudido durante los últimos treinta años a un sinnúmero de actividades económicas delictivas, como el contrabando, el tráfico de especies animales y armas, narcotráfico y la producción masiva de dólares falsos[^157].

Este estado de cosas ha hecho posible que durante dos décadas del siglo XX, la RDPC vea la emergencia del ciberespacio y del quinto dominio como un escenario al cual llevar la lógica ya expuesta de hostilidades no explícitas contra la ROC, Estados Unidos y en general contra el Occidente capitalista y que además justifica la existencia de su programa de formación de *hackers* y unidades especiales para la penetración de sistemas informáticos.

A pesar de sus limitaciones por cuenta de la escasez de recursos especializados y de la relativa desconexión a la internet global, según especialistas la RDPC produce los segundos mejores hackers del mundo como resultado de una política de estado consistente desde 1982 y que ha utilizado al mejor talento digital del país como punta de lanza para un nuevo escenario de guerra asimétrica, convirtiéndose en uno de los factores más importantes de riesgos y amenazas para la industria financiera global.

## 7. RECOMENDACIONES PARA LA FORMULACIÓN DE POLÍTICAS Y ESTRATEGIAS DE CIBERDEFENSA Y CIBERSEGURIDAD

El análisis desarrollado a lo largo de esta tesis evidencia la necesidad de fortalecer el marco de ciberdefensa y ciberseguridad del sistema financiero argentino, en particular en su interfaz con el ecosistema de criptoactivos y finanzas descentralizadas. Las amenazas de menor sofisticación, como las estafas y los robos de baja escala, requieren controles ordinarios de la industria financiera. Las amenazas de mayor sofisticación, como las APT (*advanced persistent threat*) patrocinadas por estados y en particular por la RDPC (capítulo 5), requieren un enfoque integral que combine regulación efectiva, mejores prácticas internacionales, capacidades técnicas especializadas y la participación activa de la industria como agente de cumplimiento.

Las recomendaciones que siguen se basan en el aparato argumentativo construido en los capítulos anteriores. Se ordenan en seis ejes: el marco regulatorio (7.1), las medidas específicas frente a las técnicas de la RDPC (7.2), los estándares y la cooperación internacional (7.3), la autorregulación y el intercambio de información (7.4), las capacidades técnicas y operacionales (7.5) y la evaluación continua (7.6).

### 7.1 Fortalecimiento del marco regulatorio y normativo

**Marco integral de ciberseguridad financiera.** El análisis del capítulo 1 mostró una estructura de entidades con regulaciones que se intersectan y se superponen, y una Estrategia Nacional de Ciberseguridad sin previsiones puntuales sobre el sector financiero. Se recomienda un marco de ciberseguridad específico para el sector que incorpore explícitamente los riesgos asociados con criptoactivos y DeFi y que incluya, como compromiso sectorial, la elaboración de una **Política Nacional de Ciberseguridad del Sector Financiero**, con evaluación anual y con la conciliación de las regulaciones federales y provinciales aplicables a las entidades del sistema.

Para el gobierno de la seguridad de la información se sugiere adoptar como base metodológica el *Cybersecurity Framework* 2.0 del NIST[^158], adaptado al contexto regulatorio argentino. A las entidades en capacidad de hacerlo se les sugiere adoptar la norma ISO/IEC 27001:2022[^159] para establecer y gobernar un sistema de gestión de seguridad de la información, y a las que operan con criptoactivos, los controles del *CryptoCurrency Security Standard* (CCSS)[^160], cuya correspondencia con la Resolución General 1058/2025 de la CNV fue analizada en este trabajo. Estos controles serían un complemento de las Comunicaciones “A” 6375/2017, 6603/2018 y 7783/2023 del BCRA, y permitirían fijar requisitos mínimos de ciberseguridad para los PSP que ofrezcan servicios relacionados con criptoactivos, incluyendo estándares de seguridad, auditorías periódicas y reporte de incidentes.

**Actualización de la Estrategia Nacional de Ciberseguridad.** La Estrategia vigente[^161] no incluye objetivos para la protección del sistema financiero. Se recomienda:

- incluir objetivos específicos de protección del sistema financiero y de la infraestructura de pagos como parte de la infraestructura crítica nacional;
- prever el desarrollo de capacidades de análisis blockchain e investigación de delitos cripto en las fuerzas de seguridad y los organismos reguladores;
- incorporar de manera explícita la amenaza de actores estatales y de las APT al análisis de riesgos del sector, con base en las tendencias documentadas en el capítulo 5;
- establecer protocolos de cooperación internacional para la investigación y persecución de amenazas transnacionales.

**Marco armonizado para criptoactivos.** Las regulaciones analizadas son incompletas y responden a orientaciones conceptuales distintas. Se recomienda desarrollar una ley integral de criptoactivos, clara y proporcional, que proteja a los usuarios de servicios cripto en tanto usuarios del sistema financiero, establezca mecanismos de gobernanza y a la vez fomente la industria local, en línea con los desarrollos analizados en el apartado sobre regulación global. Esa ley debería contemplar:

- un régimen de licencias para los Proveedores de Servicios de Activos Virtuales (PSAV) con requisitos específicos de ciberseguridad y gestión de riesgos;
- estándares de gobierno corporativo para las entidades que manejan criptoactivos, que incluyan la gestión de riesgos cibernéticos y la protección de datos;
- un entorno de pruebas regulatorio (*sandbox*) que permita la innovación controlada mientras se evalúan nuevos riesgos.

El marco debe además prever la evolución futura de estas tecnologías y mantener un equilibrio entre el desarrollo del sector y la estabilidad del sistema financiero.

### 7.2 Medidas específicas frente a las técnicas de la RDPC

El capítulo 5 mostró que los ataques atribuidos a la RDPC siguen un patrón reiterado: ingeniería social dirigida a personas con acceso privilegiado, malware a medida que llega a las máquinas que conectan con las claves, y un lavado rápido y transnacional que depende de las rampas de conversión. Las medidas que siguen traducen ese patrón en controles concretos, que pueden incorporarse como requisitos mínimos para PSP y PSAV, tanto en la reglamentación como en las auditorías anuales previstas por la RG 1058/2025.

| Técnica o fase                         | Medidas recomendadas                                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Phishing e ingeniería social           | Autenticación resistente al phishing (llaves de seguridad físicas FIDO2) para toda persona con acceso a sistemas de custodia, administración o despliegue. Protocolo de verificación de ofertas laborales y de contactos externos, y prohibición de ejecutar código ajeno (pruebas técnicas, scripts, archivos de reclutadores) en equipos corporativos. Campañas de concientización con casos reales (Ronin, DMM Bitcoin). |
| Malware de actor                       | Protección de endpoints con detección y respuesta (EDR) en los equipos de desarrolladores, administradores y firmantes; segmentación y equipos dedicados para operar firmas; control de ejecución de código y de extensiones; monitoreo de robo de sesiones y de cookies.                                                                                                                                                   |
| Aprobación de transacciones y custodia | Verificación independiente del destino y del contenido de cada transacción antes de firmar, en un dispositivo y un canal distintos del que la preparó; límites y demoras para transferencias de gran monto; esquemas multifirma o MPC con firmantes separados organizacionalmente; billeteras frías y calientes con umbrales claros (en línea con el Art. 17 de la RG 1058/2025).                                           |
| Ransomware                             | Copias de seguridad aisladas y probadas, segmentación de redes, planes de continuidad de negocio y reglas internas para evaluar siempre un incidente de ransomware con la hipótesis de actor estatal y para notificarlo a las autoridades.                                                                                                                                                                                  |
| Infiltración laboral (*IT workers*)    | Verificación reforzada de identidad y de ubicación real de desarrolladores, contratistas y proveedores; revisión de código y principio de mínimo privilegio para terceros; auditoría de acceso a repositorios y a claves.                                                                                                                                                                                                   |
| Interoperabilidad y puentes            | Redundancia y diversidad en los verificadores de los puentes entre cadenas; monitoreo de configuraciones y de proveedores de datos; evaluación de la exposición a activos y protocolos que dependen de un único componente.                                                                                                                                                                                                 |
| Respuesta y lavado                     | Canales de alerta rápida con otros PSAV, exchanges y autoridades, con capacidad de congelar fondos en horas; incorporación de listas de direcciones asociadas a la RDPC publicadas por autoridades (como el FBI) a los sistemas de monitoreo; señales de alerta específicas en los reportes de operaciones sospechosas a la UIF (saltos entre puentes, mezcladores, patrones de fraccionamiento).                           |

*Tabla 7.1. Medidas específicas frente a las técnicas y fases de la ciberestrategia de la RDPC. Elaboración propia.*

Debe subrayarse que estas medidas no dependen de conocer la atribución de un incidente: un control eficaz contra una APT norcoreana lo es también contra un delincuente común. La atribución es útil para priorizar y para activar la cooperación internacional, pero no debe ser condición para actuar.

### 7.3 Mejores prácticas internacionales y cooperación

**Estándares de referencia.** La adopción de estándares internacionales permite armonizar las prácticas locales con las que han dado mejores resultados. Se recomienda, en particular, adoptar los lineamientos de respuesta y recuperación ante ciberincidentes del *Financial Stability Board* (FSB)[^162] y su léxico cibernético[^163], que facilitan la cooperación y el intercambio de información, y el *framework* del NIST con su estructura de funciones (identificar, proteger, detectar, responder y recuperar), niveles de madurez y perfiles de riesgo adaptados al sector financiero argentino.

**Casos de referencia.** El análisis comparado permite identificar experiencias útiles:

- **México:** un enfoque integral coordinado por el Banco de México, con un Consejo de Estabilidad del Sistema Financiero de participación interinstitucional, el Foro de Colaboración de Seguridad Cibernética (FOCOSC), protocolos de respuesta a incidentes para sistemas de pagos y la Ley Fintech.
- **Reino Unido:** marcos de resiliencia operacional específicos para criptoactivos, requisitos de separación funcional para intermediarios multifuncionales y estándares de transparencia, desarrollados por la *Financial Conduct Authority*[^164].
- **Unión Europea:** el Reglamento de Mercados de Criptoactivos (MiCA)[^165], con un marco horizontal, autorización previa para proveedores de servicios y estándares de gobierno corporativo y gestión de riesgos.

**Cooperación internacional y regional.** Argentina debe fortalecer su participación en el FSB y en sus grupos de trabajo sobre ciberseguridad, cooperar a escala regional a través del CEMLA y de ASBA, y establecer canales de intercambio con proveedores de inteligencia blockchain (como Chainalysis y TRM Labs) y con agencias de seguridad y policía. Dada la naturaleza de la amenaza, se recomienda además que el país evalúe su relación con los mecanismos multilaterales de monitoreo y de alerta sobre actividad ilícita norcoreana, como el MSMT[^166], y con las autoridades que publican direcciones y campañas atribuidas, para integrar esa información a los sistemas de supervisión locales.

### 7.4 Autorregulación, corregulación e intercambio de información

La industria cripto ha desarrollado mecanismos de autorregulación que facilitan la gobernanza de la seguridad y protegen la estabilidad del sistema financiero. Para Argentina se recomienda:

- crear una cámara sectorial específica del sector de criptoactivos, que establezca estándares de seguridad y mejores prácticas adaptadas de las existentes a nivel internacional;
- desarrollar códigos de conducta para los distintos segmentos de la industria (analizados en el capítulo 3);
- implementar un sistema de certificación voluntaria en ciberseguridad para entidades cripto.

Existen experiencias de referencia, como el marco de autorregulación de la *Gibraltar Blockchain Exchange* (GBX) y el de la *Japan Virtual Currency Exchange Association* (JVCEA), esta última particularmente relevante porque Japón fue víctima de ataques atribuidos a la RDPC (caso DMM Bitcoin).

Deben desarrollarse además **programas de cumplimiento específicos** para criptoactivos, que incluyan políticas AML/CFT para transacciones cripto, procedimientos KYC adaptados al pseudoanonimato, monitoreo en tiempo real de operaciones sospechosas, protocolos de respuesta a incidentes y auditorías especializadas en tecnología blockchain. Esos requisitos ya son estándares de la industria en la mayoría de los casos, y su formalización facilitaría el cruce de información entre organismos de control y exchanges.

Se recomienda, por último, crear un **Centro de Intercambio de Información de Amenazas Cripto** que permita compartir inteligencia entre el sector público y el privado. Para que funcione debe acompañarse de acciones que generen confianza entre las partes, de protocolos de notificación temprana de vulnerabilidades y amenazas y de sistemas de alertas colaborativas para amenazas sistémicas. Dado que la ventana de lavado posterior a un robo es de pocos días (apartado 5.2.3), el Centro debería incluir un mecanismo de alerta de baja latencia entre PSP, PSAV y exchanges para congelar fondos con rapidez.

### 7.5 Capacidades técnicas y operacionales

#### 7.5.1 Desarrollo de capacidades especializadas

Las capacidades actuales están fragmentadas entre distintas agencias de seguridad y policía. Las áreas prioritarias son:

- **Análisis blockchain y forense digital:** equipos especializados en investigación de transacciones cripto.
- **Inteligencia de amenazas:** capacidad de identificar y analizar APT y actores estatales, incluyendo el seguimiento de las campañas de la RDPC documentadas en este trabajo.
- **Modelado de riesgos sistémicos:** herramientas para evaluar el impacto de amenazas cripto sobre el sistema financiero tradicional, incluyendo escenarios de contagio como el descrito en 5.2.4.

#### 7.5.2 Infraestructura tecnológica

Argentina tiene capacidad para desarrollar infraestructura específica de supervisión del ecosistema cripto, necesaria para operar las capacidades anteriores: sistemas de monitoreo blockchain para el seguimiento de transacciones sospechosas, herramientas de análisis de redes para identificar patrones de lavado y sistemas de alerta temprana para amenazas emergentes.

#### 7.5.3 Formación y capacitación continua

Se recomienda crear programas de formación continua para reguladores, funcionarios judiciales y fuerzas de seguridad, en colaboración con la industria y la academia, con un contenido mínimo que incluya los fundamentos de blockchain y criptoactivos, técnicas de investigación en entornos descentralizados, análisis de amenazas de actores estatales y mejores prácticas internacionales de supervisión.

Estas capacidades pueden incorporarse a las del CERT nacional o, alternativamente, constituirse como una estructura de coordinación interinstitucional con participación de los actores relevantes, que tenga entre sus funciones:

- desarrollar protocolos específicos de detección, prevención y respuesta a APT;
- compartir información con agencias de inteligencia extranjeras;
- implementar medidas proactivas para reducir la superficie de ataque disponible para actores estatales maliciosos;
- realizar ejercicios de simulación periódicos (*red team*, *blue team* y *tabletop*) que reproduzcan escenarios basados en los casos del capítulo 5, por ejemplo una falsa oferta laboral dirigida a un desarrollador o una manipulación del circuito de firma de un exchange;
- analizar y responder a acciones de ciberataque y ciberguerra en caso de presentarse.

### 7.6 Marco de evaluación y mejora continua

Las autoridades a cargo de la vigilancia y protección del sistema deben desarrollar un sistema de métricas que evalúe la efectividad de las medidas implementadas. Algunas métricas sugeridas son:

- tiempo de detección de incidentes de ciberseguridad;
- efectividad de la respuesta ante amenazas identificadas;
- tiempo transcurrido entre la alerta y el congelamiento de fondos vinculados a un incidente;
- nivel de cumplimiento de estándares por parte de la industria;
- grado de cooperación entre los sectores público y privado.

Las políticas nacionales de ciberseguridad y ciberdefensa deben actualizarse anualmente y recoger las lecciones aprendidas de cada ciberincidente. Es posible trabajar con actores de la industria financiera y de criptoactivos para incorporar su retroalimentación en las políticas públicas.

## 8. CONCLUSIONES

Esta tesis se propuso analizar la exposición del sistema financiero argentino a las amenazas provenientes de actores vinculados al gobierno de la República Popular Democrática de Corea en el ecosistema de criptoactivos y finanzas descentralizadas, y determinar qué herramientas necesita para mejorar su postura de ciberdefensa y ciberseguridad. El recorrido incluyó el sistema financiero argentino y su regulación (capítulo 1), los fundamentos técnicos de blockchain, contratos inteligentes y DeFi (capítulo 2), la exposición local al ecosistema cripto (capítulo 3), las vulnerabilidades y los robos en DeFi (capítulo 4), los ataques y la ciberestrategia de la RDPC (capítulo 5), el trasfondo histórico del régimen (capítulo 6) y un conjunto de recomendaciones (capítulo 7).

### 8.1 Conclusiones generales

1.  **El ecosistema de criptoactivos es una realidad económica de peso creciente en Argentina.** La adopción local es de las más altas de la región y el sector se integra con el sistema financiero tradicional a través de las rampas: exchanges, PSP y PSAV.

2.  **La integración genera superficies de exposición que el marco actual no contempla.** Los “vasos comunicantes” entre el ciberespacio y la economía real permiten operar de manera fluida, pero también permiten que los fondos robados salgan del ecosistema cripto a través de entidades reguladas. El marco normativo vigente es incompleto, y trata la ciberseguridad como un aspecto secundario, con la excepción reciente de la RG 1058/2025 de la CNV, cuya correspondencia con el estándar CCSS es notable.

3.  **La RDPC es el actor estatal más relevante para el sector.** Las fuentes consultadas concuerdan en que los actores norcoreanos extraen más valor por ataque que cualquier otro grupo: al menos USD 2.020 millones en 2025 según Chainalysis, cerca del 76% de las pérdidas por hackeos cripto de 2026 hasta abril según TRM Labs, y un acumulado histórico no inferior a USD 6.750 millones. No es el actor que más ataques realiza, sino el que ataca con mayor impacto.

4.  **Sus ataques responden a una estrategia, no a oportunidades.** Se observa una conducta consistente con los objetivos de financiar al régimen y a sus programas de armas, evadir sanciones, mantener acceso persistente y continuar en el quinto dominio la guerra asimétrica que el régimen practica desde hace décadas. La ideología Juche y la doctrina militar descritas en el capítulo 6 aportan el marco de legitimidad y la lógica de autosuficiencia que explican por qué el estado tolera y organiza estas actividades.

5.  **Las técnicas priorizadas apuntan al eslabón humano y a las rampas.** El phishing mediante falsas ofertas laborales, el malware a medida dirigido a desarrolladores y firmantes y el lavado rápido a través de puentes, mezcladores y operadores OTC muestran que las defensas puramente técnicas del protocolo no alcanzan: la seguridad depende de las personas, de los procesos de aprobación y de la capacidad del sistema para reaccionar en horas.

6.  **Los puntos de contacto con el sistema financiero son el principal lugar donde Argentina puede actuar.** Los PSP y PSAV son por diseño los puntos donde la amenaza interactúa con la jurisdicción local, tanto por el riesgo de ser blanco como por el de recibir fondos de origen ilícito. Estos puntos son también las palancas más eficaces de la defensa.

7.  **La respuesta eficaz requiere un enfoque integral.** Ninguna medida aislada alcanza. Se necesita la colaboración entre el sector público y el privado, la adopción de buenas prácticas internacionales adaptadas, capacidades técnicas especializadas, regulación proporcional y el reconocimiento de la industria cripto como socio en la protección del sistema financiero.

#### Contraste con la hipótesis y las preguntas de investigación

La hipótesis planteada en esta tesis sostiene que la consideración de los actores patrocinados por la RDPC es clave para la defensa de la infraestructura crítica y el desarrollo del sector financiero nacional. La evidencia reunida la corrobora en sentido amplio: la amenaza es real, está en crecimiento, se concentra en el espacio cripto y DeFi y se relaciona con las rampas por las que Argentina se integra al ecosistema. Debe señalarse, sin embargo, que este trabajo no documenta ataques atribuidos a la RDPC contra entidades argentinas; la exposición analizada es potencial y estructural, derivada de la posición del país en el ecosistema, y no la de una víctima confirmada.

Con respecto a las preguntas específicas: (i) la exposición del sistema argentino es indirecta pero significativa, por su alta adopción cripto y por el uso de sus rampas; (ii) las motivaciones, estrategias y técnicas de las APT norcoreanas se describen en el capítulo 5; (iii) las principales capacidades que faltan son la detección y respuesta específicas para actores estatales, el análisis blockchain, el intercambio de información de baja latencia y un marco normativo que integre la ciberseguridad con la regulación cripto; y (iv) las experiencias de México, Reino Unido, la Unión Europea y los modelos de autorregulación de Gibraltar y Japón ofrecen referencias útiles, desarrolladas en el capítulo 7.

### 8.2 Limitaciones y desafíos de la investigación

La investigación encontró sus límites en la naturaleza cambiante de su objeto de estudio. El ritmo de los cambios tecnológicos y regulatorios implica que muchos hallazgos requieren actualización continua; a lo largo de la elaboración de la tesis aparecieron la RG 1058/2025 y el registro de PSAV, la ley GENIUS en Estados Unidos y nuevos incidentes de gran magnitud atribuidos a la RDPC, algunos de ellos ocurridos en 2026, cuando el trabajo ya estaba avanzado.

A esto se suman tres limitaciones metodológicas. Primero, la atribución de los ataques a la RDPC proviene de organismos gubernamentales, de un grupo multilateral de monitoreo y de firmas privadas de inteligencia, no es independiente ni judicialmente probada y en varios casos recientes es preliminar. Segundo, las cifras difieren entre fuentes por diferencias de metodología y de valuación, por lo que se presentan como órdenes de magnitud. Tercero, el trabajo se basa en fuentes abiertas, sin acceso a información de inteligencia ni a datos internos de entidades argentinas sobre incidentes, que suelen mantenerse en reserva.

### 8.3 Aportes originales

- Ofrece un análisis integral del impacto de los criptoactivos y de las amenazas estatales norcoreanas sobre la ciberseguridad del sistema financiero argentino, un campo poco explorado en la literatura académica nacional.
- Reúne en un solo marco la historia del sistema financiero argentino, el funcionamiento técnico de DeFi, la cronología de ataques atribuidos a la RDPC y el trasfondo histórico e ideológico del régimen, y los vincula con la regulación local.
- Traduce el patrón de comportamiento de la RDPC en medidas concretas para PSP y PSAV (Tabla 7.1) y en una propuesta de política pública para el sector financiero.
- Identifica a la industria cripto como agente de cumplimiento y socio de la ciberdefensa, y propone mecanismos de intercambio de información de baja latencia.
- Sistematiza algunos casos y amenazas del contexto local y propone un marco conceptual para integrar los criptoactivos en las estrategias de ciberdefensa del sistema financiero.

### 8.4 Futuras líneas de trabajo y reflexiones finales

Esta tesis abre varias líneas de investigación futura: la medición empírica de los flujos de fondos de origen ilícito que pasan por exchanges con operación en Argentina; el estudio de la exposición del sector de servicios tecnológicos argentino a los esquemas de infiltración laboral; la evaluación del impacto de la RG 1058/2025 sobre la postura de seguridad de los PSAV; el análisis comparado con otros actores estatales; y el diseño y la prueba de ejercicios de simulación sectoriales basados en los escenarios descritos.

Argentina no se encuentra en un vacío: los hechos estudiados ocurren en una configuración geopolítica determinada y en una evolución económica e industrial regional y global, por lo que los hallazgos de este trabajo pueden ser de interés para otras economías emergentes de la región. La ciberseguridad en el ecosistema de criptoactivos no es un objetivo estático sino un proceso dinámico que requiere adaptación continua y colaboración sostenida entre todos los actores. La experiencia analizada muestra que ningún actor posee por sí solo todas las capacidades necesarias para enfrentar amenazas con respaldo estatal.

El sistema financiero argentino tiene la oportunidad de salir fortalecido de este proceso y de posicionarse como líder regional en la integración segura de tecnologías financieras emergentes. Para ello se requiere voluntad política, inversión en capacidades y compromiso con la cooperación público-privada. La ciberdefensa del sistema financiero en la era de los criptoactivos no es sólo una cuestión técnica, sino un imperativo estratégico para la soberanía financiera y la competitividad nacional.

[^1]: [<u>De 1822 hasta hoy: los principales hitos del banco más antiguo de Hispanoamérica</u>](https://www.bancoprovincia.com.ar/Noticias/Bicentenario/de-1822-hasta-hoy-los-principales-hitos-del-banco-mas-antiguo-de-hispanoamerica-753#:~:text=El%20Banco%20de%20la%20Provincia,billetes%20de%20la%20historia%20argentina.). Banco Provincia, 2021.

[^2]: JONES. Capitales británicos, sector financiero y gobierno en la Argentina. EDUNTREF, 2018.

[^3]: RODRIGUEZ. [<u>La vinculación internacional de Argentina. 1880-1930.Las relaciones internacionales y la ideología de la elite gobernante</u>](http://bibliotecadigital.econ.uba.ar/download/tpos/1502-0732_RodriguezAB.pdf). Tesis. Centro de Estudios Avanzados. Maestría en Procesos de Integración Regional –Mercosur. Universidad de Buenos Aires, 2005.

[^4]: REGALSKY. [<u>Banca y capitalismo en la Argentina, 1850-1930. Un ensayo crítico</u>](http://bibliotecadigital.econ.uba.ar/download/ciclos/ciclos_v9_n18_03.pdf). Revista Ciclos, Año IX. Facultad de Ciencias Económicas, Universidad de Buenos Aires. 1999.

[^5]: [<u>Banco Nación Argentina, Origen y Desarrollo</u>](https://www.bna.com.ar/Downloads/OrigenydesarrollodelBancoNacionArgentinadesde1891a1910.pdf). Banco Nación. 1910.

[^6]: LIDDLE, PITA. [<u>Historia de la creación del Banco Central de la República Argentina</u>](https://www.bcra.gob.ar/pdfs/investigaciones/64_liddle.pdf). *Premio Raúl Prebisch 2010.* Ensayos Económicos. BCRA, 2011.

[^7]: [<u>Historia del Banco Central</u>](https://www.bcra.gob.ar/Institucional/Historia.asp). BCRA.

[^8]: NAVESI. [<u>Evolución del Sector Financiero Argentino. Caso Grupo Macro</u>](https://bdigital.uncuyo.edu.ar/objetos_digitales/7099/26-navesi-tesisfce.pdf). UNCUYO-FCE. 2013.

[^9]: BCRA. [<u>Comunicación “A” 2622</u>](https://www.bcra.gob.ar/Pdfs/comytexord/A2622.pdf), 1997.

[^10]: BCRA. [<u>Comunicación “A” 6044</u>](https://www.bcra.gob.ar/Pdfs/comytexord/A6044.pdf), 2016.

[^11]: [<u>Transferencias 3.0</u>](https://www.bcra.gob.ar/MediosPago/Transferencias-3-0.asp). BCRA

[^12]: [<u>Ley 21.526 de Entidades Financieras</u>](https://www.argentina.gob.ar/normativa/nacional/ley-21526-16071/actualizacion). 1977.

[^13]: [<u>Ley 24144. Carta Orgánica del BCRA</u>](https://www.bcra.gob.ar/Institucional/Carta_Organica.asp).

[^14]: BCRA. [<u>Comunicación “A” 6885</u>](https://web2.bcra.gob.ar/Pdfs/comytexord/A6885.pdf). 2020.

[^15]: [<u>Registro de Proveedores de Servicios de Pago</u>](https://www.bcra.gob.ar/SistemasFinancierosYdePagos/Proveedores-servicios-de-pago-ofrecen-cuentas-de-pago.asp). BCRA.

[^16]: BCRA. Comunicación “A” 7919. [<u>Sistema Nacional de Pagos - Servicios de Pago</u>](https://www.bcra.gob.ar/Pdfs/Texord/t-snp-spd.pdf). 2023.

[^17]: [<u>Guías de supervisión para la Ciberseguridad y Ciberresiliencia</u>](https://www.bcra.gob.ar/SistemasFinancierosYdePagos/CiberSeguridad-y-Ciberresilencia.asp). BCRA.

[^18]: [<u>Ciberseguridad</u>](https://www.bcra.gob.ar/SistemasFinancierosYdePagos/Ciberseguridad.asp). BCRA.

[^19]: [<u>RFC-2350</u>](https://www.argentina.gob.ar/sites/default/files/2023/05/cert.ar-_rfc-2350_pub.pdf). CERT Argentina. 2023.

[^20]: [<u>RFC-2350. Expectations for Computer Security Incident Response</u>](https://datatracker.ietf.org/doc/html/rfc2350). The Internet Society, 1998.

[^21]: WALLERSTEIN. [<u>El moderno sistema-mundo y la evolución</u>](https://repositorio.uca.edu.ar/bitstream/123456789/11906/2/moderno-sistema-mundo-evolucion.pdf). Yale University, 2007.

[^22]: ROBINSON. [<u>Global Capitalism Theory and theEmergence of Transnational Elites</u>](https://www.wider.unu.edu/sites/default/files/wp2010-02.pdf). WIDER Working Paper 2/2010 UNU-WIDER, 2010.

[^23]: EICHENGREEN. Globalizing Capital, A History of the International Monetary System. Princeton University Press, 2019.

[^24]: OCAMPO. [<u>Resetting the International Monetary (Non)System</u>](https://www.wider.unu.edu/publication/resetting-international-monetary-nonsystem). Oxford University Press, UNU-WIDER 2017.

[^25]: Lowenstein. [<u>The Nixon Shock</u>](https://www.bloomberg.com/news/articles/2011-08-04/the-nixon-shock). Bloomberg BusinessWeek, Agosto 4 de 2011.

[^26]: [<u>Swift History</u>](https://www.swift.com/about-us/history). Swift.

[^27]: TSENG, RODLAUER, [<u>China competing in the Global Economy</u>](https://www.elibrary.imf.org/display/book/9781589061781/9781589061781.xml). IMF, 2003.

[^28]: MCLEAY, et al. [<u>El dinero en la economía moderna. Una introducción</u>](https://www.researchgate.net/publication/298074426_El_dinero_en_la_economia_moderna_Una_introduccion). Revista de Economía Institucional. 2015.

[^29]: SMITH, La Naturaleza y Causas de la Riqueza de las Naciones. Alianza Editorial, 1996.

[^30]: KEYNES. A Tract on Monetary Reform. Macmillan, 1924.

[^31]: VON MISES. [<u>Bureaucracy</u>](https://cdn.mises.org/Bureaucracy_3.pdf). Yale University Press, 1944.

[^32]: [<u>Fundamentals of the Funds Transfer Process</u>](https://www.fincen.gov/reports-congress-0). U.S. Department of Treasury - Financial Crimes Enforcement Network. Report to Congress, 2004.

[^33]: CHAUM, David. [<u>Blind Signatures for Untraceable Payments</u>](http://www.hit.bme.hu/~buttyan/courses/BMEVIHIM219/2009/Chaum.BlindSigForPayment.1982.PDF). Department of Computer Science. UCLA, Santa Barbara.

[^34]: Chain. [*<u>How Cypherpunks Ignited the Era of Bitcoin and Digital Currencies</u>*](https://medium.com/@chaincom/how-cypherpunks-ignited-the-era-of-bitcoin-and-digital-currencies-aca2175a0b00). Aug 8, 2024.

[^35]: HUGUES. [<u>A Cypherpunk’s Manifesto</u>](https://www.activism.net/cypherpunk/manifesto.html). 1993.

[^36]: LAW, SABBET, SOLINAS. [<u>How To Make A Mint: The Cryptography of Anonymous Electronic Cash</u>](http://groups.csail.mit.edu/mac/classes/6.805/articles/money/nsamint/nsamint.htm#5) National Security Agency Office of Information Security Research and Technology. Cryptology Division, 1996.

[^37]: DAI. [<u>B-Money</u>](http://www.weidai.com/bmoney.txt).

[^38]: NAKAMOTO. [<u>Un Sistema de Efectivo Electrónico Usuario-a-Usuario 1</u>](https://bitcoin.org/files/bitcoin-paper/bitcoin_es_latam.pdf) Publicado originalmente en [<u>https://bitcoin.org/bitcoin.pdf</u>](https://bitcoin.org/bitcoin.pdf). 2008.

[^39]: BUTERIN. [<u>Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform</u>](https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf). 2014.

[^40]: LIN. [<u>Proof of Work vs. Proof of Stake in Cryptocurrency</u>](https://www.researchgate.net/publication/369870684_Proof_of_Work_vs_Proof_of_Stake_in_Cryptocurrency). Highlights in Science, Engineering and Technology, Vol. 39. University of Nevada, 2023.

[^41]: [<u>Gas (Ethereum): How Gas Fees Work on the Ethereum Blockchain</u>](https://www.investopedia.com/terms/g/gas-ethereum.asp). Investopedia, 2024.

[^42]: WOOD. [<u>ETHEREUM: A SECURE DECENTRALISED GENERALISED TRANSACTION LEDGER</u>](https://ethereum.github.io/yellowpaper/paper.pdf)

    [<u>SHANGHAI VERSION</u>](https://ethereum.github.io/yellowpaper/paper.pdf). 2024

[^43]: CHAVEZ-DREYFUS. [<u>Virtual company may raise \$200 million, largest in crowdfunding</u>](https://web.archive.org/web/20170610084228/http://www.reuters.com/article/us-blockchain-crowdfunding-idUSKCN0Y82LI). Reuters, 2016.

[^44]: MEHAR, et al. [<u>Understanding a Revolutionary and Flawed Grand Experiment in Blockchain: The DAO Attack</u>](https://elsevier-ssrn-document-store-prod.s3.amazonaws.com/17/11/26/ssrn_id3077683_code1882865.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLWVhc3QtMSJIMEYCIQCDDDyj9k5JHCk3z8z%2Bib%2BUAzPJQ5gjmCGinanRuUZzpwIhAOm57rPD8mlQTkmCp1oajXkIGbVv6CtbrEa9v9Ld2yYFKr0FCGMQBBoMMzA4NDc1MzAxMjU3IgxypUcTbBdK5YsaMqEqmgXfRQHB5XlWDsE4o%2Fqr8NSevYZXxj3aZDuOxRU3E2BhEc0fzk2Sj6I7liGaMW2EqLDkezXe9VhXX01fmE4TBhgFPgwFRrItQlMeUSujn5Kt0NxV%2BnjmOiIBzhE1CZ02b1W3NoPSBElXkEccTnANSsvKLZZgn8JqDROJA8JhfX8pWqBptddOZ%2FJn3GofcRK%2BWycvGaqGUnA2xIyvKx%2Bdj210j8LvkNJSlgUfPqED48ZiFq%2BOxILIgSqyg6lCaOL68Hro8pJzya%2BLu0G5PVc5FRf0faPDIBu2ClBVN1S1jCObnn%2FeXk2gKNH%2F%2BVWSVdBdzLb9r9zQpScU0n9T5F2oVZaiLajJ9cmc%2Fh6tyPLafH4YpaprwpeYrxeKylD9O%2BTA%2FRmpj7IFlRT%2BLtbgS0U7lKqS0Lq4%2Bg5hWFtR9fGq8Zmp4Zgh7yH3ZQd8ObP9F2TI%2B%2BKhg8yvs%2F9krz58hm63SncU9sBqO1bmMK7KL4qhmdteblcgPGutjqQ1mUbwZqziS8vIw3rUK0957z%2FfcsjDGLw8AHrQZVuZjC21H7EDc0%2BYWG8KlNgTRn2a7Hs33d0YWsTY%2BlW324mNofnzToq0XKXRk9jdN45s%2FP9xwddADNQ7tnPL5WlzGQk2r2g1FBvnhhGSxJUxLNtXSb434cLOH3clbW5hKSpMKW7%2FhEizfv0MC%2BKWHQ3nCowN1SzxkdDbFbCGQDUVixZqd9FvqvB2wEr1%2Fe8eSIiQmmoSc3TUyfqvqwwB3%2FpXD7XwZcZ6DygxueJkg5UKHhGLg0sVwIurR7SU%2BVXVbado3RAc6jkgNM%2FpAC2QKX2ZC87MQ1v0VLlDD4lQGXAWIfd0usv0okwLZD6gpV4Uk%2FmE07DJYrjWwwnCOMLFiUEK2j2gG3oww6nmtwY6sAGtNqR%2BqNDTXF76Zm9N3owyVMhEhhyfk6A8n1E2dsIA1WdxdV%2F%2FmQ83G59hcGxTJMUnlb44nd7AADsI4PdFynvkYNjR0ZUejmhUZiGEaI1MZFPLrMV7Lmy6kTunVqwihdUXHGpuBprrKumFBphm8Wqms0ikVb%2BUBHSmtih9oG6%2BGEWDPAb8nPRWTlePFAH3px%2BRSsTxouSLT0gVCGQgyzdc8dVu606y3vfdIHrGuJJZIA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T181809Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUPUUPRWEWL4RCOSM%2F20240929%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9ef271ef3274df6dc66fdc61bf6167c36b763725b4a6466d74cec043ee6a30fb). Harvard Law School, 2017.

[^45]: SCHULPEN. [<u>Smart contracts in the Netherlands</u>](http://arno.uvt.nl/show.cgi?fid=146860) International Business Law Master Thesis. Tilburg University, 2018.

[^46]: ALHARVY, VAN MOORSEL. [<u>BLOCKCHAIN-BASED SMART CONTRACTS : A SYSTEMATIC MAPPING STUDY</u>](https://arxiv.org/pdf/1710.06372.pdf). Newcastle University, Taibah University.

[^47]: [<u>MAKER White Paper</u>](https://makerdao.com/es/whitepaper/) 2017.

[^48]: THORN. [<u>EIP-1559: A Major Upgrade for Ethereum</u>](https://www.galaxy.com/insights/research/eip-1559-major-ethereum-upgrade/). GALAXY, 2021.

[^49]: ADAMS, et al. [<u>Uniswap Whitepaper (V3)</u>](https://uniswap.org/whitepaper-v3.pdf). Uniswap, 2021.

[^50]: LESHNER, et al. [<u>Compound Whitepaper 1.0</u>](https://compound.finance/documents/Compound.Whitepaper.pdf). Compound, 2019.

[^51]: [<u>Synthetix Litepaper Version 1.6.</u>](https://docs.synthetix.io/synthetix-protocol/the-synthetix-protocol/synthetix-litepaper) Synthetix, 2023.

[^52]: [<u>All About Yield Farming in DeFi</u>](https://www.chainalysis.com/blog/introduction-to-defi-yield-farming/). Chainalysis, 2023.

[^53]: Centic. [<u>Financial Risks in DeFi Lending</u>](https://medium.com/@centicio/financial-risks-in-defi-lending-8fdc394c3102). Octubre 5, 2023.

[^54]: SMITH, [<u>Staking vs Yield Farming vs Liquidity Mining</u>](https://www.blockchain-council.org/defi/staking-vs-yield-farming-vs-liquidity-mining/#:~:text=Staking%20involves%20holding%20a%20cryptocurrency,liquidity%20to%20a%20DeFi%20platform.). Blockchain Council, 2024.

[^55]: CURRY, et al. [<u>Optimal Automated Market Makers: Differentiable Economics and Strong Duality</u>](https://arxiv.org/pdf/2402.09129). Harvard University, 2024.

[^56]: HO, et al. [<u>The Ecology of Automated Market Makers</u>](https://www.osc.ca/sites/default/files/2024-07/20240711_the-ecology-of-automated-market-makers.pdf). Staff Discussion Papers, Bank of Canada, 2024.

[^57]: [<u>What Is a Blockchain Oracle?</u>](https://chain.link/education/blockchain-oracles). Chainlink, 2024.

[^58]: SUAREZ BARCIA, [<u>Decentralized Finance Oracles</u>](https://jnf.ufm.edu/cgi/viewcontent.cgi?article=1016&context=journal). Journal of New Finance: Vol 3: No.1, Article 2. UFM, Madrid, 2023.

[^59]: CALDARELLI, ELLUL. [<u>The Blockchain Oracle Problem in Decentralized Finance - A Multivocal Approach</u>](https://www.researchgate.net/publication/353972691_The_Blockchain_Oracle_Problem_in_Decentralized_Finance_-_A_Multivocal_Approach). Applied Sciences, MDPI. Basilea, 2021.

[^60]: DULEY, et al. [<u>The oracle problema and the future of DeFi</u>](https://www.bis.org/publ/bisbull76.pdf). BIS Bulletin, Bank of International Settlements, 2023

[^61]: Cryptopedia. [<u>Blockchain Oracles Explained: Decentralized Oracles in DeFi</u>](https://www.gemini.com/cryptopedia/crypto-oracle-blockchain-overview). Gemini, 2024.

[^62]: AUGUSTO, et al. [<u>\toolName: Monitoring and Identifying Attacks in Cross-Chain Bridges</u>](https://arxiv.org/html/2410.02029v1). Instituto Superior Técnico, Universidade de Lisboa, 2024.

[^63]: YAKOVENKO. [<u>Solana: A new architecture for a high performance blockchain v0.8.13</u>](https://solana.com/solana-whitepaper.pdf). Solana, 2017.

[^64]: Polkadot. [<u>An Introduction to Polkadot. Polkadot Lightpaper</u>](https://assets.polkadot.network/Polkadot-lightpaper.pdf). 2020.

[^65]: [<u>Overview</u>](https://docs.bnbchain.org/bnb-smart-chain/overview/). BNB Smart Chain. BNB Chain Documentation.

[^66]: GOEL, et al. [<u>Are the informal economy and cryptocurrency substitutes or complements?</u>](https://www.tandfonline.com/doi/pdf/10.1080/00036846.2023.2187039) Applied Economics Vol. 56, 2024.

[^67]: HOUY. [<u>The Bitcoin Mining Game</u>](https://www.ledgerjournal.org/ojs/index.php/ledger/article/view/13/59). Ledger Journal, University of Pittsburgh, 2016.

[^68]: Lemon. Ecosistema Cripto Local. [<u>Estado de la Industria Crypto 2023</u>](https://www.lemon.me/reportecrypto2023.pdf).

[^69]: [<u>Registro de Proveedores de Servicios de Pago</u>](https://www.bcra.gob.ar/SistemasFinancierosYdePagos/Proveedores-servicios-de-pago-ofrecen-cuentas-de-pago.asp). BCRA.

[^70]: [<u>Quienes Somos</u>](https://camarafintech.org/quienes-somos/). Cámara Argentina de Fintech.

[^71]: [<u>Centralized Exchange (CEX) Vs. Decentralized Exchange (DEX)</u>](https://www.blockchain-council.org/cryptocurrency/centralized-exchange-vs-decentralized-exchange/). Blockchain Council, 2022.

[^72]: Unidad de Información Financiera (UIF). [<u>PREVENCION DEL LAVADO DE ACTIVOS Y DE LA FINANCIACION DEL TERRORISMO</u>](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-300-2014-231930/texto) Res. 300/2014.

[^73]: CNV. [<u>Registro de Proveedores de Servicios de Activos Virtuales</u>](https://www.cnv.gov.ar/SitioWeb/ProveedoresServiciosActivosVirtuales/RegistrosPSAV).

[^74]: GARNIER, et al. [<u>Ley 27.739: importantes modificaciones al Sistema PLAFT</u>](https://www.ey.com/es_ar/law/ey-law-alerts-argentina/ley-27739-modificaciones-sistema-plaft) (Ley 25.246). EY, 2024.

[^75]: [<u>Binance Web3 API Specification</u>](https://developers.binance.com/docs/binance-web3-api/apis). Binance Developer Documents. 2024.

[^76]: [<u>Web3</u>](https://wiki.lemon.me/web3/). Lemon.

[^77]: [<u>Ripio Portal, your wallet Web3</u>](https://www.ripio.com/en/web3/wallet-web3). Ripio.

[^78]: [<u>Create your Bitso Web3 Wallet</u>](https://bitso.com/web3-wallet). Bitso.

[^79]: ORCUTT. [<u>Once hailed as unhackable, blockchains are now getting hacked</u>](https://www.technologyreview.com/2019/02/19/239592/once-hailed-as-unhackable-blockchains-are-now-getting-hacked/). MIT Technology Review, Febrero 19 de 2019.

[^80]: “The Attacker”. [<u>“An Open Letter”</u>](https://pastebin.com/CcGUBgDG). Junio 18, 2016.

[^81]: SIEGEL. [<u>Understanding The DAO Attack</u>](https://www.coindesk.com/learn/understanding-the-dao-attack/). CoinDesk. Junio 13 de 2023.

[^82]: [<u>Cyber Attack. Glossary</u>](https://csrc.nist.gov/glossary/term/cyber_attack#:~:text=An%20attack%2C%20via%20cyberspace%2C%20targeting,NIST%20SP%20800%2D30%20Rev.). Information Technology Laboratory Computer Security Resource Center. NIST.

[^83]: Chainlink. [<u>Top 6 Smart Contract Languages in 2024</u>](https://chain.link/education-hub/smart-contract-programming-languages). Enero 2, 2024.

[^84]: QuickNode. [<u>Solidity and Smart Contract Vulnerabilities on Ethereum</u>](https://www.quicknode.com/guides/ethereum-development/smart-contracts/common-solidity-vulnerabilities-on-ethereum). Agosto 13, 2024.

[^85]: BBC Bitesize. [<u>Binary: Overflow Errors</u>](https://www.bbc.co.uk/bitesize/guides/z26rcdm/revision/5).

[^86]: CHEN, PENDLETON, NJILLA, XU. [<u>A Survey on Ethereum Systems Security: Vulnerabilities, Attacks, and Defenses</u>](https://dl.acm.org/doi/pdf/10.1145/3391195). ACM Computing Surveys Vol 53, No. 3, Article 67, 2020.

[^87]: PRATAP. [<u>Reentrancy Attacks and The DAO Hack</u>](https://blog.chain.link/reentrancy-attacks-and-the-dao-hack/). Chainlink, 2022.

[^88]: p0n1. [<u>A disastrous vulnerability found in smart contracts of BeautyChain (BEC)</u>](https://medium.com/secbit-media/a-disastrous-vulnerability-found-in-smart-contracts-of-beautychain-bec-dbf24ddbc30e). SecBit Media, 2018.

[^89]: GAGLIARDONI. [<u>The Poly Network Hack Explained</u>](https://research.kudelskisecurity.com/2021/08/12/the-poly-network-hack-explained/). Kudelski Security Research, 2021.

[^90]: Immunefi. [<u>Hack Analysis: Cream Finance Oct 2021</u>](https://medium.com/immunefi/hack-analysis-cream-finance-oct-2021-fc222d913fc5). Immunefi, Noviembre 2022.

[^91]: HAOUARI, ABDELHAKIM & FOKAEFS. [<u>Vulnerabilities of smart contracts and mitigation schemes: A Comprehensive Survey</u>](https://www.researchgate.net/publication/379726984_Vulnerabilities_of_smart_contracts_and_mitigation_schemes_A_Comprehensive_Survey). 2024.

[^92]: PEASTER. [<u>Analyzing the Ronin bridge hack</u>](https://metaversal.banklesshq.com/p/analyzing-the-ronin-bridge-hack). Metaversal, 2022.

[^93]: Immunefi. op. cit.

[^94]: WRIGHT. [<u>Compound Finance confirms website hack redirecting users to phishing site</u>](https://cryptoslate.com/compound-finance-confirms-website-hack-redirecting-users-to-phishing-site/). Cryptoslate, Julio 3, 2024.

[^95]: OOSTHOEK. [<u>Flash Crash for Cash: Cyber Threats in Decentralized Finance</u>](https://arxiv.org/pdf/2106.10740). Cyber Threat Intelligence Lab, Delft University of Technology, 2021.

[^96]: CUESTA CAÑADA, et al. [<u>ERC-3156: Flash Loans</u>](https://eips.ethereum.org/EIPS/eip-3156). Ethereum Improvement Proposals. 2020.

[^97]: RAFALOFF. [<u>Flash Loan Attacks: A Case Study</u>](https://www.aon.com/cyber-solutions/aon_cyber_labs/flash-loan-attacks-a-case-study/). AON, 2023.

[^98]: WANG, et al. [<u>BLOCKEYE: Hunting For DeFi Attacks on Blockchain</u>](https://www.researchgate.net/publication/349787692_BLOCKEYE_Hunting_For_DeFi_Attacks_on_Blockchain). Oxford-Hainan Blockchain Research Institute, 2021.

[^99]: CHEN, et al. [<u>FlashSyn: Flash Loan Attack Synthesis via Counter ExampleDriven Approximation (Extended Version)</u>](https://www.researchgate.net/publication/361479912_FlashSyn_Flash_Loan_Attack_Synthesis_via_Counter_Example_Driven_Approximation) ICSE, Lisboa, 2024.

[^100]: Immunebytes. [<u>Harvest Finance Fund Theft Incident – Oct 26, 2020 – Detailed Analysis</u>](https://www.immunebytes.com/blog/harvest-finance-fund-theft-incident-oct-26-2020-detailed-analysis/). Immunebytes, 2020.

[^101]: Cimpanu. [<u>Hacker steals \$24 million from cryptocurrency service 'Harvest Finance'</u>](https://www.zdnet.com/article/hacker-steals-24-million-from-cryptocurrency-service-harvest-finance/). ZDNet, Octubre 26 de 2020.

[^102]: CREAM. [<u>C.R.E.A.M. Finance Post Mortem: Flash Loan Exploit Oct 27</u>](https://medium.com/cream-finance/post-mortem-exploit-oct-27-507b12bb6f8e). C.R.E.A.M. Finance, Octubre 31 de 2021.

[^103]: Peckshield Inc, [<u>publicado en X.com</u>](https://x.com/peckshield/status/1432249600002478081). Agosto 30, 2021.

[^104]: Merckle Science. [<u>Chain Hopping: The Future of Crypto Money Laundering</u>](https://knowledgebase.merklescience.com/security-risk/chain-hopping-the-future-of-crypto-money-laundering). Julio 6, 2023.

[^105]: COPELAND. [<u>Ethereum DeFi protocol Cream Finance hacked for more than \$130 million</u>](https://www.theblock.co/post/122241/ethereum-defi-protocol-cream-finance-hacked-for-115-million). The Block, Octubre 27, 2021.

[^106]: OOSTHOEK. Op. cit.

[^107]: ZHOU, et al. [<u>SoK: Decentralized Finance (DeFi) Attacks</u>](https://arxiv.org/pdf/2208.13035). International Association for Cryptologic Research (IACR). 2023.

[^108]: THE BLOCK. [FBI confirms Lazarus Group and APT38 were responsible for \$100 million bridge hack](https://www.theblock.co/post/204928/fbi-confirms-lazarus-group-and-apt38-were-responsible-for-100-million-bridge-hack). Enero 23, 2023.

[^109]: SECURITY AFFAIRS. [A fake job offer via LinkedIn allowed to steal \$540M from Axie Infinity](https://securityaffairs.com/133113/cyber-crime/axie-infinity-hack-fake-job-offer.html). 2022.

[^110]: THE BLOCK. [FBI confirms Lazarus Group and APT38 were responsible for \$100 million bridge hack](https://www.theblock.co/post/204928/fbi-confirms-lazarus-group-and-apt38-were-responsible-for-100-million-bridge-hack). Enero 23, 2023.

[^111]: SECURITY AFFAIRS. [DMM Bitcoin \$308M Bitcoin heist linked to North Korea](https://securityaffairs.com/172290/hacking/dmm-bitcoin-308m-theft-linked-north-korea.html). 2024.

[^112]: CYBERSCOOP. [Bybit hack linked to Lazarus Group](https://cyberscoop.com/bybit-lazarus-group-north-korea-ethereum/). Febrero 25, 2025.

[^113]: BEINCRYPTO. [North Korea Claims 76% of 2026 Crypto Hack Losses in Just Four Months](https://beincrypto.com/north-korea-2026-crypto-hack-losses/). 2026. Cita datos de TRM Labs.

[^114]: THE DEFIANT. [North Korean agents inside DeFi platforms, Drift Protocol](https://thedefiant.io/news/security/north-korean-agents-defi-platforms-drift-protocol-sxz326). Abril 2026.

[^115]: BEINCRYPTO. [LayerZero Ties KelpDAO Exploit to Lazarus Subgroup TraderTraitor](https://beincrypto.com/layerzero-kelpdao-hack-lazarus-north-korea/). Abril 2026.

[^116]: THE HACKER NEWS. [North Korea-Linked Hackers Steal \$2.02 Billion in 2025](https://thehackernews.com/2025/12/north-korea-linked-hackers-steal-202.html). Diciembre 2025. Reproduce las cifras del informe de Chainalysis sobre 2025, el esquema de lavado en tres oleadas, los esquemas de *IT workers* y la campaña *Operation Dream Job*.

[^117]: DAWN. [North Korea using crypto, IT workers to dodge UN sanctions: report](https://www.dawn.com/news/1951317). Octubre 2025. Resume el informe del Multilateral Sanctions Monitoring Team (MSMT).

[^118]: BEINCRYPTO. [North Korea Claims 76% of 2026 Crypto Hack Losses in Just Four Months](https://beincrypto.com/north-korea-2026-crypto-hack-losses/). 2026. Cita datos de TRM Labs.

[^119]: THE HACKER NEWS. [North Korea-Linked Hackers Steal \$2.02 Billion in 2025](https://thehackernews.com/2025/12/north-korea-linked-hackers-steal-202.html). Diciembre 2025. Reproduce las cifras del informe de Chainalysis sobre 2025, el esquema de lavado en tres oleadas, los esquemas de *IT workers* y la campaña *Operation Dream Job*.

[^120]: THE HACKER NEWS. [North Korea-Linked Hackers Steal \$2.02 Billion in 2025](https://thehackernews.com/2025/12/north-korea-linked-hackers-steal-202.html). Diciembre 2025. Reproduce las cifras del informe de Chainalysis sobre 2025, el esquema de lavado en tres oleadas, los esquemas de *IT workers* y la campaña *Operation Dream Job*.

[^121]: THE HACKER NEWS. [North Korea-Linked Hackers Steal \$2.02 Billion in 2025](https://thehackernews.com/2025/12/north-korea-linked-hackers-steal-202.html). Diciembre 2025. Reproduce las cifras del informe de Chainalysis sobre 2025, el esquema de lavado en tres oleadas, los esquemas de *IT workers* y la campaña *Operation Dream Job*.

[^122]: CISA. [North Korean State-Sponsored Cyber Actors Use Maui Ransomware to Target the Healthcare and Public Health Sector](https://us-cert.cisa.gov/ncas/alerts/aa22-187a). Alerta AA22-187A, Julio 2022.

[^123]: DAWN. [North Korea using crypto, IT workers to dodge UN sanctions: report](https://www.dawn.com/news/1951317). Octubre 2025. Resume el informe del Multilateral Sanctions Monitoring Team (MSMT).

[^124]: THE HACKER NEWS. [North Korea-Linked Hackers Steal \$2.02 Billion in 2025](https://thehackernews.com/2025/12/north-korea-linked-hackers-steal-202.html). Diciembre 2025. Reproduce las cifras del informe de Chainalysis sobre 2025, el esquema de lavado en tres oleadas, los esquemas de *IT workers* y la campaña *Operation Dream Job*.

[^125]: THE DEFIANT. [North Korean agents inside DeFi platforms, Drift Protocol](https://thedefiant.io/news/security/north-korean-agents-defi-platforms-drift-protocol-sxz326). Abril 2026.

[^126]: THE HACKER NEWS. [North Korea-Linked Hackers Steal \$2.02 Billion in 2025](https://thehackernews.com/2025/12/north-korea-linked-hackers-steal-202.html). Diciembre 2025. Reproduce las cifras del informe de Chainalysis sobre 2025, el esquema de lavado en tres oleadas, los esquemas de *IT workers* y la campaña *Operation Dream Job*.

[^127]: THE BLOCK. [FBI confirms Lazarus Group and APT38 were responsible for \$100 million bridge hack](https://www.theblock.co/post/204928/fbi-confirms-lazarus-group-and-apt38-were-responsible-for-100-million-bridge-hack). Enero 23, 2023.

[^128]: CYBERSCOOP. [Bybit hack linked to Lazarus Group](https://cyberscoop.com/bybit-lazarus-group-north-korea-ethereum/). Febrero 25, 2025.

[^129]: BEINCRYPTO. [LayerZero Ties KelpDAO Exploit to Lazarus Subgroup TraderTraitor](https://beincrypto.com/layerzero-kelpdao-hack-lazarus-north-korea/). Abril 2026.

[^130]: JUN, LAFOY, SOHN. [North Korea’s Cyber Operations Strategy and Responses](https://csis-website-prod.s3.amazonaws.com/s3fs-public/legacy_files/files/publication/151216_Cha_NorthKoreasCyberOperations_Web.pdf). CSIS.

[^131]: INSIKT GROUP. [North Korea Cyber Strategy](https://go.recordedfuture.com/hubfs/reports/cta-nk-2023-0622.pdf). Recorded Future. 2023.

[^132]: WATERHOUSE, DOUBLE. [Bureau 121: North Korea’s elite hackers and a ‘tasteful’ hotel in China](https://www.bbc.com/news/newsbeat-32926248). BBC, 2015.

[^133]: SECURITY AFFAIRS. [DMM Bitcoin \$308M Bitcoin heist linked to North Korea](https://securityaffairs.com/172290/hacking/dmm-bitcoin-308m-theft-linked-north-korea.html). 2024.

[^134]: WATERHOUSE, DOUBLE. [Bureau 121: North Korea’s elite hackers and a ‘tasteful’ hotel in China](https://www.bbc.com/news/newsbeat-32926248). BBC, 2015.

[^135]: DAWN. [North Korea using crypto, IT workers to dodge UN sanctions: report](https://www.dawn.com/news/1951317). Octubre 2025. Resume el informe del Multilateral Sanctions Monitoring Team (MSMT).

[^136]: DAWN. [North Korea using crypto, IT workers to dodge UN sanctions: report](https://www.dawn.com/news/1951317). Octubre 2025. Resume el informe del Multilateral Sanctions Monitoring Team (MSMT).

[^137]: THE DEFIANT. [North Korean agents inside DeFi platforms, Drift Protocol](https://thedefiant.io/news/security/north-korean-agents-defi-platforms-drift-protocol-sxz326). Abril 2026.

[^138]: WATERHOUSE, DOUBLE. [Bureau 121: North Korea’s elite hackers and a ‘tasteful’ hotel in China](https://www.bbc.com/news/newsbeat-32926248). BBC, 2015.

[^139]: INSIKT GROUP. [North Korea Cyber Strategy](https://go.recordedfuture.com/hubfs/reports/cta-nk-2023-0622.pdf). Recorded Future. 2023.

[^140]: ALMANZA. Breve Historia de Corea. Nowtilus. Ciudad de México, 2021.

[^141]: CUMINGS. The Korean War. Modern Library. Nueva York, 2010.

[^142]: BANDOW. [<u>South Korea: Forever Dependent on America</u>](https://www.cato.org/commentary/south-korea-forever-dependent-america). Cato Institute, 2014.

[^143]: SUNGJOO. [<u>South Korea and the United States: The Alliance Survives</u>](https://www.jstor.org/stable/2643910). Asian Survey, Vol. 20, No. 11 (Nov., 1980), pp. 1075-1086

[^144]: [<u>The ROK-US Relations</u>](https://www.mofa.go.kr/eng/wpge/m_4904/contents.do). Ministry of Foreign Affairs - Republic of Korea.

[^145]: [<u>United States Forces Korea</u>](https://www.usfk.mil/About/USFK/). USFK.

[^146]: ARMSTRONG. [<u>The Cultural Cold War in Korea, 1945-1950</u>](https://www.jstor.org/stable/i355729). The Journal of Asian Studies

    Vol. 62, No. 1 (Feb., 2003), Duke University Press.

[^147]: “ZHIZHUA, YAFENG. [<u>China and the Post-War Reconstruction of North Korea, 1953-1961</u>](https://www.wilsoncenter.org/sites/default/files/media/documents/misc/NKIDP_Working_Paper_4_China_and_the_Postwar_Reconstruction_of_North_Korea.pdf). North Korea International Documentation Project Working Paper \#4. Wilson Center, 2012.

[^148]: ARMSTRONG. [<u>‘Fraternal Socialism’: The International Reconstruction of North Korea, 1953–62</u>](https://www.researchgate.net/publication/248952355_'Fraternal_Socialism'_The_International_Reconstruction_of_North_Korea_1953-62). Columbia University Press, 2005.

[^149]: ZOFKA, CHEN. [<u>Economic dimensions of the Sino–Soviet alliance and split: introduction to the special issue</u>](https://www.tandfonline.com/doi/full/10.1080/13507486.2023.2209107), European Review of History: Revue Européenne d’histoire, 2023.

[^150]: ARMSTRONG. Op. cit.

[^151]: ZHIZHUA, YAFENG. Op. cit.

[^152]: HONG. North Korea in the 1950s: The Post Korean War Policies and Their [<u>Implications. The Korean Journal</u>](https://www.kjis.org/journal/view.html?uid=109&page=&pn=mostread&sort=publish_Date%20DESC&spage=&vmd=Full) of International Studies 2-1 (December 2004), 215-234. The Korean Journal of International Studies. Hanyang University, 2004.

[^153]: ARMSTRONG. [<u>Illusions of Autonomy and the Autonomy of Illusions</u>](http://www.jstor.org/stable/43592452). Pacific Affairs, 2014.

[^154]: KIM. [<u>Sobre la Idea Zuche. Ediciones en Lenguas Extranjeras</u>](https://www.marxists.org/espanol/kim/kim-jong-il-idea-juche.pdf), 1982.

[^155]: ARMSTRONG. [<u>Juche and North Korea’s Global Aspirations</u>](https://www.wilsoncenter.org/sites/default/files/media/documents/publication/NKIDP_Working_Paper_1_Juche_and_North_Koreas_Global_Aspirations_web.pdf). North Korea International Documentation Project Working Paper \#1. Wilson Center, 2009.

[^156]: U.S. DEFENSE INTELLIGENCE AGENCY. [<u>North Korea Military Power</u>](https://www.dia.mil/Portals/110/Documents/News/North_Korea_Military_Power.pdf). 2017.

[^157]: CHESTNUT, [<u>Illicit Activity and Proliferation: North Korean Smuggling Networks</u>](https://direct.mit.edu/isec/article-abstract/32/1/80/11900/Illicit-Activity-and-Proliferation-North-Korean?redirectedFrom=fulltext). International Security \#32, MIT, 2007

[^158]: NIST. [The NIST Cybersecurity Framework (CSF) 2.0](https://www.nist.gov/cyberframework). Febrero 26, 2024.

[^159]: INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO/IEC 27001:2022.

[^160]: C4. CryptoCurrency Security Standard (CCSS), versión 9.0.

[^161]: Resolución 44/2023. Segunda Estrategia Nacional de Ciberseguridad de la República Argentina. Julio 14, 2023.

[^162]: FSB. Effective Practices for Cyber Incident Response and Recovery: Final Report. Octubre 19, 2020.

[^163]: FSB. Cyber Lexicon. Abril 13, 2023.

[^164]: FCA. CP25/15: A prudential regime for cryptoasset firms. Consultation Paper.

[^165]: ESMA. Markets in Crypto-Assets Regulation (MiCA).

[^166]: DAWN. [North Korea using crypto, IT workers to dodge UN sanctions: report](https://www.dawn.com/news/1951317). Octubre 2025. Resume el informe del Multilateral Sanctions Monitoring Team (MSMT).
