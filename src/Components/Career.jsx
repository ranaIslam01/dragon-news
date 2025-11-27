import React from "react";

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior News Reporter",
      type: "Full-time",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a passionate and experienced reporter to cover breaking news, field reports, and investigative stories.",
    },
    {
      id: 2,
      title: "Content Editor",
      type: "Full-time",
      location: "Remote",
      description:
        "Edit, fact-check, and publish daily articles ensuring high editorial standards.",
    },
    {
      id: 3,
      title: "Social Media Manager",
      type: "Part-time",
      location: "Remote",
      description:
        "Manage social media posts, engage with audience, and track analytics.",
    },
  ];

  return (
    <div className="px-6 space-y-12">


      {/* Why Join Us */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary-black">
          Why Work With Us?
        </h2>
        <ul className="list-disc list-inside text-secondary-black space-y-2 leading-7">
          <li>Work with experienced journalists and editors</li>
          <li>Remote-friendly flexible work culture</li>
          <li>Opportunity to grow in the digital news industry</li>
          <li>Creative freedom and supportive team environment</li>
        </ul>
      </div>

      {/* Job List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary-black">Open Positions</h2>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-xl font-bold text-primary-black">
                {job.title}
              </h3>
              <p className="text-sm text-secondary-black mt-1">
                {job.type} • {job.location}
              </p>
              <p className="text-secondary-black mt-3">{job.description}</p>

              <button className="mt-5 px-5 py-2 bg-primary-black text-white rounded-md hover:bg-black transition font-semibold">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 border border-gray-300 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-primary-black">
          Didn’t find a suitable position?
        </h3>
        <p className="text-secondary-black mt-2 mb-4">
          We’re always looking for talented people. Send us your CV.
        </p>

        <button className="px-6 py-2 bg-primary-black text-white rounded-md hover:bg-black transition font-semibold">
          Send Resume
        </button>
      </div>
    </div>
  );
};

export default Career;
