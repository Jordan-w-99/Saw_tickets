import { useState } from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ hoverTitle, name, linkRoute }: { hoverTitle: string, name: string, linkRoute: string }): React.JSX.Element => {
    const [active, setActive] = useState<boolean>();

    return (
        <Link to={linkRoute} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} style={{ textDecoration: 'none' }}>
            <div
                title={hoverTitle}
                style={{
                    borderBottom: active ? '4px solid #00999A' : '4px solid rgba(0,0,0,0)',
                    padding: '18px 0px 8px 0px',
                    marginBottom: 3,
                    fontSize: '14px',
                    lineHeight: 1,
                    fontWeight: 500,
                    color: 'black',
                    letterSpacing: 1,
                }}
            >
                {name}
            </div>
        </Link>
    )
}

export const HeaderNav = (): React.JSX.Element => {
    const navItems = [
        {
            name: 'MUSIC',
            linkRoute: 'music-tickets',
            hoverTitle: 'Buy Music, Gig, and Concert Tickets'
        },
        {
            name: 'THEATRE',
            linkRoute: 'theatre-tickets',
            hoverTitle: 'TODO'
        },
        {
            name: 'FESTIVALS',
            linkRoute: 'festival-tickets',
            hoverTitle: 'TODO'
        },
        {
            name: 'DANCE AND CLUBS',
            linkRoute: 'edm-club-ibiza-tickets-tickets',
            hoverTitle: 'TODO'
        },
        {
            name: 'EVENTS',
            linkRoute: 'event-tickets',
            hoverTitle: 'TODO'
        },
        {
            name: 'COMEDY',
            linkRoute: 'comedy-tickets',
            hoverTitle: 'TODO'
        },
        {
            name: 'SPORT',
            linkRoute: 'sport-tickets',
            hoverTitle: 'TODO'
        },
        {
            name: 'ATTRACTIONS',
            linkRoute: 'attraction-tickets',
            hoverTitle: 'TODO'
        },
        {
            name: 'BLOG',
            linkRoute: 'TODO',
            hoverTitle: 'TODO'
        },
    ]

    return (
        <div style={{
            backgroundColor: 'white',
            borderBottom: '1px solid #DDD',
            height: 47,
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                maxWidth: 940,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {navItems.map(item => <NavLink {...item} />)}
            </div>
        </div>
    )
}