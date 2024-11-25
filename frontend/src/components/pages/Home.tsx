import { Link } from '@tanstack/react-router';
import { Gift, Plus, ChevronRight, Users } from 'lucide-react';

export const Home = () => {
  return (
    <>
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Amigo Secreto</h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Participe ou organize eventos de troca de presentes e compartilhe a
          alegria de presentear!
        </p>
      </div>
      <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mb-16 md:grid-cols-2">
        <Link
          className="action-card bg-gradient-to-br from-emerald-500 to-emerald-700"
          href="/events/create"
        >
          <div className="relative z-20">
            <Plus className="w-12 h-12 mb-4" />
            <h3 className="mb-2 text-2xl font-bold">Criar Evento</h3>
            <p className="text-white/80">Comece um novo amigo secreto</p>
          </div>
          <div className="absolute top-0 right-0 p-8">
            <Gift className="w-24 h-24 text-white/10" />
          </div>
        </Link>
        <Link
          href="events/join"
          className="action-card bg-gradient-to-br from-blue-500 to-blue-700"
        >
          <div className="relative z-20">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="mb-2 text-2xl font-bold">Entrar em evento</h3>
            <p className="text-white/80">Entrar em amigo secreto existente</p>
          </div>
          <div className="absolute top-0 right-0 p-8">
            <Users className="w-24 h-24 text-white/10" />
          </div>
        </Link>
      </div>

      <section className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold">Eventos Ativos</h2>
        <div className="grid gap-4">
          {[
            {
              name: 'Family Christmas 2024',
              participants: 12,
              date: 'Dec 1',
              color: 'from-red-500 to-red-700',
            },
            {
              name: 'Office Party',
              participants: 8,
              date: 'Nov 25',
              color: 'from-purple-500 to-purple-700',
            },
          ].map((event, index) => (
            <button
              key={index}
              className="w-full text-left game-card bg-gradient-to-r group"
              style={{
                background: `linear-gradient(to right, ${event.color})`,
              }}
            >
              <div className="relative z-20 flex items-center justify-between p-6">
                <div>
                  <h3 className="mb-1 text-xl font-bold">{event.name}</h3>
                  <p className="text-sm text-white/80">
                    {event.participants} participants • Drawing on {event.date}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 transition-colors text-white/60 group-hover:text-white" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};
