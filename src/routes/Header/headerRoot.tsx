import { HeaderNav } from "./headerNav"
import { HeaderSearch } from "./headerSearch";
import { HeaderTop } from "./headerTop";

export const HeaderRoot = (): React.JSX.Element => {
    return (
        <div style={{
            width: '100vw'
        }}>
            <HeaderTop />
            <HeaderSearch />
            <HeaderNav />
        </div >
    );
}