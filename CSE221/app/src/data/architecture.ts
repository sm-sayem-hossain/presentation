export const LAYERS = [
  {
    key: 'Presentation',
    items: ['AuthView', 'RecipientConsole', 'DonorActionHub', 'AdminConsole'],
  },
  {
    key: 'Business',
    items: [
      'AuthenticationService',
      'MatchingEngine',
      'EligibilityValidator',
      'AlertDispatcher',
    ],
  },
  {
    key: 'Domain',
    items: ['User', 'Donor', 'Recipient', 'Admin', 'BloodRequest', 'DonationHistory'],
  },
  {
    key: 'Persistence',
    items: ['FilePersistenceManager', 'users.dat', 'requests.dat', 'logs.dat'],
  },
]
