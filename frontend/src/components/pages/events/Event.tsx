import { format } from 'date-fns';
import { CalendarIcon, Gift, Settings, Plus } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Avatar, AvatarFallback } from '../../ui/avatar';
import { Link } from '@tanstack/react-router';

export default function Evento() {
  const date = new Date(2024, 11, 1);
  const participants = Array(12).fill(null);

  return (
    <div className="container max-w-6xl p-4 mx-auto">
      <Card className="bg-zinc-900 border-zinc-800">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-white">
              Natal em Família 2024
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
            <Card className="transition-colors bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800/70">
              <div className="flex items-start gap-3 p-4">
                <CalendarIcon className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Data do Sorteio</div>
                  <div className="text-zinc-400">
                    {format(date, 'MMM d, yyyy')}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700">
              <div className="flex items-start gap-3 p-4">
                <Gift className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Orçamento</div>
                  <div className="text-zinc-400">R$ 100</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-lg font-medium text-white">
              Participantes (12)
            </h2>
            <div className="flex flex-wrap gap-2">
              {participants.map((_, i) => (
                <Avatar key={i} className="w-10 h-10">
                  <AvatarFallback className="border bg-zinc-800 text-zinc-400 border-zinc-700">
                    {i + 1}
                  </AvatarFallback>
                </Avatar>
              ))}
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 border-dashed rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Link
            href="/events/reveal"
            className="w-full h-12 text-white bg-green-600 rounded-2xl hover:bg-green-700"
          >
            Iniciar Sorteio
          </Link>
        </div>
      </Card>
    </div>
  );
}
