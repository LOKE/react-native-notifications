import { NotificationAndroid } from "./NotificationAndroid";

describe('Notification', () => {
  it('Should create notification with payload', () => {
    const payload = { p: 'p' };
    const notification = new NotificationAndroid(payload);
    expect(notification.payload).toEqual(payload);
  });

  it('Should return title from payload', () => {
    const payload = { title: 'title', body: 'body' };
    const notification = new NotificationAndroid(payload);
    expect(notification.title).toEqual('title');
  });

  it('Should return body from payload', () => {
    const payload = { title: 'title', body: 'body' };
    const notification = new NotificationAndroid(payload);
    expect(notification.body).toEqual('body');
  });

  it('Should return sound from payload', () => {
    const payload = { title: 'title', sound: 'sound.wav' };
    const notification = new NotificationAndroid(payload);
    expect(notification.sound).toEqual('sound.wav');
  });
});
