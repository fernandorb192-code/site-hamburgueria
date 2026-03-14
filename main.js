// ========================================
// BURGER HOUSE - JavaScript
// ========================================

// Dados dos produtos
const produtos = [
    // Tradicionais
    {
        id: 1,
        nome: "Classic Burger",
        descricao: "Pão brioche, hambúrguer 180g, alface, tomate, cebola e molho especial",
        preco: 29.90,
        categoria: "tradicionais",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        badge: null
    },
    {
        id: 2,
        nome: "Cheese Burger",
        descricao: "Pão brioche, hambúrguer 180g, queijo cheddar, alface, tomate e molho",
        preco: 32.90,
        categoria: "tradicionais",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80",
        badge: null
    },
    {
        id: 3,
        nome: "Hambúrguer Simples",
        descricao: "Pão, hambúrguer 120g, alface, tomate e maionese",
        preco: 19.90,
        categoria: "tradicionais",
        imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
        badge: "Mais econômico"
    },
    // Especiais
    {
        id: 4,
        nome: "Mega Burger",
        descricao: "Pão brioche, 2 hambúrgueres 180g, bacon, queijo, alface, tomate e onion rings",
        preco: 45.90,
        categoria: "especiais",
        imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
        badge: "Mais vendido"
    },
    {
        id: 5,
        nome: "Bacon Supreme",
        descricao: "Pão brioche, hambúrguer 200g, bacon crocante, queijo, onion rings e molho BBQ",
        preco: 42.90,
        categoria: "especiais",
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
        badge: null
    },
    {
        id: 6,
        nome: "Chicken Burger",
        descricao: "Pão brioche, filé de frango empanado, alface, tomate e maionese temperada",
        preco: 34.90,
        categoria: "especiais",
        imagem: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
        badge: null
    },
    {
        id: 7,
        nome: "Veggie Burger",
        descricao: "Pão integral, hambúrguer vegetariano, alface, tomate, rúcula e molho de iogurte",
        preco: 36.90,
        categoria: "especiais",
        imagem: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
        badge: "Vegano"
    },
    // Acompanhamentos
    {
        id: 8,
        nome: "Batata Frita Média",
        descricao: "Batata frita crocante temperada com sal e ervas",
        preco: 15.90,
        categoria: "acompanhamentos",
        imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
        badge: null
    },
    {
        id: 9,
        nome: "Batata Rústica",
        descricao: "Batata rustica com bacon e queijo ralado",
        preco: 22.90,
        categoria: "acompanhamentos",
        imagem: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&q=80",
        badge: null
    },
    {
        id: 10,
        nome: "Onion Rings",
        descricao: "Anéis de cebola empanados e crocantes",
        preco: 18.90,
        categoria: "acompanhamentos",
        imagem: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80",
        badge: null
    },
    // Bebidas
    {
        id: 11,
        nome: "Refrigerante Lata",
        descricao: "Coca-Cola, Guaraná Antarctica ou Sprite",
        preco: 7.90,
        categoria: "bebidas",
        imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
        badge: null
    },
    {
        id: 12,
        nome: "Milkshake",
        descricao: "Sabores: chocolate, morango, baunilha ou cookies",
        preco: 18.90,
        categoria: "bebidas",
        imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
        badge: null
    },
    {
        id: 13,
        nome: "Suco Natural",
        descricao: "Sabores: laranja, uva, manga ou abacaxi",
        preco: 12.90,
        categoria: "bebidas",
        imagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
        badge: null
    }
];

// Número do WhatsApp
const WHATSAPP_NUMBER = "5511981928286";

// Elementos DOM
const productsGrid = document.getElementById('productsGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const modal = document.getElementById('pedidoModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.modal-overlay');
const pedidoForm = document.getElementById('pedidoForm');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

// Variável para armazenar o produto atual
let produtoAtual = {
    nome: '',
    preco: ''
};

// Carrinho de compras
let carrinho = [];

// ========================================
// Funções do Carrinho
// ========================================
function adicionarAoCarrinho(e) {
    const btn = e.currentTarget;
    const id = parseInt(btn.dataset.id);
    const nome = btn.dataset.product;
    const preco = parseFloat(btn.dataset.price);
    
    // Verificar se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            id: id,
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }
    
    atualizarCarrinhoUI();
    mostrarNotificacao(`${nome} adicionado ao carrinho!`);
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinhoUI();
}

function atualizarQuantidade(id, delta) {
    const item = carrinho.find(item => item.id === id);
    if (item) {
        item.quantidade += delta;
        if (item.quantidade <= 0) {
            removerDoCarrinho(id);
        } else {
            atualizarCarrinhoUI();
        }
    }
}

function getTotalCarrinho() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

function atualizarCarrinhoUI() {
    const cartBtn = document.getElementById('cartBtn');
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartModal = document.getElementById('cartModal');
    
    // Atualizar contador
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    cartCount.textContent = totalItens;
    
    // Atualizar visibility do contador
    if (totalItens > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
    
    // Renderizar itens no modal
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Seu carrinho está vazio</p>';
    } else {
        cartItems.innerHTML = carrinho.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.nome}</h4>
                    <span class="cart-item-price">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-qty-btn" onclick="atualizarQuantidade(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="cart-qty">${item.quantidade}</span>
                    <button class="cart-qty-btn" onclick="atualizarQuantidade(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="cart-remove-btn" onclick="removerDoCarrinho(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Atualizar total
    cartTotal.textContent = `R$ ${getTotalCarrinho().toFixed(2).replace('.', ',')}`;
}

function abrirCarrinho() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharCarrinho() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.className = 'notification';
    notificacao.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${mensagem}</span>
    `;
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notificacao.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notificacao);
        }, 300);
    }, 2500);
}

function finalizarPedidoCarrinho() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Adicione itens ao carrinho primeiro!');
        return;
    }
    
    // Abre o modal de pedido com os itens do carrinho
    const modal = document.getElementById('pedidoModal');
    const cartModal = document.getElementById('cartModal');
    
    // Montar resumo do pedido
    let resumoItens = carrinho.map(item => `${item.quantidade}x ${item.nome}`).join('\n');
    let total = getTotalCarrinho();
    
    document.getElementById('modalProductName').textContent = `${carrinho.length} item(s) no carrinho`;
    document.getElementById('modalProductPrice').textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Armazenar dados do carrinho para usar no formulário
    window.carrinhoAtual = {
        itens: carrinho,
        total: total,
        resumo: resumoItens
    };
    
    cartModal.classList.remove('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========================================
// Renderizar produtos
// ========================================
function renderizarProdutos(categoria = 'todos') {
    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === categoria);
    
    productsGrid.innerHTML = produtosFiltrados.map(produto => `
        <div class="product-card fade-in-up">
            <div class="product-image">
                <img src="${produto.imagem}" alt="${produto.nome}">
                ${produto.badge ? `<span class="product-badge">${produto.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <span class="product-category">${produto.categoria}</span>
                <h3 class="product-title">${produto.nome}</h3>
                <p class="product-description">${produto.descricao}</p>
                <div class="product-footer">
                    <span class="product-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                    <div class="product-actions">
                        <button class="btn-add-cart" data-id="${produto.id}" data-product="${produto.nome}" data-price="${produto.preco}" title="Adicionar ao carrinho">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                        <button class="btn-order" data-product="${produto.nome}" data-price="${produto.preco}">
                            <i class="fab fa-whatsapp"></i>
                            PEDIR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Adicionar event listeners aos botões
    document.querySelectorAll('.btn-order').forEach(btn => {
        btn.addEventListener('click', abrirModalPedido);
    });
    
    // Adicionar event listeners aos botões de carrinho
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', adicionarAoCarrinho);
    });
}

// ========================================
// Filtro de categorias
// ========================================
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderizarProdutos(btn.dataset.category);
    });
});

// ========================================
// Modal de pedido
// ========================================
function abrirModalPedido(e) {
    const btn = e.currentTarget;
    produtoAtual.nome = btn.dataset.product;
    produtoAtual.preco = btn.dataset.price;
    
    document.getElementById('modalProductName').textContent = `Produto: ${produtoAtual.nome}`;
    document.getElementById('modalProductPrice').textContent = `R$ ${parseFloat(produtoAtual.preco).toFixed(2).replace('.', ',')}`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    pedidoForm.reset();
}

modalClose.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', fecharModal);

// Fechar modal com Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        fecharModal();
    }
});

// ========================================
// Enviar pedido via WhatsApp
// ========================================
pedidoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const referencia = document.getElementById('referencia').value;
    const pagamento = document.getElementById('pagamento').value;
    const observacoes = document.getElementById('observacoes').value;
    
    // Verificar se há carrinho
    const temCarrinho = window.carrinhoAtual && window.carrinhoAtual.itens && window.carrinhoAtual.itens.length > 0;
    
    // Montar mensagem
    let mensagem = `🍔 *NOVO PEDIDO - BURGER HOUSE*\n\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    if (temCarrinho) {
        // Pedido do carrinho
        mensagem += `🛒 *ITENS DO PEDIDO:*\n`;
        window.carrinhoAtual.itens.forEach(item => {
            let subtotal = item.preco * item.quantidade;
            mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
        });
        mensagem += `\n💰 *TOTAL:* R$ ${window.carrinhoAtual.total.toFixed(2).replace('.', ',')}\n\n`;
    } else {
        // Pedido direto
        mensagem += `📦 *PRODUTO:* ${produtoAtual.nome}\n`;
        mensagem += `💰 *VALOR:* R$ ${parseFloat(produtoAtual.preco).toFixed(2).replace('.', ',')}\n\n`;
    }
    
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    mensagem += `👤 *DADOS DO CLIENTE*\n`;
    mensagem += `• Nome: ${nome}\n`;
    mensagem += `• Telefone: ${telefone}\n`;
    mensagem += `• Endereço: ${endereco}\n`;
    if (referencia) mensagem += `• Referência: ${referencia}\n`;
    mensagem += `• Pagamento: ${pagamento}\n`;
    if (observacoes) mensagem += `• Observações: ${observacoes}\n\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `*Aguardando confirmação!*`;
    
    // Codificar mensagem para URL
    const mensagemEncoded = encodeURIComponent(mensagem);
    
    // Criar link do WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemEncoded}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar carrinho se foi usado
    if (temCarrinho) {
        carrinho = [];
        window.carrinhoAtual = null;
        atualizarCarrinhoUI();
    }
    
    // Fechar modal
    fecharModal();
});

// ========================================
// Botões de promoção
// ========================================
document.querySelectorAll('.btn-promo').forEach(btn => {
    btn.addEventListener('click', () => {
        produtoAtual.nome = btn.dataset.product;
        produtoAtual.preco = btn.dataset.price;
        
        document.getElementById('modalProductName').textContent = `Produto: ${produtoAtual.nome}`;
        document.getElementById('modalProductPrice').textContent = `R$ ${parseFloat(produtoAtual.preco).toFixed(2).replace('.', ',')}`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// ========================================
// Menu Mobile
// ========================================
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ========================================
// Header scroll effect
// ========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================
// Scroll suave para links internos
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Animação de elementos ao scroll
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos que precisam de animação
document.querySelectorAll('.product-card, .promo-card, .info-card').forEach(el => {
    observer.observe(el);
});

// ========================================
// Formulário de contato
// ========================================
document.getElementById('contatoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const telefone = e.target.telefone.value;
    const mensagem = e.target.mensagem.value;
    
    let texto = `📧 *MENSAGEM DO SITE*\n\n`;
    texto += `• Nome: ${nome}\n`;
    texto += `• E-mail: ${email}\n`;
    if (telefone) texto += `• Telefone: ${telefone}\n`;
    texto += `\n📝 *Mensagem:*\n${mensagem}`;
    
    const mensagemEncoded = encodeURIComponent(texto);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemEncoded}`;
    
    window.open(whatsappUrl, '_blank');
    
    alert('Mensagem enviada com sucesso!');
    e.target.reset();
});

// ========================================
// Carrinho - Event Listeners
// ========================================
document.getElementById('cartBtn').addEventListener('click', abrirCarrinho);
document.getElementById('cartClose').addEventListener('click', fecharCarrinho);
document.querySelector('#cartModal .modal-overlay').addEventListener('click', fecharCarrinho);

// Fechar carrinho com Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const cartModal = document.getElementById('cartModal');
        if (cartModal.classList.contains('active')) {
            fecharCarrinho();
        }
    }
});

// ========================================
// Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    atualizarCarrinhoUI();
});
