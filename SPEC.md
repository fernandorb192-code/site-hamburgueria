# Especificação do Projeto: Site Hamburgueria

## 1. Visão Geral do Projeto

**Nome do Projeto:** Burger House - Site de Hamburgueria
**Tipo:** Site institucional com catálogo de produtos e pedido via WhatsApp
**Funcionalidade Principal:** Apresentar o cardápio de hambúrgueres e permitir pedidos rápidos via WhatsApp
**Público-alvo:** Clientes que desejam pedir hambúrgueres para entrega ou retirada

---

## 2. Especificação UI/UX

### Estrutura de Layout

**Header (Cabeçalho)**
- Logo da hamburgueria (texto estilizado)
- Navegação: Home | Cardápio | Promoções | Contato
- Botão flutuante do WhatsApp

**Seção Home**
- Banner principal com imagem de destaque
- Título chamativo: "Os Melhores Hambúrgueres da Cidade"
- Subtítulo com chamada para ação
- Botão "Ver Cardápio"

**Seção Cardápio**
- Grid de cards de produtos
- Cada card contém:
  - Imagem do hambúrguer
  - Nome do produto
  - Descrição breve
  - Preço
  - Botão "Pedir no WhatsApp"
- Categorias: Tradicionais, Especiais, Bebidas, Acompanhamentos

**Seção Promoções**
- Destaques de ofertas especiais
- Cards com descontos percentuais
- Imagens atrativas
- Temporizador opcional

**Seção Contato**
- Informações de contato (endereço, telefone, horário)
- Mapa (embed opcional)
- Formulário de contato simples

**Footer (Rodapé)**
- Links rápidos
- Redes sociais
- Copyright

### Design Visual

**Paleta de Cores**
- Primária: `#FF6B35` (Laranja vibrante - appetite)
- Secundária: `#1A1A1A` (Preto profundo)
- Acento: `#FFD93D` (Amarelo dourado)
- Background: `#0D0D0D` (Preto absoluta)
- Texto: `#FFFFFF` (Branco)
- Texto secundário: `#B0B0B0` (Cinza claro)

**Tipografia**
- Títulos: 'Bebas Neue', sans-serif (impactante, moderna)
- Corpo: 'Poppins', sans-serif (limpa, legível)
- Números/Preços: 'Oswald', sans-serif

**Efeitos Visuais**
- Sombras suaves nos cards
- Transições hover suaves (0.3s)
- Animações de entrada (fade-in, slide-up)
- Gradientes sutis nos botões
- Efeito de brilho no hover dos cards

**Responsividade**
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3-4 colunas

---

## 3. Especificação de Funcionalidades

### Funcionalidades Principais

1. **Navegação Suave**
   - Scroll suave entre seções
   - Menu fixo com mudança de cor ao rolar

2. **Catálogo de Produtos**
   - Exibição em grid responsivo
   - Filtro por categoria (opcional)
   - Imagens de alta qualidade

3. **Sistema de Pedido via WhatsApp**
   - Modal/formulário ao clicar em "Pedir no WhatsApp"
   - Campos do formulário:
     - Nome do cliente
     - Telefone para contato
     - Endereço completo
     - Ponto de referência
     - Forma de pagamento (dinheiro, PIX, cartão)
     - Observações (opcional)
   - Ao enviar, monta mensagem automática com:
     - Produto(s) escolhido(s)
     - Dados do cliente
     - Total do pedido
   - Redireciona para WhatsApp com mensagem completa

4. **Animações**
   - Entrada de elementos ao scroll
   - Efeitos hover interativos
   - Loader inicial

5. **Responsividade**
   - Layout adaptável para todos dispositivos
   - Menu mobile hamburger

---

## 4. Stack Tecnológica

- **HTML5** - Semântica e estrutura
- **CSS3** - Estilização avançada (Flexbox, Grid, Variáveis, Animações)
- **JavaScript** - Interatividade e lógica
- Sem frameworks (puro)

---

## 5. Número de WhatsApp para Pedidos

**Número:** +55 11 98192-8286

**Mensagem padrão:**
```
Olá! Gostaria de pedir:
- [NOME DO PRODUTO]
- Preço: R$ [VALOR]

Pode confirmar o pedido?
```

---

## 6. Estrutura de Arquivos

```
SiteExemplo2/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── (imagens dos produtos)
└── SPEC.md
```

---

## 7. Critérios de Sucesso

- [ ] Site carrega sem erros
- [ ] Navegação funciona corretamente
- [ ] Cards de produtos são exibidos
- [ ] Botões de WhatsApp abrem a conversa com mensagem correta
- [ ] Design é responsivo (mobile, tablet, desktop)
- [ ] Animações são suaves
- [ ] Todas as seções estão acessíveis
- [ ] Cores e tipografia estão conforme especificado
