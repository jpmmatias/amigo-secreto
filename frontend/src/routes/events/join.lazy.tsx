import { createLazyFileRoute } from '@tanstack/react-router';
import JoinEvent from '../../components/pages/events/JoinEvent';

export const Route = createLazyFileRoute('/events/join')({
  component: RouteComponent,
});

function RouteComponent() {
  return <JoinEvent />;
}
