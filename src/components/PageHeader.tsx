import { Theme } from "../Theme"

export interface PageHeaderProps {
    text?: string
}

export const PageHeader = ({ text }: PageHeaderProps): React.JSX.Element => {
    return (
        <div
            style={{
                maxWidth: 940,
                width: '100%',
                padding: 28
            }}
        >
            <h1
                style={{
                    fontSize: 40,
                    fontWeight: 400,
                    margin: 0,
                    marginBottom: 18
                }}
            >
                {text}
            </h1>
            <div
                style={{
                    width: 40,
                    height: 4,
                    backgroundColor: Theme.PrimaryCol,
                    borderRadius: 3
                }}
            />
        </div>
    )
}