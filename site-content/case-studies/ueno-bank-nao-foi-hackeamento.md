---
title: "Ueno Bank: não foi um hackeamento, e ainda assim é um caso de cibersegurança"
summary: "O que a resolução do neobanco paraguaio ensina sobre a integridade da informação reportada, donos como adversários, indisponibilidade total e a ética profissional do CISO."
type: "note"
status: "As of Nov 11, 2026 · in Portuguese"
date: 2026-11-11
region: ["Paraguay", "LatAm"]
services: ["Regulatory coverage", "Threat-informed security programs"]
translation: "ueno-bank-no-fue-un-hackeo"
translations: ["ueno-bank-not-a-hack"]
image: "/og-ueno-pt.png"
language: "Portuguese"
featured: false
draft: false
---

*O que a crise do Ueno Bank revela sobre a maturidade da indústria financeira da região? Este artigo foi redigido em 11 de novembro e trata de fatos que seguem em desenvolvimento.*

No último dia 2 de novembro, a diretoria do Banco Central do Paraguai (BCP) decidiu por unanimidade iniciar a resolução do Ueno Bank (o termo técnico da Lei 2.334/03), e a decisão foi comunicada no dia 3. Segundo o BCP, o índice de solvência havia caído abaixo de 50 % do mínimo legal depois de ajustes contábeis.[^1] A instituição tinha quase três milhões de clientes e cerca de USD 2,8 bilhões em depósitos, e o aplicativo, os cartões e as transferências foram suspensos. A crise já tem consequências políticas de primeira ordem no Paraguai.

A crise do neobanco que era a vitrine do país vizinho, e um dos mais importantes da região, não teve a ver com um incidente cibernético. Ainda assim, considero um dos casos mais instrutivos do ano para quem trabalha com segurança financeira: mostra que a perda de disponibilidade, de integridade e de confiança não precisa de um atacante externo. Compartilho aqui minhas anotações a partir desse ângulo.

## Resumo dos acontecimentos

O que consta oficialmente é relativamente pouco e está bem documentado. A diretoria do BCP concluiu em 2 de novembro que o índice de solvência do Ueno, depois de aplicados ajustes contábeis durante o regime de regularização, ficava abaixo da metade do mínimo legal, e por isso iniciou o procedimento de resolução com base na Lei 2.334/03. A decisão foi comunicada na madrugada de terça-feira, 3 de novembro, informando que a Superintendência de Bancos designaria interventores.[^2] A partir daí entrou em operação o Fundo de Garantia de Depósitos, que cobre até 75 salários mínimos por pessoa (G. 228,3 milhões, cerca de USD 38.600) e que, segundo o BCP, alcança aproximadamente 97 % dos depositantes.[^3] Os adiantamentos deveriam começar a ser pagos em até 24 horas, a Superintendência de Valores suspendeu os resgates em certos fundos de investimento ligados ao banco[^4], e as pessoas vinculadas à instituição ficaram fora da cobertura.

Há, além disso, vários fatos que a imprensa e o Ministério Público investigam e que, por ora, não estão provados. Segundo os relatos, o Ueno teria emprestado a empresas ligadas a seus donos acima dos limites legais e, muitas vezes, sem garantias suficientes.[^5] Também teria registrado como ativos despesas correntes, o que teria inflado seu patrimônio até que os inspetores corrigissem os livros.[^5] Segundo a AP, quase USD 39 milhões teriam ido para três empresas relacionadas em um único dia de setembro de 2025.[^6] O banco, por sua vez, já havia rejeitado questionamentos anteriores em carta aberta de 20 de agosto de 2026, na qual defendia o tratamento contábil de seu investimento em tecnologia.[^7]

Restam, por fim, perguntas sem resposta. Ainda não se conhece a causa exata do rombo nem seu valor final, e tampouco está claro até onde foi o papel da supervisão: segundo uma análise publicada em 4 de novembro, o BCP havia iniciado uma revisão em junho e, mesmo assim, os índices que o banco divulgava continuavam mostrando folga meses depois.[^8] Os números variam conforme a fonte, então os trato como ordens de grandeza e não como dados fechados.

## O que este caso ensina do ponto de vista da cibersegurança

![Cinco lições de cibersegurança do caso Ueno Bank](/research/ueno/lecciones-pt.png)

### 1. A integridade do que se reporta é um controle de segurança

Segundo uma análise publicada em 4 de novembro, o índice de capital informado pelo banco foi de 15,01 % em março, 14,5 % em junho e 13,8 % no fim de outubro, contra um mínimo de 12 %. Poucos dias depois, após os ajustes, o BCP o situou abaixo da metade desse mínimo. Agências de classificação, investidores e órgãos públicos se apoiaram nos mesmos números.

Não sei se houve irregularidade contábil, e o banco nega. O relevante para a segurança é outra coisa: um controle que depende da informação administrada pela própria instituição não é independente. O gasto em tecnologia é um bom exemplo, porque é intangível e difícil de verificar. Uma verificação independente da existência, do uso e da vida útil dos ativos tecnológicos capitalizados é trabalho de auditoria de TI, não de contabilidade.

### 2. O adversário com mais privilégios às vezes é o dono

Nossos modelos de ameaça costumam supor um atacante externo ou um funcionário desleal. Os fatos denunciados apontam para um controle que teria sido contornado por cima: segundo a imprensa, o limite de partes relacionadas era definido pela propriedade legal e teria sido driblado colocando as empresas em nome de funcionários. A defesa é técnica: grafos de beneficiários finais cruzados com o monitoramento transacional (as mesmas ferramentas de AML), segregação de funções, um canal de denúncias independente e registros críticos com cópia fora do controle da gerência.

### 3. O incidente foi a indisponibilidade total

Em cibersegurança planejamos eventos de ransomware e falhas de fornecedor. Poucas instituições planejam o cenário de resolução com a mesma severidade, e para o cliente é equivalente: sem aplicativo, sem cartão, sem transferências. Cerca de 32.000 aposentados recebiam por este banco. Segundo o Fundo de Garantia, por volta de 9 de novembro haviam sido pagos cerca de USD 335 milhões a aproximadamente 1,7 milhão de depositantes. A velocidade dessa devolução depende de quão rápido se obtém uma visão única e confiável do cliente. Minha proposta é tratá-la como requisito de projeto: razão contábil exportável ao garantidor, folha de pagamento e aliases portáveis (o BCP liberou os aliases do Ueno no sistema de pagamentos instantâneos) e exercícios periódicos. O BCP também atribuiu intermitências em aplicativos de outras instituições a uma demanda incomum pela abertura em massa de contas: uma corrida é também um teste de carga para todo o sistema.

### 4. A confiança se move à velocidade digital

A mesma análise sustenta que os vazamentos agravaram a pressão de liquidez. Em um banco digital o dinheiro sai à velocidade do aplicativo e volta à velocidade legal. Isso torna a informação confidencial do supervisor e da instituição um ativo a proteger (classificação, necessidade de saber, controle de vazamentos) e exige monitoramento em tempo real de saídas e concentração de depósitos, com limiares de escalonamento. Um dado lateral: em agosto de 2025 foi noticiado um vazamento de dados de clientes do Ueno oferecidos na dark web, e uma deputada cliente criticou que não os avisassem. Não há evidência pública de que se relacione com a crise atual; ilustra que a confiança se erode por vários flancos ao mesmo tempo e que notificar o cliente importa.

### 5. O rótulo não é o controle

O relatório da OEA que comentei na [nota anterior](/portfolio/oea-banca-blockchain-apuntes/) diz com suas palavras: o status regulatório não garante, por si só, um programa de conformidade eficaz (p. 61 da edição em espanhol), e os resultados que os usuários vivenciam dependem muito mais das capacidades e prioridades da plataforma do que de seu rótulo (p. 44; tradução minha). «Neobanco», «banco regulado» ou «unicórnio a caminho» descrevem um status, não uma maturidade. Um crescimento muito rápido (licença bancária em novembro de 2023, absorção de outra instituição em 2024, quase três milhões de clientes) exige que os controles escalem mais rápido que o negócio, e isso é difícil de ver de fora. O relatório propõe regular em função dos resultados, e não só dos controles (p. 118): perguntar se o cliente está realmente mais seguro, e não apenas se a instituição cumpre uma lista.

Para a Argentina e outros países da região, a pergunta não é se copiamos o Paraguai. É se nossos requisitos de risco tecnológico e de segurança da informação, como os da Comunicação «A» 8398 do BCRA para os PSP, cobrem também a verificação independente dos dados reportados, a capacidade de resolução digital e o risco de partes relacionadas. Não afirmo que não cubram; é o que eu revisaria. A comparação regional ajuda a situar a pergunta. No Brasil, as instituições de pagamento devem ter uma política de segurança cibernética desde a Resolução BCB 85/2021 (a dos bancos é a Resolução CMN 4.893/2021), e em dezembro de 2025 o Banco Central a reformou com a Resolução BCB 448, que incluiu testes de intrusão anuais feitos por terceiro independente e o isolamento dos ambientes Pix e STR, com prazo de adequação até 1º de março de 2026.[^9] No México, as disposições da CNBV para as instituições de tecnologia financeira (DOF, 10 de setembro de 2018) dedicam capítulos à segurança da informação, aos canais eletrônicos e aos serviços de terceiros.[^10] Na Colômbia, a Superintendência Financeira fixou requisitos mínimos de gestão do risco de cibersegurança na Circular Externa 007 de 2018; presumo que ela alcance as entidades de pagamentos eletrônicos.[^11]

## Ética profissional: a quem o CISO responde

Nada do que é publicamente sabido indica o que os responsáveis pela segurança do Ueno viram, o que alertaram ou o que lhes pediram para assinar, e não me cabe especular. Mas o caso obriga a uma pergunta que a profissão costuma evitar: quando a informação que sustenta a confiança de milhões de clientes pode estar distorcida, a quem um CISO deve lealdade primeiro?

A resposta formal está escrita. O código de ética da ISC2 coloca como primeiro cânone proteger a sociedade, o bem comum, a confiança pública necessária e a infraestrutura, e só no terceiro fala do serviço diligente aos mandantes.[^12] O código da ISACA pede informar às partes apropriadas os fatos significativos que, se não revelados, poderiam distorcer os resultados do trabalho, e ao mesmo tempo proteger a confidencialidade, salvo quando a lei exigir divulgação.[^13] Como titular das certificações CC e CISM, esses textos me obrigam. A tensão entre ambos é real: o CISO deve lealdade ao empregador e reserva sobre o que vê, mas essa lealdade tem um limite quando o silêncio prejudica o público. E ela se agrava quando o dono é parte interessada ou, no pior caso, o adversário. O CISO costuma ser contratado, avaliado e removido por quem controla a instituição, de modo que o mandante do terceiro cânone pode ser justamente quem gera o risco para a sociedade do primeiro. Aí a ordem dos cânones importa: o código da ISC2 os ordena por prioridade, e o interesse do público vem antes do mandante.

![A quem o CISO responde? Os cânones da ISC2 em ordem de prioridade](/research/ueno/etica-pt.png)

Na prática, creio que essa responsabilidade se traduz em quatro condutas. Primeiro, o CISO precisa respaldar com evidências o que declara: não certifica um controle que não verificou nem informa um indicador que não consegue reproduzir, porque sua assinatura passa a ser uma das peças de confiança que outros usam, inclusive o supervisor. Segundo, precisa de independência estrutural: acesso direto ao conselho ou ao comitê de auditoria e uma linha de reporte que não dependa de quem tem incentivos no crescimento. Terceiro, deve documentar a divergência: se o negócio decide aceitar um risco que ele considera inaceitável, essa aceitação fica por escrito e assinada por quem a assume, não pela segurança. Quarto, precisa conhecer de antemão sua rota de escalonamento, interna primeiro e externa quando a lei permitir e a gravidade justificar, porque ninguém decide bem esse caminho sob pressão. Quando a fonte do risco está no topo, a rota interna se esgota rápido: restam o comitê de auditoria, os auditores externos, o assessor jurídico independente e, em última instância, o regulador.

Há um limite que me parece honesto reconhecer. Escalar tem custos pessoais reais, e as proteções legais a quem alerta variam entre os países da região; não as dou por garantidas. Por isso a ética profissional não pode depender só da coragem individual: também é uma tarefa de projeto. Os conselhos deveriam construir as condições para que dizer a verdade seja o caminho de menor custo, e os reguladores deveriam se perguntar se suas regras permitem que o responsável pela segurança fale. Um banco com quase três milhões de clientes, entre eles cerca de 32.000 aposentados que recebiam por ele, precisa que alguém tenha a obrigação e a possibilidade de dizer o que não convém ouvir. Esse é, no fundo, o trabalho do CISO.

## Cinco perguntas para o comitê de risco e o CISO

| # | Pergunta | Responsável |
|---|----------|-------------|
| 1 | Conseguimos entregar a um regulador ou fundo garantidor uma visão única do cliente em 24-48 horas? | CISO, Dados e Risco |
| 2 | Quem verifica de forma independente os ativos tecnológicos capitalizados? | Auditoria interna e CFO |
| 3 | Os registros críticos e os relatórios regulatórios têm cópia fora do controle da gerência? | CISO e Auditoria |
| 4 | Monitoramos saídas e concentração de depósitos em tempo real, com escalonamento definido? | Tesouraria e Risco |
| 5 | Testamos um cenário de indisponibilidade total, incluindo folha de pagamento, aliases e portabilidade? | Continuidade e CISO |

## Limites deste artigo

- Minhas anotações se baseiam unicamente em fontes públicas e de imprensa, com corte em 11 de novembro de 2026. Os fatos continuam mudando e as acusações não estão provadas.
- Não existe evidência pública de um incidente cibernético. O que analiso são falhas de controle e de governança com consequências de segurança.
- Parte da análise de integridade contábil vem de uma fonte de opinião; marco-a como tal no texto. Minhas propostas são minhas, não decorrem do relatório da OEA nem do BCP.
- Até maio de 2026 atuei como PMO Manager da equipe de Segurança da Informação da Bitso, e fui CISO delegado para a Argentina de seu PSP local e de seu VASP registrado na CNV. Trabalhei, portanto, no setor que comento.

## Fontes

- [Todos os comunicados do BCP sobre o Ueno Bank](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/), ABC Color, 4 de novembro de 2026 (em espanhol).
- [¿Qué pasó con el dinero de Ueno Bank en Paraguay y cuánto falta recuperar?](https://www.nacion.com/el-explicador/que-paso-con-el-dinero-de-ueno-bank-en-paraguay-y/WB25U5K4TFARDGNDGNKPY3IKAU/story/), La Nación (Costa Rica).
- Baker, A., [Ueno Bank Collapse: How Did Every Line of Defence Miss It?](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/), 4 de novembro de 2026 (análise de opinião).
- [Ueno Bank: las claves detrás del colapso](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros), iProUP.
- [Ueno: de querer ser el primer unicornio paraguayo a una crisis bancaria](https://www.forbesargentina.com/negocios/ueno-como-paso-querer-ser-primer-unicornio-paraguayo-sacudir-pais-una-crisis-bancaria-n101802), Forbes Argentina.
- [Open Letter to the Public](https://www.ueno.com.py/?p=15561), ueno bank, 20 de agosto de 2026.
- [Filtración de datos de ueno: diputada denuncia vulneración de derechos](https://dplnews.com/?p=285546), DPL News, agosto de 2025.
- OEA/CICTE, *De la banca al blockchain: ciberseguridad para las personas en el ecosistema financiero de las Américas*, 2026 (ISBN 978-0-8270-8265-6); páginas da edição em espanhol.
- Banco Central de la República Argentina, [Comunicación «A» 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf), 5 de fevereiro de 2026.

[^1]: Banco Central do Paraguai, comunicados sobre o Ueno Bank de 3 a 5 de novembro de 2026, segundo a [compilação da ABC Color](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/): resolução da diretoria por unanimidade com base na Lei 2.334/03, solvência abaixo de 50 % do mínimo legal, cobertura do Fundo de Garantia (até 75 salários mínimos, G. 228.300.000), adiantamentos de até 40 salários mínimos e exclusão das pessoas vinculadas à instituição.

[^2]: Comunicado do BCP «emitido esta madrugada» de 3 de novembro de 2026, segundo o [Diario HOY](https://www.hoy.com.py/nacionales/2026/11/03/bcp-constata-insuficiencia-en-solvencia-de-ueno-y-ordena-intervencion); coletiva de imprensa e anúncio da designação de agentes pela Superintendência de Bancos, segundo a [ABC Color](https://www.abc.com.py/economia/2026/11/03/ueno-bank-bcp-explica-la-resolucion-y-que-va-a-pasar-ahora/). A sessão da diretoria de 2 de novembro consta na [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) e na [análise de Baker](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/). A data da designação formal dos interventores não consta nas fontes consultadas.

[^3]: [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros), 6 de novembro de 2026.

[^4]: Superintendência de Valores, Circular SV.SG n.º 020/2026 e Resolução SV.SG n.º 0015/2026, citadas na [compilação da ABC Color](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/).

[^5]: [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) e [Contexto Tucumán](https://www.contextotucuman.com/nota/427610/ueno-bank-las-10-claves-para-entender-que-paso-con-el-banco-que-dejo-a-casi-3-millones-de-clientes-sin-sus-ahorros.html): ambos apresentam esses fatos como alegados, sem condenação nem decisão judicial.

[^6]: Informado pela AP segundo [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) e [Contexto Tucumán](https://www.contextotucuman.com/nota/427610/ueno-bank-las-10-claves-para-entender-que-paso-con-el-banco-que-dejo-a-casi-3-millones-de-clientes-sin-sus-ahorros.html).

[^7]: ueno bank, [Open Letter to the Public](https://www.ueno.com.py/?p=15561), 20 de agosto de 2026.

[^8]: Baker, A., [Ueno Bank Collapse: How Did Every Line of Defence Miss It?](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/), 4 de novembro de 2026 (análise de opinião): revisão do BCP iniciada em 5 de junho de 2026.

[^9]: Banco Central do Brasil, [Resolução BCB n.º 448, de 18/12/2025](https://www.legisweb.com.br/legislacao/?id=488304) (publicada no DOU em 22/12/2025; altera a [Resolução BCB 85/2021](https://www.legisweb.com.br/legislacao/?id=412501)); e [Voto CMN 88/2025](https://normativos.bcb.gov.br/Votos/CMN/202588/Voto_do_CMN_88_2025.pdf), que propõe a alteração equivalente da [Resolução CMN 4.893/2021](https://www.ancord.org.br/wp-content/uploads/2021/03/Resolucao-CMN-n-4.893-de-26_2_2021.pdf) para os bancos (o número da resolução do CMN não consta no voto).

[^10]: CNBV, [Disposiciones de carácter general aplicables a las Instituciones de Tecnología Financiera](https://www.cnbv.gob.mx/Normatividad/Disposiciones%20de%20car%C3%A1cter%20general%20aplicables%20a%20las%20instituciones%20de%20tecnolog%C3%ADa%20financiera.pdf) (DOF, 10 de setembro de 2018; em espanhol); capítulos VI a VIII segundo o [texto do DOF](https://sidof.segob.gob.mx/notas/docFuente/5555030) que consultei, a verificar contra a versão vigente.

[^11]: Superintendencia Financiera de Colombia, [Circular Externa 007 de 2018](https://www.ambitojuridico.com/sites/default/files/BancoMedios/Archivos/circexterna-007-18%28superfinanciera%29.pdf); não verifiquei sua vigência atual.

[^12]: ISC2, [Code of Ethics](https://www.isc2.org/ethics): "Protect society, the common good, necessary public trust and confidence, and the infrastructure" (canon 1); "Provide diligent and competent service to principals" (canon 3).

[^13]: ISACA, [Code of Professional Ethics](https://isaca.org/code-of-professional-ethics), pontos 4 (confidencialidade, salvo quando a lei exigir divulgação) e 6 (informar às partes apropriadas os fatos significativos); descrição não literal.
