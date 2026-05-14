import { useState } from 'react'

const navLinks = [
  {
    label: 'Home',
    href: '#home',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    data: {
      title: 'Homepage Overview',
      description: 'This is the main entrance to our demo application, with a quick summary of featured content.',
      info: 'Click on any card to view the full details below.',
      sectionText: 'Welcome to the navigation links demo. Only this Home card is visible when Home is active.'
    }
  },
  {
    label: 'About',
    href: '#about',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    data: {
      title: 'About This App',
      description: 'Learn why this demo exists and how it demonstrates interactive navigation with React.',
      info: 'The About card explains the example purpose and design.',
      sectionText: 'This example shows how to build a simple navigation experience with cards and hide other content when active.'
    }
  },
  {
    label: 'Services',
    href: '#services',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    data: {
      title: 'Services Offered',
      description: 'A sample list of services we might display in a real application.',
      info: 'Use this card to show available features, packages, or support options.',
      sectionText: 'Use the cards above to jump between services and display only the active card content.'
    }
  },
  {
    label: 'Contact',
    href: '#contact',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    data: {
      title: 'Contact Information',
      description: 'Placeholder contact details that would be shown when the Contact card is active.',
      info: 'In a real app this could include phone, email, or a support form link.',
      sectionText: 'React makes building navigation easy and fast, and this Contact card is the only one shown now.'
    }
  }
]

function App() {
  const [active, setActive] = useState(navLinks[0].href)
  const activeLink = navLinks.find((link) => link.href === active) || navLinks[0]

  return (
    <div className="app-shell">
      <header>
        <h1>Navigation Links</h1>
        <p>Click a navigation link to display only that link’s image and details.</p>
        <nav>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={(event) => {
                    event.preventDefault()
                    setActive(link.href)
                    window.location.hash = link.href
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="detail-card">
          <div className="detail-image-wrapper">
            <img src={activeLink.image} alt={`${activeLink.label} illustration`} />
          </div>
          <h2>{activeLink.data.title}</h2>
          <p>{activeLink.data.description}</p>
          <p className="detail-info">{activeLink.data.info}</p>
        </section>

        <section className="page-section" id={activeLink.href.slice(1)}>
          <h2>{activeLink.label}</h2>
          <p>{activeLink.data.sectionText}</p>
        </section>
      </main>
    </div>
  )
}

export default App
