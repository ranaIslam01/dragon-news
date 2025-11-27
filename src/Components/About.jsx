import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-5 space-y-12">

        {/* Mission */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary-black">Our Mission</h2>
          <p className="text-secondary-black leading-7">
            At The Dragon News, our mission is to deliver factual, unbiased, and
            impactful journalism. We aim to keep readers informed with credible
            and timely news sourced from verified sources.
          </p>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary-black">What We Believe</h2>
          <ul className="list-disc list-inside text-secondary-black leading-7 space-y-2">
            <li>Neutral and fearless journalism</li>
            <li>Transparency in news reporting</li>
            <li>Respect for truth and ethical reporting</li>
            <li>Giving voice to underreported stories</li>
          </ul>
        </div>

        {/* Team */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary-black">Meet Our Team</h2>
          <p className="text-secondary-black mb-4">
            Behind every story is a team of passionate writers, editors, and
            reporters dedicated to bringing you accurate and timely news.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-300 rounded-xl p-5 shadow">
              <h3 className="font-semibold text-lg text-primary-black">Shirin Akter</h3>
              <p className="text-secondary-black text-sm">Senior Journalist</p>
            </div>

            <div className="border border-gray-300 rounded-xl p-5 shadow">
              <h3 className="font-semibold text-lg text-primary-black">Rahim Uddin</h3>
              <p className="text-secondary-black text-sm">Field Reporter</p>
            </div>

            <div className="border border-gray-300 rounded-xl p-5 shadow">
              <h3 className="font-semibold text-lg text-primary-black">Mitu Chowdhury</h3>
              <p className="text-secondary-black text-sm">Editor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
