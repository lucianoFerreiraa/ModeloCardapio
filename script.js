// ============ DADOS DO MENU ============
const menuItems = [
    // LANCHES
    {
        id: 1,
        category: 'lanches',
        name: 'Classic Burger',
        desc: 'Blend bovino 180g, queijo cheddar, alface, tomate e molho da casa no pão brioche.',
        price: 32.90,
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
        badge: 'HOT'
    },
    {
        id: 2,
        category: 'lanches',
        name: 'Bacon Supreme',
        desc: 'Hambúrguer artesanal, bacon crocante, cheddar derretido, cebola caramelizada.',
        price: 38.90,
        img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80',
        badge: 'TOP'
    },
    {
        id: 3,
        category: 'lanches',
        name: 'Chicken Crispy',
        desc: 'Frango empanado crocante, queijo prato, maionese defumada e mix de folhas.',
        price: 29.90,
        img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80'
    },
    {
        id: 4,
        category: 'lanches',
        name: 'Duplo Cheddar',
        desc: 'Dois blends de 120g, queijo cheddar em dobro, picles e molho especial.',
        price: 42.90,
        img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
        badge: 'NOVO'
    },
    {
        id: 5,
        category: 'lanches',
        name: 'Batata Frita Gourmet',
        desc: 'Porção generosa de batata rústica com parmesão, alecrim e molho aioli.',
        price: 24.90,
        img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80'
    },
    {
        id: 6,
        category: 'lanches',
        name: 'Onion Rings',
        desc: 'Anéis de cebola empanados e crocantes, acompanhados de molho barbecue.',
        price: 19.90,
        img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80'
    },
    // BEBIDAS
    {
        id: 7,
        category: 'bebidas',
        name: 'Milkshake Ovomaltine',
        desc: 'Cremoso milkshake de baunilha com pedaços crocantes de ovomaltine.',
        price: 18.90,
        img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
        badge: 'TOP'
    },
    {
        id: 8,
        category: 'bebidas',
        name: 'Coca-Cola Gelada 350ml',
        desc: 'Lata gelada direta do freezer, para acompanhar o seu lanche favorito.',
        price: 7.90,
        img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80'
    },
    {
        id: 9,
        category: 'bebidas',
        name: 'Suco Natural Laranja',
        desc: 'Suco de laranja fresco espremido na hora, sem adição de açúcar.',
        price: 12.90,
        img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80'
    },
    {
        id: 10,
        category: 'bebidas',
        name: 'Limonada Suíça',
        desc: 'Refrescante limonada batida com casca, leite condensado e gelo.',
        price: 14.90,
        img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80',
        badge: 'NOVO'
    },
    {
        id: 11,
        category: 'bebidas',
        name: 'Chopp Artesanal',
        desc: 'Chopp pilsen gelado 300ml, produzido em cervejaria local.',
        price: 16.90,
        img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80'
    },
    {
        id: 12,
        category: 'bebidas',
        name: 'Água com Gás 500ml',
        desc: 'Água mineral com gás bem gelada, perfeita para refrescar.',
        price: 5.90,
        img: 'https://images.unsplash.com/photo-1560847468-5eef330c0be8?w=600&q=80'
    },
    // SOBREMESAS
    {
        id: 13,
        category: 'sobremesas',
        name: 'Brownie com Sorvete',
        desc: 'Brownie de chocolate belga quentinho, servido com sorvete de baunilha.',
        price: 22.90,
        img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
        badge: 'HOT'
    },
    {
        id: 14,
        category: 'sobremesas',
        name: 'Cheesecake de Frutas',
        desc: 'Clássico cheesecake cremoso com calda de frutas vermelhas frescas.',
        price: 19.90,
        img: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&q=80'
    },
    {
        id: 15,
        category: 'sobremesas',
        name: 'Petit Gateau',
        desc: 'Bolinho quente de chocolate com recheio cremoso e bola de sorvete.',
        price: 24.90,
        img: 'https://images.unsplash.com/photo-1617305855058-336d24456869?w=600&q=80',
        badge: 'TOP'
    },
    {
        id: 16,
        category: 'sobremesas',
        name: 'Pudim de Leite',
        desc: 'Tradicional pudim de leite condensado com calda de caramelo dourada.',
        price: 14.90,
        img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80'
    },
    {
        id: 17,
        category: 'sobremesas',
        name: 'Açaí Supreme 500ml',
        desc: 'Açaí cremoso com granola, banana, morango e leite condensado.',
        price: 21.90,
        img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80',
        badge: 'NOVO'
    },
    {
        id: 18,
        category: 'sobremesas',
        name: 'Sundae Chocolate',
        desc: 'Sorvete de baunilha com calda quente de chocolate e amendoim crocante.',
        price: 16.90,
        img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80'
    }
];

// ============ CONFIGURAÇÃO PADRÃO ============
const defaultConfig = {
    brand_name: 'SUA LOGO AQUI!',
    whatsapp_number: '5569992892060',
    hero_title: 'O sabor que você merece, na velocidade que você precisa.',
    hero_subtitle: 'Explore nosso cardápio e faça seu pedido pelo agora WhatsApp.',
    hero_cta: 'FAZER MEU PEDIDO AGORA',
    menu_title: 'Escolha seu favorito',
    menu_subtitle: 'Pratos preparados com ingredientes frescos e muito carinho para você.',
    footer_text: '© 2025 Sua Logo Aqui. Todos os direitos reservados. Feito com ❤️ e muito sabor. | Por Luciano Ferreira - Impulso Digital'
};

// ============ ESTADO ============
let currentCategory = 'lanches';
let cart = [];

// ============ RENDERIZAR MENU ============
function renderMenu(category) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    const items = menuItems.filter(i => i.category === category);
    grid.innerHTML = '';

    items.forEach((item, idx) => {
        let badgeClass = 'price-tag';
        if (item.badge === 'HOT') badgeClass = 'badge-hot';
        if (item.badge === 'NOVO') badgeClass = 'badge-new';

        const badgeHtml = item.badge ? `<span class="absolute top-4 left-4 ${badgeClass} text-white text-xs font-heading font-bold px-3 py-1 rounded-full shadow-lg z-10">${item.badge}</span>` : '';

        const card = document.createElement('div');
        card.className = 'menu-item menu-card bg-white rounded-3xl overflow-hidden shadow-lg';
        card.style.animationDelay = `${idx * 0.08}s`;
        card.innerHTML = `
            <div class="relative overflow-hidden h-52 sm:h-60">
                ${badgeHtml}
                <img src="${item.img}" alt="${item.name}" loading="lazy" class="card-image w-full h-full object-cover" onerror="this.style.background='linear-gradient(135deg,#FF4B2B,#FF7043)';this.alt='Imagem indisponível';">
                <div class="absolute bottom-3 right-3 bg-white rounded-full px-3 py-1.5 shadow-lg">
                    <span class="font-heading font-bold text-[#FF4B2B]">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
            <div class="p-5">
                <h4 class="font-heading font-bold text-xl mb-2" style="color:#212121;">${item.name}</h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-5 min-h-[3rem]">${item.desc}</p>
                <button class="add-btn w-full bg-[#FF4B2B] hover:bg-[#E63E1F] text-white font-heading font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all" data-id="${item.id}">
                    <i data-lucide="plus" style="width:18px;height:18px;"></i> Adicionar ao Pedido
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Vincular botões de adicionar
    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });
    lucide.createIcons();
}

// ============ ABAS ============
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderMenu(currentCategory);
    });
});

// ============ CARRINHO ============
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            ...item,
            qty: 1
        });
    }

    updateCartUI();
    showToast(`${item.name} adicionado!`);

    const count = document.getElementById('cart-count');
    count.classList.remove('cart-pop');
    void count.offsetWidth;
    count.classList.add('cart-pop');
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + i.qty * i.price, 0);

    document.getElementById('cart-count').textContent = totalItems;
    document.getElementById('cart-total').textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

    const itemsWrap = document.getElementById('cart-items');
    const emptyWrap = document.getElementById('cart-empty');
    const footer = document.getElementById('cart-footer');

    if (cart.length === 0) {
        itemsWrap.innerHTML = '';
        emptyWrap.classList.remove('hidden');
        footer.classList.add('hidden');
    } else {
        emptyWrap.classList.add('hidden');
        footer.classList.remove('hidden');
        itemsWrap.innerHTML = cart.map(item => `
            <div class="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                <img src="${item.img}" alt="${item.name}" loading="lazy" class="w-20 h-20 rounded-xl object-cover flex-shrink-0" onerror="this.style.background='#FF4B2B';">
                <div class="flex-1 min-w-0">
                    <h5 class="font-heading font-bold text-sm mb-1 truncate">${item.name}</h5>
                    <div class="text-[#FF4B2B] font-bold text-sm mb-2">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
                    <div class="flex items-center gap-2">
                        <button class="qty-btn w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center" onclick="changeQty(${item.id}, -1)">
                            <i data-lucide="minus" style="width:14px;height:14px;"></i>
                        </button>
                        <span class="font-bold w-6 text-center">${item.qty}</span>
                        <button class="qty-btn w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center" onclick="changeQty(${item.id}, 1)">
                            <i data-lucide="plus" style="width:14px;height:14px;"></i>
                        </button>
                        <button class="ml-auto text-gray-400 hover:text-red-500 text-xs font-semibold" onclick="removeFromCart(${item.id})">Remover</button>
                    </div>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }
}

window.changeQty = changeQty;
window.removeFromCart = removeFromCart;

// ============ TOAST ============
let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 2200);
}

// ============ MODAL DO CARRINHO ============
const cartModal = document.getElementById('cart-modal');
document.getElementById('cart-header-btn').addEventListener('click', () => {
    cartModal.classList.remove('hidden');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartModal.classList.add('hidden');
});
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.add('hidden');
});
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    updateCartUI();
});

// ============ WHATSAPP ============
function getWhatsAppNumber() {
    return (window.elementSdk?.config?.whatsapp_number) || defaultConfig.whatsapp_number;
}

document.getElementById('whatsapp-float').addEventListener('click', () => {
    const num = getWhatsAppNumber();
    let msg;
    if (cart.length === 0) {
        msg = 'Olá, gostaria de fazer um pedido!';
    } else {
        msg = '🍔 *Novo Pedido!*\n\n';
        cart.forEach(item => {
            msg += `• ${item.qty}x ${item.name} - R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}\n`;
        });
        const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
        msg += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\nGostaria de confirmar este pedido!`;
    }
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
});

document.getElementById('send-order').addEventListener('click', () => {
    if (cart.length === 0) return;
    const num = getWhatsAppNumber();
    let msg = '🍔 *Novo Pedido!*\n\n';
    cart.forEach(item => {
        msg += `• ${item.qty}x ${item.name} - R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}\n`;
    });
    const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
    msg += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\nGostaria de confirmar este pedido!`;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
});

// ============ SDK ELEMENT ============
function applyConfig(config) {
    const c = {
        ...defaultConfig,
        ...config
    };
    document.getElementById('brand-name').textContent = c.brand_name;
    document.getElementById('hero-title').textContent = c.hero_title;
    document.getElementById('hero-subtitle').textContent = c.hero_subtitle;
    const cta = document.getElementById('hero-cta');
    cta.childNodes[0].nodeValue = c.hero_cta + ' ';
    document.getElementById('menu-title').textContent = c.menu_title;
    document.getElementById('menu-subtitle').textContent = c.menu_subtitle;
    document.getElementById('footer-text').textContent = c.footer_text;
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange: async (config) => {
            applyConfig(config);
            lucide.createIcons();
        },
        mapToCapabilities: () => ({
            recolorables: [],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => {
            const c = {
                ...defaultConfig,
                ...config
            };
            return new Map([
                ['brand_name', c.brand_name],
                ['whatsapp_number', c.whatsapp_number],
                ['hero_title', c.hero_title],
                ['hero_subtitle', c.hero_subtitle],
                ['hero_cta', c.hero_cta],
                ['menu_title', c.menu_title],
                ['menu_subtitle', c.menu_subtitle],
                ['footer_text', c.footer_text]
            ]);
        }
    });
}

(function() {
    const modal = document.getElementById('impulso-modal-container');
    const closeBtn = document.getElementById('impulso-close-x');

    // 1. Função para fechar
    function hideModal() {
        if (modal) {
            modal.classList.remove('active');
            modal.style.display = 'none';
        }
    }

    // 2. Evento de Clique no Botão de Fechar
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideModal();
        });
    }

    // 3. Lógica de Scroll (50%)
    window.addEventListener('scroll', function() {
        if (!sessionStorage.getItem('impulso_popup_done')) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollPercent = (scrollTop / docHeight) * 100;

            if (scrollPercent >= 50) {
                if (modal) {
                    modal.classList.add('active');
                    sessionStorage.setItem('impulso_popup_done', 'true');
                }
            }
        }
    });
})();

// ============ INICIALIZAÇÃO ============
renderMenu(currentCategory);
updateCartUI();
lucide.createIcons();

// Cloudflare Challenge helper
(function() {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'9f37563b75b078c2',t:'MTc3NzM5MjYyNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }
    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
            var e = document.onreadystatechange || function() {};
            document.onreadystatechange = function(b) {
                e(b);
                'loading' !== document.readyState && (document.onreadystatechange = e, c())
            }
        }
    }
})();