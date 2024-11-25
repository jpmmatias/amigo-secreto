import { createLazyFileRoute } from '@tanstack/react-router';
import Reveal from '../../components/Reveal';

export const Route = createLazyFileRoute('/events/reveal')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Reveal />;
}
