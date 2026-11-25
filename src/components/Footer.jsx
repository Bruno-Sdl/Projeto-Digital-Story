import Logo from './Logo';
import InfoSection from './InfoSection';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import './Footer.css';

const Footer = () => {
  const companyLinks = [
    { text: 'Sobre a Loja', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Lista de Desejos', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Meus Pedidos', link: '/my-orders' },
  ];

  const categoryLinks = [
    { text: 'Camisetas', link: '/products?filter=camisetas' },
    { text: 'Calças', link: '/products?filter=calcas' },
    { text: 'Bonés', link: '/products?filter=bones' },
    { text: 'Headphones', link: '/products?filter=headphones' },
    { text: 'Tênis', link: '/products?filter=tenis' },
  ];

  const contactLinks = [
    {
      text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
      link: '/contact',
    },
    { text: '(85) 3051-3411', link: 'tel:+558530513411' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Coluna da marca: Logo branca, descrição e redes sociais */}
        <div className="footer-brand">
          <Logo variant="footer"/>

          <p className="footer-description">
            Sua plataforma completa de moda, calçados e acessórios com entrega
            rápida e atendimento dedicado em todo o Brasil.
          </p>

          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Colunas dinâmicas do componente de informações */}
        <div className="footer-columns">
          <InfoSection informations={companyLinks} title="Informação"/>
          <InfoSection informations={categoryLinks} title="Categorias"/>
          <InfoSection informations={contactLinks} title="Contato"/>
        </div>
      </div>

      {/* Divisor e direitos autorais */}
      <hr className="footer-divider" />
      <p className="footer-copyright">© {currentYear} Digital Store</p>
    </footer>
  );
};

export default Footer;