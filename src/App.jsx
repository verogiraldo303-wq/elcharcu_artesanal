import React, { useEffect, useRef, useState } from 'react';

const WA = 'https://wa.me/573000000000';

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

const images = {
  hero: img('1541529086526-db283c563270', 1200),
  course1: img('1514986888952-8cd320577b68'),
  course2: img('1528607929212-2636ec44253e'),
  course3: img('1556910103-1c02745aae4d'),
  about: img('1600565193348-f74bd3c7ccdf', 1100),
};

const courses = [
  { img: images.course1, meta: 'Curso fundacional', title: 'Fundamentos del Curado', desc: 'La base del oficio: sal, tiempo y control.' },
  { img: images.course2, meta: 'Nivel intermedio', title: 'Embutidos & Chorizos', desc: 'Formulación, molienda y embutido a mano.' },
  { img: images.course3, meta: 'Masterclass', title: 'Jamones Madurados', desc: 'Curado en seco adaptado al trópico.' },
];

const recipes = [
  { id: '1607098665874-fd193397547b', t: 'Tabla de Charcutería', k: 'Para compartir' },
  { id: '1558030006-450675393462', t: 'Lomo Curado', k: 'Curado lento' },
  { id: '1544025162-d76694265947', t: 'Cortes Madurados', k: 'Técnica europea' },
  { id: '1476224203421-9ac39bcb3327', t: 'Crostini de Jamón', k: 'Entrada rápida' },
  { id: '1555939594-58d7cb561ad1', t: 'Chorizo Ahumado', k: 'Ahumado en frío' },
];

const features = [
  { n: '01', t: 'Recetas Premium', d: 'Probadas, medidas, replicables.' },
  { n: '02', t: 'Adaptado al Trópico', d: 'Humedad y calor bajo control.' },
  { n: '03', t: 'Cursos Paso a Paso', d: 'Del principio al producto final.' },
  { n: '04', t: 'Técnicas Tradicionales', d: 'El oficio, sin atajos.' },
];

const steps = [
  { n: '1', t: 'Selecciona la carne', d: 'Cortes y grasa en su punto.' },
  { n: '2', t: 'Prepara la mezcla', d: 'Sal, especias y cultivos.' },
  { n: '3', t: 'Embute y cura', d: 'Tiempo, humedad, paciencia.' },
  { n: '4', t: 'Disfruta', d: 'De la tabla al paladar.' },
];

const ig = ['1466637574441-749b8f19452f', '1514986888952-8cd320577b68', '1607098665874-fd193397547b', '1558030006-450675393462', '1590846406792-0adc7f938f1d', '1528607929212-2636ec44253e'];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }),
      { threshold: 0.14 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const track = useRef(null);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  const slide = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * 364, behavior: 'smooth' });
  };

  const nav = [
    ['#courses', 'Courses'],
    ['#recipes', 'Free Recipes'],
    ['#process', 'Academy'],
    ['#about', 'About'],
  ];

  return (
    <div>
      {/* HEADER */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container bar">
          <a href="#top" className="brand" onClick={() => setNavOpen(false)}>El Charcu<b>.</b></a>
          <nav className="nav">
            {nav.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
          </nav>
          <div className="header-actions">
            <a href="#top" className="login">Login</a>
            <a href="#courses" className="btn btn--primary btn--sm">View Courses</a>
            <button className="burger" aria-label="Menú" onClick={() => setNavOpen((v) => !v)}><span></span><span></span><span></span></button>
          </div>
        </div>
        <div className="mobile-nav">
          {nav.map(([h, l]) => <a key={h} href={h} onClick={() => setNavOpen(false)}>{l}</a>)}
          <a href="#top" onClick={() => setNavOpen(false)}>Login</a>
          <a href="#courses" className="btn btn--primary" onClick={() => setNavOpen(false)}>View Courses</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <div className="eyebrow hero-eyebrow reveal">Academia de Charcutería</div>
              <h1 className="display reveal d1">El Charcu<br />Artesanal</h1>
              <p className="hero-sub reveal d2">Aprende charcutería artesanal adaptada a los climas tropicales.</p>
              <p className="phrase reveal d2">Sin Aditivos · Sin Atajos</p>
              <div className="hero-cta reveal d3">
                <a href="#courses" className="btn btn--primary">View Courses</a>
                <a href="#recipes" className="btn btn--ghost">Free Recipes</a>
              </div>
            </div>
            <div className="hero-photo reveal d2">
              <img src={images.hero} alt="Charcutería artesanal sobre madera rústica" />
              <div className="hero-badge">
                <div className="n">+2.000</div>
                <div className="t">estudiantes formados en el oficio</div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section philosophy">
          <div className="container">
            <div className="inner reveal">
              <div className="eyebrow">Filosofía</div>
              <h2 className="h2">No creemos en los atajos.</h2>
              <p>Curar es dejar que el tiempo trabaje. Enseñamos técnicas reales y recetas probadas para que cada pieza salga honesta, sin aditivos y con carácter propio.</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section--tight">
          <div className="container">
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={f.n} className={`feature reveal d${(i % 3) + 1}`}>
                  <div className="fn">{f.n}</div>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="section" id="courses">
          <div className="container">
            <div className="sec-head">
              <div>
                <div className="eyebrow reveal">Cursos destacados</div>
                <h2 className="h2 reveal d1">Aprende de quienes<br />viven el oficio</h2>
              </div>
              <a href="#courses" className="btn btn--ghost reveal d2">Ver todos los cursos</a>
            </div>
            <div className="courses-grid">
              {courses.map((c, i) => (
                <article key={c.title} className={`course reveal d${i + 1}`}>
                  <div className="ph"><img src={c.img} alt={c.title} /></div>
                  <div className="body">
                    <div className="meta">{c.meta}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <a href="#courses" className="btn btn--primary btn--sm">Ver curso</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FREE RECIPES */}
        <section className="section--tight recipes" id="recipes">
          <div className="container">
            <div className="sec-head">
              <div>
                <div className="eyebrow reveal">Recetas gratis</div>
                <h2 className="h2 reveal d1">Empieza por la mesa</h2>
              </div>
              <div className="carousel-nav reveal d2">
                <button aria-label="Anterior" onClick={() => slide(-1)}>&larr;</button>
                <button aria-label="Siguiente" onClick={() => slide(1)}>&rarr;</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="recipes-track" ref={track}>
              {recipes.map((r) => (
                <a key={r.t} href={`${WA}?text=Hola!%20Quiero%20la%20receta%20de%20${encodeURIComponent(r.t)}`} target="_blank" rel="noopener noreferrer" className="recipe">
                  <div className="ph"><img src={img(r.id)} alt={r.t} /></div>
                  <div className="rt">{r.t}</div>
                  <div className="rk">{r.k}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING PROCESS */}
        <section className="section process" id="process">
          <div className="container center">
            <div className="eyebrow reveal">El proceso</div>
            <h2 className="h2 reveal d1" style={{ margin: '16px auto 0', maxWidth: '16ch' }}>Del corte al producto final</h2>
            <div className="steps">
              {steps.map((s, i) => (
                <div key={s.n} className={`step reveal d${(i % 3) + 1}`}>
                  <div className="num">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container about-grid">
            <div className="about-photo reveal"><img src={images.about} alt="Artesano de El Charcu trabajando" /></div>
            <div className="about-text reveal d1">
              <div className="eyebrow">Nuestra historia</div>
              <h2 className="h2">El oficio, hecho academia</h2>
              <p>El Charcu nació en Manizales para enseñar lo que la industria esconde: cómo curar bien, sin químicos y con paciencia, incluso en el calor del trópico.</p>
              <p>Recetas probadas, técnica real y comunidad. Así formamos a la próxima generación de charcuteros.</p>
              <a href="#courses" className="btn btn--primary">Conoce la academia</a>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="section--tight testimonial">
          <div className="container">
            <div className="inner reveal">
              <div className="mark">&ldquo;</div>
              <blockquote>Pensé que el curado era imposible en clima cálido. El Charcu me demostró lo contrario: hoy vendo mis propios embutidos.</blockquote>
              <cite><b>Andrés Villa</b><span>Estudiante · Cali, Colombia</span></cite>
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="section--tight">
          <div className="container">
            <div className="ig-head reveal">
              <div className="eyebrow">Síguenos</div>
              <div className="ig-handle">@elcharcu.artesanal</div>
            </div>
            <div className="ig-grid reveal d1">
              {ig.map((id, i) => (
                <a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={img(id, 500)} alt="El Charcu en Instagram" loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final">
          <div className="container">
            <div className="eyebrow reveal">Empieza hoy</div>
            <h2 className="reveal d1" style={{ marginTop: 18 }}>Convierte carne común en productos extraordinarios.</h2>
            <a href="#courses" className="btn btn--primary reveal d2">View Courses</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand">El Charcu<b>.</b></div>
              <p className="tag">Academia de charcutería artesanal adaptada al trópico. Sin aditivos, sin atajos.</p>
            </div>
            <div className="footer-col">
              <h5>Academia</h5>
              <a href="#courses">Cursos</a>
              <a href="#recipes">Recetas gratis</a>
              <a href="#process">Proceso</a>
              <a href="#about">Sobre nosotros</a>
            </div>
            <div className="footer-col">
              <h5>Síguenos</h5>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="footer-col newsletter">
              <h5>Newsletter</h5>
              <p>Recetas y técnicas, una vez al mes. Sin spam.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Tu correo" aria-label="Correo" required />
                <button type="submit">Unirme</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} El Charcu Artesanal · Manizales, Colombia</span>
            <span>Sin aditivos · Sin atajos</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
