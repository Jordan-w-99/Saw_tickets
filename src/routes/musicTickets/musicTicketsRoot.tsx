import { PageHeader } from "../../components/PageHeader";

export const MusicTicketsRoot = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%'
      }}
    >
      <PageHeader text={'Music Tickets'} />
    </div>
  );
}