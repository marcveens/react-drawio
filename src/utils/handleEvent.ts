import { EmbedEvents } from '../types';

type EventHandler = {
  [key in EmbedEvents['event']]?: (
    data: Extract<EmbedEvents, { event: key }>
  ) => void;
};

export function handleEvent(
  event: MessageEvent,
  handlers: EventHandler,
  baseUrl?: string
) {
  if (
    !event.origin.includes('embed.diagrams.net') &&
    baseUrl &&
    !baseUrl.includes(event.origin) &&
    !event.origin.includes(baseUrl)
  ) {
    return;
  }

  try {
    const data = JSON.parse(event.data) as EmbedEvents;

    if (data.event in handlers) {
      const handler = handlers[data.event];

      if (handler) {
        // @ts-ignore Not sure how to fix for now
        handler(data);
      }
    }
  } catch {
    //
  }
}
