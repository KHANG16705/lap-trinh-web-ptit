import AppLink from '../components/AppLink';
import '@fontsource-variable/manrope';
import './user-home.css';

const asset = (name) => `/home/${name}.svg`;
const values = [
  [
    'imgLeaf',
    '0% Phát thải',
    'Động cơ điện thông minh hoàn toàn không sinh khí thải độc hại, góp phần bảo vệ môi trường đô thị xanh sạch.',
  ],
  [
    'imgVolume2',
    '0% Tiếng ồn',
    'Công nghệ vận hành êm ái mang lại không gian yên tĩnh cho hành khách suốt hành trình.',
  ],
  [
    'imgShieldCheck',
    'Chuẩn dịch vụ 5★',
    'Đội ngũ tài xế chuyên nghiệp cùng tiện ích hiện đại như Wifi miễn phí và cổng sạc USB.',
  ],
];

export default function PublicLandingPage() {
  return (
    <div className="user-home public-home" data-figma-node="102:3">
      <AppLink className="skip-link" href="#public-main">
        Đến nội dung chính
      </AppLink>
      <div className="home-utility">
        <span>
          <img src={asset('imgBus')} alt="" />
          GoBus - Vì tương lai xanh cho mọi người
        </span>
        <span>
          <a href="tel:0522077841">
            <img src={asset('imgPhone')} alt="" />
            Hotline: 0522077841
          </a>
        </span>
      </div>
      <header className="home-header">
        <AppLink className="home-brand" href="/" aria-label="GoBus — Trang chủ">
          <strong className="home-logo">GoBus</strong>
          <span>
            <b>DI CHUYỂN XANH</b>
            <small>GoBus ECO-SYSTEM</small>
          </span>
        </AppLink>
        <nav className="public-home-nav" aria-label="Tài khoản">
          <AppLink className="public-login-link" href="/login">
            Đăng nhập
          </AppLink>
          <AppLink className="home-button" href="/register">
            Đăng ký
          </AppLink>
        </nav>
      </header>
      <main id="public-main" tabIndex={-1}>
        <section className="home-hero public-home-hero" aria-labelledby="home-title">
          <img
            className="home-hero-image"
            src="/home/imgImage2.png"
            alt=""
            fetchPriority="high"
          />
          <div className="home-hero-overlay" />
          <div className="home-hero-copy public-home-copy">
            <span className="home-badge">
              DỊCH VỤ XE BUÝT ĐIỆN ĐẦU TIÊN TẠI VIỆT NAM
            </span>
            <h1 id="home-title">
              Hành Trình Xanh,
              <br />
              <em>Cuộc Sống Số</em>
            </h1>
            <p>
              Trải nghiệm hệ thống giao thông công cộng văn minh, không khí
              thải, không tiếng ồn cùng chất lượng dịch vụ chuẩn 5 sao.
            </p>
            <div className="home-hero-actions public-home-actions">
              <AppLink className="home-button" href="/register">
                Bắt đầu cùng GoBus
              </AppLink>
              <AppLink
                className="home-button home-button-outline"
                href="/login"
              >
                Đăng nhập
              </AppLink>
            </div>
          </div>
        </section>
        <section className="home-values" aria-labelledby="home-values-title">
          <div className="home-values-title">
            <h2 id="home-values-title">Khác Biệt Đến Từ Xe Buýt GoBus</h2>
            <p>
              GoBus không chỉ là phương tiện di chuyển, đó là phong cách sống
              văn minh và trách nhiệm với tương lai xanh của cộng đồng.
            </p>
          </div>
          <div className="home-value-grid">
            {values.map(([icon, title, description]) => (
              <article className="home-value-card" key={icon}>
                <div className="home-value-icon">
                  <img src={asset(icon)} alt="" />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="home-footer public-home-footer">
        <div className="home-footer-columns">
          <div className="home-company">
            <AppLink className="home-brand" href="/" aria-label="GoBus — Trang chủ">
              <strong className="home-logo">GoBus</strong>
              <b>DI CHUYỂN XANH</b>
            </AppLink>
            <p>
              Đồng hành cùng GoBus trên những hành trình xanh, an toàn và thuận
              tiện hơn.
            </p>
          </div>
          <div className="home-footer-links">
            <h3>Bắt đầu</h3>
            <AppLink href="/login">Đăng nhập</AppLink>
            <AppLink href="/register">Tạo tài khoản GoBus</AppLink>
          </div>
          <div className="home-contact">
            <h3>Liên hệ</h3>
            <a href="tel:0522077841">Hotline: 0522077841</a>
          </div>
        </div>
        <div className="home-footer-bottom">
          <p>© 2026 GoBus. Cùng xây dựng tương lai di chuyển xanh.</p>
        </div>
      </footer>
    </div>
  );
}
