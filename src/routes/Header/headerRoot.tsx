import { HeaderNav } from "./headerNav"
import { HeaderSearch } from "./headerSearch";

export const HeaderRoot = (): React.JSX.Element => {
    return (
        <div style={{
            width: '100vw'
        }}>
            <div style={{
                backgroundColor: 'darkblue',
                height: 40
            }}>

            </div>
            <HeaderSearch />
            <HeaderNav />
        </div >
    );
}