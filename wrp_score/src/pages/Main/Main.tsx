import { useGetParticipantsQuery } from '../../api/participantsApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import ParticipantAccordion from './components/ParticipantAccordion';

export interface ILifterInfo {
  name: string;
  surname: string;
  age: string;
}

const Main = () => {
  const {
    data: participantsList,
    isLoading,
    isSuccess,
  } = useGetParticipantsQuery({});

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess &&
        participantsList.map((data) => (
          <ParticipantAccordion participant={data} key={data.id} />
        ))}
    </>
  );
};

export default Main;
