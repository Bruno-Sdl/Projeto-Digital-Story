
import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

const Logo = ({ variant = 'header' }) => {
  const logoSrc = variant === 'footer' ? logoFooter : logoHeader;

  return (
    <img
      src={logoSrc}
      alt="Logo Digital Store"
      className="logo-img"
      width={253}
      height={44}
    />
  );
};

export default Logo;