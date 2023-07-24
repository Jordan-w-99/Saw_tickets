import { Button } from "../../components/Button"

export const HeaderTop = (): React.JSX.Element => {
    const loggedIn = false

    return (
        <div style={{
            backgroundColor: '#001926',
            height: 40,
            display: 'flex',
            justifyContent: 'center'
        }}>
            {
                !loggedIn &&
                <div style={{
                    maxWidth: 940,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                    </div>
                    <div>
                        <Button text={'Register'} primary />
                        <Button text={'Sign in'} style={{ marginLeft: 10 }} />
                        <Button text={'Customer Support'} style={{ marginLeft: 10 }} />
                    </div>
                </div>
            }
        </div >
    )
}