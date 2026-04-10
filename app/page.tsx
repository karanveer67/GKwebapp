import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MessageCircle, MapPin, Clock, Users, Shield, Star, CheckCircle2, Building2, Landmark, BadgeCheck, Quote } from 'lucide-react';

const PHONE_NUMBERS = [
  '9872511786',
  '9878606267',
  '9216206267',
];

const PRIMARY_PHONE = '9216206267';
const PRIMARY_WHATSAPP = '9216206267';

export const metadata = {
  title: 'Delhi to Chandigarh One Way Taxi - Best Price | Guru Kirpa Tours',
  description: 'Book Delhi to Chandigarh one way taxi with affordable fare, instant pickup & safe travel. 24x7 taxi service available. Call +91 98725 11786',
};

export default function Home() {
  const reviews = [
    {
      name: 'Rohit Sharma',
      route: 'Delhi to Chandigarh',
      initials: 'RS',
      review: 'Booked a one way taxi for family travel. Car was clean, driver was polite, and the trip was comfortable throughout.',
    },
    {
      name: 'Neha Verma',
      route: 'Airport Pickup',
      initials: 'NV',
      review: 'Pickup was on time and the whole booking process was simple on call. Pricing was clear and there were no hidden charges.',
    },
    {
      name: 'Amanpreet Singh',
      route: 'Business Travel',
      initials: 'AS',
      review: 'Professional service, good vehicle condition, and smooth coordination. A reliable option for regular outstation travel.',
    },
  ];

  const governmentClients = [
    'DRDO',
    'Air Force',
    'Haryana Skill Department',
  ];

  const privateClients = [
    'Fortis Hospital',
    'Martin & Brown Bio Science Pvt. Ltd.',
    'Ognibene India Pvt. Ltd.',
    'Valco Industries Limited',
  ];

  const notableCompanies = [
    'Swaraj',
    'SML',
    'Cheema Broiler',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Guru Kirpa Tours</div>
          <div className="flex gap-4">
            <a href={`tel:+91${PRIMARY_PHONE}`} className="text-primary hover:underline font-medium">
              Call: +91 {PRIMARY_PHONE.slice(0, 5)} {PRIMARY_PHONE.slice(5)}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-balance">
            Delhi to Chandigarh One Way Taxi
          </h1>
          <p className="text-xl mb-2 text-white/90">
            Book reliable, affordable taxi service with instant pickup & safe travel
          </p>
          <p className="text-lg text-white/80 mb-8">
            âœ… 24x7 Availability | âœ… No Hidden Charges | âœ… Verified Drivers
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href={`tel:+91${PRIMARY_PHONE}`} className="inline-block">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href={`https://wa.me/91${PRIMARY_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 border-0"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </a>
          </div>

          {/* Quick Strip */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold">
              Call Now & Get Taxi in 10 to 15 Minutes | Limited Time Best Fare Available
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Delhi to Chandigarh One Way Taxi',
              'Chandigarh to Delhi One Way Taxi',
              'Delhi Airport to Chandigarh Taxi',
              'Chandigarh to Delhi Airport Taxi',
              'Outstation Cab Service',
              'Round Trip Taxi',
            ].map((service) => (
              <Card key={service} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-foreground">{service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">Sedan</h3>
              <p className="text-gray-600 mb-4">Swift Dzire / Etios</p>
              <div className="text-4xl font-bold text-primary mb-6">₹3499</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>One Way Taxi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Clean & Comfortable Ride</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>No Hidden Charges</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">SUV</h3>
              <p className="text-gray-600 mb-4">Ertiga</p>
              <div className="text-4xl font-bold text-primary mb-6">₹4499</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Spacious & Comfortable</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Ideal for Family Travel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>No Hidden Charges</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">Premium SUV</h3>
              <p className="text-gray-600 mb-4">Innova Crysta</p>
              <div className="text-4xl font-bold text-primary mb-6">₹5499</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Premium & Luxury Ride</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Extra Comfort for Long Travel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Professional Driver</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: '24x7 Availability', desc: 'Taxi available round the clock' },
              { icon: Phone, title: 'Instant Booking', desc: 'Quick pickup within 10-15 minutes' },
              { icon: Shield, title: 'Verified Drivers', desc: 'Experienced and trusted drivers' },
              { icon: Users, title: 'Clean & Comfortable', desc: 'Well-maintained vehicles' },
              { icon: CheckCircle2, title: 'Affordable Pricing', desc: 'Best rates in the market' },
              { icon: Star, title: 'Safe Travel', desc: 'Secure and reliable service' },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Route Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-primary">Route Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Distance</h3>
                <p className="text-3xl font-bold text-primary">250 to 270 KM</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Travel Time</h3>
                <p className="text-3xl font-bold text-primary">4 to 5 Hours</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-gray-600">Smooth ride with experienced drivers and well-maintained cars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">How to Book</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: 1, title: 'Call or WhatsApp', desc: `+91 ${PRIMARY_PHONE.slice(0, 5)} ${PRIMARY_PHONE.slice(5)}` },
              { step: 2, title: 'Share Pickup Location', desc: 'Tell us your details' },
              { step: 3, title: 'Confirm Booking', desc: 'Get confirmation' },
              { step: 4, title: 'Driver Arrives', desc: 'Start your journey' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Card>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-white via-primary/5 to-orange-50 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <BadgeCheck className="h-4 w-4" />
                  Trusted Service Profile
                </div>
                <h2 className="text-4xl font-bold text-balance">Serving government departments, institutions, and private clients with dependable transport support</h2>
                <p className="mt-4 text-lg text-gray-700">
                  Guru Kirpa Tours is registered under the GeM Portal, the Government e-Marketplace, and has supported transport requirements for government organizations as well as established private clients.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                    <Landmark className="mb-3 h-8 w-8 text-primary" />
                    <h3 className="font-bold">Government Work</h3>
                    <p className="mt-2 text-sm text-gray-600">Service support for public sector and departmental travel needs.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                    <Building2 className="mb-3 h-8 w-8 text-primary" />
                    <h3 className="font-bold">Corporate Clients</h3>
                    <p className="mt-2 text-sm text-gray-600">Trusted by hospitals, private companies, and institutional clients.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                    <Shield className="mb-3 h-8 w-8 text-primary" />
                    <h3 className="font-bold">Professional Execution</h3>
                    <p className="mt-2 text-sm text-gray-600">Clean vehicles, verified drivers, and coordinated travel support.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <Card className="rounded-2xl border-0 bg-white/90 p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-primary">Registered Under GeM Portal</h3>
                  <p className="text-gray-700">
                    We are registered under the Government e-Marketplace and have worked with various government organizations and private clients for transportation support.
                  </p>
                </Card>

                <Card className="rounded-2xl border-0 bg-white/90 p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold">Government Organizations</h3>
                  <div className="flex flex-wrap gap-2">
                    {governmentClients.map((client) => (
                      <span key={client} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {client}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-2xl border-0 bg-white/90 p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold">Private Clients</h3>
                  <div className="flex flex-wrap gap-2">
                    {privateClients.map((client) => (
                      <span key={client} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                        {client}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-2xl border-0 bg-white/90 p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold">Worked With Recognized Companies</h3>
                  <p className="text-gray-700">
                    In the past, we have also worked with well-known companies including {notableCompanies.join(', ')} and many more.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Book Your Delhi to Chandigarh Taxi Now</h2>
          <p className="text-xl mb-8">Get best fare & instant booking</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:+91${PRIMARY_PHONE}`} className="inline-block">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 {PRIMARY_PHONE.slice(0, 5)} {PRIMARY_PHONE.slice(5)}
              </Button>
            </a>
            <a href={`https://wa.me/91${PRIMARY_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Customer Feedback</p>
            <h2 className="text-4xl font-bold">What Riders Say About Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Clean vehicles, comfortable travel, transparent fares, and dependable coordination for family, airport, and business trips.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.name} className="group overflow-hidden rounded-3xl border-0 bg-white p-0 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="h-2 bg-gradient-to-r from-primary via-orange-400 to-primary" />
                <div className="p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                        {review.initials}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.route}</p>
                      </div>
                    </div>
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  </div>
                  <p className="text-gray-700">"{review.review}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Delhi to Chandigarh taxi fare kya hai?',
                a: 'Sedan (Swift Dzire / Etios) ₹3499, SUV (Ertiga) ₹4499 aur Premium SUV (Innova Crysta) ₹5499 hai.',
              },
              {
                q: 'One way taxi available hai?',
                a: 'Haan, one way taxi available hai aur round trip option bhi available hai.',
              },
              {
                q: 'Booking kaise kare?',
                a: `Call ya WhatsApp se instantly booking kar sakte ho. +91 ${PRIMARY_PHONE.slice(0, 5)} ${PRIMARY_PHONE.slice(5)} par contact kare.`,
              },
              {
                q: 'Kitna time lagta hai?',
                a: 'Delhi se Chandigarh tak approx 4 to 5 hours lagta hai.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">Q{idx + 1}. {item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Guru Kirpa Tours</h3>
              <p className="text-gray-400">Premium taxi service for your travel needs</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Policies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Delhi</li>
                <li>Chandigarh</li>
                <li>Panchkula</li>
                <li>Zirakpur</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                Address: Sector 39-D, Chandigarh, 160036
              </p>
              <p className="text-gray-400">
                Phone: <a href={`tel:+91${PRIMARY_PHONE}`} className="text-white hover:underline font-medium">+91 {PRIMARY_PHONE.slice(0, 5)} {PRIMARY_PHONE.slice(5)}</a>
              </p>
            </div>
            <div className="mt-4 text-center text-gray-400">
              <p className="mb-2">Other Numbers:</p>
              <p>
                {PHONE_NUMBERS.map((num, idx) => (
                  <span key={num}>
                    <a href={`tel:+91${num}`} className="text-white hover:underline">
                      +91 {num.slice(0, 5)} {num.slice(5)}
                    </a>
                    {idx < PHONE_NUMBERS.length - 1 && ' | '}
                  </span>
                ))}
              </p>
            </div>
            <p className="text-center text-gray-400 mt-4">
              Â© 2024 Guru Kirpa Tours. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
