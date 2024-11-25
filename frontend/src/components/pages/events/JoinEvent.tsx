import { Link } from '@tanstack/react-router';
import { Card } from '../../ui/card';
import { ChangeEvent } from 'react';

const JoinEvent = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const alphanumericValue = inputValue
      .replace(/[^a-zA-Z0-9]/g, '')
      .toUpperCase();

    let maskedValue = alphanumericValue;
    if (alphanumericValue.length > 4) {
      maskedValue = `${alphanumericValue.slice(0, 4)}-${alphanumericValue.slice(4, 8)}`;
    }
    if (alphanumericValue.length > 8) {
      maskedValue = `${maskedValue}-${alphanumericValue.slice(8, 12)}`;
    }

    e.target.value = maskedValue;
  };

  return (
    <div className="content-center text-white align-center">
      <Card className="max-w-md p-8 mx-auto border shadow-lg rounded-3xl border-zinc-900 md:p-10 bg-gradient-to-br from-blue-600 to-blue-900">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              Digite o Código do Evento
            </h2>
            <p className="text-sm ">
              Digite o código do evento fornecido pelo organizador para
              participar da troca de amigo secreto
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <input
                onChange={handleChange}
                type="text"
                placeholder="XXXX-XXXX-XXXX"
                className="w-full h-12 text-lg tracking-wider text-center text-white uppercase border rounded-md bg-zinc-800 border-zinc-700"
                maxLength={14}
              />
              <p className="text-xs text-center">Exemplo: ABCD-1234-EFGH</p>
            </div>

            <button className="w-full h-12 text-base text-white transition duration-300 bg-blue-600 rounded-md rounded-2xl hover:bg-blue-700">
              Entrar no amigo secreto
            </button>
          </div>

          <div className="text-sm text-center ">
            Quer criar o seu próprio evento?{' '}
            <Link
              href="/events/create"
              className="cursor-pointer rounded-2xl text-white-400 hover:text-blue-300 "
            >
              Criar Evento
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default JoinEvent;
