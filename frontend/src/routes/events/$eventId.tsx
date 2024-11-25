import { createFileRoute } from '@tanstack/react-router';
import Event from '../../components/pages/events/Event';

export const Route = createFileRoute('/events/$eventId')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Event />;
}
