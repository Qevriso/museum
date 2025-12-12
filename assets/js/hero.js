function heroSlider() {
    return {
        current: 0,
        slides: [
            {
                date: '20 мая — 26 июня',
                titleLine1: 'Русская',
                titleLine2: 'матрёшка',
                subtitle: 'Музейный комплекс «Конный двор»',
                img: 'assets/img/matreshka.png'
            },
            {
                date: '1 июля — 15 августа',
                titleLine1: 'Народные',
                titleLine2: 'промыслы',
                subtitle: 'История декоративно-прикладного искусства',
                img: 'assets/img/hero-placeholder.jpg'
            }
        ],
        next() { this.current = (this.current + 1) % this.slides.length; },
        prev() { this.current = (this.current - 1 + this.slides.length) % this.slides.length; }
    }
}
