import CreateEventForm from '../../CreateEventForm';

const CreateEvent = () => {
  return (
    <>
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Criar Novo Evento</h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Configure seu evento de Amigo Secreto e convide os participantes para
          participar da troca de presentes
        </p>
      </div>

      <CreateEventForm />
    </>
  );
};

export default CreateEvent;
