import { useEffect } from 'react'
import {
  Camera,
  Clock,
  Coffee,
  Gift,
  MapPin,
  MessageCircle,
  PackageCheck,
  ParkingCircle,
  Recycle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wifi,
} from 'lucide-react'
import asokaLogo from './assets/asoka-logo.png'
import './App.css'

const highlights = [
  {
    title: 'Camilan khas',
    detail: 'Keripik, jajanan tradisional, dan snack lokal untuk buah tangan keluarga.',
    icon: ShoppingBag,
  },
  {
    title: 'Minuman tradisional',
    detail: 'Pilihan teh, kopi, dan wedangan untuk dibawa pulang dari Karanganyar.',
    icon: Coffee,
  },
  {
    title: 'Produk kemasan',
    detail: 'Oleh-oleh praktis, rapi, dan mudah dibawa untuk perjalanan jauh.',
    icon: PackageCheck,
  },
]

const souvenirFlow = ['Keripik', 'Teh', 'Kopi', 'Wedangan', 'Snack', 'Kue', 'Buah Tangan']

const facilities = [
  { label: 'Parkir luas', icon: ParkingCircle },
  { label: 'Mushola', icon: Sparkles },
  { label: 'Toilet', icon: ShieldCheck },
  { label: 'Free WiFi', icon: Wifi },
]

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <header className="site-header" aria-label="Navigasi utama">
        <a className="brand" href="#home" aria-label="Asoka beranda">
          <span className="brand-mark">A</span>
          <span className="brand-text">
            <strong>Asoka</strong>
            <small>Oleh-Oleh</small>
          </span>
        </a>
        <nav>
          <a href="#produk">Oleh-Oleh</a>
          <a href="#lokasi">Lokasi</a>
          <a href="http://instagram.com/asoka.oleholeh" target="_blank">
            <Camera size={18} aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <p className="eyebrow">Pusat oleh-oleh khas Karanganyar</p>
          <h1>
            Pulang bawa
            <span> rasa</span>
            Karanganyar.
          </h1>
          <p className="hero-text">
            Asoka adalah tempat singgah untuk mencari oleh-oleh lokal:
            camilan khas, minuman tradisional, dan produk kemasan yang siap
            dibawa untuk keluarga, teman, atau rekan kerja.
          </p>
          <div className="hero-actions" aria-label="Aksi cepat">
            <a className="primary-action" href="https://wa.me/6281232206426" target="_blank">
              <MessageCircle size={19} aria-hidden="true" />
              Hubungi
            </a>
            <a
              className="secondary-action"
              href="https://maps.app.goo.gl/oFQPkVhXcZ7Z8QGN7"
              target="_blank"
            >
              <MapPin size={19} aria-hidden="true" />
              Arahkan
            </a>
          </div>
        </div>

        <div className="hero-brand-stage" aria-hidden="true">
          <figure className="hero-media">
            <img className="hero-brand-logo" src={asokaLogo} alt="" />
          </figure>
          <span className="floating-word word-one">camilan</span>
          <span className="floating-word word-two">lokal</span>
          <span className="floating-word word-three">buah tangan</span>
        </div>

        <div className="hero-stats" aria-label="Ringkasan Asoka">
          <div>
            <strong>09.00</strong>
            <span>Buka</span>
          </div>
          <div>
            <strong>19.00</strong>
            <span>Tutup</span>
          </div>
          <div>
            <strong>3+</strong>
            <span>Kategori</span>
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Kategori oleh-oleh">
        <div className="marquee-track">
          {[...souvenirFlow, ...souvenirFlow].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="intro-strip scroll-reveal" aria-label="Ringkasan toko">
        <div>
          <strong>Pusat oleh-oleh</strong>
          <span>Camilan, minuman, produk lokal</span>
        </div>
        <div>
          <strong>09.00 - 19.00</strong>
          <span>Buka setiap hari</span>
        </div>
        <div>
          <strong>Karan, Gayamdompo</strong>
          <span>Karanganyar, Jawa Tengah</span>
        </div>
      </section>

      <section className="section" id="produk">
        <div className="section-heading section-heading-wide scroll-reveal">
          <div>
            <p className="eyebrow">Pilihan oleh-oleh</p>
            <h2>Satu tempat untuk mencari buah tangan khas Karanganyar.</h2>
          </div>
          <p>
            Dari camilan renyah sampai minuman tradisional, Asoka dirancang
            sebagai titik singgah yang praktis sebelum perjalanan pulang.
          </p>
        </div>

        <div className="product-grid">
          {highlights.map((item, index) => (
            <article className="product-card scroll-reveal" key={item.title}>
              <div className="product-content">
                <item.icon size={24} aria-hidden="true" />
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="lokasi">
        <div className="visit-copy scroll-reveal">
          <p className="eyebrow">Datang langsung</p>
          <h2>Mampir sebentar, pilih oleh-oleh dengan tenang.</h2>
          <p>
            Asoka berada di Karan, Gayamdompo, Karanganyar. Cocok untuk
            wisatawan yang ingin belanja cepat, keluarga yang mencari buah
            tangan, atau rombongan yang butuh pilihan produk lokal.
          </p>
          <a
            className="text-link"
            href="https://maps.app.goo.gl/oFQPkVhXcZ7Z8QGN7"
            target="_blank"
          >
            <MapPin size={18} aria-hidden="true" />
            Buka Google Maps
          </a>
        </div>

        <div className="visit-panel scroll-reveal">
          <div className="info-row">
            <Clock size={20} aria-hidden="true" />
            <div>
              <strong>Jam operasional</strong>
              <span>Setiap hari, 09.00 - 19.00</span>
            </div>
          </div>
          <div className="info-row">
            <MapPin size={20} aria-hidden="true" />
            <div>
              <strong>Alamat</strong>
              <span>Karan, Gayamdompo, Karanganyar Regency, Central Java</span>
            </div>
          </div>
          <div className="facility-grid">
            {facilities.map(({ label, icon: Icon }) => (
              <div className="facility" key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section scroll-reveal">
        <div>
          <p className="eyebrow">Siap mampir?</p>
          <h2>Temukan oleh-oleh Karanganyar di Asoka.</h2>
        </div>
        <div className="cta-actions">
          <a href="https://wa.me/6281232206426" target="_blank">
            <MessageCircle size={19} aria-hidden="true" />
            WhatsApp
          </a>
          <a href="http://instagram.com/asoka.oleholeh" target="_blank">
            <Gift size={19} aria-hidden="true" />
            @asoka.oleholeh
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <Recycle size={16} aria-hidden="true" />
        <span>Asoka Oleh-Oleh Karanganyar</span>
      </footer>
    </main>
  )
}

export default App
