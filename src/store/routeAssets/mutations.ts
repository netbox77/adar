import { defineMutations } from 'direct-vuex';

import type { RouteAssetsState, Recipient } from './types';

const mutations = defineMutations<RouteAssetsState>()({
  setProcessed(state, value: boolean): void {
    state.processed = value;
  },
  setData(state, { file, recipients }: { file: File; recipients: Array<Recipient> }): void {
    state.file = file;
    state.recipients = recipients;
  },
  clearData(state) {
    state.file = null;
    state.recipients = [];
    state.processed = false;
  },
  setSubscriptions(state, subscriptions = []): void {
    state.subscriptions = subscriptions;
  },
  setRecipientStatus(state, { id, status }) {
    const recipient = state.recipients.find((recipient) => recipient.id === id);
    if (recipient) recipient.status = status;
  },
});

export default mutations;