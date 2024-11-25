import React from 'react';
import { Calendar, DollarSign, Users, Gift } from 'lucide-react';

const CreateEventForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-8 border bg-white/5 rounded-3xl backdrop-blur-sm border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Nome do Evento
            </label>
            <input
              type="text"
              className="w-full p-3 text-white placeholder-gray-400 border-0 bg-white/10 rounded-xl focus:ring-2 focus:ring-blue-500"
              placeholder="ex: Natal em Família 2024"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Data do Sorteio
              </label>
              <div className="relative">
                <Calendar className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="date"
                  className="w-full p-3 pl-12 text-white border-0 bg-white/10 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Orçamento do Presente
              </label>
              <div className="relative">
                <DollarSign className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="number"
                  className="w-full p-3 pl-12 text-white placeholder-gray-400 border-0 bg-white/10 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite o valor"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Participantes
            </label>
            <div className="relative">
              <Users className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="email"
                className="w-full p-3 pl-12 text-white placeholder-gray-400 border-0 bg-white/10 rounded-xl focus:ring-2 focus:ring-blue-500"
                placeholder="Digite os e-mails dos participantes (separados por vírgula)"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Regras do Evento
            </label>
            <textarea
              className="w-full bg-white/10 border-0 rounded-xl p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              placeholder="Adicione quaisquer regras ou instruções especiais..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="flex items-center justify-center w-full p-4 space-x-2 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl hover:from-blue-600 hover:to-blue-800"
            >
              <Gift className="w-5 h-5" />
              <span>Criar Evento de Amigo Secreto</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
