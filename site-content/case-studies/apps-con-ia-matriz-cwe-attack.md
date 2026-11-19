---
title: "Apps hechas con IA: debilidades mapeadas a CWE y MITRE ATT&CK®"
summary: "Doce debilidades que aparecen una y otra vez en apps construidas con asistentes de IA, cada una mapeada a su CWE, a las técnicas de MITRE ATT&CK® que usaría un atacante, a cómo detectarla y a cómo corregirla. Una muestra gratuita de la matriz completa."
type: "resource"
status: "As of Nov 18, 2026 · in Spanish"
date: 2026-11-18
translation: "ai-built-apps-attack-matrix"
language: "Spanish"
featured: false
draft: false
---

Los escáneres de vulnerabilidades hablan en CVE: una falla numerada en un producto y una versión concretos. Casi nada de lo que sale mal en una app construida con asistentes de IA recibe un CVE, porque no es una falla en el producto de otro. Es un error de la propia app: una tabla de la base de datos abierta, una contraseña olvidada en el JavaScript, una API sin login.

Los atacantes, y las alertas que los describen, hablan en técnicas. La alerta del FBI de noviembre de 2026 sobre el framework de ataque ARTEX ([FLASH-20261113-001](https://www.ic3.gov/CSA/2026/261113.pdf)) no cita ni un solo CVE; describe las intrusiones en términos de **MITRE ATT&CK®**.

Esta matriz conecta los dos lenguajes con una capa en el medio:

- **CWE** nombra la debilidad, y eso dice qué hay que corregir.
- **ATT&CK** nombra lo que hace un atacante con ella, y eso dice cómo se usa y permite leer una alerta contra la propia app.
- **La verificación y la corrección** convierten las dos cosas en trabajo que un founder le puede pasar a un desarrollador.

ATT&CK por sí solo es poco preciso para apps web. Casi todas las formas de entrar en una app terminan en una misma técnica, Exploit Public-Facing Application (T1190), así que ATT&CK dice cómo se usa una debilidad, no qué cambiar. Por eso está la columna de CWE.

## Muestra: 12 debilidades frecuentes

<!-- Traducción de ai-built-apps-attack-matrix.md (18 nov 2026). Los IDs de CWE y ATT&CK
     están verificados en la versión en inglés; los nombres oficiales quedan en inglés. -->

| Debilidad en apps hechas con IA | CWE | MITRE ATT&CK | ¿La nombra la alerta sobre ARTEX? | Cómo verificarla | Cómo corregirla |
|---|---|---|---|---|---|
| **Contraseña de administrador o clave de API en el JavaScript del cliente** | CWE-798 Use of Hard-coded Credentials | T1552.001 Credentials In Files · T1078 Valid Accounts | Sí | Escanear los bundles de JavaScript ya compilados, no solo el repositorio | Pasar los secretos al servidor; rotar todas las claves expuestas |
| **Secretos en pipelines, artefactos de build o el historial del repositorio** | CWE-540 Inclusion of Sensitive Information in Source Code | T1552.001 Credentials In Files · T1593.003 Code Repositories | Sí | Escaneo de secretos sobre todo el historial, los logs de CI y las imágenes de contenedores | Usar un gestor de secretos; rotar; limpiar el historial |
| **Tablas de la base de datos que se pueden leer o escribir sin login** | CWE-862 Missing Authorization | T1190 Exploit Public-Facing Application · T1530 Data from Cloud Storage | No | Consultar la base con la clave pública (anónima) | Activar la seguridad a nivel de fila; denegar por defecto |
| **Endpoint de API sin autenticación** | CWE-306 Missing Authentication for Critical Function | T1190 Exploit Public-Facing Application | Sí | Llamar a cada endpoint sin sesión | Exigir autenticación en todas las rutas por defecto |
| **Un usuario puede leer los registros de otro (IDOR)** | CWE-639 Authorization Bypass Through User-Controlled Key | T1190 Exploit Public-Facing Application | Sí | Intercambiar IDs de registros entre dos cuentas de prueba | Verificar en el servidor que el registro pertenece al usuario, en cada pedido |
| **Ruta de administración sin control de rol** | CWE-862 Missing Authorization | T1190 Exploit Public-Facing Application · T1078 Valid Accounts | Sí | Entrar como usuario común y llamar a las rutas de administración | Controlar los roles en el servidor, no en la interfaz |
| **Función que descarga una URL que pasa el usuario** | CWE-918 Server-Side Request Forgery | T1190 Exploit Public-Facing Application · T1552.005 Cloud Instance Metadata API | Sí | Enviar direcciones internas y la de metadatos de la nube | Lista de destinos permitidos; bloquear la dirección de metadatos |
| **SQL armado con datos del usuario** | CWE-89 SQL Injection | T1190 Exploit Public-Facing Application | Sí | Revisar las consultas; correr un escáner de inyección | Consultas parametrizadas o un ORM en todo el código |
| **Detalles de errores visibles para usuarios anónimos** | CWE-209 Generation of Error Message Containing Sensitive Information | T1595 Active Scanning | Sí | Provocar errores sin sesión | Errores genéricos en producción; el detalle, solo a los logs |
| **Dependencias vulnerables, o inventadas** | CWE-1395 Dependency on Vulnerable Third-Party Component | T1195.001 Compromise Software Dependencies and Development Tools | No | Escaneo de dependencias; confirmar que cada paquete que agregó el asistente existe y es el correcto | Lockfile; fijar versiones; verificar los nombres antes de instalar |
| **App conectada o proveedor con acceso amplio** | CWE-269 Improper Privilege Management | T1199 Trusted Relationship · T1528 Steal Application Access Token | Sí | Listar permisos OAuth, cuentas de servicio e integraciones | Quitar los accesos que no se usan; mínimo privilegio; rotar tokens |
| **Deploys de preview, sitios de staging o apps compartidas en público por defecto** | CWE-1188 Initialization of a Resource with an Insecure Default | T1595.003 Wordlist Scanning · T1190 Exploit Public-Facing Application | Sí | Inventariar subdominios; revisar la opción de compartir de cada plataforma | Restringir o eliminar; cambiar el valor por defecto |

"¿La nombra la alerta sobre ARTEX?" significa que la alerta incluye esa debilidad, o la mitigación correspondiente, entre las vías de entrada. Dos filas dicen que no a propósito: la alerta no cubre las reglas de acceso abiertas tal como las exponen las apps hechas con IA, y aclara de forma explícita que no menciona paquetes maliciosos en registros públicos.

## La matriz completa incluye

- **Cada debilidad encontrada en la app del cliente,** no una lista genérica: su stack, los valores por defecto de su plataforma, sus integraciones.
- **Mitigaciones de ATT&CK** para cada técnica, para que la lista de correcciones use el mismo lenguaje que los equipos de defensa y los auditores.
- **Controles de cumplimiento:** cada hallazgo mapeado al Anexo A de ISO/IEC 27001:2022, a PCI DSS cuando hay datos de tarjetas en alcance, y a la regulación local que corresponda. Ver [cobertura regulatoria](/regulatory-coverage/) (en inglés).
- **Seguimiento de alertas:** cuando se publica una nueva alerta de un gobierno o de un proveedor, sus técnicas se cruzan con la matriz del cliente, y en pocos días se sabe si lo afecta.
- **Prioridad según exposición:** ordenada por lo que se puede alcanzar desde internet y los datos que toca, no por un puntaje de severidad genérico.

La matriz completa es parte del [control de seguridad y el control mensual de exposición](/portfolio/ai-built-product-security-poc/) (en inglés). Si un producto construido con herramientas de IA maneja pagos o datos personales, [hablemos](/contact/).

## Notas

- Un mapeo es un criterio, no una medición. Una misma debilidad puede servir a varias técnicas; esta muestra lista las más directas.
- CWE y ATT&CK son catálogos públicos y gratuitos. Lo que agrega esta matriz es la selección para apps hechas con IA, las verificaciones y las correcciones.

MITRE ATT&CK® y ATT&CK® son marcas registradas de The MITRE Corporation. CWE™ es una marca de The MITRE Corporation. Los identificadores de técnicas y debilidades se citan conforme a los [términos de uso de ATT&CK](https://attack.mitre.org/resources/legal-and-branding/terms-of-use/) y los [términos de uso de CWE](https://cwe.mitre.org/about/termsofuse.html) de MITRE. Esta página no está afiliada a MITRE ni cuenta con su respaldo.

## Fuentes

- [FBI FLASH-20261113-001: Threat overview of the ARTEX autonomous penetration testing framework](https://www.ic3.gov/CSA/2026/261113.pdf), FBI, 13 de noviembre de 2026
- [Matriz Enterprise de MITRE ATT&CK®](https://attack.mitre.org/matrices/enterprise/), The MITRE Corporation
- [Lista CWE™](https://cwe.mitre.org/), The MITRE Corporation
- [Mapping ATT&CK to CVE for Impact](https://medium.com/mitre-engenuity/cve-mitre-att-ck-to-understand-vulnerability-impact-c40165111bf7), Center for Threat-Informed Defense
