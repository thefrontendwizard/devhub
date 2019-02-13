import { ThemePair } from '../types'

export const COLUMNS_LIMIT = 20
export const DEFAULT_DARK_THEME = 'dark-blue'
export const DEFAULT_GITHUB_OAUTH_SCOPES = ['notifications', 'user:email']
export const DEFAULT_LIGHT_THEME = 'light-white'
export const DEFAULT_PAGINATION_PER_PAGE = 10
export const DEFAULT_THEME_PAIR: ThemePair = { id: 'auto', color: '' }
export const MAX_COLUMN_WIDTH = 360
export const MIN_COLUMN_WIDTH = 320

export const API_BASE_URL = 'https://api.devhubapp.com'
export const GRAPHQL_ENDPOINT = `${API_BASE_URL}/graphql`

export const GITHUB_APP_CANNONICAL_ID = __DEV__
  ? 'devhub-localhost-app'
  : 'devhub-app'
