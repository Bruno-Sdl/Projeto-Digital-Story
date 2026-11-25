import { Link } from 'react-router-dom';

const InfoSection = ({ title, informations = [] }) => {
  return (
    <div className="info-section">
      <h3 className="info-section-title">{title}</h3>
      <ul className="info-section-list">
        {informations.map((item, index) => (
          <li key={`${item.text}-${index}`}>
            {item.link.startsWith('http') ? (
              <a
                href={item.link}
                className="info-section-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              <Link to={item.link} className="info-section-link">
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoSection;