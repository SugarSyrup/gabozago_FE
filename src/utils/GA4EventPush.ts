import TagManager from 'react-gtm-module';

function eventPush(event: string) {
  TagManager.dataLayer({
    dataLayer: {
      event,
    },
  });
}

export default eventPush;
