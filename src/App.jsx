import { useMemo, useState } from 'react'
import './App.css'

const ayat = {
  arabic:
    'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ\nلَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ\nلَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ\nمَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ\nيَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ\nوَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ\nوَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ\nوَلَا يَئُودُهُ حِفْظُهُمَا\nوَهُوَ الْعَلِيُّ الْعَظِيمُ',
  transliteration:
    'Allahu la ilaha illa huwa al-Hayyul-Qayyum.\nLa ta’khudhuhu sinatun wa la nawm.\nLahu ma fi as-samawati wa ma fi al-ard.\nMan dhalladhi yashfa’u ‘indahu illa bi-idhnihi.\nYa’lamu ma bayna aydihim wa ma khalfahum.\nWa la yuheetuna bi shay’in min ‘ilmihi illa bima sha’a.\nWasia kursiyyuhus-samawati wal-ard.\nWa la ya’uduhu hifdhuhuma.\nWa huwal-‘Aliyul-‘Azim.',
  translation:
    'Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Seat encompasses the heavens and the earth, and He does not tire with their preservation. And He is the Most High, the Most Great.',
}

const points = [
  'Allah is the only source of protection and guidance.',
  'It reminds us that everything belongs to Allah.',
  'It teaches trust in Allah during times of fear and worry.',
  'Reciting it brings spiritual tranquility and reward.',
]

const practiceSteps = [
  'Read the Arabic text slowly and repeat each phrase.',
  'Memorize the first sentence with correct pronunciation.',
  'Reflect on the meaning of Allah’s power and mercy.',
  'Recite it at the start or end of your day.',
]

function App() {

  const [view, setView] = useState('arabic')
  const [checkedSteps, setCheckedSteps] = useState([true, false, false, false])

  const completedCount = useMemo(
    () => checkedSteps.filter(Boolean).length,
    [checkedSteps],
  )

  const toggleStep = (index) => {
    setCheckedSteps((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? !item : item,
      ),
    )
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">آ</span>
          <div>
            <p className="eyebrow">Daily remembrance</p>
            <h1>Ayatul Kursi</h1>
          </div>
        </div>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#verse">Verse</a>
          <a href="#meaning">Meaning</a>
          <a href="#practice">Practice</a>
        </nav>
      </header>

      <main className="content">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="tag">Surah Al-Baqarah 2:255</p>
            <h2>Learn, reflect, and remember.</h2>
            <p className="lead">
              A short daily practice to strengthen faith, calm the heart, and
              renew understanding of Allah’s greatness.
            </p>
            <div className="cta-row">
              <a href="#verse" className="primary-btn">
                Study the verse
              </a>
              <a href="#practice" className="secondary-btn">
                Start practice
              </a>
            </div>
          </div>

          <div className="hero-stats" aria-label="Learning stats">
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Benefits</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{completedCount}/4</span>
              <span className="stat-label">Checklist</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">5 min</span>
              <span className="stat-label">Daily recite</span>
            </div>
          </div>
        </section>

        <section className="verse-panel" id="verse">
          <div className="section-header">
            <div>
              <p className="eyebrow">The verse</p>
              <h3>Ayatul Kursi</h3>
            </div>
            <div className="toggle-group" aria-label="Choose verse display">
              {
              ['arabic', 'transliteration', 'translation'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={view === option ? 'toggle active' : 'toggle'}
                  onClick={() => setView(option)}
                >
                  {option === 'arabic'
                    ? 'Arabic'
                    : option === 'transliteration'
                      ? 'Transliteration'
                      : 'Meaning'}
                </button>
              ))}
            </div>
          </div>

          <div className="verse-card">
            <p className="verse-label">{view === 'translation' ? 'English meaning' : view === 'transliteration' ? 'Pronunciation guide' : 'Arabic text'}</p>
            <pre>{ayat[view]}</pre>
          </div>
        </section>

        <section className="insight-grid" id="meaning">
          <article className="info-card">
            <p className="eyebrow">Why it matters</p>
            <h3>Key lessons</h3>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="info-card callout-card">
            <p className="eyebrow">Meaning in brief</p>
            <h3>Allah is the Ever-Living</h3>
            <p>
              This verse emphasizes Allah’s ultimate power, knowledge, and care.
              It reminds believers that He alone protects, sustains, and governs
              all creation without ever growing weak or forgetful.
            </p>
          </article>
        </section>

        <section className="practice-panel" id="practice">
          <div className="section-header">
            <div>
              <p className="eyebrow">Daily practice</p>
              <h3>Memorization checklist</h3>
            </div>
            <span className="progress-pill">
              {completedCount}/{practiceSteps.length} complete
            </span>
          </div>

          <div className="checklist" role="list" aria-label="Practice checklist">
            {practiceSteps.map((step, index) => (
              <button
                key={step}
                type="button"
                className={checkedSteps[index] ? 'check-item checked' : 'check-item'}
                onClick={() => toggleStep(index)}
                aria-pressed={checkedSteps[index]}
              >
                <span className="check-mark" aria-hidden="true">
                  {checkedSteps[index] ? '✓' : '○'}
                </span>
                <span>{step}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
