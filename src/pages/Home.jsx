import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* landing */}
      <div
        style={{
          height: "100vh",
          backgroundImage: 'url("/landing.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="d-flex justify-centent-center align-items-center"
      >
        <div className="row container-fluid">
          <div className="col-lg-4"></div>
          <div
            className="col-lg-4 rounded shadow p-5 text-center text-light"
            style={{ backgroundColor: "rgba(108,102,90,0.5)" }}
          >
            <h3>
              Designed to get hired. Your skills, your story, your next job —
              all in one.
            </h3>
            <Link
              to={"/steps"}
              className="btn text-light"
              style={{ backgroundColor: "#a38461" }}
            >
              Make Your Resume
            </Link>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      {/* tools */}
      <div className="container m-5">
        <h1 className="text-center my-5">Tools</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Resume</h5>
            <p>
              Resume Create unlimited new resumes and easily edit them
              afterwards.
            </p>

            <h5>Cover Letters</h5>
            <p>Easily write professional cover letters.</p>

            <h5>Jobs</h5>
            <p>Automatically receive new and relevant job postings.</p>

            <h5>Applications</h5>
            <p>
              Effortlessly manage and track your job applications in an
              organized manner.{" "}
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 mb-2">
            <img
              width={"100%"}
              height={"500px"}
              src="/resume.png"
              alt="Resume"
            />
          </div>
        </div>
      </div>
      {/* image */}
      <div style={{height:"80vh", backgroundImage:'url("https://hello-leaders-au-wp.imgix.net/2022/10/26_10_22_effective_meeting.jpg?auto=format&ar=4%3A3&fit=crop&q=75")', backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}></div>
      {/* testimony */}
      <div className="container mb-5">
          <h1 className="text-center my-5">Testimony</h1>
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h5>Trusted by professionals worldwide.</h5>
              <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
              <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
              <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
                <div className="row">
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  <div className="col-lg-3">
                    <img className="w-100 p-2" src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="User" />
                  </div>
                  
                </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
