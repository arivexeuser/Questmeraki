import { Users, Target, Heart, Award, Mail, Phone, MapPin } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Editor-in-Chief',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Passionate about storytelling and connecting people through meaningful content.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Building the technical foundation that powers our community of writers.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Strategist',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'Helping writers craft compelling stories that resonate with our audience.'
    },
    {
      name: 'David Kim',
      role: 'Community Manager',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      bio: 'Fostering connections and building relationships within our writing community.'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Passion for Stories',
      description: 'We believe every person has a unique story worth telling and sharing with the world.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Community First',
      description: 'Building a supportive community where writers can grow, learn, and inspire each other.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Quality Content',
      description: 'Committed to maintaining high standards and delivering valuable content to our readers.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Excellence',
      description: 'Striving for excellence in everything we do, from writing to user experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dczicfhcv/image/upload/v1755585786/About_us_1_g1vwlf.png')" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-yellow-300">QuestMeraki</span>
            </h1>
          </div>
        </div>
      </section>


      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container  px-4 mx-auto ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                How QuestMeraki came to life
              </p>
            </div>

            <div className="prose prose-lg w-[1200px] mx-auto ">
              <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-10 md:p-14 shadow-xl border border-purple-100">

                {/* Intro */}
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6 text-center">
                 Welcome to <span className="text-purple-600">QuestMeraki</span>
                </h2>

                <p className="text-gray-700 leading-relaxed text-justify">
                  QuestMeraki is from the heart and mind. It is a droplet in the ocean of knowledge, facts, perceptions, attitudes, emotions and aspirations...
                </p>

                {/* Highlighted meaning */}
                <div className="bg-white/70 border-l-4 border-indigo-500 px-6 py-4 my-8 rounded-xl shadow-sm">
                  <p className="text-gray-800 italic">
                    <span className="font-semibold text-indigo-700">Quest</span> – to search for something; to pursue
                    <br />
                    <span className="font-semibold text-purple-700">Meraki</span> – to do something with passion, love, and devotion.
                  </p>
                </div>

                {/* Purpose */}
                <h3 className="text-2xl font-semibold text-purple-700 mt-10 mb-4">
                  ✨ Purpose of This Blog
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Yes, the purpose of this blog is to look at different topics from a new perspective; to search for facts and findings; to add to existing knowledge...
                </p>

                {/* Sections */}
                <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">
                  🌍 What You’ll Find Here
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><span className="font-medium text-indigo-600">Perspective:</span> Sharing opinions & understanding on academics, work, and life.</li>
                  <li><span className="font-medium text-purple-600">Palms of His Hands:</span> Testimonies and Divine words.</li>
                  <li><span className="font-medium text-indigo-600">Questionnaires:</span> Sample questionnaires for surveys.</li>
                  <li><span className="font-medium text-purple-600">Ideating Zone:</span> Training packs, exercises, and self-evaluations.</li>
                </ul>

                {/* Personal Note */}
                <blockquote className="border-l-4 border-pink-400 pl-6 italic text-gray-600 my-8">
                  "There is always room for spice and fun in learning and living.
                  There is always a space in our heart for new hope and new beginnings..."
                </blockquote>

                {/* Author Bio */}
                <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">
                  👩‍🏫 About the Author
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  I have been a teacher most of my adult life. I spent the last 18 years in higher educational institutions...
                  Presently, I live in Bahrain with my delightful family.
                </p>

                <p className="text-base text-gray-700 mt-8 text-right">
                  <span className="font-semibold text-gray-900">Author:</span> Anthea Washington
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600">
                Democratizing storytelling and creating a space where every voice matters
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Empowering Every Writer
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    At QuestMeraki, we believe that everyone has a story to tell. Our platform
                    provides the tools, community, and support needed to transform ideas into
                    compelling narratives that inspire and connect people across the globe.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you're a seasoned author or just starting your writing journey,
                    we're here to help you find your voice and share it with the world.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg"
                    alt="Writing and creativity"
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">
                The passionate people behind QuestMeraki
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}



      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of passionate writers and start your storytelling journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/register"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Writing
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
              >
                Get in Touch updated soon...
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}