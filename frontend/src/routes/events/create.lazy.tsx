import { createLazyFileRoute } from '@tanstack/react-router';
import CreateEvent from '../../components/pages/events/CreateEvent';

export const Route = createLazyFileRoute('/events/create')({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateEvent />;
}
