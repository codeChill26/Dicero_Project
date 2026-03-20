export const navLinks = [
  'Home',
  'Marketplace',
  'Browse',
  'Bidding',
  'Community',
]

export const heroQuickLinks = [
  'Browse Marketplace',
  'Bid on Games',
  'Post a Game',
]

export const stats = [
  { value: '2,500+', label: 'Active Gamers' },
  { value: '1,200+', label: 'Games Listed' },
  { value: '50+', label: 'Auctions' },
  { value: '15+', label: 'Cities' },
]

export const categories = [
  { name: 'Strategy', count: 5, theme: 'theme-amber' },
  { name: 'Family', count: 3, theme: 'theme-coral' },
  { name: 'Party', count: 2, theme: 'theme-azure' },
  { name: 'Cooperative', count: 1, theme: 'theme-mint' },
  { name: 'Abstract', count: 1, theme: 'theme-violet' },
]

const cards = [
  {
    title: 'Catan',
    location: 'Ho Chi Minh City',
    type: 'Buy / Rent',
    condition: 'Like New',
    players: '3-4',
    buyPrice: '750k',
    rentPrice: '70k',
    owner: 'Minh Nguyen',
    rating: '4.8',
    theme: 'theme-amber',
    actions: ['Buy', 'Rent'],
  },
  {
    title: 'Ticket to Ride',
    location: 'Hanoi',
    type: 'For Sale',
    condition: 'Good',
    players: '2-5',
    buyPrice: '650k',
    rentPrice: '',
    owner: 'Tran Linh',
    rating: '4.9',
    theme: 'theme-coral',
    actions: ['Buy'],
  },
  {
    title: 'Azul',
    location: 'Ho Chi Minh City',
    type: 'Rent Only',
    condition: 'Like New',
    players: '2-4',
    buyPrice: '',
    rentPrice: '55k',
    owner: 'Minh Nguyen',
    rating: '4.8',
    theme: 'theme-azure',
    actions: ['Rent'],
  },
  {
    title: 'Wingspan',
    location: 'Ho Chi Minh City',
    type: 'Buy / Rent',
    condition: 'New',
    players: '1-5',
    buyPrice: '900k',
    rentPrice: '100k',
    owner: 'Pham Thu',
    rating: '5.0',
    theme: 'theme-mint',
    actions: ['Buy', 'Rent'],
  },
  {
    title: 'Terraforming Mars',
    location: 'Ho Chi Minh City',
    type: 'For Sale',
    condition: 'Like New',
    players: '1-5',
    buyPrice: '1200k',
    rentPrice: '',
    owner: 'Le Anh',
    rating: '4.6',
    theme: 'theme-violet',
    actions: ['Buy'],
  },
  {
    title: 'Pandemic',
    location: 'Da Nang',
    type: 'Buy / Rent',
    condition: 'New',
    players: '2-4',
    buyPrice: '800k',
    rentPrice: '80k',
    owner: 'Nguyen Hao',
    rating: '4.7',
    theme: 'theme-coral',
    actions: ['Buy', 'Rent'],
  },
  {
    title: 'Dixit',
    location: 'Da Nang',
    type: 'Rent Only',
    condition: 'New',
    players: '3-6',
    buyPrice: '',
    rentPrice: '40k',
    owner: 'Nguyen Hao',
    rating: '4.7',
    theme: 'theme-violet',
    actions: ['Rent'],
  },
]

export const popularGames = cards.slice(0, 5)
export const rentGames = [cards[0], cards[5], cards[2], cards[3]]
export const newListings = [cards[5], cards[3], cards[6]]

export const howItWorks = [
  {
    step: '01',
    title: 'List Your Game',
    body: 'Post your board game with photos, description, and pricing. Set your selling and rental prices.',
  },
  {
    step: '02',
    title: 'Find & Connect',
    body: 'Browse the marketplace, find games you love, and contact sellers directly via Messenger.',
  },
  {
    step: '03',
    title: 'Trade & Play',
    body: 'Meet up, ship, or rent games. Leave reviews and build your reputation in the community.',
  },
]

export const testimonials = [
  {
    quote:
      'Found a mint condition Wingspan for half the retail price. The community is amazing and sellers are super responsive!',
    name: 'Tran Linh',
    city: 'Hanoi',
  },
  {
    quote:
      'Renting before buying is genius! Tried 5 different games last month. Now I know exactly what to add to my collection.',
    name: 'Nguyen Hao',
    city: 'Da Nang',
  },
  {
    quote:
      'Sold 8 games I no longer play and funded my entire new collection. Super easy to post listings!',
    name: 'Pham Thu',
    city: 'Ho Chi Minh City',
  },
]

export const trustFeatures = [
  {
    title: 'Verified Sellers',
    desc: 'All sellers are verified community members',
  },
  {
    title: 'Rated & Reviewed',
    desc: 'Read honest reviews before buying',
  },
  {
    title: 'Nationwide Shipping',
    desc: 'Available across all major Vietnamese cities',
  },
]

export const footerColumns = [
  {
    title: 'Quick Links',
    items: ['Home', 'Marketplace', 'Rent Games', 'Post a Game', 'Community'],
  },
  {
    title: 'Support',
    items: ['Help Center', 'Safety Tips', 'Terms of Service', 'Privacy Policy', 'Report a Problem'],
  },
]

export const marketplaceQuickFilters = [
  'All',
  'For Sale',
  'For Rent',
  'Auction',
  'Like New',
  'Under 700k',
]

export const marketplaceFilters = [
  {
    title: 'Category',
    options: ['Strategy', 'Family', 'Party', 'Cooperative', 'Abstract'],
  },
  {
    title: 'Condition',
    options: ['New', 'Like New', 'Good'],
  },
  {
    title: 'Location',
    options: ['Ho Chi Minh City', 'Hanoi', 'Da Nang'],
  },
]

export const marketplaceListings = [
  {
    title: 'Brass: Birmingham',
    location: 'Ho Chi Minh City',
    type: 'For Sale',
    condition: 'Like New',
    players: '2-4',
    buyPrice: '1450k',
    rentPrice: '',
    owner: 'Anh Khoa',
    rating: '4.9',
    theme: 'theme-amber',
    actions: ['Buy'],
  },
  {
    title: 'Spirit Island',
    location: 'Hanoi',
    type: 'Buy / Rent',
    condition: 'Good',
    players: '1-4',
    buyPrice: '980k',
    rentPrice: '95k',
    owner: 'Bao Tran',
    rating: '4.8',
    theme: 'theme-mint',
    actions: ['Buy', 'Rent'],
  },
  {
    title: 'Dune: Imperium',
    location: 'Da Nang',
    type: 'Auction',
    condition: 'Like New',
    players: '1-4',
    buyPrice: 'Start 500k',
    rentPrice: '',
    owner: 'Minh Tam',
    rating: '4.7',
    theme: 'theme-violet',
    actions: ['Bid'],
  },
  {
    title: '7 Wonders Duel',
    location: 'Ho Chi Minh City',
    type: 'For Rent',
    condition: 'New',
    players: '2',
    buyPrice: '',
    rentPrice: '45k',
    owner: 'Linh Nhi',
    rating: '4.9',
    theme: 'theme-coral',
    actions: ['Rent'],
  },
  {
    title: 'Everdell',
    location: 'Hanoi',
    type: 'For Sale',
    condition: 'Like New',
    players: '1-4',
    buyPrice: '890k',
    rentPrice: '',
    owner: 'Duc Anh',
    rating: '4.8',
    theme: 'theme-azure',
    actions: ['Buy'],
  },
  {
    title: 'The Crew',
    location: 'Da Nang',
    type: 'For Rent',
    condition: 'Good',
    players: '2-5',
    buyPrice: '',
    rentPrice: '35k',
    owner: 'Thanh Vy',
    rating: '4.6',
    theme: 'theme-mint',
    actions: ['Rent'],
  },
]
