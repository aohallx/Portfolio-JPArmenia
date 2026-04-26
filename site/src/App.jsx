import { useEffect, useRef, useState } from 'react'
import homeEnsemble from './assets/images/tuba-ensemble-home.png'
import homeHeadshot from './assets/images/headshot-home.png'
import teachingOne from './assets/images/teaching-1.png'
import teachingTwo from './assets/images/teaching-2.png'
import resumePreviewUpdated from './assets/images/resume-preview-updated.png'
import resumePdf from './assets/resume/john-patrick-armenia-harding-resume.pdf'
import './App.css'

const featuredVideos = [
  {
    id: 'X9x6fbvUX00',
    title: 'Serenade no. 12 (4: Capriccio) - Vincent Persichetti',
    embedUrl: 'https://www.youtube.com/embed/X9x6fbvUX00?rel=0&modestbranding=1&mute=0',
  },
  {
    id: 'VVZKii08CM8',
    title: 'Serenade no. 12 (2: Arietta) - Vincent Persichetti',
    embedUrl: 'https://www.youtube.com/embed/VVZKii08CM8?rel=0&modestbranding=1&mute=0',
  },
  {
    id: 'nbrNRZaOgcU',
    title: 'Featured Tuba Performance',
    embedUrl: 'https://www.youtube.com/embed/nbrNRZaOgcU?rel=0&modestbranding=1&mute=0',
  },
  {
    id: 'kz0F2qNyRP4',
    title: 'Featured Tuba Performance',
    embedUrl: 'https://www.youtube.com/embed/kz0F2qNyRP4?rel=0&modestbranding=1&mute=0',
  },
  {
    id: 'JCV96K0QMAA',
    title: 'Featured Tuba Performance',
    embedUrl: 'https://www.youtube.com/embed/JCV96K0QMAA?rel=0&modestbranding=1&mute=0',
  },
  {
    id: '_7PBgj4dVSE',
    title: 'Featured Tuba Performance',
    embedUrl: 'https://www.youtube.com/embed/_7PBgj4dVSE?rel=0&modestbranding=1&mute=0',
  },
]

function App() {
  const statementRef = useRef(null)
  const [statementVisible, setStatementVisible] = useState(false)

  useEffect(() => {
    const element = statementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatementVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="top-nav">
        <div className="site-shell top-nav-inner">
          <a className="brand" href="#home">
            John Patrick Armenia-Harding
          </a>
          <nav aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#professional-documents">Professional Documents</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="site-shell">
      <main>
        <section id="home" className="hero-section section-block">
          <img
            src={homeEnsemble}
            alt="Tuba section performing on stage"
            className="hero-bg-image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-overlay" />
          <div className="hero-copy hero-centered">
            <h1>John Patrick Armenia-Harding</h1>
            <p className="hero-title-line">Music Educator | Tuba Performer</p>
            <p className="hero-contact">johnparmenia@gmail.com | (631) 605-4275</p>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="bio-layout">
            <div className="bio-prose">
              <p>
                <strong>John Patrick Armenia-Harding</strong> is a senior at Hofstra University
                completing his <em>Bachelor of Science in Music Education</em>, and he is an active
                performer and educator preparing for{' '}
                <strong>New York State Initial Certification in Music, PreK-12</strong>. Through his
                student teaching at Caroline G. Atkinson Intermediate School in Freeport, he has
                prepared 5th and 6th grade students for the{' '}
                <em>NYSSMA Solo Evaluation Festival</em>, planned weekly sectionals, and led
                structured full-band warm-up sequences.
              </p>
              <p>
                In addition to classroom teaching, John has provided private instrumental instruction
                since <strong>2023</strong> for students in grades 4 through 12. His lessons are
                built on clear, sequential pathways aligned with{' '}
                <em>NYSSMA standards</em>, and his
                students have earned frequent <strong>All-County recognition</strong>. He brings the
                same level of consistency and accountability to both individual and ensemble
                instruction.
              </p>
              <p>
                At Hofstra, John has served as Vice President of both the New York State Band
                Director&apos;s Association chapter and the Jazz Education Network chapter. As a
                performer, he has held <strong>principal tuba roles</strong> in university and
                regional ensembles and has been recognized with distinctions including the{' '}
                <em>Steven P. Salzman Tuba Performance Scholarship</em> and{' '}
                <strong>NYSSMA All-State honors</strong>.
              </p>
            </div>
            <div className="bio-image-wrap">
              <img
                src={homeHeadshot}
                alt="John Patrick Armenia-Harding in professional attire"
                className="bio-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="awards-ribbon" aria-label="Awards and honors">
            <div className="awards-ribbon-label">Awards &amp; Honors</div>
            <div className="awards-ribbon-grid">
              <div className="awards-ribbon-item">
                <p className="awards-ribbon-title">Steven P. Salzman Tuba Performance Scholarship</p>
                <p className="awards-ribbon-subtitle">Hofstra University | 2025</p>
              </div>
              <div className="awards-ribbon-item">
                <p className="awards-ribbon-title">NYSSMA All-State Distinction</p>
                <p className="awards-ribbon-subtitle">New York State School Music Association | 2021</p>
              </div>
              <div className="awards-ribbon-item">
                <p className="awards-ribbon-title">Student Leadership Appointments</p>
                <p className="awards-ribbon-subtitle">NYSBDA &amp; Jazz Education Network | Hofstra</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="image-overlay-section">
          <img
            src={teachingTwo}
            alt="John in classroom during instruction"
            className="section-bg-image bw-image"
            loading="lazy"
            decoding="async"
          />
          <div className="section-bg-overlay" />
          <div className="overlay-content overlay-prose">
            <p className="eyebrow">Experience and About</p>
            <h2>Teaching Philosophy in Practice</h2>
            <p>
              <strong>John Patrick Armenia-Harding</strong> is a senior at Hofstra University
              completing his <em>Bachelor of Science in Music Education</em> and preparing for{' '}
              <strong>New York State Initial Certification in Music, PreK-12</strong>. He is an
              active performer and educator whose classroom approach blends high expectations with
              student-centered support. During his student teaching placement at Caroline G. Atkinson
              Intermediate School in Freeport, he prepared 5th and 6th grade band students for the
              {' '}<em className="gold-emphasis">NYSSMA Solo Evaluation Festival</em>, planned weekly
              sectionals, and led
              structured full-ensemble warm-up sequences to strengthen tone, timing, and rehearsal
              discipline.
            </p>
            <p>
              In addition to school placements, John has provided private instrumental instruction
              since <strong>2023</strong> for students in grades 4 through 12. His lessons follow
              clear, progressive pathways aligned with{' '}
              <em>NYSSMA expectations</em> and have supported
              frequent <strong className="gold-emphasis">All-County recognition</strong> among his students. He complements this
              instructional experience with strong leadership at Hofstra, serving as{' '}
              <strong>Vice President</strong> for both the New York State Band Director&apos;s
              Association chapter and the Jazz Education Network chapter.
            </p>
            <p>
              As a performer, John has held <strong>principal tuba roles</strong> in major university
              and regional ensembles, including the Long Island Festival Orchestra, Hofstra Wind
              Ensemble, Symphonic Band, and Brass Ensemble. His musicianship has been recognized
              through honors such as the <em>Steven P. Salzman Tuba Performance Scholarship</em> and{' '}
              <strong className="gold-emphasis">NYSSMA All-State distinction</strong>. Across teaching and performance settings,
              he brings preparation, consistency, and professional maturity that position him as a
              strong candidate for <strong>Long Island music programs</strong>.
            </p>
            <div className="impact-panel" aria-label="Leadership and impact">
              <p className="impact-panel-heading">Leadership and Impact</p>
              <div className="impact-panel-grid">
                <div className="impact-item">
                  <p className="impact-item-title">Chapter Leadership</p>
                  <p className="impact-item-subtitle">Vice President roles in NYSBDA and Jazz Education Network.</p>
                </div>
                <div className="impact-item">
                  <p className="impact-item-title">Ensemble Standards</p>
                  <p className="impact-item-subtitle">Principal tuba appointments across university and regional groups.</p>
                </div>
                <div className="impact-item">
                  <p className="impact-item-title">Student Outcomes</p>
                  <p className="impact-item-subtitle">NYSSMA-aligned instruction supporting All-County recognition.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="professional-documents" className="section-block teaching-docs-section">
          <div className="teaching-docs-wrap">
            <p className="eyebrow">Professional Documents</p>
            <h2>Teaching Philosophy and Professional Recommendation</h2>
            <div className="teaching-docs-grid">
              <article className="teaching-doc-card">
                <h3>Teaching Philosophy</h3>
                <p>
                  My philosophy of education is grounded in the belief that every student is
                  inherently a musician. I strive to create a classroom environment where students
                  feel supported, challenged, and inspired to develop confidence, discipline, and a
                  lifelong appreciation for music.
                </p>
                <p>
                  As a music educator, I emphasize a fundamentals-based approach to instruction.
                  Tone production and rhythmic accuracy form the foundation of successful
                  performance and long-term musicianship. Through structured warm-ups,
                  intentional rehearsal techniques, and individualized feedback, I help students
                  build the technical and musical skills necessary for success.
                </p>
                <p>
                  I am committed to meeting students where they are by providing differentiated
                  instruction that supports learners of all ability levels. Each student brings unique
                  strengths to rehearsal, and it is my responsibility to support every student&apos;s
                  success. Whether in small-group lessons or full ensemble rehearsal, I strive to
                  ensure that all students are actively engaged and making meaningful progress.
                </p>
                <p>
                  A positive and focused classroom is essential to student achievement. I believe in
                  setting clear expectations and building mutual respect so students feel valued and
                  willing to take risks, learn from mistakes, and grow. Building strong relationships
                  with students is central to my teaching, because a sense of belonging is a
                  prerequisite for a successful ensemble.
                </p>
                <p>
                  Music education provides students with skills that extend beyond the classroom.
                  Through ensemble participation, students develop collaboration, responsibility, time
                  management, and perseverance. I aim to help students understand that their
                  individual effort directly contributes to the success of the group.
                </p>
                <p>
                  I am also committed to continuous growth as an educator. I believe in reflecting
                  on my teaching, seeking new information, and refining my approach to better serve
                  students. Through structured, student-centered instruction and a commitment to
                  excellence, my goal is to create a music program where all students can succeed,
                  grow, and develop a lasting connection to music.
                </p>
              </article>
            </div>
            <article className="teaching-doc-card recommendation-bottom">
              <h3>Recommendation</h3>
              <blockquote className="recommendation-quote">
                &ldquo;John is a highly positive, professional, and motivated teacher who I
                believe will be a significant asset to any school&apos;s music program. He is
                well-equipped to handle the challenges inherent in music education. Because of
                this I have no hesitation in recommending John Armenia for the band opening in
                your district.&rdquo;
              </blockquote>
              <p className="recommendation-meta">
                Adam Rubin, Band Director, Caroline G. Atkinson Intermediate School
              </p>
            </article>
          </div>
        </section>

        <section id="resume" className="section-block resume-clean-section">
          <div className="overlay-content resume-overlay-content">
            <p className="eyebrow">Resume</p>
            <h2>Professional Resume</h2>
            <img
              src={resumePreviewUpdated}
              alt="Resume preview for John Patrick Armenia-Harding"
              className="resume-preview-image"
            />
            <a className="btn btn-primary" href={resumePdf} download>
              Download Resume (PDF)
            </a>
          </div>
        </section>

        <section id="videos" className="section-block videos-section">
          <div className="videos-wrap">
            <p className="eyebrow">Featured Performances</p>
            <h2>Selected Repertoire</h2>
            <div className="videos-grid">
              {featuredVideos.map((video) => (
                <article key={video.id} className="video-card">
                  <h3>{video.title}</h3>
                  <div className="video-frame-wrap">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </article>
              ))}
            </div>
            <a
              className="btn btn-primary videos-all-btn"
              href="https://www.youtube.com/@jparmeniatuba/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              All Videos
            </a>
          </div>
        </section>

        <section id="contact" className="image-overlay-section contact-overlay-section">
          <img
            src={teachingOne}
            alt="John leading rehearsal with accompanist and student observers"
            className="section-bg-image contact-bg-image"
            loading="lazy"
            decoding="async"
          />
          <div className="section-bg-overlay" />
          <div className="overlay-content contact-overlay-content">
            <p className="statement-body">
              I strive to build ensembles where discipline, musicianship, and confidence grow
              together for every student.
            </p>
            <p
              ref={statementRef}
              className={`statement-signature ${statementVisible ? 'is-visible' : ''}`}
            >
              John Patrick Armenia-Harding
            </p>
            <h2>Contact</h2>
            <div className="contact-lines">
              <a href="mailto:johnparmenia@gmail.com">johnparmenia@gmail.com</a>
              <a href="tel:+16316054275">(631) 605-4275</a>
              <span>Bohemia, New York</span>
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}

export default App
