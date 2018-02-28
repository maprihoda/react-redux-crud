// @flow

import history from './history'

export default function navigateTo(path: string) {
  history.push(path)
}
