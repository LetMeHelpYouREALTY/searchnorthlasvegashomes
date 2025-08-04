
# Search North Las Vegas Homes

A comprehensive real estate website for searching and valuing properties in North Las Vegas, built with Next.js and integrated with leading real estate technology platforms.

## 🏠 Features

### Core Functionality
- **Property Search**: Advanced search with filters for price, bedrooms, bathrooms, property type, and more
- **Home Valuation**: Instant property valuations using Homebot technology
- **Neighborhood Analysis**: Comprehensive area insights and market trends
- **Comparable Sales**: CloudCMA integration for detailed market comparisons

### Technology Integrations

#### Real Estate Platforms
- **RealScout v3 API**: Property search and client management
- **Homebot**: Home valuation widgets with Shadow DOM isolation
- **CloudCMA**: Comparable market analysis with React wrapper components
- **Percy.ai HVS-Autocomplete**: Tiered search functionality (address → neighborhood → city)

#### Analytics & Marketing
- **Google Analytics**: Custom dimension mapping for user behavior tracking
- **Facebook Pixel**: Conversion tracking and retargeting
- **A/B Testing**: Optimizely integration with traffic allocation by user cohort
- **Email Marketing**: Mailchimp and SendGrid integration

#### CRM & Lead Management
- **Follow Up Boss**: Contact management and action plans
- **KVCore**: Lead generation and contact creation
- **User Segmentation**: First-party cookie data with explicit segment assignment

### Design System
- **Primary Palette**: #0A2540, #3A8DDE, #F7F9FC, #16B286
- **Semantic Colors**: Buyer (#3A8DDE), Seller (#16B286)
- **Responsive Layout**: CSS Grid with 12-column system and 5 breakpoint tiers
- **Accessibility**: ARIA-compliant components with proper labeling

## 🚀 Getting Started

### Prerequisites
- Node.js 20.0.0 or higher
- pnpm 10.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DrJanDuffy/searchnorthlasvegashomes.git
   cd searchnorthlasvegashomes
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   
   # Real Estate API Keys
   REALSCOUT_API_TOKEN=your_realscout_token
   HOMEBOT_API_TOKEN=your_homebot_token
   CLOUDCMA_API_KEY=your_cloudcma_key
   PERCY_API_KEY=your_percy_key
   
   # Analytics
   GOOGLE_ANALYTICS_ID=your_ga_id
   FACEBOOK_PIXEL_ID=your_fb_pixel_id
   
   # A/B Testing
   OPTIMIZELY_PROJECT_ID=your_optimizely_id
   
   # Email Marketing
   MAILCHIMP_API_KEY=your_mailchimp_key
   SENDGRID_API_KEY=your_sendgrid_key
   
   # CRM Integration
   FOLLOW_UP_BOSS_API_KEY=your_fub_key
   KVCORE_API_KEY=your_kvcore_key
   
   # Maps & Geolocation
   GOOGLE_MAPS_API_KEY=your_google_maps_key
   MAPBOX_API_KEY=your_mapbox_key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

### Page Structure
The website follows a 7-section information architecture for buyer landing pages:
1. **Hero Section**: Compelling headline and primary CTAs
2. **Pain Point Section**: Addresses common buyer frustrations
3. **Solution Section**: Showcases how the platform solves problems
4. **Social Proof Section**: Customer testimonials and reviews
5. **Interactive Tool Section**: Live search and valuation tools
6. **Objection Handling Section**: Addresses common concerns
7. **Clear CTA Section**: Final conversion opportunities

### Component Architecture
- **Shadow DOM**: Homebot widgets isolated to prevent CSS conflicts
- **Lazy Loading**: CloudCMA components load at 50% viewport visibility
- **Progressive Enhancement**: Basic data on load, detailed data on interaction
- **Error Boundaries**: Three-tiered fallback strategy for widget failures

### Performance Optimization
- **Critical Path Loading**: Core dependencies → polyfills → analytics → A/B testing → widgets
- **Bundle Analysis**: Webpack bundle analyzer for size monitoring
- **Image Optimization**: Next.js automatic image optimization
- **Caching Strategy**: IndexedDB for boundary data with 7-day expiry

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm prettier         # Check Prettier formatting
pnpm prettier:fix     # Fix Prettier formatting

# Testing
pnpm test             # Run Jest tests
pnpm e2e:headless     # Run Playwright tests
pnpm e2e:ui           # Run Playwright with UI

# Analysis
pnpm analyze          # Analyze bundle size
pnpm coupling-graph   # Generate component relationship graph

# Storybook
pnpm storybook        # Start Storybook
pnpm build-storybook  # Build Storybook
```

### Code Standards
- **TypeScript**: Strict mode with ts-reset library
- **ESLint**: Comprehensive linting rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Standardized commit messages
- **Accessibility**: WCAG 2.1 AA compliance

### Testing Strategy
- **Unit Tests**: Jest with React Testing Library
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Playwright for critical user journeys
- **Visual Regression**: Storybook for component testing

## 📊 Analytics & Tracking

### Custom Dimensions
- `cd1`: User Type (buyer/seller/investor)
- `cd2`: Widget Type (search/valuation/neighborhood)
- `cd3`: Interaction Depth (basic/engaged/converted)
- `cd4`: Conversion Value (lead value estimation)

### User Segmentation
- **Price-Sensitive**: Users who frequently use price filters
- **Neighborhood-Focused**: Users with specific area searches
- **Amenity-Driven**: Users who click on feature filters

### Behavior Tracking
- **Engagement Scoring**: Interaction recency × depth × frequency
- **Email Sequences**: Behavior-triggered campaigns with exponential decay
- **A/B Testing**: Traffic allocation by user cohort with 95% confidence

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Custom Infrastructure
The project includes Terraform configurations for:
- **AWS**: VPC, ECS, ECR, ALB, S3, CloudFront, WAF, Redis
- **CI/CD**: Automated deployment pipelines
- **Monitoring**: Health checks and observability

## 📈 Performance Metrics

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Load Times
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Widget Load Time**: < 2s

## 🔧 Configuration

### Environment Variables
All API keys and configuration are managed through environment variables. See the `.env.local` example above for required variables.

### Feature Flags
- **A/B Testing**: Controlled through Optimizely
- **Widget Loading**: Configurable loading strategies
- **Analytics**: Customizable tracking events

### Customization
- **Design System**: CSS custom properties for easy theming
- **Widget Styling**: CSS custom properties mapped to design tokens
- **Content Management**: Easy content updates through component props

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Write tests for new features
- Update documentation for API changes
- Ensure accessibility compliance
- Optimize for performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Documentation**: [docs.blazity.com](https://docs.blazity.com)
- **Issues**: [GitHub Issues](https://github.com/DrJanDuffy/searchnorthlasvegashomes/issues)
- **Email**: contact@blazity.com

## 🙏 Acknowledgments

- **Blazity**: Next.js architecture and optimization
- **RealScout**: Property search technology
- **Homebot**: Home valuation platform
- **CloudCMA**: Market analysis tools
- **Percy.ai**: Address autocomplete service

---

Built with ❤️ for the North Las Vegas real estate community
