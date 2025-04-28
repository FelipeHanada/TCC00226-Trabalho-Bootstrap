// Inicializa o ScrollSpy
document.addEventListener('DOMContentLoaded', function () {
    const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
    if (scrollSpyElement) {
        bootstrap.ScrollSpy.getOrCreateInstance(scrollSpyElement, {
            target: '#article-nav',
            offset: 64 // Ajuste o valor conforme necessário
        });
    }
});