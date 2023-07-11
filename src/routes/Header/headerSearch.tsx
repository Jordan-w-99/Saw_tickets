import logo from '../../assets/OriginalLogo.png'
import { IoSearch } from 'react-icons/io5'

export const HeaderSearch = (): React.JSX.Element => {
    return (
        <div style={{
            backgroundColor: 'white',
            borderBottom: '1px solid #DDD',
            height: 66,
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
                <img src={logo} />
                <form style={{
                    height: '100%',
                    borderRight: '1px solid #DDD',
                    borderLeft: '1px solid #DDD',
                    minWidth: '50%',
                    display: 'flex'
                }}>
                    <input style={{ width: '100%', height: 65, boxSizing: 'border-box', border: 'none', fontSize: 20, paddingLeft: 10, outline: 'none', fontWeight: 300, fontFamily: 'roboto, sans-serif' }} placeholder='Seach artist, event, venue, location...' />
                    <button style={{ height: '100%', width: 66, border: 'none', backgroundColor: 'white', fontSize: 30 }}><IoSearch /></button>
                </form>
            </div>
        </div>
    )
}