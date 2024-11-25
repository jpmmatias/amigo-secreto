import { ChevronRight, Gift, Heart, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from './ui/button';

export default function Reveal() {
  return (
    <div className="container max-w-md p-4 mx-auto ">
      <Card className="bg-zinc-900 rounded-2xl border-zinc-800 rouded-2xl">
        <div className="flex items-center justify-between p-4 bg-red-600 rounded-t-lg">
          <h1 className="text-xl font-semibold text-white">
            Revelação do Amigo Secreto
          </h1>
          <Gift className="w-5 h-5 text-white" />
        </div>

        <div className="flex flex-col items-center p-6 text-center">
          <div className="relative mb-4">
            <Avatar className="w-32 h-32 border-4 border-red-600">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt="Maria Silva"
              />
              <AvatarFallback className="bg-zinc-800 text-zinc-400">
                MS
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-yellow-400 p-1.5 rounded-full">
              <Star className="w-4 h-4 text-black" />
            </div>
          </div>

          <h2 className="mb-1 text-2xl font-bold text-white">Maria Silva</h2>
          <p className="mb-6 text-zinc-400">Seu Par Amigo Secreto</p>

          <Card className="w-full mb-4 bg-zinc-800/50 border-zinc-700">
            <button className="flex items-center justify-between w-full p-4 transition-colors rounded-lg hover:bg-zinc-800/80">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <div className="font-medium text-white">
                    Interesses da Lista de Desejos
                  </div>
                  <div className="text-sm text-zinc-400">
                    Livros • Viagem • Música
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
          </Card>

          <div className="w-full p-4 mb-6 border rounded-lg bg-green-950/30 border-green-900/50">
            <div className="flex gap-3">
              <div className="mt-1">
                <Gift className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-left">
                <div className="mb-1 font-medium text-green-500">
                  Dicas de Presentes
                </div>
                <p className="text-sm text-zinc-300">
                  Maria adora romances de mistério e aprecia café. Considere um
                  conjunto de presentes temáticos de livros ou um acessório de
                  café único!
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full text-white bg-green-600 rounded-2xl hover:bg-green-700">
            Ver Lista de Desejos
          </Button>
        </div>
      </Card>
    </div>
  );
}
