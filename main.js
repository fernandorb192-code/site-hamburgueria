// ========================================
// SUPER BURGUER - JavaScript
// ========================================

// Dados dos produtos - Cardápio completo
const produtos = [
    // Hambúrgueres
    {
        id: 1,
        nome: "X Bacon Ovo",
        descricao: "Hambúrguer, 100g de queijo, maionese, alface e tomate",
        preco: 15.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        badge: ""
    },
    {
        id: 2,
        nome: "X Bacon",
        descricao: "Hambúrguer, 100g de queijo, maionese, alface e tomate",
        preco: 14.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80",
        badge: ""
    },
    {
        id: 3,
        nome: "Da Casa Bacon",
        descricao: "2 hambúrguer, 100g de queijo, maionese, alface e tomate",
        preco: 20.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
        badge: "Mais vendido"
    },
    {
        id: 4,
        nome: "X Tudo",
        descricao: "Hambúrguer, 100g de queijo, calabresa, ovo, bacon, maionese, alface e tomate",
        preco: 18.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
        badge: "Super completo"
    },
    {
        id: 5,
        nome: "X Egg",
        descricao: "Hambúrguer, 100g de queijo, maionese, alface e tomate",
        preco: 14.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80",
        badge: ""
    },
    {
        id: 6,
        nome: "X Salada",
        descricao: "Hambúrguer, 100g de queijo, maionese, alface e tomate",
        preco: 12.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        badge: ""
    },
    {
        id: 7,
        nome: "X Burguer",
        descricao: "Hambúrguer, 100g de queijo, maionese",
        preco: 11.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
        badge: "Clássico"
    },
    {
        id: 8,
        nome: "X Calabresa",
        descricao: "Hambúrguer, 100g de queijo, maionese, alface e tomate",
        preco: 14.00,
        categoria: "hamburgueres",
        imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
        badge: ""
    },
    
    // Pastéis
    {
        id: 9,
        nome: "Pastelão Calabresa",
        descricao: "Queijo e calabresa",
        preco: 14.00,
        categoria: "pasteis",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        badge: ""
    },
    {
        id: 10,
        nome: "Pastelão de Carne",
        descricao: "Queijo e carne",
        preco: 12.00,
        categoria: "pasteis",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        badge: ""
    },
    {
        id: 11,
        nome: "Pastelão Mixto",
        descricao: "Queijo e presunto",
        preco: 11.00,
        categoria: "pasteis",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        badge: ""
    },
    {
        id: 12,
        nome: "Pastelão Egg",
        descricao: "Queijo, carne e ovo",
        preco: 13.00,
        categoria: "pasteis",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        badge: ""
    },
    {
        id: 13,
        nome: "Pastelão de Bacon",
        descricao: "Queijo, carne e bacon",
        preco: 14.00,
        categoria: "pasteis",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        badge: ""
    },
    {
        id: 14,
        nome: "Pastelão Bacon + Ovo",
        descricao: "Queijo, carne, bacon e ovo",
        preco: 15.00,
        categoria: "pasteis",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        badge: ""
    },
    {
        id: 15,
        nome: "Pastelão Tudo",
        descricao: "Queijo, carne, bacon, ovo e calabresa",
        preco: 18.00,
        categoria: "pasteis",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        badge: ""
    },
    
    // Batata
    {
        id: 16,
        nome: "Batata Frita",
        descricao: "300g de batata frita crocante",
        preco: 10.00,
        categoria: "batata",
        imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
        badge: ""
    },
    
    // Bebidas
    {
        id: 17,
        nome: "Pepsi 1L",
        descricao: "Refrigerante Pepsi 1 litro",
        preco: 7.00,
        categoria: "bebidas",
        imagem: "./pepsi 1l.webp",
        badge: ""
    },
    {
        id: 18,
        nome: "Coca Lata",
        descricao: "Refrigerante Coca-Cola lata 350ml",
        preco: 5.00,
        categoria: "bebidas",
        imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
        badge: ""
    }
];

// Número do WhatsApp
const WHATSAPP_NUMBER = "558892993633";

// Instagram Posts - Posts reais do Instagram
const instagramPosts = [
    {
        id: 1,
        link: "https://www.instagram.com/p/DVKB1-_j9yO/",
        imagem: "https://instagram.com/p/DVKB1-_j9yO/media/?size=l",
        texto: "🍔 Super Burguer",
        likes: ""
    },
    {
        id: 2,
        link: "https://www.instagram.com/p/DVKBiOHD3RR/",
        imagem: "https://instagram.com/p/DVKBiOHD3RR/media/?size=l",
        texto: "🔥 Super Burguer",
        likes: ""
    },
    {
        id: 3,
        link: "https://www.instagram.com/p/DL8Rmk1PTR_/",
        imagem: "https://instagram.com/p/DL8Rmk1PTR_/media/?size=l",
        texto: "🧀 Super Burguer",
        likes: ""
    },
    {
        id: 4,
        link: "https://www.instagram.com/p/DKDXGz3vCq9/",
        imagem: "https://instagram.com/p/DKDXGz3vCq9/media/?size=l",
        texto: "💪 Super Burguer",
        likes: ""
    },
    {
        id: 5,
        link: "https://www.instagram.com/p/DJ-JMtQJvFd/",
        imagem: "https://instagram.com/p/DJ-JMtQJvFd/media/?size=l",
        texto: "🥟 Super Burguer",
        likes: ""
    },
    {
        id: 6,
        link: "https://www.instagram.com/p/DH1pmYjJoLE/",
        imagem: "https://instagram.com/p/DH1pmYjJoLE/media/?size=l",
        texto: "🍟 Super Burguer",
        likes: ""
    }
];

// Elementos DOM
const productsGrid = document.getElementById('productsGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const modal = document.getElementById('pedidoModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.modal-overlay');
const pedidoForm = document.getElementById('pedidoForm');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('navOverlay');
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

function atualizarTotal() {
    const entregaSelecionada = document.querySelector('input[name="delivery"]:checked').value;
    const taxaEntrega = entregaSelecionada === 'entrega' ? 1.00 : 0;
    const total = getTotalCarrinho() + taxaEntrega;
    document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    window.taxaEntrega = taxaEntrega;
    
    // Mostrar/ocultar campos no formulário de pedido quando aberto
    window.tipoEntregaCarrinho = entregaSelecionada === 'entrega' ? 'ENTREGA' : 'RETIRADA';
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
    atualizarTotal();
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
    
    // Verificar tipo de entrega
    const entregaSelecionada = document.querySelector('input[name="delivery"]:checked').value;
    const taxaEntrega = entregaSelecionada === 'entrega' ? 1.00 : 0;
    const tipoEntrega = entregaSelecionada === 'entrega' ? 'ENTREGA' : 'RETIRADA';
    
    // Configurar campos de endereço no modal
    const deliveryFields = document.querySelector('.delivery-fields');
    const enderecoInput = document.getElementById('endereco');
    
    if (entregaSelecionada === 'entrega') {
        deliveryFields.classList.add('show');
        enderecoInput.setAttribute('required', 'required');
    } else {
        deliveryFields.classList.remove('show');
        enderecoInput.removeAttribute('required');
    }
    
    // Montar resumo do pedido
    let resumoItens = carrinho.map(item => `${item.quantidade}x ${item.nome}`).join('\n');
    let total = getTotalCarrinho() + taxaEntrega;
    let taxaTexto = taxaEntrega > 0 ? `\nTaxa de entrega: R$ 1,00` : '';
    
    document.getElementById('modalProductName').textContent = `${carrinho.length} item(s) - ${tipoEntrega}`;
    document.getElementById('modalProductPrice').textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Armazenar dados do carrinho para usar no formulário
    window.carrinhoAtual = {
        itens: carrinho,
        total: total,
        resumo: resumoItens,
        tipoEntrega: tipoEntrega,
        taxaEntrega: taxaEntrega
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
// Renderizar Posts do Instagram
// ========================================
function renderizarInstagramPosts() {
    const instagramGrid = document.getElementById('instagramPosts');
    
    // Embaralhar array para mostrar posts aleatórios
    const postsAleatorios = [...instagramPosts].sort(() => Math.random() - 0.5);
    
    // Pegar apenas 6 posts aleatórios
    const postsParaMostrar = postsAleatorios.slice(0, 6);
    
    instagramGrid.innerHTML = postsParaMostrar.map((post, index) => {
        const isReel = post.link.includes('/reel/');
        return `
        <a href="${post.link}" target="_blank" class="instagram-post fade-in-up" style="animation-delay: ${index * 0.1}s">
            <div class="instagram-post-image">
                <img src="${post.imagem}" alt="Post do Instagram" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'">
                ${isReel ? '<span class="reel-icon"><i class="fas fa-play"></i></span>' : ''}
                <div class="instagram-post-overlay">
                    <span class="instagram-likes">
                        <i class="fas fa-heart"></i> ${post.likes || '♥'}
                    </span>
                </div>
            </div>
        </a>
    `}).join('');
}

// Atualizar posts aleatórios a cada 8 segundos
setInterval(() => {
    renderizarInstagramPosts();
}, 8000);

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
    
    // Verificar se há escolha de entrega no carrinho
    let taxa = 0;
    let tipoEntrega = 'RETIRADA';
    
    // Se o cliente já abriu o carrinho e escolheu entrega, usar essa escolha
    if (window.tipoEntregaCarrinho) {
        tipoEntrega = window.tipoEntregaCarrinho;
        taxa = window.taxaEntrega || 0;
    }
    
    const total = parseFloat(produtoAtual.preco) + taxa;
    document.getElementById('modalProductName').textContent = `Produto: ${produtoAtual.nome}`;
    document.getElementById('modalProductPrice').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Configurar campos de endereço baseado na escolha
    const deliveryFields = document.querySelector('.delivery-fields');
    const enderecoInput = document.getElementById('endereco');
    
    if (tipoEntrega === 'ENTREGA') {
        deliveryFields.classList.add('show');
        enderecoInput.setAttribute('required', 'required');
    } else {
        deliveryFields.classList.remove('show');
        enderecoInput.removeAttribute('required');
    }
    
    // Armazenar tipo de entrega para o pedido
    window.tipoEntregaModal = tipoEntrega;
    window.taxaEntregaModal = taxa;
    
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
// Enviar pedido via WhatsApp - Backup click handler
// ========================================
document.querySelector('#pedidoForm button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const referencia = document.getElementById('referencia').value;
    const pagamento = document.getElementById('pagamento').value;
    const observacoes = document.getElementById('observacoes').value;
    
    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome || !telefone || !endereco || !pagamento) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Verificar se há carrinho
    const temCarrinho = window.carrinhoAtual && window.carrinhoAtual.itens && window.carrinhoAtual.itens.length > 0;
    
    // Montar mensagem
    let mensagem = `🍔 *NOVO PEDIDO - SUPER BURGUER*\n\n`;
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
    alert('Pedido enviado com sucesso!');
});

// ========================================
// Enviar pedido via WhatsApp - Form submit (mantido para compatibilidade)
// ========================================
pedidoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const referencia = document.getElementById('referencia').value;
    const pagamento = document.getElementById('pagamento').value;
    const observacoes = document.getElementById('observacoes').value;
    
    // Verificar se há carrinho
    const temCarrinho = window.carrinhoAtual && window.carrinhoAtual.itens && window.carrinhoAtual.itens.length > 0;
    
    // Verificar tipo de entrega
    let tipoEntrega, taxa;
    if (temCarrinho) {
        tipoEntrega = window.carrinhoAtual.tipoEntrega || 'RETIRADA';
        taxa = window.carrinhoAtual.taxaEntrega || 0;
    } else {
        tipoEntrega = window.tipoEntregaModal || 'RETIRADA';
        taxa = window.taxaEntregaModal || 0;
    }
    
    // Montar mensagem
    let mensagem = `🍔 *NOVO PEDIDO - SUPER BURGUER*\n\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    if (temCarrinho) {
        // Pedido do carrinho
        mensagem += `🛒 *ITENS DO PEDIDO:*\n`;
        window.carrinhoAtual.itens.forEach(item => {
            let subtotal = item.preco * item.quantidade;
            mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
        });
        
        mensagem += `\n🚚 *TIPO:* ${tipoEntrega}`;
        if (taxa > 0) {
            mensagem += ` (+R$ 1,00)`;
        }
        mensagem += `\n💰 *TOTAL:* R$ ${window.carrinhoAtual.total.toFixed(2).replace('.', ',')}\n\n`;
    } else {
        // Pedido direto
        mensagem += `📦 *PRODUTO:* ${produtoAtual.nome}\n`;
        const precoBase = parseFloat(produtoAtual.preco);
        const total = precoBase + taxa;
        
        mensagem += `🚚 *TIPO:* ${tipoEntrega}`;
        if (taxa > 0) {
            mensagem += ` (+R$ 1,00)`;
        }
        mensagem += `\n💰 *VALOR:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    }
    
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    mensagem += `👤 *DADOS DO CLIENTE*\n`;
    mensagem += `• Nome: ${nome}\n`;
    
    if (tipoEntrega === 'ENTREGA') {
        mensagem += `• Endereço: ${endereco}\n`;
        if (referencia) mensagem += `• Referência: ${referencia}\n`;
    }
    
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
// Menu Mobile
// ========================================
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    navOverlay.classList.toggle('active');
});

// Fechar menu ao clicar no overlay
navOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    navOverlay.classList.remove('active');
});

// Fechar menu ao clicar no botão X
const navClose = document.getElementById('navClose');
if (navClose) {
    navClose.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
    });
});

// ========================================
// Header scroll effect
// ========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================
// Carrinho button
// ========================================
document.getElementById('cartBtn').addEventListener('click', abrirCarrinho);
document.getElementById('cartClose').addEventListener('click', fecharCarrinho);

// ========================================
// Animação de scroll
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// ========================================
// Slideshow Instagram
// ========================================
const slideshowImages = [
    './foto1.png.png'
];

let currentSlide = 0;

function initSlideshow() {
    const container = document.querySelector('.slideshow-container');
    if (!container) return;
    
    // Adicionar todas as imagens
    container.innerHTML = slideshowImages.map((src, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}">
            <img src="${src}" alt="Super Burguer">
        </div>
    `).join('');
}

function changeSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

let slideInterval;

// Pausar slideshow ao passar o mouse
const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slideshowContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(changeSlide, 5000);
    });
}

// Iniciar slideshow
if (document.querySelector('.slideshow-container')) {
    initSlideshow();
    slideInterval = setInterval(changeSlide, 5000);
}

// ========================================
// Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    renderizarInstagramPosts();
    
    // Atualizar links do WhatsApp
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
        link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    });
});

// Função global para atualizar quantidade (chamada pelo onclick)
window.atualizarQuantidade = atualizarQuantidade;
window.removerDoCarrinho = removerDoCarrinho;
window.finalizarPedidoCarrinho = finalizarPedidoCarrinho;
window.atualizarTotal = atualizarTotal;

// ========================================
// Função atualizar total do modal de pedido
// ========================================
window.atualizarTotalModal = function() {
    const entregaSelecionada = document.querySelector('input[name="deliveryModal"]:checked').value;
    const taxaEntrega = entregaSelecionada === 'entrega' ? 1.00 : 0;
    const precoBase = parseFloat(produtoAtual.preco);
    const total = precoBase + taxaEntrega;
    document.getElementById('modalProductPrice').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    window.taxaEntregaModal = taxaEntrega;
    window.tipoEntregaModal = entregaSelecionada === 'entrega' ? 'ENTREGA' : 'RETIRADA';
    
    // Mostrar/ocultar campos de endereço
    const deliveryFields = document.querySelector('.delivery-fields');
    const enderecoInput = document.getElementById('endereco');
    const referenciaInput = document.getElementById('referencia');
    
    if (entregaSelecionada === 'entrega') {
        deliveryFields.classList.add('show');
        enderecoInput.setAttribute('required', 'required');
    } else {
        deliveryFields.classList.remove('show');
        enderecoInput.removeAttribute('required');
    }
};

// ========================================
// Função mostrar campos de entrega (carrinho)
// ========================================
window.mostrarCamposEntrega = function() {
    const entregaSelecionada = document.querySelector('input[name="delivery"]:checked').value;
    const taxaEntrega = entregaSelecionada === 'entrega' ? 1.00 : 0;
    const total = getTotalCarrinho() + taxaEntrega;
    document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    window.taxaEntrega = taxaEntrega;
    window.tipoEntregaCarrinho = entregaSelecionada === 'entrega' ? 'ENTREGA' : 'RETIRADA';
};

// ========================================
// Formulário de Contato - WhatsApp
// ========================================
document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = this.nome.value;
    const mensagem = this.mensagem.value;
    
    const texto = `Olá! Meu nome é ${nome}. ${mensagem}`;
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    
    window.open(urlWhatsApp, '_blank');
});
