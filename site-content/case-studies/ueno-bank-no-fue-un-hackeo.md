---
title: "Ueno Bank: no fue un hackeo, y aun así es un caso de ciberseguridad"
summary: "Lo que la resolución del neobanco paraguayo enseña sobre integridad de la información reportada, dueños como adversarios, indisponibilidad total y la ética profesional del CISO."
type: "note"
status: "As of Nov 11, 2026 · in Spanish"
date: 2026-11-11
region: ["Paraguay", "LatAm"]
services: ["Regulatory coverage", "Threat-informed security programs"]
translation: "ueno-bank-not-a-hack"
translations: ["ueno-bank-nao-foi-hackeamento"]
image: "/og-ueno-es.png"
language: "Spanish"
featured: false
draft: false
---

*¿Qué nos revela la crisis de Ueno Bank sobre la madurez de la industria financiera de la región? Este artículo se redactó el 11 de noviembre y trata hechos que siguen en desarrollo.*

El pasado 2 de noviembre el directorio del Banco Central del Paraguay (en adelante BCP) resolvió por unanimidad iniciar la resolución (es el término técnico) de Ueno Bank, y la decisión se comunicó el 3. Según el BCP, su índice de solvencia había caído por debajo del 50 % del mínimo legal tras ajustes contables.[^1] La entidad tenía casi tres millones de clientes y unos USD 2.800 millones en depósitos, y quedaron suspendidos la aplicación, las tarjetas y las transferencias. La crisis ya tiene consecuencias políticas de primer orden en Paraguay.

La crisis del neobanco insignia del país vecino, y uno de los más importantes de la región, no tuvo que ver con un incidente cibernético. Sin embargo, considero que es uno de los casos más instructivos del año para quien trabaja en seguridad financiera: muestra que la pérdida de disponibilidad, de integridad y de confianza no necesita un atacante externo. Me permito compartir mis apuntes desde ese ángulo.

## Resumen de acontecimientos

Lo que consta de manera oficial es relativamente poco y está bien documentado. El directorio del BCP concluyó el 2 de noviembre que el índice de solvencia de Ueno, una vez aplicados ajustes contables durante el régimen de regularización, quedaba por debajo de la mitad del mínimo legal, y por eso inició el procedimiento de resolución con base en la Ley 2.334/03. La decisión se comunicó en la madrugada del martes 3 de noviembre, informando que la Superintendencia de Bancos designaría interventores.[^2] Desde entonces entró a operar el Fondo de Garantía de Depósitos, que cubre hasta 75 salarios mínimos por persona (G. 228,3 millones, unos USD 38.600) y que, según el BCP, alcanza a cerca del 97 % de los depositantes.[^3] Los anticipos debían empezar a pagarse dentro de las 24 horas, la Superintendencia de Valores suspendió los rescates en ciertos fondos mutuos vinculados al banco[^4], y las personas vinculadas a la entidad quedaron excluidas de la cobertura.

Hay además varios hechos que la prensa y la fiscalía están investigando y que, por ahora, no están probados. Según los reportes, Ueno habría prestado a empresas vinculadas a sus dueños por encima de los límites legales y, muchas veces, sin garantías suficientes.[^5] También habría registrado como activos gastos corrientes, lo que habría inflado su patrimonio hasta que los inspectores corrigieron los libros.[^5] Según AP, casi USD 39 millones habrían ido a tres empresas relacionadas en una sola jornada de septiembre de 2025.[^6] El banco, por su parte, ya había rechazado cuestionamientos previos en una carta abierta del 20 de agosto de 2026, donde defendía el tratamiento contable de su inversión tecnológica.[^7]

Quedan, por último, preguntas sin respuesta. Todavía no se conoce la causa exacta del agujero ni su monto final, y tampoco está claro hasta dónde llegó el rol de la supervisión: según un análisis publicado el 4 de noviembre, el BCP había iniciado una revisión en junio y, sin embargo, los índices que el banco publicaba seguían mostrando holgura meses después.[^8] Las cifras varían según la fuente, así que las trato como órdenes de magnitud y no como datos cerrados.

## Lo que este caso enseña desde la ciberseguridad

![Cinco lecciones de ciberseguridad del caso Ueno Bank](/research/ueno/lecciones-es.png)

### 1. La integridad de lo que se reporta es un control de seguridad

Según un análisis publicado el 4 de noviembre, el ratio de capital informado por el banco fue de 15,01 % en marzo, 14,5 % en junio y 13,8 % a fines de octubre, contra un mínimo de 12 %. Pocos días después, tras los ajustes, el BCP lo ubicó por debajo de la mitad de ese mínimo. Calificadoras, inversores y organismos públicos se apoyaron en los mismos números.

No sé si hubo irregularidad contable, y el banco la niega. Lo relevante para seguridad es otra cosa: un control que depende de la información que administra la propia entidad no es independiente. El gasto en tecnología es un buen ejemplo, porque es intangible y difícil de verificar. Una verificación independiente de existencia, uso y vida útil de los activos tecnológicos capitalizados es trabajo de auditoría de TI, no de contabilidad.

### 2. El adversario con más privilegios a veces es el dueño

Nuestros modelos de amenaza suelen suponer un atacante externo o un empleado desleal. Los hechos denunciados apuntan a un control que habría sido eludido desde arriba: según la prensa, el límite de partes vinculadas se definía por propiedad legal y se habría esquivado poniendo las empresas a nombre de empleados. La defensa es técnica: grafos de beneficiarios finales cruzados con el monitoreo transaccional (las mismas herramientas de AML), segregación de funciones, un canal de denuncias independiente y registros críticos con copia fuera del control de la gerencia.

### 3. El incidente fue la indisponibilidad total

En ciberseguridad se realiza la planificación de eventos de ransomware y fallos de un proveedor. Pocas entidades planifican el escenario de resolución con la misma severidad, y es equivalente para el cliente: sin aplicación, sin tarjeta, sin transferencias. Unos 32.000 jubilados cobraban por este banco. Según el Fondo de Garantía, hacia el 9 de noviembre se habían pagado unos USD 335 millones a cerca de 1,7 millones de depositantes. La velocidad de esa devolución depende de cuán rápido se obtiene una vista única y confiable del cliente. Mi propuesta es tratarla como requisito de diseño: libro mayor exportable al garante, nómina y alias portables (el BCP liberó los alias de Ueno en el sistema de pagos instantáneos) y ejercicios periódicos. El BCP también atribuyó intermitencias en aplicaciones de otras entidades a una demanda inusual por la apertura masiva de cuentas: una corrida es además una prueba de carga para todo el sistema.

### 4. La confianza se mueve a velocidad digital

El mismo análisis sostiene que las filtraciones agravaron la presión de liquidez. En un banco digital el dinero sale a velocidad de aplicación y vuelve a velocidad legal. Esto vuelve activos a proteger la información confidencial del supervisor y de la entidad (clasificación, necesidad de saber, control de fugas), y vuelve necesario el monitoreo en tiempo real de salidas y concentración de depósitos con umbrales de escalamiento. Un dato lateral: en agosto de 2025 se reportó una filtración de datos de clientes de Ueno ofrecidos en la web oscura, y una diputada clienta criticó que no se les avisara. No hay evidencia pública de que se relacione con la crisis actual; ilustra que la confianza se erosiona por varios flancos a la vez y que notificar al cliente importa.

### 5. La etiqueta no es el control

El informe de la OEA que comenté en [la nota anterior](/portfolio/oea-banca-blockchain-apuntes/) lo dice con sus palabras: el estatus regulatorio «por sí solo no garantiza un programa de cumplimiento eficaz» (p. 61) y «los resultados que experimentan los usuarios dependen mucho más de sus capacidades y prioridades que de las etiquetas» (p. 44). «Neobanco», «banco regulado» o «unicornio en camino» describen un estatus, no una madurez. Un crecimiento muy rápido (licencia bancaria en noviembre de 2023, absorción de otra entidad en 2024, casi tres millones de clientes) exige que los controles escalen más rápido que el negocio, y eso es difícil de ver desde afuera. El informe propone «regular en función de los resultados, no solo de los controles» (p. 118): preguntar si el cliente está realmente más seguro, y no solo si la entidad cumple una lista.

Para Argentina y otros países de la región, la pregunta no es si copiamos a Paraguay. Es si nuestros requisitos de riesgo tecnológico y de seguridad de la información, como los de la Comunicación «A» 8398 para los PSP, cubren además la verificación independiente de los datos reportados, la capacidad de resolución digital y el riesgo de partes vinculadas. No afirmo que no lo hagan; es lo que revisaría. La comparación regional ayuda a ubicar la pregunta. En Brasil, las instituciones de pago deben tener una política de seguridad cibernética desde la Resolución BCB 85/2021 (la de los bancos es la Resolución CMN 4.893/2021), y en diciembre de 2025 el Banco Central la reformó con la Resolución BCB 448, que sumó pruebas de intrusión anuales hechas por un tercero independiente y el aislamiento de los entornos Pix y STR, con plazo de adecuación hasta el 1 de marzo de 2026.[^9] En México, las disposiciones de la CNBV para las instituciones de tecnología financiera (DOF, 10 de septiembre de 2018) dedican capítulos a la seguridad de la información, los canales electrónicos y los servicios de terceros.[^10] En Colombia, la Superintendencia Financiera fijó requisitos mínimos de gestión del riesgo de ciberseguridad en su Circular Externa 007 de 2018; asumo que la misma alcanza a las entidades de pagos electrónicos.[^11]

## Ética profesional: a quién responde el CISO

Nada de lo que se sabe públicamente indica qué vieron, qué advirtieron o qué les pidieron firmar a los responsables de seguridad de Ueno, y no me corresponde especularlo. Pero el caso obliga a hacerse una pregunta que la profesión suele eludir: cuando la información que sostiene la confianza de millones de clientes puede estar distorsionada, ¿a quién le debe lealtad primero un CISO?

La respuesta formal está escrita. El código de ética de ISC2 pone como primer canón proteger a la sociedad, el bien común, la confianza pública necesaria y la infraestructura, y recién en el tercero habla del servicio diligente a los mandantes.[^12] El código de ISACA pide informar a las partes apropiadas los hechos significativos que, de no revelarse, podrían distorsionar los resultados del trabajo, y a la vez proteger la confidencialidad salvo que la ley exija divulgar.[^13] Como titular de CC y CISM, esos textos me obligan. La tensión entre ambos es real: el CISO le debe lealtad a su empleador y reserva sobre lo que ve, pero esa lealtad tiene un límite cuando el silencio daña al público. Y se agudiza cuando el dueño es parte interesada o, en el peor caso, el adversario. El CISO suele ser contratado, evaluado y removido por quienes controlan la entidad, de modo que el mandante del tercer canón puede ser justamente quien genera el riesgo para la sociedad del primero. Ahí el orden de los cánones importa: el código de ISC2 los ordena por prioridad, y el interés del público va antes que el del mandante.

![¿A quién responde el CISO? Los cánones de ISC2 en orden de prioridad](/research/ueno/etica-es.png)

En la práctica, creo que esa responsabilidad se traduce en cuatro conductas. Primero, el CISO tiene que respaldar con evidencia lo que declara: no certifica un control que no verificó ni informa un indicador que no puede reproducir, porque su firma pasa a ser una de las piezas de confianza que otros usan, incluido el supervisor. Segundo, necesita independencia estructural: acceso directo al directorio o al comité de auditoría y una línea de reporte que no dependa de quien tiene incentivos en el crecimiento. Tercero, debe documentar el disenso: si el negocio decide aceptar un riesgo que él considera inaceptable, esa aceptación queda por escrito y firmada por quien la asume, no por seguridad. Cuarto, tiene que conocer de antemano su ruta de escalamiento, interna primero y externa cuando la ley lo habilite y la gravedad lo justifique, porque nadie decide bien ese camino en medio de la presión. Cuando la fuente del riesgo está en la cima, la ruta interna se agota rápido: quedan el comité de auditoría, los auditores externos, el asesor legal independiente y, en última instancia, el regulador.

Hay un límite que me parece honesto reconocer. Escalar tiene costos personales reales, y las protecciones legales para quien advierte varían entre los países de la región; no las doy por supuestas. Por eso la ética profesional no puede depender solo del coraje individual: también es una tarea de diseño. Los directorios deberían construir las condiciones para que decir la verdad sea el camino de menor costo, y los reguladores deberían preguntarse si sus reglas permiten que el responsable de seguridad hable. Un banco con casi tres millones de clientes, entre ellos unos 32.000 jubilados que cobraban por él, necesita que alguien tenga la obligación y la posibilidad de decir lo que no conviene escuchar. Ese es, en el fondo, el trabajo del CISO.

## Cinco preguntas para el comité de riesgo y el CISO

| # | Pregunta | Responsable |
|---|----------|-------------|
| 1 | ¿Podemos entregar a un regulador o fondo de garantía una vista única del cliente en 24-48 horas? | CISO, Datos y Riesgo |
| 2 | ¿Quién verifica de forma independiente los activos tecnológicos capitalizados? | Auditoría interna y CFO |
| 3 | ¿Los registros críticos y los reportes regulatorios tienen copia fuera del control de la gerencia? | CISO y Auditoría |
| 4 | ¿Monitoreamos salidas y concentración de depósitos en tiempo real, con escalamiento definido? | Tesorería y Riesgo |
| 5 | ¿Probamos un escenario de indisponibilidad total, incluidos pagos de nómina, alias y portabilidad? | Continuidad y CISO |

## Límites de este artículo

- Mis notas están basadas únicamente en fuentes públicas y de prensa, con corte al 11 de noviembre de 2026. Los hechos siguen cambiando y las acusaciones no están probadas.
- No existe evidencia pública de un incidente cibernético. Lo que analizo son fallas de control y de gobierno que tienen consecuencias de seguridad.
- Parte del análisis de integridad contable proviene de una fuente de opinión; la marco como tal en el texto. Mis propuestas son mías, no se desprenden del informe de la OEA ni del BCP.
- Hasta mayo de 2026 me desempeñé como PMO Manager del equipo de Seguridad de la información de Bitso, y fui CISO delegado para Argentina de su PSP local y de su VASP registrada ante la CNV. Trabajé, por lo tanto, en el sector que comento.

## Notas

## Fuentes

- [Todos los comunicados del BCP sobre Ueno Bank](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/), ABC Color, 4 de noviembre de 2026.
- [¿Qué pasó con el dinero de Ueno Bank en Paraguay y cuánto falta recuperar?](https://www.nacion.com/el-explicador/que-paso-con-el-dinero-de-ueno-bank-en-paraguay-y/WB25U5K4TFARDGNDGNKPY3IKAU/story/), La Nación (Costa Rica).
- Baker, A., [Ueno Bank Collapse: How Did Every Line of Defence Miss It?](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/), 4 de noviembre de 2026 (análisis de opinión).
- [Ueno Bank: las claves detrás del colapso](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros), iProUP.
- [Ueno: de querer ser el primer unicornio paraguayo a una crisis bancaria](https://www.forbesargentina.com/negocios/ueno-como-paso-querer-ser-primer-unicornio-paraguayo-sacudir-pais-una-crisis-bancaria-n101802), Forbes Argentina.
- [Open Letter to the Public](https://www.ueno.com.py/?p=15561), ueno bank, 20 de agosto de 2026.
- [Filtración de datos de ueno: diputada denuncia vulneración de derechos](https://dplnews.com/?p=285546), DPL News, agosto de 2025.
- OEA/CICTE, *De la banca al blockchain: ciberseguridad para las personas en el ecosistema financiero de las Américas*, 2026 (ISBN 978-0-8270-8265-6); páginas de la edición en español.
- Banco Central de la República Argentina, [Comunicación «A» 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf), 5 de febrero de 2026.

[^1]: Banco Central del Paraguay, comunicados sobre Ueno Bank del 3 al 5 de noviembre de 2026, según la [compilación de ABC Color](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/): resolución del directorio por unanimidad con base en la Ley 2.334/03, solvencia por debajo del 50 % del mínimo legal, cobertura del Fondo de Garantía (hasta 75 salarios mínimos, G. 228.300.000), anticipos de hasta 40 salarios mínimos y exclusión de las personas vinculadas a la entidad.

[^2]: Comunicado del BCP «emitido esta madrugada» del 3 de noviembre de 2026, según [Diario HOY](https://www.hoy.com.py/nacionales/2026/11/03/bcp-constata-insuficiencia-en-solvencia-de-ueno-y-ordena-intervencion); conferencia de prensa y anuncio de la designación de agentes por la Superintendencia de Bancos, según [ABC Color](https://www.abc.com.py/economia/2026/11/03/ueno-bank-bcp-explica-la-resolucion-y-que-va-a-pasar-ahora/). La sesión del directorio del 2 de noviembre figura en [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) y en el [análisis de Baker](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/). La fecha de la designación formal de los interventores no figura en las fuentes consultadas.

[^3]: [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros), 6 de noviembre de 2026.

[^4]: Superintendencia de Valores, Circular SV.SG N.° 020/2026 y Resolución SV.SG N.° 0015/2026, citadas en la [compilación de ABC Color](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/).

[^5]: [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) y [Contexto Tucumán](https://www.contextotucuman.com/nota/427610/ueno-bank-las-10-claves-para-entender-que-paso-con-el-banco-que-dejo-a-casi-3-millones-de-clientes-sin-sus-ahorros.html): ambos presentan estos hechos como alegados, sin condena ni resolución judicial.

[^6]: Informado por AP según [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) y [Contexto Tucumán](https://www.contextotucuman.com/nota/427610/ueno-bank-las-10-claves-para-entender-que-paso-con-el-banco-que-dejo-a-casi-3-millones-de-clientes-sin-sus-ahorros.html).

[^7]: ueno bank, [Open Letter to the Public](https://www.ueno.com.py/?p=15561), 20 de agosto de 2026.

[^8]: Baker, A., [Ueno Bank Collapse: How Did Every Line of Defence Miss It?](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/), 4 de noviembre de 2026 (análisis de opinión): revisión del BCP iniciada el 5 de junio de 2026.

[^9]: Banco Central do Brasil, [Resolução BCB n.º 448, de 18/12/2025](https://www.legisweb.com.br/legislacao/?id=488304) (publicada en el DOU el 22/12/2025; modifica la [Resolução BCB 85/2021](https://www.legisweb.com.br/legislacao/?id=412501)); y [Voto CMN 88/2025](https://normativos.bcb.gov.br/Votos/CMN/202588/Voto_do_CMN_88_2025.pdf), que propone la modificación equivalente de la [Resolução CMN 4.893/2021](https://www.ancord.org.br/wp-content/uploads/2021/03/Resolucao-CMN-n-4.893-de-26_2_2021.pdf) para los bancos (el número de la resolución del CMN no figura en el voto).

[^10]: CNBV, [Disposiciones de carácter general aplicables a las Instituciones de Tecnología Financiera](https://www.cnbv.gob.mx/Normatividad/Disposiciones%20de%20car%C3%A1cter%20general%20aplicables%20a%20las%20instituciones%20de%20tecnolog%C3%ADa%20financiera.pdf) (DOF, 10 de septiembre de 2018); capítulos VI a VIII según el [texto del DOF](https://sidof.segob.gob.mx/notas/docFuente/5555030) que consulté, a verificar contra la versión vigente.

[^11]: Superintendencia Financiera de Colombia, [Circular Externa 007 de 2018](https://www.ambitojuridico.com/sites/default/files/BancoMedios/Archivos/circexterna-007-18%28superfinanciera%29.pdf); no verifiqué su vigencia actual.

[^12]: ISC2, [Code of Ethics](https://www.isc2.org/ethics): "Protect society, the common good, necessary public trust and confidence, and the infrastructure" (canon 1); "Provide diligent and competent service to principals" (canon 3).

[^13]: ISACA, [Code of Professional Ethics](https://isaca.org/code-of-professional-ethics), puntos 4 (confidencialidad, salvo que la ley exija divulgar) y 6 (informar a las partes apropiadas los hechos significativos); descripción en español no literal.
